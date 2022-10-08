import { Tracing } from "trace_events";
import { EventType, LightchaseType, Material, StageType, Tag } from "./enums";
import {
  Brand,
  ItemCategory,
  Palette,
  PaletteColorNumber,
  PaletteNumber,
  StarRank,
  Style,
  StyleRank,
} from "./types";

export interface User {
  username: string;
  hashcode: string;
  createdAt: string;
  accountIds: string[];
}

export interface Account {
  id: string;
  userId: string;
  name: string;
  region: Region;
  avatarImage?: string;
}

/**
 *
 */
export interface Item {
  id: string;
  name: string;
  description?: string;
  category: ItemCategory;
  starRank: StarRank;
  /** Separated from styleRanks for easy db queries based on obtainType since styleRanks is JSON */
  mainStyle?: Style;
  styleRanks?: { [style: Style]: number | StyleRank };
  /** Separated from obtainMethod for easy db queries based on obtainType since ObtainMethod is JSON */
  obtainMethods?: ObtainMethod[];
  /** Kept as separate columns instead of array for easier db queries */
  tag1?: Tag;
  tag2?: Tag;
  //   TODO Consider unofficial metadata for item categorizing like 'tshirt', 'heels', 'vest'
  defaultPalettes?: Palette[];
}

export interface Set {
  id: string;
  name: string;
  /** Unofficial sets are not part of a brand. */
  brandId?:
    | "brand__amber_shimmer"
    | "brand__offshore_fireworks"
    | "brand__evening_star"
    | "brand__voice_and_color"
    | "brand__please_yourself";
  starRank: StarRank;
  obtainType: ObtainType;
  itemIds?: string[];
  items?: { create: Item[] };
  mainStyle?: Style;
}

export interface ImagesMap {
  [imageId: string]: {
    id: string;
    url: string;
    isOfficial: boolean;
    model?: string;
    angle?: ImageAngle;
    palette?: string;
  };
}

export interface Pose {
  id: string;
  name: string;
  type: "Half-length" | "Whole Body" | "Dynamic";
  options: ("Whole Body" | "Selfie" | "Face")[];
}

export interface PhotoAsset {
  id: string;
  type:
    | "Scene"
    | "Cute Effect"
    | "Effect"
    | "Filter"
    | "Brush"
    | "Frame"
    | "Sticker";
  group: string;
  name: string;
  access: Access;
}

export type CuteEffectType =
  | "Particle"
  | "Animal"
  | "Role Play"
  | "Mood"
  | "Life";
export type EffectType = "Particle" | "Stylize";
export type SceneType = "Scene" | "Portrayal";
export type FilterType =
  | "Girl"
  | "Nature"
  | "Dreamland"
  | "Retro"
  | "Movie"
  | "Cold Luxury"
  | "Pictorial"
  | "Early Spring"
  | "Early Summer"
  | "Pale Cyan"
  | "Cinefilm";
export type BrushType = "Pattern";
export type FrameType = "Static" | "Dynamic";
export type Sticker =
  | "Puppy"
  | "Watercolor"
  | "Salad Days"
  | "Blossom"
  | "Ink"
  | "Cozy Summer"
  | "Joyous Festival"
  | "Bunny Buddy"
  | "Cute Girl"
  | "Sweet Kitchen"
  | "Naughty Witch"
  | "Interstellar Fantasy"
  | "Fashionable Cute";

export interface Lightchase {
  id: string;
  name: string;
  duration?: RegionalDurations;
}

export interface RegionalDurations {
  sea: string;
}

export enum ObtainType {
  craft,
  craftStoryQuest,
  craftMindTravel,
  craftOther,
  lightchaseStarlight,
  lightchaseEssence,
  lightchaseBeloved,
  lightchaseNightOfVvanna,
  lightchaseNirvana,
  lightchaseDewyTears,
  lightchaseSnowDome,
  event,
  stage,
  exchange,
  exchangeGuildShop,
  exchangeDecomStore,
  exchangeFashionShop,
  exchangeAllyShop,
  exchangeEndorsementShop,
  exchangeUpgradeShop,
  exchangeIntimacyShop,
  exchangeSuperRebates,
  exchangeSpecialRebates,
  exchangeClothingStore,
  exchangeGlitteringDecom,
  reward, // goals, chapter packs, ally evolution, etc...
  rewardLevel,
  beautycourse,
  giftExhibition,
  giftAllies,
  rebateGift,
  fashionCode,
}

export type ObtainMethod =
  | ObtainMethodLightchase
  | ObtainMethodStage
  | ObtainMethodEvent
  | ObtainMethodReward
  | ObtainMethodBeautyCourse
  | ObtainMethodCraft
  | ObtainMethodExchange;

interface ObtainMethodLightchase {
  obtainType: ObtainType.lightchase;
  lightchaseId?:
    | "lightchase__starlight_show"
    | "lightchase__essence"
    | "lightchase__beloved"
    | "lightchase__night_of_vvanna"
    | "lightchase__nirvana"
    | "lightchase__snow_dome"
    | "lightchase__dewy_tears";
}

