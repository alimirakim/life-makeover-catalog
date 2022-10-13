import { EventType, LightchaseType, Material } from "../types/enums";
import { Event, Item, Lightchase, ObtainType, Set } from "../types/interfaces";
import { FashionCategory, MakeupCategory, Style, Tag } from "../types/types";

const hairstyles: Item[] = [
  {
    id: "fashion__hairstyle__streamer_rotation",
    name: "Streamer Rotation",
    starRank: 5,
    category: FashionCategory.hairstyle,
    tag1: Tag.fairytale,
    tag2: Tag.preppy,
    styleRanks: {
      sweet: StyleRank.sss,
      pure: StyleRank.s,
      gorgeous: StyleRank.s,
      lively: StyleRank.s,
      fresh: StyleRank.a,
    },
    obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
  },
  {
    id: "fashion__hairstyle_light_pigment",
    name: "Light Pigment",
    starRank: 5,
    category: FashionCategory.hairstyle,
    tag1: Tag.traditional,
    styleRanks: {
      elegant: StyleRank.sss,
      cool: StyleRank.s,
      gorgeous: StyleRank.s,
      pure: StyleRank.s,
      fresh: StyleRank.a,
    },
    obtainMethods: [
      {
        obtainType: ObtainType.lightchaseStarlight,
      },
    ],
  },
  {
    id: "fashion__hairstyle__night_breeze",
    name: "Night Breeze",
    starRank: 5,
    category: FashionCategory.hairstyle,
    tag1: Tag.traditional,
    styleRanks: {
      elegant: StyleRank.ss,
      pure: StyleRank.s,
      sweet: StyleRank.a,
      simple: StyleRank.a,
      fresh: StyleRank.b,
    },
    obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
  },
  {
    id: "fashion__hairstyle__sunny_clouds",
    name: "Sunny Clouds",
    starRank: 5,
    category: FashionCategory.hairstyle,
    tag1: Tag.street_punk,
    tag2: Tag.fairytale,
    styleRanks: {
      lively: StyleRank.ss,
      simple: StyleRank.s,
      sexy: StyleRank.a,
      sweet: StyleRank.a,
      fresh: StyleRank.b,
    },
    obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
  },
  {
    id: "fashion__hairstyle__moon_dance",
    name: "Moon Dance",
    starRank: 5,
    category: FashionCategory.hairstyle,
    tag1: Tag.fairytale,
    styleRanks: {
      gorgeous: StyleRank.ss,
      sweet: StyleRank.s,
      lively: StyleRank.a,
      pure: StyleRank.a,
      fresh: StyleRank.b,
    },
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__dewy_decom",
        cost: 300,
      },
    ],
  },
  {
    id: "fashion__hairstyle__double_concerto",
    name: "Double Concerto",
    starRank: 5,
    category: FashionCategory.hairstyle,
    tag1: Tag.gown,
    tag2: Tag.ladylike,
    styleRanks: {
      elegant: StyleRank.ss,
      pure: StyleRank.s,
      sweet: StyleRank.a,
      simple: StyleRank.a,
      fresh: StyleRank.b,
    },
    obtainMethods: [
      {
        obtainType: ObtainType.premium,
        premiumDeal: "premium__first_top_up_pack",
      },
    ],
  },

  {
    id: "fashion__hairstyle__lost_sunlight",
    name: "Lost Sunlight",
    starRank: 5,
    category: FashionCategory.hairstyle,
    tag1: Tag.ladylike,
    styleRanks: {
      elegant: StyleRank.ss,
      simple: StyleRank.s,
      sweet: StyleRank.a,
      sexy: StyleRank.a,
      fresh: StyleRank.b,
    },
    obtainMethods: [
      {
        obtainType: ObtainType.fashionCode,
        fashionCode: "fashioncode__snow_chapter",
      },
    ],
  },

  {
    id: "fashion__hairstyle__wild_jasmine",
    name: "Wild Jasmine",
    starRank: 5,
    category: FashionCategory.hairstyle,
    tag1: Tag.classic,
    styleRanks: {
      sexy: StyleRank.ss,
      gorgeous: StyleRank.s,
      lively: StyleRank.a,
      fresh: StyleRank.a,
      sweet: StyleRank.b,
    },
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__gilded_decom",
        cost: 300,
      },
    ],
  },
  {
    id: "fashion__hairstyle__summer_cherry",
    name: "Summer Cherry",
    starRank: 4,
    category: FashionCategory.hairstyle,
    tag1: Tag.preppy,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__starlight_show",
      },
    ],
  },
  {
    id: "fashion__hairstyle__aloof_lily",
    name: "Aloof Lily",
    starRank: 4,
    category: FashionCategory.hairstyle,
    tag1: Tag.mori,
    tag2: Tag.holiday,
    obtainMethods: [
      {
        obtainType: ObtainType.reward,
        rewardType: "chapterPack",
      },
    ],
  },
  {
    id: "fashion__hairstyle__nightcats_whisper",
    name: "Nightcat's Whisper",
    starRank: 4,
    category: FashionCategory.hairstyle,
    tag1: Tag.preppy,
    obtainMethods: [
      {
        obtainType: ObtainType.reward,
        rewardType: "exhibitionGift",
      },
    ],
  },
  {
    id: "fashion__hairstyle__light_and_bird",
    name: "Light & Bird",
    starRank: 3,
    category: FashionCategory.hairstyle,
    tag1: Tag.gown,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "hard",
        stageIds: [
          [8, 2],
          [9, 10],
          [10, 3],
        ],
      },
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 2888,
      },
    ],
  },
  {
    id: "fashion__hairstyle__fashion_signal",
    name: "Fashion Signal",
    starRank: 3,
    category: FashionCategory.hairstyle,
    tag1: Tag.street_punk,
    tag2: Tag.cool,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "hard",
        stageIds: [
          [4, 10],
          [8, 8],
        ],
      },
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 2888,
      },
    ],
  },
  {
    id: "fashion__hairstyle__worn_seasalt",
    name: "Worn Seasalt",
    starRank: 3,
    category: FashionCategory.hairstyle,
    tag1: Tag.holiday,
    tag2: Tag.swimsuit,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "hard",
        stageIds: [
          [7, 9],
          [9, 1],
        ],
      },
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 2888,
      },
    ],
  },
  {
    id: "fashion__hairstyle__good_wishes",
    name: "Good Wishes",
    starRank: 3,
    category: FashionCategory.hairstyle,
    tag1: Tag.traditional,
    tag2: Tag.street_punk,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        stageIds: [
          [1, 8],
          [8, 5],
          [6, 10],
          [10, 7],
        ],
        mode: "hard",
      },
      {
        obtainType: ObtainType.exchange,
        currency: Material.gold,
        cost: 2888,
        shopId: "shop__clothing_store",
      },
    ],
  },
  {
    id: "fashion__hairstyle__comets_tail",
    name: "Comet's Tail",
    starRank: 3,
    category: FashionCategory.hairstyle,
    tag1: Tag.girl_group,
    tag2: Tag.street,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "hard",
        stageIds: [
          [7, 12],
          [9, 5],
        ],
      },
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 2888,
      },
    ],
  },
  {
    id: "fashion__hairstyle__daytime_stars",
    name: "Daytime Stars",
    starRank: 3,
    category: FashionCategory.hairstyle,
    tag1: Tag.unisex,
    tag2: Tag.rock_and_roll,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 3940,
      },
    ],
  },
  {
    id: "fashion__hairstyle__starry_sunset",
    name: "Starry Sunset",
    starRank: 3,
    category: FashionCategory.hairstyle,
    tag1: Tag.street_punk,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__starlight_show",
      },
    ],
  },
];

