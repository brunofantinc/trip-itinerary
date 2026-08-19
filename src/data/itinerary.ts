export interface ItineraryItem {
  time?: string;
  title: string;
  note?: string;
  placeId?: string;
  kind?: 'travel' | 'eat' | 'see' | 'do' | 'rest';
}

export interface Day {
  date: string; // ISO
  focus: string; // e.g. "Alfama & Baixa"
  summary?: string;
  items: ItineraryItem[];
}

export const itinerary: Day[] = [
  {
    date: '2026-09-04',
    focus: 'Depart Montreal',
    summary: 'Overnight flight YUL → LIS.',
    items: [
      { time: 'PM', title: 'Fly Montreal → Lisbon', kind: 'travel' },
    ],
  },
  {
    date: '2026-09-05',
    focus: 'Arrival · Lisbon',
    items: [
      { time: 'AM', title: 'Land at LIS', kind: 'travel' },
    ],
  },
  // TODO: fill days Sept 6–11
  {
    date: '2026-09-12',
    focus: 'Return',
    summary: 'Fly home.',
    items: [
      { title: 'Fly Lisbon → Montreal', kind: 'travel' },
    ],
  },
];
