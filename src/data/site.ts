// Central place for all business facts. `null` means the information has not been
// supplied yet; components render a visible "ontbreekt" marker for it.

export const site = {
  name: 'Antwerps Badhuis',
  // TODO: echte reserveringslink invullen.
  bookingUrl: null as string | null,
  phone: null as string | null,
  email: null as string | null,
  address: null as string | null,
  openingHours: null as string | null,
  priceFrom: null as string | null,
  groupSize: null as string | null,
  poolTemperature: '32°C',
};

export const nav = [
  { href: '/wellness', label: 'Wellness' },
  { href: '/feestjes-events', label: 'Feestjes & events' },
  { href: '/zwemlessen', label: 'Zwemlessen' },
  { href: '/prijzen-info', label: 'Prijzen & info' },
  { href: '/fotos', label: "Foto's" },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

// Until the real booking URL exists, "Reserveer" points to the contact page.
export const bookingHref = site.bookingUrl ?? '/contact#reserveren';
