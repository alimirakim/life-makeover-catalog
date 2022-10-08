import {
  AccessoryCategory,
  BrandCategory,
  CatalogueCategory,
  FashionCategory,
  MakeupCategory,
} from "./types/types";
import getLinkedCategoryMap from "./utils/getLinkedCategoryMap";

export const CATEGORY_TREE = {
  [CatalogueCategory.set]: Object.values(BrandCategory),
  [CatalogueCategory.fashion]: Object.values(FashionCategory),
  [FashionCategory.accessory]: Object.values(AccessoryCategory),
  [CatalogueCategory.allies]: ["ssr", "sr", "r"],
  [CatalogueCategory.photo]: [
    "pose",
    "scene",
    "cute_effect",
    "effect",
    "filter",
    "frame",
    "sticker",
    "brush",
  ],
  [CatalogueCategory.home]: ["furniture"],
};

export const LINKED_CATEGORY_MAP = getLinkedCategoryMap(CATEGORY_TREE);

export const FASHION_CATEGORY_EMOJI = {
  [FashionCategory.hairstyle]: "💇‍♀️",
  [FashionCategory.dress]: "👗",
  [FashionCategory.coat]: "🧥",
  [FashionCategory.top]: "👚",
  [FashionCategory.bottom]: "🩳",
  [FashionCategory.socks]: "🧦",
  [FashionCategory.shoes]: "👠",
  [FashionCategory.accessory]: "",
  [FashionCategory.makeup]: "",
};

// GAME IDEAS
// Dressup + VN/detective story + zen daily rhythm chores + educational + home/land customizing + NPC relationships
// Educational - (quizzes/museums/culture, history/folklore/legend, plant & pet care, art/design, music, meditation/yoga, sports/games, finances, brain academy/language)
