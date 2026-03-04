const SCHEMA_CONTEXT = 'https://schema.org'

type Id = { '@id': string }

export interface BreadcrumbItem {
  name: string
  item: string
}

export interface LocalBusinessInput {
  id: string
  name: string
  url: string
  image?: string
  telephone?: string
  email?: string
  addressLocality?: string
  postalCode?: string
  streetAddress?: string
  areaServed?: string[]
  sameAs?: string[]
}

export interface ServiceInput {
  id: string
  name: string
  description: string
  url: string
  areaServed?: string[]
  providerId?: string
}

export function stringifySchema(input: Record<string, unknown>) {
  return JSON.stringify(input)
}

export function buildOrganizationSchema(params: {
  id: string
  name: string
  url: string
  logo?: string
  telephone?: string
  email?: string
  sameAs?: string[]
}) {
  const schema: Record<string, unknown> = {
    '@context': SCHEMA_CONTEXT,
    '@type': 'Organization',
    '@id': params.id,
    name: params.name,
    url: params.url,
  }

  if (params.logo) schema.logo = params.logo
  if (params.telephone) schema.telephone = params.telephone
  if (params.email) schema.email = params.email
  if (params.sameAs?.length) schema.sameAs = params.sameAs

  return schema
}

export function buildWebSiteSchema(params: {
  id: string
  name: string
  url: string
  publisherId?: string
}) {
  const schema: Record<string, unknown> = {
    '@context': SCHEMA_CONTEXT,
    '@type': 'WebSite',
    '@id': params.id,
    name: params.name,
    url: params.url,
  }

  if (params.publisherId) {
    schema.publisher = { '@id': params.publisherId }
  }

  return schema
}

export function buildLocalBusinessSchema(input: LocalBusinessInput) {
  const schema: Record<string, unknown> = {
    '@context': SCHEMA_CONTEXT,
    '@type': 'ProfessionalService',
    '@id': input.id,
    name: input.name,
    url: input.url,
  }

  if (input.image) schema.image = input.image
  if (input.telephone) schema.telephone = input.telephone
  if (input.email) schema.email = input.email
  if (input.sameAs?.length) schema.sameAs = input.sameAs

  if (input.addressLocality || input.postalCode || input.streetAddress) {
    schema.address = {
      '@type': 'PostalAddress',
      addressLocality: input.addressLocality,
      postalCode: input.postalCode,
      streetAddress: input.streetAddress,
      addressCountry: 'NL',
    }
  }

  if (input.areaServed?.length) {
    schema.areaServed = input.areaServed.map((place) => ({
      '@type': 'City',
      name: place,
    }))
  }

  return schema
}

export function buildServiceSchema(input: ServiceInput) {
  const schema: Record<string, unknown> = {
    '@context': SCHEMA_CONTEXT,
    '@type': 'Service',
    '@id': input.id,
    name: input.name,
    description: input.description,
    url: input.url,
  }

  if (input.providerId) {
    schema.provider = { '@id': input.providerId }
  }

  if (input.areaServed?.length) {
    schema.areaServed = input.areaServed.map((place) => ({
      '@type': 'City',
      name: place,
    }))
  }

  return schema
}

export function buildBreadcrumbSchema(params: { id: string; items: BreadcrumbItem[] }) {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'BreadcrumbList',
    '@id': params.id,
    itemListElement: params.items.map((entry, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: entry.name,
      item: entry.item,
    })),
  }
}

export function asId(id: string): Id {
  return { '@id': id }
}
