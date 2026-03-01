const WHATSAPP_NUMBER = '31644732266'
const WHATSAPP_MESSAGE = encodeURIComponent('Hallo! Ik heb een vraag voor Van Borg.')

export function WhatsAppWidget() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-widget"
      aria-label="Chat met ons via WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M16 .5C7.44.5.5 7.44.5 16c0 2.72.7 5.36 2.04 7.68L.5 31.5l8.08-2.04A15.45 15.45 0 0 0 16 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5z"
          fill="#fff"
          opacity="0.15"
        />
        <path
          d="M23.18 20.54c-.34-.17-2.02-1-2.34-1.11-.32-.11-.55-.17-.78.17-.23.34-.89 1.11-1.09 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.69-2.01-1.89-2.35-.2-.34-.02-.52.15-.69.16-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.78-1.88-1.07-2.58-.28-.68-.57-.59-.78-.6h-.66c-.23 0-.6.09-.91.43-.32.34-1.21 1.18-1.21 2.88s1.24 3.34 1.41 3.57c.17.23 2.44 3.73 5.92 5.23.83.36 1.47.57 1.98.73.83.26 1.59.23 2.18.14.67-.1 2.02-.83 2.3-1.63.28-.8.28-1.49.2-1.63-.09-.14-.32-.23-.66-.4z"
          fill="#fff"
        />
      </svg>
      <span className="whatsapp-widget__label">WhatsApp</span>
    </a>
  )
}