// const scratch = {
//     id: "fashion__coat__",
//     name: "",
//     starRank: 3,
//     category: FashionCategory.coat,
//     tag1: Tag. ,
//     tag2: Tag.,
//     styleRanks: {
//     sexy: StyleRank.a,
//     gorgeous: StyleRank.b,
//     sweet: StyleRank.c,
//     elegant: StyleRank.c,
//     fresh: StyleRank.c,
//     },
//     obtainMethods: [{obtainType: ObtainType. }],
// },

// const makeup = {
//     name: "",
//     starRank: 4,
//     category: MakeupCategory. ,
//     obtainMethods: [{obtainType: ObtainType.giftExhibition}],
//   },

// const sample = {
//   name: "",
//   starRank: 5,
//   category: ,
//   tag1: Tag. ,
//   tag2: Tag. ,
//   styleRanks: {

// lively: StyleRank.ss,
// cool: StyleRank.s,
// simple: StyleRank.a,
// sexy: StyleRank.a,
// fresh: StyleRank.b,

//     sexy: StyleRank.s,
//     gorgeous: StyleRank.a,
//     sweet: StyleRank.b,
//     elegant: StyleRank.b,
//     fresh: StyleRank.c,

//     sexy: StyleRank.a,
//     gorgeous: StyleRank.b,
//     sweet: StyleRank.c,
//     elegant: StyleRank.c,
//     fresh: StyleRank.c,

//   },
//   obtainMethods: [{obtainType: ObtainType. }],
// },

// materialCost: [
//     {
//     itemId: "fashion__",
//     quantity: ,
//     },
//     {
//     itemId: "fashion__",
//     quantity: ,
//     },
// ],
