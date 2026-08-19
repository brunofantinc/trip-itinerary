export interface ItineraryItem {
  time?: string;
  title: string;
  note?: string;
  placeId?: string;
  mapsUrl?: string;
  kind?: 'travel' | 'eat' | 'see' | 'do' | 'rest';
}

export interface Day {
  focus: string;
  summary?: string;
  items: ItineraryItem[];
}

export const itinerary: Day[] = [
  // Day 1
  {
    focus: 'Depart Montreal',
    summary: 'Overnight flight YUL → LIS.',
    items: [
      { time: 'PM', title: 'Fly Montreal → Lisbon', kind: 'travel' },
    ],
  },
  // Day 2
  {
    focus: 'Arrival · Lisbon',
    items: [
      { time: 'AM', title: 'Land at LIS', kind: 'travel' },
      { time: 'Lunch', title: 'O Trevo', placeId: 'o-trevo', kind: 'eat' },
    ],
  },
  // Day 3
  {
    focus: 'TBD',
    items: [
      { time: 'Dinner', title: 'Marc', placeId: 'marc', kind: 'eat' },
    ],
  },
  // Day 4
  {
    focus: 'TBD',
    items: [
      { time: 'Lunch', title: 'Magnolia', placeId: 'magnolia', kind: 'eat' },
      { time: 'Dinner', title: 'Cosmo', placeId: 'cosmo', kind: 'eat' },
    ],
  },
  // Day 5
  {
    focus: 'TBD',
    items: [
      { time: 'Dinner', title: 'Atira-te ao Rio', placeId: 'atira-te-ao-rio', kind: 'eat' },
    ],
  },
  // Day 6
  {
    focus: 'TBD',
    items: [
      { time: 'Lunch', title: 'Taberna Sal Grosso', placeId: 'sal-grosso', kind: 'eat' },
      { time: 'Dinner', title: 'Pomme Eatery', placeId: 'pomme-eatery', kind: 'eat' },
    ],
  },
  // Day 7
  {
    focus: 'TBD',
    items: [
      { time: 'Lunch', title: 'Cantinho do Avillez', placeId: 'cantinho-do-avillez', kind: 'eat' },
      { time: 'Dinner', title: 'Tapisco', placeId: 'tapisco', kind: 'eat' },
    ],
  },
  // Day 8
  {
    focus: 'TBD',
    items: [],
  },
  // Day 9
  {
    focus: 'TBD',
    items: [],
  },
  // Day 10
  {
    focus: 'Return',
    summary: 'Fly home.',
    items: [
      { title: 'Fly Lisbon → Montreal', kind: 'travel' },
    ],
  },
];
