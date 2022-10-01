import {
  AccessoryCategory,
  CatalogueCategory,
  FashionCategory,
  MakeupCategory,
} from "./types/types";

export const CATEGORY_TREE = {
  [CatalogueCategory.Fashion]: Object.values(FashionCategory),
  [FashionCategory.Accessory]: Object.values(AccessoryCategory),
  [CatalogueCategory.Makeup]: Object.values(MakeupCategory),
  [CatalogueCategory.Allies]: ["All", "SSR", "SR", "R"],
  [CatalogueCategory.Photo]: [
    "Pose",
    "Scene",
    "Cute Effect",
    "Effect",
    "Filter",
    "Frame",
    "Sticker",
    "Brush",
  ],
  [CatalogueCategory.Home]: ["Furniture"],
};

export const FASHION_CATEGORY_EMOJI = {
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
