export type PlaceKind = 'resto' | 'bites' | 'store' | 'drink' | 'see' | 'do';

export interface Place {
  id: string;
  name: string;
  kind: PlaceKind;
  blurb?: string;
  neighborhood?: string;
  mapsUrl?: string;
  website?: string;
  tiktok?: string;
  booking?: 'walk-in' | 'reservation' | 'required';
}

const appleMaps = (q: string) =>
  `https://maps.apple.com/?q=${encodeURIComponent(q + ' Lisbon')}`;

export const places: Place[] = [
  // Restaurants — confirmed
  {
    id: 'sal-grosso',
    name: 'Taberna Sal Grosso',
    kind: 'resto',
    blurb: 'Comfy traditional Portuguese food.',
    website: 'https://tabernasalgrosso.pt/restaurantes/',
    tiktok: 'https://vt.tiktok.com/ZS4NbGr25/',
    mapsUrl: appleMaps('Taberna Sal Grosso'),
  },
  {
    id: 'tapisco',
    name: 'Tapisco',
    kind: 'resto',
    blurb: 'Needs CC to reserve.',
    website: 'https://www.tapisco.pt/',
    tiktok: 'https://vt.tiktok.com/ZS4Ng29Wp/',
    mapsUrl: appleMaps('Tapisco'),
    booking: 'required',
  },
  {
    id: 'o-trevo',
    name: 'O Trevo',
    kind: 'resto',
    blurb: 'Bourdain ate there and recommended. Affordable sandwiches!',
    website: 'https://www.otrevo48.com/',
    tiktok: 'https://vt.tiktok.com/ZS4NgqxQc/',
    mapsUrl: appleMaps('Cervejaria O Trevo'),
  },
  {
    id: 'cantinho-do-avillez',
    name: 'Cantinho do Avillez',
    kind: 'resto',
    blurb:
      'Bourdain rec. Portuguese food with a high-end touch. Good lunch menu. Michelin.',
    website: 'https://www.cantinhodoavillez.pt/en/',
    tiktok: 'https://vt.tiktok.com/ZS4NpxMS8/',
    mapsUrl: appleMaps('Cantinho do Avillez'),
  },

  // Restaurants — booked but details TBD
  {
    id: 'marc',
    name: 'Marc',
    kind: 'resto',
    blurb: 'TBD — look it up.',
    mapsUrl: appleMaps('Marc restaurant'),
  },
  {
    id: 'magnolia',
    name: 'Magnolia',
    kind: 'resto',
    blurb: 'TBD',
    mapsUrl: appleMaps('Magnolia restaurant'),
  },
  {
    id: 'cosmo',
    name: 'Cosmo',
    kind: 'resto',
    blurb: 'TBD',
    mapsUrl: appleMaps('Cosmo restaurant'),
  },
  {
    id: 'atira-te-ao-rio',
    name: 'Atira-te ao Rio',
    kind: 'resto',
    blurb: 'TBD',
    mapsUrl: appleMaps('Atira-te ao Rio'),
  },
  {
    id: 'pomme-eatery',
    name: 'Pomme Eatery',
    kind: 'resto',
    blurb: 'TBD',
    mapsUrl: appleMaps('Pomme Eatery'),
  },
  {
    id: 'leonetta',
    name: 'Leonetta',
    kind: 'resto',
    blurb: 'TBD',
    mapsUrl: appleMaps('Leonetta'),
  },

  // Little bites
  {
    id: 'quest',
    name: 'QUEST',
    kind: 'bites',
    blurb: 'Cinnamon rolls.',
    website: 'https://www.instagram.com/quest_lx/',
    tiktok: 'https://vt.tiktok.com/ZS4NgncwA/',
    mapsUrl: appleMaps('Quest LX'),
  },
  {
    id: 'the-potato-project',
    name: 'The Potato Project',
    kind: 'bites',
    blurb: 'Potatoes all the way.',
    website: 'https://www.potatoprojectpt.com/',
    tiktok: 'https://vt.tiktok.com/ZS4NpuwJo/',
    mapsUrl: appleMaps('The Potato Project'),
  },
  {
    id: 'nerv-cafe',
    name: 'NERV Café',
    kind: 'bites',
    blurb:
      'LGBTQ+ supporter café. From a Brazilian guy that had a YouTube channel I watch, LOL.',
    website: 'https://www.instagram.com/nervlisboa/',
    mapsUrl: appleMaps('NERV Café'),
  },

  // Stores
  {
    id: 'a-vida-portuguesa',
    name: 'A Vida Portuguesa',
    kind: 'store',
    blurb: 'Little cute things and porcelain store.',
    website: 'https://www.avidaportuguesa.com/en',
    tiktok: 'https://vt.tiktok.com/ZS4NpFPEj/',
    mapsUrl: appleMaps('A Vida Portuguesa'),
  },
  {
    id: 'livraria-bertrand',
    name: 'Livraria Bertrand',
    kind: 'store',
    blurb: 'Oldest bookstore in the world!',
    website: 'https://www.bertrand.pt/livrarias/livraria-bertrand-chiado/900',
    tiktok: 'https://vt.tiktok.com/ZS4NpMXgg/',
    mapsUrl: appleMaps('Livraria Bertrand Chiado'),
  },

  // Drinks
  {
    id: 'a-ginjinha',
    name: 'A Ginjinha',
    kind: 'drink',
    blurb: 'The most traditional drink.',
    website: 'https://www.instagram.com/ginjinha_espinheira',
    tiktok: 'https://vt.tiktok.com/ZS4NgDBtR/',
    mapsUrl: appleMaps('A Ginjinha Espinheira'),
  },
  {
    id: 'ginjinha-dona-alice',
    name: 'Ginjinha da Dona Alice',
    kind: 'drink',
    blurb: 'A little old vovó that sells the shots in chocolate cups.',
    tiktok: 'https://vt.tiktok.com/ZS4NgHTmH/',
    mapsUrl: appleMaps('Ginjinha da Dona Alice'),
  },
];

export const placeById = (id: string) => places.find((p) => p.id === id);
