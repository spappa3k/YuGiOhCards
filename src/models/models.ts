// Interfaccia principale per la risposta del JSON
export interface CardData {
  data: Card[];
}

// Interfaccia per rappresentare una singola carta
export interface Card {
  id: number;
  name: string;
  type: string;
  humanReadableCardType: string;
  frameType: string;
  desc: string;
  race: string;
  archetype: string;
  ygoprodeck_url: string;
  card_sets: CardSet[];
  card_images: CardImage[];
  card_prices: CardPrice[];
}

// Interfaccia per rappresentare i set di carte
export interface CardSet {
  set_name: string;
  set_code: string;
  set_rarity: string;
  set_rarity_code: string;
  set_price: string;
}

// Interfaccia per rappresentare le immagini delle carte
export interface CardImage {
  id: number;
  image_url: string;
  image_url_small: string;
  image_url_cropped: string;
}

// Interfaccia per rappresentare i prezzi delle carte
export interface CardPrice {
  cardmarket_price: string;
  tcgplayer_price: string;
  ebay_price: string;
  amazon_price: string;
  coolstuffinc_price: string;
}
