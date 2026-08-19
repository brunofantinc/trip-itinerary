export interface ItineraryItem {
  time?: string;
  title: string;
  note?: string;
  placeId?: string;
  kind?: 'travel' | 'eat' | 'see' | 'do' | 'rest';
}

export interface Day {
  focus: string;
  summary?: string;
  items: ItineraryItem[];
}

export const itinerary: Day[] = [
  {
    focus: 'Depart Montreal',
    summary: 'Overnight flight YUL → LIS.',
    items: [
      { time: 'PM', title: 'Fly Montreal → Lisbon', kind: 'travel' },
    ],
  },
  {
    focus: 'Arrival · Lisbon',
    items: [
      { time: 'AM', title: 'Land at LIS', kind: 'travel' },
    ],
  },
  // TODO: fill remaining days
  {
    focus: 'Return',
    summary: 'Fly home.',
    items: [
      { title: 'Fly Lisbon → Montreal', kind: 'travel' },
    ],
  },
];
