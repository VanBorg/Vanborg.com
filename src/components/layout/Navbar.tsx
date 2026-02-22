import { useState } from 'react'
import { Container } from '../ui/Container'

const navLinks = [
  { label: 'Resultaten', href: '#resultaten' },
  { label: 'Werkwijze', href: '#werkwijze' },
  { label: 'Over Ons', href: '#over-ons' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between md:h-18">
          <a href="/" className="text-xl font-bold text-neutral-900">
            Van Borg
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
              >
                {link.label}
              </a>
            ))}
            <a href="#audit" className="btn-primary">
              Gratis audit
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="flex flex-col gap-1.5 p-2 md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label="Menu openen"
          >
            <span className="block h-0.5 w-6 bg-neutral-700" />
            <span className="block h-0.5 w-6 bg-neutral-700" />
            <span className="block h-0.5 w-6 bg-neutral-700" />
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-neutral-200 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-neutral-600 hover:text-neutral-900"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="#audit" className="btn-primary w-fit" onClick={() => setMobileOpen(false)}>
                Gratis audit
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
