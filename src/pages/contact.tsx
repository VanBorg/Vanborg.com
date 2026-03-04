import { Helmet } from 'react-helmet-async'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Container } from '../components/ui/Container'

const CANONICAL = 'https://vanborg.com/contact'
const MAPS_URL = 'https://maps.google.com/?q=Kieler+Bocht+104+9642+CE+Veendam'
const SCAN_FORM_URL = 'https://forms.gle/s3cnmZ7PSuxdo4Yp9'
const CALENDLY_URL = 'https://calendly.com/vanborglimited/van_borg_sales_call'

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | Van Borg</title>
        <meta
          name="description"
          content="Neem contact op met Van Borg in Veendam. Telefoon, e-mail, adres, openingstijden en directe links voor een bedrijfsscan of afspraak."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:title" content="Contact | Van Borg" />
        <meta
          property="og:description"
          content="Direct contact met Van Borg voor Lokale SEO, Google Ads en SEO Website."
        />
      </Helmet>
      <Navbar />
      <main>
        <section id="page-hero" className="section bg-section-1 py-12 lg:py-20">
          <Container>
            <div className="max-w-2xl text-center mx-auto">
              <h1 className="heading-hero">Contact</h1>
              <p className="heading-hero-subtitle mt-3">
                Neem direct contact op met Van Borg.
              </p>
              <p className="text-section-body mt-3" style={{ color: 'var(--color-neutral-700)' }}>
                Voor vragen over Lokale SEO, Google Ads, SEO Website of een strategiegesprek.
              </p>
            </div>
          </Container>
        </section>

        <section className="section bg-section-2 py-10 lg:py-16">
          <Container>
            <div className="max-w-md mx-auto">
              {/* Card */}
              <article
                className="card card-elevated"
                style={{
                  borderTop: '4px solid var(--accent-green)',
                  border: '2px solid var(--color-neutral-200)',
                  borderTopColor: 'var(--accent-green)',
                  borderTopWidth: '4px',
                  padding: '2rem',
                }}
              >
                <h2 className="heading-sub" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                  Contactgegevens
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
                  {/* Phone */}
                  <a
                    href="tel:+31644732266"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', textDecoration: 'none', color: 'inherit' }}
                  >
                    <span style={{
                      width: '2.25rem', height: '2.25rem', borderRadius: '0.5rem',
                      background: 'rgba(45,106,79,0.1)', display: 'flex',
                      alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.89a16 16 0 0 0 6.29 6.29l1.79-1.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </span>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-neutral-700)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Telefoon</div>
                      <div style={{ fontWeight: 600, color: 'var(--accent-green)', fontSize: '1rem' }}>+31 6 44 73 22 66</div>
                    </div>
                  </a>

                  <div style={{ height: '1px', background: 'var(--color-neutral-200)' }} />

                  {/* Email */}
                  <a
                    href="mailto:info@vanborglimited.com"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', textDecoration: 'none', color: 'inherit' }}
                  >
                    <span style={{
                      width: '2.25rem', height: '2.25rem', borderRadius: '0.5rem',
                      background: 'rgba(45,106,79,0.1)', display: 'flex',
                      alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                    </span>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-neutral-700)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>E-mail</div>
                      <div style={{ fontWeight: 600, color: 'var(--accent-green)', fontSize: '1rem' }}>info@vanborglimited.com</div>
                    </div>
                  </a>

                  <div style={{ height: '1px', background: 'var(--color-neutral-200)' }} />

                  {/* Address */}
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', textDecoration: 'none', color: 'inherit' }}
                  >
                    <span style={{
                      width: '2.25rem', height: '2.25rem', borderRadius: '0.5rem',
                      background: 'rgba(45,106,79,0.1)', display: 'flex',
                      alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </span>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-neutral-700)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Adres</div>
                      <div style={{ fontWeight: 600, color: 'var(--accent-green)', fontSize: '1rem' }}>Kieler Bocht 104, 9642 CE Veendam</div>
                    </div>
                  </a>

                  <div style={{ height: '1px', background: 'var(--color-neutral-200)' }} />

                  {/* Hours */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                    <span style={{
                      width: '2.25rem', height: '2.25rem', borderRadius: '0.5rem',
                      background: 'rgba(45,106,79,0.1)', display: 'flex',
                      alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </span>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-neutral-700)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Openingstijden</div>
                      <div style={{ fontWeight: 600, color: 'var(--color-neutral-900)', fontSize: '1rem' }}>Ma–Zo &nbsp;00:00–23:59</div>
                    </div>
                  </div>
                </div>
              </article>

              {/* CTA buttons */}
              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                <a
                  href={SCAN_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-lg"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Gratis bedrijfsscan aanvragen
                </a>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary btn-lg"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Afspraak plannen
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