interface ObtainMethodEvent {
  obtainType: ObtainType.event;
  eventId: string;
}

interface ObtainMethodStage {
  obtainType: ObtainType.stage;
  stageIds?: string[];
  mode?: "normal" | "hard";
}

interface ObtainMethodExchange {
  obtainType: ObtainType.exchange;
  shopId?: string;
  currency?: Material;
  cost?: number;
}

interface ObtainMethodReward {
  obtainType: ObtainType.reward;
  rewardType?: "exhibitionGift" | "levelReward" | "chapterPack";
  description?: string;
}

interface ObtainMethodBeautyCourse {
  obtainType: ObtainType.beautycourse;
  beautyCourseId: string;
  classNumber: number;
}

interface ObtainMethodCraft {
  obtainType: ObtainType.craft;
  craftCategory?: "storyQuest" | "mindTravel" | "other";
  materialCost?: { itemId: string; quantity: number }[];
}

interface BeautyCourse {
  id: string;
  name: string;
  currency: Material;
  // classes: {
  //         cost: number;
  //         name?: string;
  //         styleIndex?: Style;
  //         styleIndexBonus?: number;
  //         influenceBonus?: number;
  //         unlockRequirement?: string;
  //     }[],
  classCosts: number[];
}

interface Reward {
  quantity?: number;
  itemId?: string;
  materialType?: Material;
}

interface Chapter {
  id: string; // 'chapter__mind_travel__01'
  type: "storyQuest" | "mindTravel";
  chapterNumber: number;
  name: string;
  chapterPack: [
    {
      requiredPerfectRatings: number;
      rewards: Reward[];
    }
  ];
  goalRequirements: string; // setId or stageId
}

interface Stage {
  id: string; // 'stage__story_quest__01_12'
  // type: 'storyQuest'|'mindTravel';
  // chapterNumber: number;
  // stageNumber: number;
  name: string;
  // normalDrops: (Material|string)[];
  // hardDrops: (Material|string)[];
  challenges: {
    goals: [
      {
        description: string;
        reward: {
          diamonds?: number;
          vvannaPts?: number;
        };
        requiredPaletteColors: (Palette | PaletteNumber)[];
        requiredTag: Tag;
      }
    ];
    giftpack: {
      vvannaPts: number;
    };
  };

  storySummary?: string;
  mainStyle: Style;
  subStyle: Style;
  tag?: Tag;
  requiredItem?: string;
}

export interface Event {
  id: string;
  name: string;
  type: EventType; // signin
  duration: RegionalDurations;
}

// interface ObtainMethodChapterPack {
//   stageType: StageType;
//   chapter: number;
// }

interface ObtainMethodFashionCode {
  setId: string;
  eventTime: [Date, Date];
  level: number;
}

interface ObtainMethodAllyEvolution {
  allyId: string;
}

interface BeautyCourse {
  itemCost: number;
  accumulativeCost: number;
  totalCost: number;
  currency: Currency;
}

const accessMessages = [
  // sets

  // lightchase
  "Obtain from Starlight Show",
  "From Lightchase--Beloved",
  "From Lightchase--Essence",
  "From Lightchase - Nirvana",
  "From Night of Vvanna",

  // story drops
  "Drops from Story Quest Hard Stage 1-1",
  "Mind Travel 2-5 Drops",

  // story packs
  "Obtain from Story Normal Chapter 1 Pack", // normal, hard, challenge, mind travel
  "Obtain from Vvanna Challenge Chapter 10",

  // fashion studio
  "Story Quest Set - From Fashion Studio",
  "Mind Travel Set - From Fashion Studio",
  "Other Sets - From Fashion Studio",

  // paid
  "Obtain from Rebate Gifts",
  "Obtain from Fashion Code",
  "Claim First Top-up Pack to obtain",

  // exchange
  "Enter Clothing Store to buy",
  "Exchange at Ally Shop",
  "Redeem in Special Rebates",
  "Purchase in Fashion Shop",
  "Exchange at Inspiration Center",
  "Exchange at Endorsement Shop",
  "Exchange at the Decom Store",
  "Redeem in Lightchase - Nirvana - Gilded Decom",
  "Enter Glimmer Shop to exchange",
  "Exchange at Vvanna Challenge Shop",
  "Obtain from Guild Shop Purchase",

  // events
  "From City Tour", // event

  // Reward
  "Endorsement Queen block reward",
  "Obtain from Level Reward",
  "Obtain from collecting allies",

  // other
  "From the Exhibition gifts",
  "Obtain from Freshmen Limited",
  "Obtained from Operation events",
  "No sources for the time being", // starting inventory, ended events

  // makeup collections
  "Obtain from completing Beauty Course",
  "Plaid's Secret - Makeup crafting",
  "Evernight Rose - Dying Making",

  // evolution reward
  "Obtain from Perfect Match Evolution",
];
