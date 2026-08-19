export const trip = {
  destination: 'Portugal',
  base: 'Lisbon',
  startDate: '2026-09-04',
  endDate: '2026-09-12',
  origin: 'Montreal (YUL)',
  travelers: ['Bruno'],
  accommodation: {
    name: 'Locke de Santa Joana',
    address: 'R. de Santa Marta 61, 1150-292 Lisboa',
    mapsUrl: 'https://maps.apple.com/?q=Locke%20de%20Santa%20Joana%2C%20Lisbon',
    checkIn: '2026-09-05',
    checkOut: '2026-09-12',
  },
};

export function tripDurationDays(): number {
  const s = new Date(trip.startDate);
  const e = new Date(trip.endDate);
  return Math.round((e.getTime() - s.getTime()) / 86400000) + 1;
}

export function daysUntilTrip(now = new Date()): number {
  const s = new Date(trip.startDate);
  return Math.ceil((s.getTime() - now.getTime()) / 86400000);
}
