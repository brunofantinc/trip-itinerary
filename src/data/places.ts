export type PlaceKind = 'eat' | 'drink' | 'see' | 'do' | 'stay';

export interface Place {
  id: string;
  name: string;
  kind: PlaceKind;
  neighborhood: string;
  blurb?: string;
  hours?: string;
  price?: '€' | '€€' | '€€€' | '€€€€';
  mapsUrl?: string;
  website?: string;
  booking?: 'walk-in' | 'reservation' | 'required';
}

// TODO: hardcode your list here. Placeholders below so the page renders.
export const places: Place[] = [
  {
    id: 'time-out-market',
    name: 'Time Out Market',
    kind: 'eat',
    neighborhood: 'Cais do Sodré',
    blurb: 'Food hall with a rotating cast of top Lisbon chefs.',
    price: '€€',
    mapsUrl: 'https://maps.google.com/?q=Time+Out+Market+Lisboa',
  },
  {
    id: 'jeronimos',
    name: 'Mosteiro dos Jerónimos',
    kind: 'see',
    neighborhood: 'Belém',
    blurb: 'Manueline masterpiece. Book ahead.',
    mapsUrl: 'https://maps.google.com/?q=Jeronimos+Monastery',
  },
  {
    id: 'pasteis-de-belem',
    name: 'Pastéis de Belém',
    kind: 'eat',
    neighborhood: 'Belém',
    blurb: 'The original. Line moves fast if you eat in.',
    price: '€',
  },
];

export const neighborhoods = Array.from(
  new Set(places.map((p) => p.neighborhood)),
).sort();
