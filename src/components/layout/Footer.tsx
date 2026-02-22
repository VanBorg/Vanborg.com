import { Container } from '../ui/Container'

const columns = [
  {
    title: 'Diensten',
    links: [
      { label: 'Google Ranking (Lokale SEO)', href: '#' },
      { label: 'Google Ads', href: '#' },
      { label: 'SEO Website', href: '#' },
    ],
  },
  {
    title: 'Werkgebieden',
    links: [
      { label: 'Nederland', href: '#' },
      { label: 'Veendam, Wildervank, Hoogezand', href: '#' },
    ],
  },
  {
    title: 'Bedrijf',
    links: [{ label: 'Over ons', href: '#over-ons' }, { label: 'Contact', href: '#contact' }],
  },
  {
    title: 'Contact',
    links: [
      { label: 'info@vanborglimited.com', href: 'mailto:info@vanborglimited.com' },
      { label: '+31 6 44 73 22 66', href: 'tel:+31644732266' },
      { label: 'Kieler Bocht 104, 9642 CE Veendam', href: 'https://maps.google.com/?q=Kieler+Bocht+104+9642+CE+Veendam' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-700">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-neutral-200 py-6 text-center text-sm text-neutral-500">
          © Van Borg
        </div>
      </Container>
    </footer>
  )
}
