import {
  AccessoryCategory,
  CatalogueCategory,
  FashionCategory,
  MakeupCategory,
} from "./types/types";
import getLinkedCategoryMap from "./utils/getLinkedCategoryMap";

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

export const LINKED_CATEGORY_MAP = getLinkedCategoryMap(CATEGORY_TREE);

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

// GAME IDEAS
// Dressup + VN/detective story + zen daily rhythm chores + educational + home/land customizing + NPC relationships
// Educational - (quizzes/museums/culture, history/folklore/legend, plant & pet care, art/design, music, meditation/yoga, sports/games, finances, brain academy/language)
