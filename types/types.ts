export type PaletteNumber =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16;

export enum StyleRating {
  "SSS",
  "SS",
  "S",
  "A",
  "B",
  "C",
}

export enum Style {
  "Elegant",
  "Lively",
  "Cool",
  "Sweet",
  "Fresh",
  "Warm",
  "Sexy",
  "Pure",
  "Gorgeous",
  "Simple",
}

export enum Tag {
  "Classic",
  "Traditional",
  "Japanese",
  "Gown",
  "Lolita",
  "Street",
  "Girl Group",
  "Fairytale",
  "Gothic",
  "Street Punk",
  "Elfish",
  "Homey",
  "British",
  "Sporty",
  "Swimsuit",
  "Rain Gear",
  "Sunproof",
  "Bath",
  "Wedding",
  "Retro",
  "Unisex",
  "Animal",
  "Uniform",
  "Preppy",
  "Mori",
  "Cyberpunk",
  "Formal",
  "Dancer",
  "Rock&Roll",
  "Pastoral",
  "Hot Girl",
  "Winter",
  "Dungarees",
  "Ladylike",
  "Holiday",
  "Princess",
  "Cool",
  "Egyptian",
}

export enum CatalogueCategory {
  Fashion = "Fashion",
  Makeup = "Makeup",
  Allies = "Allies",
  Photo = "Photo",
  Home = "Home",
}

export enum FashionCategory {
  Set = "Set",
  Hairstyle = "Hairstyle",
  Dress = "Dress",
  Coat = "Coat",
  Top = "Top",
  Bottom = "Bottom",
  Socks = "Socks",
  Shoes = "Shoes",
  Accessory = "Accessory",
  Makeup = "Makeup",
}

const FASHION_CATEGORY_EMOJI = {
  [FashionCategory.Set]: "💃",
  [FashionCategory.Hairstyle]: "💇‍♀️",
  [FashionCategory.Dress]: "👗",
  [FashionCategory.Coat]: "🧥",
  [FashionCategory.Top]: "👚",
  [FashionCategory.Bottom]: "🩳",
  [FashionCategory.Socks]: "🧦",
  [FashionCategory.Shoes]: "👠",
  [FashionCategory.Accessory]: "",
  [FashionCategory.Makeup]: "",
};

export enum AccessoryCategory {
  Hat = "Hat",
  Hair = "Hair",
  Face = "Face",
  Earrings = "Earrings",
  Necklace = "Necklace",
  Bracelet = "Bracelet",
  Gloves = "Gloves",
  Ring = "Ring",
  Handheld = "Handheld",
  Wings = "Wings",
  Tail = "Tail",
  Bag = "Bag",
  Anklet = "Anklet",
  Crossbody = "Crossbody",
  Floating = "Floating",
  Tattoo = "Tattoo",
}

export enum MakeupCategory {
  Collection = "Collection",
  Eyebrows = "Eyebrows",
  Contacts = "Contacts",
  Eyeliner = "Eyeliner",
  Eyeshadow = "Eyeshadow",
  Lipstick = "Lipstick",
  Eyelashes = "Eyelashes",
  Blush = "Blush",
  FacePaint = "FacePaint",
}
