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

export type PaletteColorNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Palette = [PaletteNumber, PaletteColorNumber];

export type StarRank = 3 | 4 | 5 | 6;
export enum StyleRank {
  sss = "sss",
  ss = "ss",
  s = "s",
  a = "a",
  b = "b",
  c = "c",
}
export enum Style {
  elegant = "elegant",
  lively = "lively",
  cool = "cool",
  sweet = "sweet",
  fresh = "fresh",
  warm = "warm",
  sexy = "sexy",
  pure = "pure",
  gorgeous = "gorgeous",
  simple = "simple",
}

export enum Tag {
  classic = "classic",
  traditional = "traditional",
  japanese = "japanese",
  gown = "gown",
  lolita = "lolita",
  street = "street",
  girl_group = "girl_group",
  fairytale = "fairytale",
  gothic = "gothic",
  street_punk = "street_punk",
  elfish = "elfish",
  homey = "homey",
  british = "british",
  sporty = "sporty",
  swimsuit = "swimsuit",
  rain_gear = "rain_gear",
  sunproof = "sunproof",
  bath = "bath",
  wedding = "wedding",
  retro = "retro",
  unisex = "unisex",
  animal = "animal",
  uniform = "uniform",
  preppy = "preppy",
  mori = "mori",
  cyberpunk = "cyberpunk",
  formal = "formal",
  dancer = "dancer",
  rock_and_roll = "rock_and_roll",
  pastoral = "pastoral",
  hot_girl = "hot_girl",
  winter = "winter",
  dungarees = "dungarees",
  ladylike = "ladylike",
  holiday = "holiday",
  princess = "princess",
  cool = "cool",
  egyptian = "egyptian",
}

export type Brand =
  | "brand__amber_shimmer"
  | "brand__offshore_fireworks"
  | "brand__evening_star"
  | "brand__voice_and_color";

export enum CatalogueCategory {
  fashion = "fashion",
  makeup = "makeup",
  allies = "allies",
  photo = "photo",
  home = "home",
}

export enum FashionCategory {
  set = "set",
  hairstyle = "hairstyle",
  dress = "dress",
  coat = "coat",
  top = "top",
  bottom = "bottom",
  socks = "socks",
  shoes = "shoes",
  accessory = "accessory",
  makeup = "makeup",
}

export enum AccessoryCategory {
  hat = "hat",
  hair = "hair",
  face = "face",
  earrings = "earrings",
  necklace = "necklace",
  wrist = "wrist",
  gloves = "gloves",
  ring = "ring",
  handheld = "handheld",
  wings = "wings",
  tail = "tail",
  back = "back",
  anklet = "anklet",
  crossbody = "crossbody",
  floating = "floating",
  tattoo = "tattoo",
}

export enum MakeupCategory {
  collection = "collection",
  eyebrow = "eyebrow",
  contacts = "contacts",
  eyeliner = "eyeliner",
  eyeshadow = "eyeshadow",
  lipstick = "lipstick",
  eyelashes = "eyelashes",
  blush = "blush",
  facial_paint = "facial_paint",
}

export type ItemCategory = FashionCategory | AccessoryCategory | MakeupCategory;
