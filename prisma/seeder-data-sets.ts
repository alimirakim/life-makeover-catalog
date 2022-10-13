import { EventType, LightchaseType, Material } from "../types/enums";
import { Event, Item, Lightchase, ObtainType, Set } from "../types/interfaces";
import {
  AccessoryCategory,
  Brand,
  FashionCategory,
  MakeupCategory,
  Style,
  StyleRank,
  Tag,
} from "../types/types";

const sets: Set[] = [
  // {
  //     id: "fashion__set__",
  //     name: "",
  //     starRank: 4,
  //     brandId: "",
  //     obtainType: ObtainType.,
  //     mainStyle: Style.,
  //     items: {create: [],
  // },

  {
    id: "fashion__set__secret_garden",
    name: "Secret Garden",
    starRank: 6,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.exchangeSuperRebates,
    mainStyle: Style.sweet,
    items: {
      create: [
        {
          id: "fashion__hairstyle__snow_like_flowers",
          name: "Snow-Like Flowers",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.pastoral,
          tag2: Tag.gown,
          styleRanks: {
            sweet: StyleRank.sss,
            simple: StyleRank.s,
            elegant: StyleRank.s,
            pure: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeSuperRebates,
              cost: 300,
            },
          ],
        },
        {
          id: "fashion__dress__secret_garden",
          name: "Secret Garden",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.pastoral,
          tag2: Tag.gown,
          styleRanks: {
            sweet: StyleRank.sss,
            simple: StyleRank.s,
            elegant: StyleRank.s,
            pure: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeSuperRebates,
              cost: 1000,
            },
          ],
        },
        {
          id: "fashion__shoes__flower_rain",
          name: "Flower Rain",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.pastoral,
          tag2: Tag.gown,
          styleRanks: {
            sweet: StyleRank.sss,
            simple: StyleRank.s,
            elegant: StyleRank.s,
            pure: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeSuperRebates,
              cost: 200,
            },
          ],
        },
        {
          id: "fashion__hat__in_fallen_flowers",
          name: "In Fallen Flowers",
          starRank: 5,
          category: AccessoryCategory.hat,
          tag1: Tag.pastoral,
          tag2: Tag.gown,
          styleRanks: {
            sweet: StyleRank.sss,
            simple: StyleRank.s,
            elegant: StyleRank.s,
            pure: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeSuperRebates,
              cost: 120,
            },
          ],
        },
        {
          id: "fashion__earrings__falling_petals",
          name: "Falling Petals",
          starRank: 5,
          category: AccessoryCategory.earrings,
          tag1: Tag.pastoral,
          tag2: Tag.gown,
          styleRanks: {
            sweet: StyleRank.sss,
            simple: StyleRank.s,
            elegant: StyleRank.s,
            pure: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeSuperRebates,
              cost: 80,
            },
          ],
        },
        {
          id: "fashion__ring__misty_shadow",
          name: "Misty Shadow",
          starRank: 5,
          category: AccessoryCategory.ring,
          tag1: Tag.pastoral,
          tag2: Tag.gown,
          styleRanks: {
            sweet: StyleRank.sss,
            simple: StyleRank.s,
            elegant: StyleRank.s,
            pure: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeSuperRebates,
              cost: 70,
            },
          ],
        },
        {
          id: "fashion__handheld__layers_of_flowers",
          name: "Layers of Flowers",
          starRank: 5,
          category: AccessoryCategory.handheld,
          tag1: Tag.pastoral,
          tag2: Tag.gown,
          styleRanks: {
            sweet: StyleRank.sss,
            simple: StyleRank.s,
            elegant: StyleRank.s,
            pure: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeSuperRebates,
              cost: 150,
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__flower_whisper",
    name: "Flower Whisper",
    starRank: 6,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.lightchaseEssence,
    mainStyle: Style.sweet,
    items: {
      create: [
        {
          id: "fashion__hairstyle__golden_sugar",
          name: "Golden Sugar",
          starRank: 5,
          category: FashionCategory.hairstyle,
          mainStyle: Style.sweet,
          tag1: Tag.fairytale,
          styleRanks: {
            sweet: StyleRank.sss,
            pure: StyleRank.s,
            elegant: StyleRank.s,
            gorgeous: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__dress__miss_flower",
          name: "Miss Flower",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.fairytale,
          styleRanks: {
            sweet: StyleRank.sss,
            pure: StyleRank.s,
            elegant: StyleRank.s,
            gorgeous: StyleRank.s,
            warm: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__socks__light_veil",
          name: "Light Veil",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.fairytale,
          styleRanks: {
            sweet: StyleRank.sss,
            pure: StyleRank.s,
            elegant: StyleRank.s,
            gorgeous: StyleRank.s,
            warm: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__shoes__floral_shadow",
          name: "Floral Shadow",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.fairytale,
          styleRanks: {
            sweet: StyleRank.sss,
            pure: StyleRank.s,
            elegant: StyleRank.s,
            gorgeous: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__hat__dreamy_laurel",
          name: "Dreamy Laurel",
          starRank: 5,
          category: AccessoryCategory.hat,
          tag1: Tag.fairytale,
          styleRanks: {
            sweet: StyleRank.sss,
            pure: StyleRank.s,
            elegant: StyleRank.s,
            gorgeous: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__hair__floral_prayer",
          name: "Floral Prayer",
          starRank: 5,
          category: AccessoryCategory.hair,
          tag1: Tag.fairytale,
          styleRanks: {
            sweet: StyleRank.sss,
            pure: StyleRank.s,
            elegant: StyleRank.s,
            gorgeous: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__necklace__full_bloom",
          name: "Full Bloom",
          starRank: 5,
          category: AccessoryCategory.necklace,
          tag1: Tag.fairytale,
          styleRanks: {
            sweet: StyleRank.sss,
            pure: StyleRank.s,
            elegant: StyleRank.s,
            gorgeous: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__ring__fleeting_time",
          name: "Fleeting Time",
          starRank: 5,
          category: AccessoryCategory.ring,
          tag1: Tag.fairytale,
          styleRanks: {
            sweet: StyleRank.sss,
            pure: StyleRank.s,
            elegant: StyleRank.s,
            gorgeous: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__handheld__blooming_flowers",
          name: "Blooming Flowers",
          starRank: 5,
          category: AccessoryCategory.handheld,
          tag1: Tag.fairytale,
          tag2: Tag.sunproof,
          styleRanks: {
            sweet: StyleRank.sss,
            pure: StyleRank.s,
            elegant: StyleRank.s,
            gorgeous: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__wings__windflower_feather",
          name: "Windflower Feather",
          starRank: 5,
          category: AccessoryCategory.wings,
          tag1: Tag.fairytale,
          styleRanks: {
            sweet: StyleRank.sss,
            pure: StyleRank.s,
            elegant: StyleRank.s,
            gorgeous: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
      ],
    },
  },
  {
    id: "fashion__set__miracle_elsie",
    name: "Miracle Elsie",
    starRank: 5,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.lightchaseDewyTears,
    mainStyle: Style.simple,
    items: {
      create: [
        {
          id: "fashion__hairstyle__dream_concerto",
          name: "Dream Concerto",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.retro,
          styleRanks: {
            simple: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            cool: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
        {
          id: "fashion__dress__miracle_elsie",
          name: "Miracle Elsie",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.retro,
          styleRanks: {
            simple: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            cool: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
        {
          id: "fashion__socks__early_night",
          name: "Early Night",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.retro,
          styleRanks: {
            simple: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            cool: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
        {
          id: "fashion__shoes__summer_yard",
          name: "Summer Yard",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.retro,
          styleRanks: {
            simple: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            cool: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
        {
          id: "fashion__hat__silver_notes",
          name: "Silver Notes",
          starRank: 5,
          category: AccessoryCategory.hat,
          tag1: Tag.retro,
          styleRanks: {
            simple: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            cool: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
        {
          id: "fashion__hair__fluttering_petals",
          name: "Fluttering Petals",
          starRank: 5,
          category: AccessoryCategory.hair,
          tag1: Tag.retro,
          styleRanks: {
            simple: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            cool: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
        {
          id: "fashion__handheld__flowery_scene",
          name: "Flower Scene",
          starRank: 5,
          category: AccessoryCategory.handheld,
          tag1: Tag.retro,
          styleRanks: {
            simple: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            cool: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
      ],
    },
  },
  {
    id: "fashion__set__lost_tale",
    name: "Lost Tale",
    starRank: 5,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.lightchaseEssence,
    mainStyle: Style.simple,
    items: {
      create: [
        {
          id: "fashion__hair__sun_and_seagull",
          name: "Sun & Seagull",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            simple: StyleRank.ss,
            pure: StyleRank.s,
            lively: StyleRank.a,
            sweet: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__dress__lost_tale",

          name: "Lost Tale",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            simple: StyleRank.ss,
            pure: StyleRank.s,
            lively: StyleRank.a,
            sweet: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__coat__fluffy_tale",

          name: "Fluffy Tale",
          starRank: 5,
          category: FashionCategory.coat,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            simple: StyleRank.ss,
            pure: StyleRank.s,
            lively: StyleRank.a,
            sweet: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__socks__weaving_snow",

          name: "Weaving Snow",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            simple: StyleRank.ss,
            pure: StyleRank.s,
            lively: StyleRank.a,
            sweet: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__shoes__castle_tour",

          name: "Castle Tour",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            simple: StyleRank.ss,
            pure: StyleRank.s,
            lively: StyleRank.a,
            sweet: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__hat__snowy_forest",

          name: "Snowy Forest",
          starRank: 5,
          category: AccessoryCategory.hat,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            simple: StyleRank.ss,
            pure: StyleRank.s,
            lively: StyleRank.a,
            sweet: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__handheld__candy_castle",

          name: "Candy Castle",
          starRank: 5,
          category: AccessoryCategory.handheld,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            simple: StyleRank.ss,
            pure: StyleRank.s,
            lively: StyleRank.a,
            sweet: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
      ],
    },
  },
  {
    id: "fashion__set__fluffy_mousse",
    name: "Fluffy Mousse",
    starRank: 5,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.event,
    mainStyle: Style.pure,
    items: {
      create: [
        {
          id: "fashion__hairstyle__cinnamon_cutie",
          name: "Cinnamon Cutie",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            pure: StyleRank.ss,
            sweet: StyleRank.s,
            lively: StyleRank.a,
            gorgeous: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
              eventId: "event__greedy_bear",
            },
          ],
        },
        {
          id: "fashion__dress__fluffy_mousse",
          name: "Fluffy Mousse",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            pure: StyleRank.ss,
            sweet: StyleRank.s,
            lively: StyleRank.a,
            gorgeous: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
              eventId: "event__greedy_bear",
            },
          ],
        },
        {
          id: "fashion__socks__creamy_mousse",
          name: "Creamy Mousse",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            pure: StyleRank.ss,
            sweet: StyleRank.s,
            lively: StyleRank.a,
            gorgeous: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
              eventId: "event__greedy_bear",
            },
          ],
        },
        {
          id: "fashion__shoes__banquet_of_forest",
          name: "Banquet of Forest",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            pure: StyleRank.ss,
            sweet: StyleRank.s,
            lively: StyleRank.a,
            gorgeous: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
              eventId: "event__greedy_bear",
            },
          ],
        },
        {
          id: "fashion__hair__sweet_chocolate",
          name: "Sweet Chocolate",
          starRank: 5,
          category: AccessoryCategory.hair,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            pure: StyleRank.ss,
            sweet: StyleRank.s,
            lively: StyleRank.a,
            gorgeous: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
              eventId: "event__greedy_bear",
            },
          ],
        },
        {
          id: "fashion__earrings__startled_bambi",
          name: "Startled Bambi",
          starRank: 5,
          category: AccessoryCategory.earrings,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            pure: StyleRank.ss,
            sweet: StyleRank.s,
            lively: StyleRank.a,
            gorgeous: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
              eventId: "event__greedy_bear",
            },
          ],
        },
        {
          id: "fashion__ring__elk_dark_forest",
          name: "Elk Dark Forest",
          starRank: 5,
          category: AccessoryCategory.ring,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            pure: StyleRank.ss,
            sweet: StyleRank.s,
            lively: StyleRank.a,
            gorgeous: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
              eventId: "event__greedy_bear",
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__shallow_sleep",
    name: "Shallow Sleep",
    starRank: 5,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.event,
    mainStyle: Style.sweet,
    items: {
      create: [
        {
          id: "fashion__hairstyle__sakura_fever",
          name: "Sakura Fever",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.retro,
          styleRanks: {
            sweet: StyleRank.ss,
            pure: StyleRank.s,
            elegant: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
              eventId: "event__sack_of_foxes",
            },
          ],
        },
        {
          id: "fashion__dress__shallow_sleep",
          name: "Shallow Sleep",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.retro,
          styleRanks: {
            sweet: StyleRank.ss,
            pure: StyleRank.s,
            elegant: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
              eventId: "event__sack_of_foxes",
            },
          ],
        },
        {
          id: "fashion__shoes__floral_step",
          name: "Floral Step",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.retro,
          styleRanks: {
            sweet: StyleRank.ss,
            pure: StyleRank.s,
            elegant: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
              eventId: "event__sack_of_foxes",
            },
          ],
        },
        {
          id: "fashion__hair__evening_blossom",
          name: "Evening Blossom",
          starRank: 5,
          category: AccessoryCategory.hair,
          tag1: Tag.retro,
          styleRanks: {
            sweet: StyleRank.ss,
            pure: StyleRank.s,
            elegant: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
              eventId: "event__sack_of_foxes",
            },
          ],
        },
        {
          id: "fashion__earrings__wandering_star",
          name: "Wandering Star",
          starRank: 5,
          category: AccessoryCategory.earrings,
          tag1: Tag.retro,
          styleRanks: {
            sweet: StyleRank.ss,
            pure: StyleRank.s,
            elegant: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
              eventId: "event__sack_of_foxes",
            },
          ],
        },
        {
          id: "fashion__necklace__thorn_key",
          name: "Thorn Key",
          starRank: 5,
          category: AccessoryCategory.necklace,
          tag1: Tag.retro,
          styleRanks: {
            sweet: StyleRank.ss,
            pure: StyleRank.s,
            elegant: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
              eventId: "event__sack_of_foxes",
            },
          ],
        },
        {
          id: "fashion__ring__morning_kiss",
          name: "Morning Kiss",
          starRank: 5,
          category: AccessoryCategory.ring,
          tag1: Tag.retro,
          styleRanks: {
            sweet: StyleRank.ss,
            pure: StyleRank.s,
            elegant: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
              eventId: "event__sack_of_foxes",
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__hymn_to_ceres",
    name: "Hymn to Ceres",
    starRank: 5,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.lightchaseDewyTears,
    mainStyle: Style.elegant,
    items: {
      create: [
        {
          id: "fashion__hairstyle__prayer_of_stars",
          name: "Prayer of Stars",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.pastoral,
          styleRanks: {
            elegant: StyleRank.ss,
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
        {
          id: "fashion__dress__hymn_to_ceres",
          name: "Hymn to Ceres",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.pastoral,
          styleRanks: {
            elegant: StyleRank.ss,
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
        {
          id: "fashion__socks__poem_of_wheat",
          name: "Poem of Wheat",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.pastoral,
          styleRanks: {
            elegant: StyleRank.ss,
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
        {
          id: "fashion__shoes__prayer_of_flowers",
          name: "Prayer of Flowers",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.pastoral,
          styleRanks: {
            elegant: StyleRank.ss,
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
        {
          id: "fashion__hat__dewy_branch",
          name: "Dewy Branch",
          starRank: 5,
          category: AccessoryCategory.hat,
          tag1: Tag.pastoral,
          styleRanks: {
            elegant: StyleRank.ss,
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
        {
          id: "fashion__necklace__golden_fall",
          name: "Golden Fall",
          starRank: 5,
          category: AccessoryCategory.necklace,
          tag1: Tag.pastoral,
          styleRanks: {
            elegant: StyleRank.ss,
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
        {
          id: "fashion__earrings__golden_bud",
          name: "Golden Bud",
          starRank: 5,
          category: AccessoryCategory.earrings,
          tag1: Tag.pastoral,
          styleRanks: {
            elegant: StyleRank.ss,
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
        {
          id: "fashion__handheld__praise_of_wheat",
          name: "Praise of Wheat",
          starRank: 5,
          category: AccessoryCategory.handheld,
          tag1: Tag.pastoral,
          styleRanks: {
            elegant: StyleRank.ss,
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
        {
          id: "fashion__tattoo__sunlight_engraving",
          name: "Sunlight Engraving",
          starRank: 5,
          category: AccessoryCategory.tattoo,
          tag1: Tag.pastoral,
          styleRanks: {
            elegant: StyleRank.ss,
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
      ],
    },
  },
  {
    id: "fashion__set__cat_walk",
    name: "Cat Walk",
    starRank: 5,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.exchangeEndorsementShop,
    mainStyle: Style.sweet,
    items: {
      create: [
        {
          id: "fashion__hairstyle__frolic_and_stroll",
          name: "Frolic and Stroll",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.animal,
          tag2: Tag.homey,
          styleRanks: {
            sweet: StyleRank.ss,
            lively: StyleRank.s,
            simple: StyleRank.a,
            pure: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeEndorsementShop,
              cost: 1580,
            },
          ],
        },
        {
          id: "fashion__dress__cat_walk",
          name: "Cat Walk",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.animal,
          tag2: Tag.homey,
          styleRanks: {
            sweet: StyleRank.ss,
            lively: StyleRank.s,
            simple: StyleRank.a,
            pure: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeEndorsementShop,
              cost: 1040,
            },
          ],
        },
        {
          id: "fashion__socks__fun_and_frolic",
          name: "Fun and Frolic",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.animal,
          tag2: Tag.homey,
          styleRanks: {
            sweet: StyleRank.ss,
            lively: StyleRank.s,
            simple: StyleRank.a,
            pure: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeEndorsementShop,
              cost: 630,
            },
          ],
        },
        {
          id: "fashion__shoes__sleepy_cat",
          name: "Sleepy Cat",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.animal,
          tag2: Tag.homey,
          styleRanks: {
            sweet: StyleRank.ss,
            lively: StyleRank.s,
            simple: StyleRank.a,
            pure: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeEndorsementShop,
              cost: 630,
            },
          ],
        },
        {
          id: "fashion__hat__fluffy_ears",
          name: "Fluffy Ears",
          starRank: 5,
          category: AccessoryCategory.hat,
          tag1: Tag.animal,
          tag2: Tag.homey,
          styleRanks: {
            sweet: StyleRank.ss,
            lively: StyleRank.s,
            simple: StyleRank.a,
            pure: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeEndorsementShop,
              cost: 490,
            },
          ],
        },
        {
          id: "fashion__tail__waving_cat_tail",
          name: "Waving Cat Tail",
          starRank: 5,
          category: AccessoryCategory.tail,
          tag1: Tag.animal,
          tag2: Tag.homey,
          styleRanks: {
            sweet: StyleRank.ss,
            lively: StyleRank.s,
            simple: StyleRank.a,
            pure: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeEndorsementShop,
              cost: 490,
            },
          ],
        },
        {
          id: "fashion__anklet__jericho_ball",
          name: "Jericho Ball",
          starRank: 5,
          category: AccessoryCategory.anklet,
          tag1: Tag.animal,
          tag2: Tag.homey,
          styleRanks: {
            sweet: StyleRank.ss,
            lively: StyleRank.s,
            simple: StyleRank.a,
            pure: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeEndorsementShop,
              cost: 490,
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__tipsy_jam",
    name: "Tipsy Jam",
    starRank: 5,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.lightchaseStarlight,
    mainStyle: Style.gorgeous,
    items: {
      create: [
        {
          id: "fashion__hairstyle__naughty_witch",
          name: "Naughty Witch",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sweet: StyleRank.s,
            pure: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__dress__tipsy_jam",
          name: "Tipsy Jam",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sweet: StyleRank.s,
            pure: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__socks__strawberry_boba",
          name: "Strawberry Boba",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sweet: StyleRank.s,
            pure: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__shoes__cherry_path",
          name: "Cherry Path",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sweet: StyleRank.s,
            pure: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__hair__bunch_of_berries",
          name: "Bunch of Berries",
          starRank: 5,
          category: AccessoryCategory.hair,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sweet: StyleRank.s,
            pure: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__necklace__midnight_folk",
          name: "Midnight Folk",
          starRank: 5,
          category: AccessoryCategory.necklace,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sweet: StyleRank.s,
            pure: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__wrist__sweet_legend",
          name: "Sweet Legend",
          starRank: 5,
          category: AccessoryCategory.wrist,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sweet: StyleRank.s,
            pure: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__anklet__berry_nighttalk",
          name: "Berry Nighttalk",
          starRank: 5,
          category: AccessoryCategory.anklet,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sweet: StyleRank.s,
            pure: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
      ],
    },
  },
  {
    id: "fashion__set__island_starshine",
    name: "Island Starshine",
    starRank: 5,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.lightchaseBeloved,
    mainStyle: Style.pure,
    items: {
      create: [
        {
          id: "fashion__hairstyle__island_spirit",
          name: "Island Spirit",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.elfish,
          tag2: Tag.animal,
          styleRanks: {
            pure: StyleRank.ss,
            sweet: StyleRank.s,
            gorgeous: StyleRank.a,
            lively: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__dress__island_starshine",
          name: "Island Starshine",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.elfish,
          tag2: Tag.animal,
          styleRanks: {
            pure: StyleRank.ss,
            sweet: StyleRank.s,
            gorgeous: StyleRank.a,
            lively: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__shoes__lost_forest",
          name: "Lost Forest",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.elfish,
          tag2: Tag.animal,
          styleRanks: {
            pure: StyleRank.ss,
            sweet: StyleRank.s,
            gorgeous: StyleRank.a,
            lively: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__hat__deer_song",
          name: "Deer Song",
          starRank: 5,
          category: AccessoryCategory.hat,
          tag1: Tag.elfish,
          tag2: Tag.animal,
          styleRanks: {
            pure: StyleRank.ss,
            sweet: StyleRank.s,
            gorgeous: StyleRank.a,
            lively: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__earrings__starfall_lake",
          name: "Starfall Lake",
          starRank: 5,
          category: AccessoryCategory.earrings,
          tag1: Tag.elfish,
          tag2: Tag.animal,
          styleRanks: {
            pure: StyleRank.ss,
            sweet: StyleRank.s,
            gorgeous: StyleRank.a,
            lively: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__necklace__sarnath_flower",
          name: "Sarnath Flower",
          starRank: 5,
          category: AccessoryCategory.necklace,
          tag1: Tag.elfish,
          tag2: Tag.animal,
          styleRanks: {
            pure: StyleRank.ss,
            sweet: StyleRank.s,
            gorgeous: StyleRank.a,
            lively: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__gloves__spring_dance",
          name: "Spring Dance",
          starRank: 5,
          category: AccessoryCategory.gloves,
          tag1: Tag.elfish,
          tag2: Tag.animal,
          styleRanks: {
            pure: StyleRank.ss,
            sweet: StyleRank.s,
            gorgeous: StyleRank.a,
            lively: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
      ],
    },
  },
  {
    id: "fashion__set__morning_chorus",
    name: "Morning Chorus",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.pure,
    items: {
      create: [
        {
          id: "fashion__dress__morning_chorus",
          name: "Morning Chorus",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.holiday,
          styleRanks: {
            pure: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__refreshing_mint",
                  quantity: 63,
                },
                {
                  itemId: "fashion__face__beyond_the_dune",
                  quantity: 88,
                },
                {
                  itemId: "fashion__socks__snowy_ribbon",
                  quantity: 87,
                },
                {
                  itemId: "fashion__tattoo__fiery_badge",
                  quantity: 41,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__socks__dawn_rose",
          name: "Dawn Rose",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.holiday,
          styleRanks: {
            pure: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__fleeting_gold",
                  quantity: 21,
                },
                {
                  itemId: "fashion__necklace__islands_heart",
                  quantity: 31,
                },
                {
                  itemId: "fashion__wrist__empathetic_type",
                  quantity: 31,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__shoes__silent_dew",
          name: "Silent Dew",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.holiday,
          styleRanks: {
            pure: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__bottom__gilded_forest",
                  quantity: 20,
                },
                {
                  itemId: "fashion__face__diamond_alliance",
                  quantity: 66,
                },
                {
                  itemId: "fashion__necklace__islands_heart",
                  quantity: 66,
                },
                {
                  itemId: "fashion__earrings__floral_farewell",
                  quantity: 22,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__earrings__morning_nap",
          name: "Morning Nap",
          starRank: 4,
          category: AccessoryCategory.earrings,
          tag1: Tag.holiday,
          styleRanks: {
            pure: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__southern_holiday",
                  quantity: 11,
                },
                {
                  itemId: "fashion__hat__coupled_wings",
                  quantity: 55,
                },
                {
                  itemId: "fashion__face__diamond_alliance",
                  quantity: 55,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__necklace__morning_bud",
          name: "Morning Bud",
          starRank: 4,
          category: AccessoryCategory.necklace,
          tag1: Tag.holiday,
          styleRanks: {
            pure: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__bottom__blueberry_bubble",
                  quantity: 20,
                },
                {
                  itemId: "fashion__face__beyond_the_dune",
                  quantity: 31,
                },
                {
                  itemId: "fashion__tattoo__silent_poetry",
                  quantity: 41,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__miss_cookie",
    name: "Miss Cookie",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.lively,
    items: {
      create: [
        {
          id: "fashion__dress__miss_cookie",
          name: "Miss Cookie",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.preppy,
          styleRanks: {
            lively: StyleRank.s,
            sweet: StyleRank.a,
            simple: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__bottom__blueberry_bubble",
                  quantity: 63,
                },
                {
                  itemId: "fashion__ring__cherished_days",
                  quantity: 69,
                },
                {
                  itemId: "fashion__face__sidelong_glance",
                  quantity: 69,
                },
                {
                  itemId: "fashion__socks__valley_morning",
                  quantity: 41,
                },
              ],
            },
          ],
        },

        {
          id: "fashion__socks__nutella_waffles",
          name: "Nutella Waffles",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.preppy,
          styleRanks: {
            lively: StyleRank.s,
            sweet: StyleRank.a,
            simple: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__southern_holiday",
                  quantity: 12,
                },
                {
                  itemId: "fashion__socks__intertwined_beats",
                  quantity: 59,
                },
                {
                  itemId: "fashion__ring__cherished_days",
                  quantity: 58,
                },
                {
                  itemId: "fashion__socks__warm_kapok",
                  quantity: 22,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__shoes__black_bean_muffin",
          name: "Black Bean Muffin",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.preppy,
          styleRanks: {
            lively: StyleRank.s,
            sweet: StyleRank.a,
            simple: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__refreshing_mint",
                  quantity: 22,
                },
                {
                  itemId: "fashion__face__sidelong_glance",
                  quantity: 64,
                },
                {
                  itemId: "fashion__earrings__black_plaid_fringe",
                  quantity: 63,
                },
                {
                  itemId: "fashion__earrings__floral_farewell",
                  quantity: 22,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__handheld__sugar_mesona",
          name: "Sugar Mesona",
          starRank: 4,
          category: AccessoryCategory.handheld,
          tag1: Tag.preppy,
          styleRanks: {
            lively: StyleRank.s,
            sweet: StyleRank.a,
            simple: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__honeypeach",
                  quantity: 11,
                },
                {
                  itemId: "fashion__socks__snowy_ribbon",
                  quantity: 31,
                },
                {
                  itemId: "fashion__face__sakura_curtain",
                  quantity: 41,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__sea_stream",
    name: "Sea Stream",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.pure,
    items: {
      create: [
        {
          id: "fashion__dress__sea_stream",
          name: "Sea Stream",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.preppy,
          styleRanks: {
            pure: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__southern_holiday",
                  quantity: 31,
                },
                {
                  itemId: "fashion__ring__cherished_days",
                  quantity: 69,
                },
                {
                  itemId: "fashion__face__sidelong_glance",
                  quantity: 69,
                },
                {
                  itemId: "fashion__socks__valley_morning",
                  quantity: 41,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__socks__gentle_fish_tail",
          name: "Gentle Fish Tail",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.preppy,
          styleRanks: {
            pure: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__honeypeach",
                  quantity: 10,
                },
                {
                  itemId: "fashion__socks__short_step_slipper",
                  quantity: 47,
                },
                {
                  itemId: "fashion__hat__crane_figure",
                  quantity: 47,
                },
                {
                  itemId: "fashion__socks__warm_kapok",
                  quantity: 22,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__shoes__step_into_river",
          name: "Step Into River",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.preppy,
          styleRanks: {
            pure: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__refreshing_mint",
                  quantity: 19,
                },
                {
                  itemId: "fashion__socks__snowy_ribbon",
                  quantity: 59,
                },
                {
                  itemId: "fashion__socks__intertwined_beats",
                  quantity: 58,
                },
                {
                  itemId: "fashion__socks__lakeside_petal",
                  quantity: 22,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__earrings__spiraling_galaxy",
          name: "Spiraling Galaxy",
          starRank: 4,
          category: AccessoryCategory.earrings,
          tag1: Tag.preppy,
          styleRanks: {
            pure: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              //   materialCost: [
              //       {
              //       itemId: "fashion__",
              //       quantity: ,
              //       },
              //       {
              //       itemId: "fashion__",
              //       quantity: ,
              //       },
              //   ],
            },
          ],
        },
        {
          id: "fashion__handheld__sparks_in_night",
          name: "Sparks In Night",
          starRank: 4,
          category: AccessoryCategory.handheld,
          tag1: Tag.preppy,
          styleRanks: {
            pure: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__bottom__gilded_forest",
                  quantity: 18,
                },
                {
                  itemId: "fashion__hat__coupled_wings",
                  quantity: 47,
                },
                {
                  itemId: "fashion__socks__mottled_snow",
                  quantity: 47,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__renaissance",
    name: "Renaissance",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.simple,
    items: {
      create: [
        {
          id: "fashion__top__renaissance",
          name: "Renaissance",
          starRank: 4,
          category: FashionCategory.top,
          tag1: Tag.cool,
          styleRanks: {
            simple: StyleRank.s,
            pure: StyleRank.a,
            cool: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__bottom__blueberry_bubble",
                  quantity: 24,
                },
                {
                  itemId: "fashion__socks__short_step_slipper",
                  quantity: 46,
                },
                {
                  itemId: "fashion__earrings__black_plaid_fringe",
                  quantity: 46,
                },
                {
                  itemId: "fashion__socks__strawberry_top",
                  quantity: 41,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__bottom__california_wind",
          name: "California Wind",
          starRank: 4,
          category: FashionCategory.bottom,
          tag1: Tag.cool,
          styleRanks: {
            simple: StyleRank.s,
            pure: StyleRank.a,
            cool: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__honeypeach",
                  quantity: 13,
                },
                {
                  itemId: "fashion__hat__coupled_wings",
                  quantity: 46,
                },
                {
                  itemId: "fashion__earrings__black_plaid_fringe",
                  quantity: 46,
                },
                {
                  itemId: "fashion__socks__strawberry_top",
                  quantity: 41,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__socks__plain_sketching",
          name: "Plain Sketching",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.cool,
          styleRanks: {
            simple: StyleRank.s,
            pure: StyleRank.a,
            cool: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__southern_holiday",
                  quantity: 10,
                },
                {
                  itemId: "fashion__socks__mottled_snow",
                  quantity: 62,
                },
                {
                  itemId: "fashion__socks__night_time_skyline",
                  quantity: 16,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__shoes__milky_journal",
          name: "Milky Journal",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.cool,
          styleRanks: {
            simple: StyleRank.s,
            pure: StyleRank.a,
            cool: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__refreshing_mint",
                  quantity: 17,
                },
                {
                  itemId: "fashion__earrings__black_plaid_fringe",
                  quantity: 62,
                },
                {
                  itemId: "fashion__hat__cute_rabbit_carrot",
                  quantity: 22,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__hat__dreamcatcher",
          name: "Dreamcatcher",
          starRank: 4,
          category: AccessoryCategory.hat,
          tag1: Tag.cool,
          styleRanks: {
            simple: StyleRank.s,
            pure: StyleRank.a,
            cool: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__fleeting_gold",
                  quantity: 17,
                },
                {
                  itemId: "fashion__socks__short_step_slipper",
                  quantity: 62,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__handheld__cherry_crepe",
          name: "Cherry Crepe",
          starRank: 4,
          category: AccessoryCategory.handheld,
          tag1: Tag.cool,
          styleRanks: {
            simple: StyleRank.s,
            pure: StyleRank.a,
            cool: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__bottom__gilded_forest",
                  quantity: 16,
                },
                {
                  itemId: "fashion__socks__mottled_snow",
                  quantity: 62,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__first_date",
    name: "First Date",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.sweet,
    items: {
      create: [
        {
          id: "fashion__top__first_date",
          name: "First Date",
          starRank: 4,
          category: FashionCategory.top,
          tag1: Tag.street,
          tag2: Tag.winter,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__bottom__blueberry_bubble",
                  quantity: 28,
                },
                {
                  itemId: "fashion__hat__coupled_wings",
                  quantity: 53,
                },
                {
                  itemId: "fashion__socks__mottled_snow",
                  quantity: 52,
                },
                {
                  itemId: "fashion__tattoo__light_dance",
                  quantity: 32,
                },
              ],
            },
          ],
        },

        {
          id: "fashion__bottom__white_love_spark",
          name: "White Love Spark",
          starRank: 4,
          category: FashionCategory.bottom,
          tag1: Tag.street,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__southern_holiday",
                  quantity: 16,
                },
                {
                  itemId: "fashion__hat__coupled_wings",
                  quantity: 54,
                },
                {
                  itemId: "fashion__socks__mottled_snow",
                  quantity: 53,
                },
                {
                  itemId: "fashion__socks__silk_woven_love",
                  quantity: 32,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__socks__bright_whisper",
          name: "Bright Whisper",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.street,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__shoes__crush_and_date",
          name: "Crush and Date",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.street,
          tag2: Tag.winter,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__honeypeach",
                  quantity: 10,
                },
                {
                  itemId: "fashion__socks__mottled_snow",
                  quantity: 42,
                },
                {
                  itemId: "fashion__hat__crane_figure",
                  quantity: 42,
                },
                {
                  itemId: "fashion__socks__night_time_skyline",
                  quantity: 21,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__handheld__pink_first_love",
          name: "Pink First Love",
          starRank: 4,
          category: AccessoryCategory.handheld,
          tag1: Tag.street,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__fleeting_gold",
                  quantity: 20,
                },
                {
                  itemId: "fashion__hat__crane_figure",
                  quantity: 42,
                },
                {
                  itemId: "fashion__socks__short_step_slipper",
                  quantity: 42,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__whispering_lane",
    name: "Whispering Lane",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.sweet,
    items: {
      create: [
        {
          id: "fashion__dress__whispering_lane",
          name: "Whispering Lane",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.mori,
          styleRanks: {
            sweet: StyleRank.s,
            pure: StyleRank.a,
            elegant: StyleRank.b,
            warm: StyleRank.b,
            simple: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__shoes__the_underground",
          name: "The Underground",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.mori,
          styleRanks: {
            sweet: StyleRank.s,
            elegant: StyleRank.a,
            pure: StyleRank.b,
            simple: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__earrings__street_whispers",
          name: "Street Whispers",
          starRank: 4,
          category: AccessoryCategory.earrings,
          tag1: Tag.mori,
          styleRanks: {
            sweet: StyleRank.s,
            elegant: StyleRank.a,
            pure: StyleRank.b,
            simple: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__handheld__song_of_streets",
          name: "Song of Streets",
          starRank: 4,
          category: AccessoryCategory.handheld,
          tag1: Tag.mori,
          styleRanks: {
            sweet: StyleRank.s,
            elegant: StyleRank.a,
            pure: StyleRank.b,
            simple: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__plum_sugar_love",
    name: "Plum Sugar Love",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.sweet,
    items: {
      create: [
        {
          id: "fashion__coat__the_encounter",
          name: "The Encounter",
          starRank: 4,
          category: FashionCategory.coat,
          tag1: Tag.mori,
          styleRanks: {
            sweet: StyleRank.s,
            simple: StyleRank.a,
            elegant: StyleRank.b,
            warm: StyleRank.b,
            pure: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__hat__dreamwalker",
                  quantity: 12,
                },
                {
                  itemId: "fashion__earrings__summer_love",
                  quantity: 16,
                },
                {
                  itemId: "fashion__bottom__grayish_blue",
                  quantity: 16,
                },
              ],
            },
          ],
        },

        {
          id: "fashion__top__plum_sugar_love",
          name: "Plum Sugar Love",
          starRank: 4,
          category: FashionCategory.top,
          tag1: Tag.mori,
          styleRanks: {
            sweet: StyleRank.s,
            elegant: StyleRank.a,
            simple: StyleRank.b,
            pure: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__shoes__strawberry_soda",
                  quantity: 7,
                },
                {
                  itemId: "fashion__necklace__radiant_snow",
                  quantity: 9,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__bottom__sweet_youth",
          name: "Sweet Youth",
          starRank: 4,
          category: FashionCategory.bottom,
          tag1: Tag.mori,
          styleRanks: {
            sweet: StyleRank.s,
            elegant: StyleRank.a,
            simple: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__shoes__motley_nightlight",
                  quantity: 7,
                },
                {
                  itemId: "fashion__necklace__radiant_snow",
                  quantity: 9,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__shoes__first_meet",
          name: "First Meet",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.mori,
          styleRanks: {
            sweet: StyleRank.s,
            elegant: StyleRank.a,
            warm: StyleRank.b,
            pure: StyleRank.b,
            simple: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__face__verdant_tassel",
                  quantity: 5,
                },
                {
                  itemId: "fashion__hair__birchleaf_pears",
                  quantity: 6,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__hat__peach_date",
          name: "Peach Date",
          starRank: 4,
          category: AccessoryCategory.hat,
          tag1: Tag.mori,
          styleRanks: {
            sweet: StyleRank.s,
            simple: StyleRank.a,
            pure: StyleRank.b,
            warm: StyleRank.b,
            elegant: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__shoes__fluttering_wings",
                  quantity: 6,
                },
                {
                  itemId: "fashion__face__light_tea_world",
                  quantity: 6,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__azure_bunny",
    name: "Azure Bunny",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.lightchaseStarlight,
    mainStyle: Style.pure,
    items: {
      create: [
        {
          id: "fashion__hairstyle__summer_memory",
          name: "Summer Memory",
          starRank: 4,
          category: FashionCategory.hairstyle,
          tag1: Tag.preppy,
          styleRanks: {
            pure: StyleRank.s,
            lively: StyleRank.a,
            simple: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__coat__azure_bunny",
          name: "Azure Bunny",
          starRank: 4,
          category: FashionCategory.coat,
          tag1: Tag.preppy,
          tag2: Tag.japanese,
          styleRanks: {
            pure: StyleRank.s,
            lively: StyleRank.a,
            simple: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__top__froth_cream",
          name: "Froth Cream",
          starRank: 4,
          category: FashionCategory.top,
          tag1: Tag.preppy,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            simple: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__bottom__azure_ripple",
          name: "Azure Ripple",
          starRank: 4,
          category: FashionCategory.bottom,
          tag1: Tag.preppy,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            lively: StyleRank.b,
            simple: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__socks__mint_icing",
          name: "Mint Icing",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.preppy,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            simple: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__shoes__mint_smoothie",
          name: "Mint Smoothie",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.preppy,
          tag2: Tag.japanese,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            simple: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
      ],
    },
  },
  {
    id: "fashion__set__morning_chatter",
    name: "Morning Chatter",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.pure,
    items: {
      create: [
        {
          id: "fashion__hairstyle__sweet_research",
          name: "Sweet Research",
          starRank: 4,
          category: FashionCategory.hairstyle,
          tag1: Tag.preppy,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            simple: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__top__morning_chatter",
          name: "Morning Chatter",
          starRank: 4,
          category: FashionCategory.top,
          tag1: Tag.preppy,
          tag2: Tag.uniform,
          styleRanks: {
            pure: StyleRank.s,
            elegant: StyleRank.a,
            warm: StyleRank.b,
            sweet: StyleRank.b,
            simple: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__bottom__academy_voice",
          name: "Academy Voice",
          starRank: 4,
          category: FashionCategory.bottom,
          tag1: Tag.preppy,
          tag2: Tag.uniform,
          styleRanks: {
            pure: StyleRank.s,
            elegant: StyleRank.a,
            sweet: StyleRank.b,
            simple: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__socks__wish_study",
          name: "Wish Study",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.preppy,
          tag2: Tag.retro,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            simple: StyleRank.b,
            warm: StyleRank.b,
            elegant: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__shoes__campus_stroll",
          name: "Campus Stroll",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.preppy,
          tag2: Tag.retro,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            simple: StyleRank.b,
            elegant: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__handheld__strawberry_kiss",
          name: "Strawberry Kiss",
          starRank: 4,
          category: AccessoryCategory.handheld,
          tag1: Tag.preppy,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            lively: StyleRank.b,
            simple: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__lie_of_flower",
    name: "Lie of Flower",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.pure,
    items: {
      create: [
        {
          id: "fashion__dress__lie_of_flower",
          name: "Lie of Flower",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.mori,
          styleRanks: {
            pure: StyleRank.s,
            elegant: StyleRank.a,
            gorgeous: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__bottom__blueberry_bubble",
                  quantity: 19,
                },
                {
                  itemId: "fashion__bottom__heat_wave",
                  quantity: 39,
                },
                {
                  itemId: "fashion__socks__sky_and_sea",
                  quantity: 38,
                },
                {
                  itemId: "fashion__necklace__golden_light",
                  quantity: 22,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__socks__waning_dream",
          name: "Waning Dream",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.mori,
          styleRanks: {
            pure: StyleRank.s,
            elegant: StyleRank.a,
            simple: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__fleeting_gold",
                  quantity: 7,
                },
                {
                  itemId: "fashion__earrings__summer_love",
                  quantity: 27,
                },
                {
                  itemId: "fashion__shoes__rusted_manor",
                  quantity: 22,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__shoes__white_dance",
          name: "White Dance",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.mori,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__bottom__gilded_forest",
                  quantity: 6,
                },
                {
                  itemId: "fashion__face__flowing_snow",
                  quantity: 27,
                },
                {
                  itemId: "fashion__necklace__golden_light",
                  quantity: 22,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__hair__sweet_language",
          name: "Sweet Language",
          starRank: 4,
          category: AccessoryCategory.hair,
          tag1: Tag.mori,
          styleRanks: {
            pure: StyleRank.s,
            elegant: StyleRank.a,
            gorgeous: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__honeypeach",
                  quantity: 3,
                },
                {
                  itemId: "fashion__socks__snow_hidden",
                  quantity: 26,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__necklace__tear_of_flower",
          name: "Tear of Flower",
          starRank: 4,
          category: AccessoryCategory.necklace,
          tag1: Tag.mori,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__gloves__youth_date",
          name: "Youth Date",
          starRank: 4,
          category: AccessoryCategory.gloves,
          tag1: Tag.mori,
          styleRanks: {
            pure: StyleRank.s,
            elegant: StyleRank.a,
            gorgeous: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__refreshing_mint",
                  quantity: 7,
                },
                {
                  itemId: "fashion__anklet__triangle_code",
                  quantity: 27,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__lemon_soda",
    name: "Lemon Soda",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.craftOther,
    mainStyle: Style.simple,
    items: {
      create: [
        {
          id: "fashion__coat__sweetfruit_youth",
          name: "Sweetfruit Youth",
          starRank: 4,
          category: FashionCategory.coat,
          tag1: Tag.retro,
          styleRanks: {
            simple: StyleRank.s,
            pure: StyleRank.a,
            sweet: StyleRank.b,
            warm: StyleRank.b,
            elegant: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftOther,
              materialCost: [
                {
                  itemId: "drawing__sweetfruit_youth",
                  quantity: 1,
                },
                {
                  itemId: "fashion__socks__strawberry_icing",
                  quantity: 28,
                },
                {
                  itemId: "fashion__hair__birchleaf_pears",
                  quantity: 42,
                },
                {
                  itemId: "fashion__bottom__noir_trend",
                  quantity: 18,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__top__lemon_soda",
          name: "Lemon Soda",
          starRank: 4,
          category: FashionCategory.top,
          tag1: Tag.retro,
          styleRanks: {
            simple: StyleRank.s,
            pure: StyleRank.a,
            sweet: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftOther,
              materialCost: [
                {
                  itemId: "drawing__lemon_soda",
                  quantity: 1,
                },
                {
                  itemId: "fashion__bottom__young_spirit",
                  quantity: 14,
                },
                {
                  itemId: "fashion__hair__water_tenderness",
                  quantity: 32,
                },
                {
                  itemId: "fashion__dress__white_dew_beach",
                  quantity: 18,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__bottom__coffee_caramel",
          name: "Coffee Caramel",
          starRank: 4,
          category: FashionCategory.bottom,
          tag1: Tag.retro,
          styleRanks: {
            simple: StyleRank.s,
            pure: StyleRank.a,
            sweet: StyleRank.b,
            elegant: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftOther,
              materialCost: [
                {
                  itemId: "drawing__coffee_caramel",
                  quantity: 1,
                },
                {
                  itemId: "fashion__bottom__dynamic_element",
                  quantity: 17,
                },
                {
                  itemId: "fashion__bottom__sand_plaid",
                  quantity: 32,
                },
                {
                  itemId: "fashion__bottom__grayish_blue",
                  quantity: 18,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__shoes__coke_gummy",
          name: "Coke Gummy",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.retro,
          styleRanks: {
            simple: StyleRank.s,
            pure: StyleRank.a,
            sweet: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftOther,
              materialCost: [
                {
                  itemId: "drawing__coke_gummy",
                  quantity: 1,
                },
                {
                  itemId: "fashion__bottom__equation",
                  quantity: 11,
                },
                {
                  itemId: "fashion__face__tender_gaze",
                  quantity: 21,
                },
                {
                  itemId: "fashion__coat__warm_sun",
                  quantity: 9,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__misty_morning",
    name: "Misty Morning",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.exchangeUpgradeShop,
    mainStyle: Style.pure,
    items: {
      create: [
        {
          id: "fashion__coat__ethereal_mist",
          name: "Ethereal Mist",
          starRank: 4,
          category: FashionCategory.coat,
          tag1: Tag.mori,
          tag2: Tag.pastoral,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeUpgradeShop,
              cost: 400,
            },
          ],
        },
        {
          id: "fashion__top__misty_morning",
          name: "Misty Morning",
          starRank: 4,
          category: FashionCategory.top,
          tag1: Tag.mori,
          tag2: Tag.pastoral,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeUpgradeShop,
              cost: 1000,
            },
          ],
        },
        {
          id: "fashion__bottom__lost_woods",
          name: "Lost Woods",
          starRank: 4,
          category: FashionCategory.bottom,
          tag1: Tag.mori,
          tag2: Tag.pastoral,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeUpgradeShop,
              cost: 800,
            },
          ],
        },
        {
          id: "fashion__socks__morning_dew",
          name: "Morning Dew",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.mori,
          tag2: Tag.pastoral,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeUpgradeShop,
              cost: 200,
            },
          ],
        },
        {
          id: "fashion__shoes__fragrant_passage",
          name: "Fragrant Passage",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.mori,
          tag2: Tag.pastoral,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeUpgradeShop,
              cost: 400,
            },
          ],
        },
        {
          id: "fashion__hat__song_of_deers",
          name: "Song of Deers",
          starRank: 4,
          category: AccessoryCategory.hat,
          tag1: Tag.mori,
          tag2: Tag.pastoral,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeUpgradeShop,
              // cost: ,
            },
          ],
        },
        {
          id: "fashion__necklace__dancing_firefly",
          name: "Dancing Firefly",
          starRank: 4,
          category: AccessoryCategory.necklace,
          tag1: Tag.mori,
          tag2: Tag.pastoral,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeUpgradeShop,
              cost: 200,
            },
          ],
        },
        {
          id: "fashion__wrist__shimmering_light",
          name: "Shimmering Light",
          starRank: 4,
          category: AccessoryCategory.wrist,
          tag1: Tag.mori,
          tag2: Tag.pastoral,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeUpgradeShop,
              cost: 200,
            },
          ],
        },
        {
          id: "fashion__handheld__verdant_vine",
          name: "Verdant Vine",
          starRank: 4,
          category: AccessoryCategory.handheld,
          tag1: Tag.mori,
          tag2: Tag.pastoral,
          styleRanks: {
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeUpgradeShop,
              cost: 200,
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__honey_angel",
    name: "Honey Angel",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.lightchaseNightOfVvanna,
    mainStyle: Style.sweet,
    items: {
      create: [
        {
          id: "fashion__dress__honey_angel",
          name: "Honey Angel",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.uniform,
          styleRanks: {
            sweet: StyleRank.s,
            sexy: StyleRank.a,
            lively: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__socks__heart_pounding",
          name: "Heart-Pounding",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.uniform,
          styleRanks: {
            sweet: StyleRank.s,
            sexy: StyleRank.a,
            lively: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__shoes__crimson_heart",
          name: "Crimson Heart",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.uniform,
          styleRanks: {
            sweet: StyleRank.s,
            sexy: StyleRank.a,
            lively: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__hat__focused_beat",
          name: "Focused Beat",
          starRank: 4,
          category: AccessoryCategory.hat,
          tag1: Tag.uniform,
          styleRanks: {
            sweet: StyleRank.s,
            sexy: StyleRank.a,
            lively: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__gloves__love_protection",
          name: "Love Protection",
          starRank: 4,
          category: AccessoryCategory.gloves,
          tag1: Tag.uniform,
          styleRanks: {
            sweet: StyleRank.s,
            sexy: StyleRank.a,
            lively: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__handheld__telepathy",
          name: "Telepathy",
          starRank: 4,
          category: AccessoryCategory.handheld,
          tag1: Tag.uniform,
          styleRanks: {
            sweet: StyleRank.s,
            sexy: StyleRank.a,
            lively: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
      ],
    },
  },
  {
    id: "fashion__set__sleepy_bunny",
    name: "Sleepy Bunny",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.sweet,
    extendMethod: {
      extendType: "craftDye",
      craftDye: [
        {
          rewards: [
            { materialType: "color_chart", quantity: 19 },
            { itemId: "fashion__wrist__candy_kingdom" },
          ],
          materialCost: [
            { itemId: "fashion__socks__flower_shade", quantity: 2 },
            { itemId: "fashion__earrings__delight_time", quantity: 1 },
          ],
        },
      ],
    },
    items: {
      create: [
        {
          id: "fashion__dress__sleepy_bunny",
          starRank: 4,
          name: "Sleepy Bunny",
          category: FashionCategory.dress,
          tag1: Tag.homey,
          tag2: Tag.fairytale,
          styleRatings: {
            sweet: StyleRank.s,
            lively: StyleRank.a,
            pure: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__shoes__lunar_goddess",
                  quantity: 1,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__handheld__dreamy_bunny",
          starRank: 4,
          name: "Dreamy Bunny",
          category: AccessoryCategory.handheld,
          tag1: Tag.homey,
          tag2: Tag.fairytale,
          styleRatings: {
            sweet: StyleRank.s,
            lively: StyleRank.a,
            pure: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__socks__super_girl",
                  quantity: 2,
                },
                {
                  itemId: "fashion__face__tender_gaze",
                  quantity: 1,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__hat__fluffy_bunny",
          starRank: 4,
          name: "Fluffy Bunny",
          category: AccessoryCategory.hat,
          tag1: Tag.homey,
          tag2: Tag.fairytale,
          styleRatings: {
            sweet: StyleRank.s,
            lively: StyleRank.a,
            pure: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__socks__flower_dew",
                  quantity: 2,
                },
              ],
            },
          ],
        },

        {
          id: "fashion__wrist__candy_kingdom",
          starRank: 4,
          name: "Fluffy Bunny",
          category: AccessoryCategory.wrist,
          tag1: Tag.homey,
          tag2: Tag.fairytale,
          styleRatings: {
            sweet: StyleRank.s,
            lively: StyleRank.a,
            pure: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__socks__flower_shade",
                  quantity: 2,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__socks__sleepy_bunny",
          starRank: 4,
          name: "Sleepy Bunny",
          category: FashionCategory.socks,
          tag1: Tag.homey,
          tag2: Tag.fairytale,
          styleRatings: {
            sweet: StyleRank.s,
            lively: StyleRank.a,
            pure: StyleRank.b,
            gorgeous: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__socks__flower_dew",
                  quantity: 2,
                },
              ],
            },
          ],
        },

        {
          id: "fashion__shoes__pink_lady",
          starRank: 4,
          name: "Pink Lady",
          category: FashionCategory.shoes,
          tag1: Tag.homey,
          tag2: Tag.fairytale,
          styleRatings: {
            sweet: StyleRank.s,
            lively: StyleRank.a,
            pure: StyleRank.b,
            gorgeous: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__socks__flower_shade",
                  quantity: 2,
                },
                {
                  itemId: "fashion__hair__starry_soda",
                  quantity: 2,
                },
              ],
            },
          ],
        },

        {
          id: "fashion__hairstyle__fluffy_dream",
          starRank: 4,
          name: "Fluffy Dream",
          category: FashionCategory.hairstyle,
          tag1: Tag.homey,
          tag2: Tag.fairytale,
          styleRatings: {
            sweet: StyleRank.s,
            simple: StyleRank.a,
            pure: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__socks__super_girl",
                  quantity: 2,
                },
                {
                  itemId: "fashion__earrings__love_melody",
                  quantity: 2,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__cockle_collection",
    name: "Cockle Collection",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.lightchaseNightOfVvanna,
    mainStyle: Style.pure,
    items: {
      create: [
        {
          id: "fashion__dress__cockle_collection",
          name: "Cockle Collection",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.preppy,
          tag2: Tag.uniform,
          styleRanks: {
            pure: StyleRank.s,
            gorgeous: StyleRank.a,
            sweet: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__socks__sunny_ceremony",
          name: "Sunny Ceremony",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.preppy,
          tag2: Tag.uniform,
          styleRanks: {
            pure: StyleRank.s,
            gorgeous: StyleRank.a,
            sweet: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__shoes__wind_seeker",
          name: "Wind Seeker",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.preppy,
          tag2: Tag.uniform,
          styleRanks: {
            pure: StyleRank.s,
            gorgeous: StyleRank.a,
            sweet: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__earrings__crystal_of_sea",
          name: "Crystal of Sea",
          starRank: 4,
          category: AccessoryCategory.earrings,
          tag1: Tag.preppy,
          tag2: Tag.uniform,
          styleRanks: {
            pure: StyleRank.s,
            gorgeous: StyleRank.a,
            sweet: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__handheld__time_rift",
          name: "Time Rift",
          starRank: 4,
          category: AccessoryCategory.handheld,
          tag1: Tag.preppy,
          tag2: Tag.uniform,
          styleRanks: {
            pure: StyleRank.s,
            gorgeous: StyleRank.a,
            sweet: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
      ],
    },
  },

  {
    id: "fashion__set__void_butterfly",
    name: "Void Butterfly",
    starRank: 6,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.exchangeSpecialRebates,
    mainStyle: Style.sexy,
    items: {
      create: [
        {
          id: "fashion__hairstyle__blooms_in_vale",
          name: "Blooms In Vale",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.s,
            elegant: StyleRank.s,
            warm: StyleRank.a,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeSpecialRebates, cost: 320 },
          ],
        },
        {
          id: "fashion__dress__void_butterfly",
          name: "Void Butterfly",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeSpecialRebates, cost: 800 },
          ],
        },
        {
          id: "fashion__socks__river_butterfly",
          name: "River Butterfly",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeSpecialRebates, cost: 90 },
          ],
        },
        {
          id: "fashion__shoes__step_into_vale",
          name: "Step Into Vale",
          starRank: 5,
          category: FashionCategory.shoes,
          mainStyle: Style.sexy,
          tag1: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeSpecialRebates, cost: 180 },
          ],
        },
        {
          id: "fashion__hair__butterfly_wings",
          name: "Butterfly Wings",
          starRank: 5,
          category: AccessoryCategory.hair,
          mainStyle: Style.sexy,
          tag1: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeSpecialRebates, cost: 90 },
          ],
        },
        {
          id: "fashion__face__creek_of_butterfly",
          name: "Creek of Butterfly",
          starRank: 5,
          category: AccessoryCategory.face,
          mainStyle: Style.sexy,
          tag1: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeSpecialRebates, cost: 60 },
          ],
        },
        {
          id: "fashion__earrings__moonlit_butterfly",
          name: "Moonlit Butterfly",
          starRank: 5,
          category: AccessoryCategory.earrings,
          mainStyle: Style.sexy,
          tag1: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeSpecialRebates, cost: 70 },
          ],
        },
        {
          id: "fashion__wrist__shadow_of_wings",
          name: "Shadow of Wings",
          starRank: 5,
          category: AccessoryCategory.wrist,
          mainStyle: Style.sexy,
          tag1: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeSpecialRebates, cost: 80 },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__tears_of_wings",
    name: "Tears of Wings",
    starRank: 6,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.lightchaseEssence,
    mainStyle: Style.cool,
    items: {
      create: [
        {
          id: "fashion__hairstyle__teary_poem",
          name: "Teary Poem",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.gothic,
          tag2: Tag.fairytale,
          styleRanks: {
            cool: StyleRank.sss,
            gorgeous: StyleRank.s,
            sexy: StyleRank.s,
            elegant: StyleRank.s,
            warm: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__dress__tears_of_wings",
          name: "Tears of Wings",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.gothic,
          tag2: Tag.fairytale,
          styleRanks: {
            cool: StyleRank.sss,
            gorgeous: StyleRank.s,
            sexy: StyleRank.s,
            elegant: StyleRank.s,
            warm: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__socks__vine_bond",
          name: "Vine Bond",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.gothic,
          tag2: Tag.fairytale,
          styleRanks: {
            cool: StyleRank.sss,
            gorgeous: StyleRank.s,
            sexy: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__shoes__last_dance",
          name: "Last Dance",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.gothic,
          tag2: Tag.fairytale,
          styleRanks: {
            cool: StyleRank.sss,
            gorgeous: StyleRank.s,
            sexy: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__necklace__silver_and_ink",
          name: "Silver & Ink",
          starRank: 5,
          category: AccessoryCategory.necklace,
          tag1: Tag.gothic,
          tag2: Tag.fairytale,
          styleRanks: {
            cool: StyleRank.sss,
            gorgeous: StyleRank.s,
            sexy: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__gloves__vinery_dream",
          name: "Vinery Dream",
          starRank: 5,
          category: AccessoryCategory.gloves,
          tag1: Tag.gothic,
          tag2: Tag.fairytale,
          styleRanks: {
            cool: StyleRank.sss,
            gorgeous: StyleRank.s,
            sexy: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__wings__resonance_of_wings",
          name: "Resonance of Wings",
          starRank: 5,
          category: AccessoryCategory.wings,
          tag1: Tag.gothic,
          tag2: Tag.fairytale,
          styleRanks: {
            cool: StyleRank.sss,
            gorgeous: StyleRank.s,
            sexy: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__hat__palette_of_dream",
          name: "Palette of Dream",
          starRank: 5,
          category: AccessoryCategory.hat,
          tag1: Tag.gothic,
          tag2: Tag.fairytale,
          styleRanks: {
            cool: StyleRank.sss,
            gorgeous: StyleRank.s,
            sexy: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__face__butterflys_kiss",
          name: "Butterfly's Kiss",
          starRank: 5,
          category: AccessoryCategory.face,
          tag1: Tag.gothic,
          tag2: Tag.fairytale,
          styleRanks: {
            cool: StyleRank.sss,
            gorgeous: StyleRank.s,
            sexy: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__handheld__candlelit_dance",
          name: "Candlelit Dance",
          starRank: 5,
          category: AccessoryCategory.handheld,
          tag1: Tag.gothic,
          tag2: Tag.fairytale,
          styleRanks: {
            cool: StyleRank.sss,
            gorgeous: StyleRank.s,
            sexy: StyleRank.s,
            elegant: StyleRank.s,
            warm: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__back__misty_dreamland",
          name: "Misty Dreamland",
          starRank: 5,
          category: AccessoryCategory.back,
          tag1: Tag.gothic,
          tag2: Tag.fairytale,
          styleRanks: {
            cool: StyleRank.sss,
            gorgeous: StyleRank.s,
            sexy: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
      ],
    },
  },
  {
    id: "fashion__set__rosy_crown",
    name: "Rosy Crown",
    starRank: 6,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.lightchaseBeloved,
    mainStyle: Style.sexy,
    items: {
      create: [
        {
          id: "fashion__hairstyle__magnificent_dream",
          name: "Magnificent Dream",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.s,
            elegant: StyleRank.s,
            warm: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__dress__rosy_crown",
          name: "Rosy Crown",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__socks__waning_mist",
          name: "Waning Mist",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__shoes__the_superior",
          name: "The Superior",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__hat__scintillating_crown",
          name: "Scintillating Crown",
          starRank: 5,
          category: AccessoryCategory.hat,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__face__heavenly_pearl",
          name: "Heavenly Pearl",
          starRank: 5,
          category: AccessoryCategory.face,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__earrings__pearl_gibberish",
          name: "Pearl Gibberish",
          starRank: 5,
          category: AccessoryCategory.earrings,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__necklace__colorful_enamel",
          name: "Colorful Enamel",
          starRank: 5,
          category: AccessoryCategory.necklace,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__wrist__purple_dream",
          name: "Purple Dream",
          starRank: 5,
          category: AccessoryCategory.wrist,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__gloves__rosy_hall",
          name: "Rosy Hall",
          starRank: 5,
          category: AccessoryCategory.gloves,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__ring__beautiful_vision",
          name: "Beautiful Vision",
          starRank: 5,
          category: AccessoryCategory.ring,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__handheld__star_dream",
          name: "Star Dream",
          starRank: 5,
          category: AccessoryCategory.handheld,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.s,
            elegant: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
      ],
    },
  },
  {
    id: "fashion__set__starry_fantasy",
    name: "Starry Fantasy",
    starRank: 5,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.rebateGift,
    mainStyle: Style.gorgeous,
    items: {
      create: [
        {
          id: "fashion__hairstyle__azure_skyline",
          name: "Azure Skyline",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.fairytale,
          styleRanks: {
            sexy: StyleRank.ss,
            sweet: StyleRank.s,
            lively: StyleRank.a,
            pure: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.rebateGift }],
        },
        {
          id: "fashion__dress__starry_fantasy",
          name: "Starry Fantasy",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.fairytale,
          styleRanks: {
            sexy: StyleRank.ss,
            sweet: StyleRank.s,
            lively: StyleRank.a,
            pure: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.rebateGift }],
        },
        {
          id: "fashion__shoes__walk_on_clouds",
          name: "Walk On Clouds",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.fairytale,
          styleRanks: {
            sexy: StyleRank.ss,
            sweet: StyleRank.s,
            lively: StyleRank.a,
            pure: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.rebateGift }],
        },
        {
          id: "fashion__hat__flying_silk",
          name: "Flying Silk",
          starRank: 5,
          category: AccessoryCategory.hat,
          tag1: Tag.fairytale,
          styleRanks: {
            sexy: StyleRank.ss,
            sweet: StyleRank.s,
            lively: StyleRank.a,
            pure: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.rebateGift }],
        },
        {
          id: "fashion__necklace__starry_skyline",
          name: "Starry Skyline",
          starRank: 5,
          category: AccessoryCategory.necklace,
          tag1: Tag.fairytale,
          styleRanks: {
            sexy: StyleRank.ss,
            sweet: StyleRank.s,
            lively: StyleRank.a,
            pure: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.rebateGift }],
        },
        {
          id: "fashion__handheld__fantasy_planet",
          name: "Fantasy Planet",
          starRank: 5,
          category: AccessoryCategory.handheld,
          tag1: Tag.fairytale,
          styleRanks: {
            sexy: StyleRank.ss,
            sweet: StyleRank.s,
            lively: StyleRank.a,
            pure: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.rebateGift }],
        },
      ],
    },
  },
  {
    id: "fashion__set__starry_serenade",
    name: "Starry Serenade",
    starRank: 5,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.exchangeGlitteringDecom,
    mainStyle: Style.gorgeous,
    items: {
      create: [
        {
          id: "fashion__hairstyle__grey_movement",
          name: "Grey Movement",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.fairytale,
          tag2: Tag.lolita,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sweet: StyleRank.s,
            sexy: StyleRank.a,
            elegant: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeDecomStore,
              cost: 1320,
            },
          ],
        },
        {
          id: "fashion__dress__starry_serenade",
          name: "Starry Serenade",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.fairytale,
          tag2: Tag.lolita,
          styleRanks: {
            gorgeous: StyleRank.ss,
            cool: StyleRank.s,
            sexy: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeDecomStore,
              cost: 3950,
            },
          ],
        },
        {
          id: "fashion__socks__sand_and_shell",
          name: "Sand and Shell",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.fairytale,
          tag2: Tag.lolita,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sweet: StyleRank.s,
            sexy: StyleRank.a,
            elegant: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeDecomStore,
              cost: 330,
            },
          ],
        },
        {
          id: "fashion__shoes__dream_nina",
          name: "Dream Nina",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.fairytale,
          tag2: Tag.lolita,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sweet: StyleRank.s,
            sexy: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeDecomStore,
              cost: 660,
            },
          ],
        },
        {
          id: "fashion__necklace__oceanic_rose",
          name: "Oceanic Rose",
          starRank: 5,
          category: AccessoryCategory.necklace,
          tag1: Tag.fairytale,
          tag2: Tag.lolita,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sweet: StyleRank.s,
            sexy: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeDecomStore,
              cost: 330,
            },
          ],
        },
        {
          id: "fashion__handheld__daytime_star",
          name: "Daytime Star",
          starRank: 5,
          category: AccessoryCategory.handheld,
          tag1: Tag.fairytale,
          tag2: Tag.lolita,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sweet: StyleRank.s,
            sexy: StyleRank.a,
            elegant: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeDecomStore,
              cost: 330,
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__azure_nebula",
    name: "Azure Nebula",
    starRank: 5,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.lightchaseNirvana,
    mainStyle: Style.sweet,
    items: {
      create: [
        {
          id: "fashion__hairstyle__lucid_moments",
          name: "Lucid Moments",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.street,
          styleRanks: {
            sweet: StyleRank.ss,
            sexy: StyleRank.s,
            simple: StyleRank.a,
            lively: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
        {
          id: "fashion__dress__azure_nebula",
          name: "Azure Nebula",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.street,
          styleRanks: {
            sweet: StyleRank.ss,
            sexy: StyleRank.s,
            simple: StyleRank.a,
            lively: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
        {
          id: "fashion__socks__wave_of_wings",
          name: "Wave of Wings",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.street,
          styleRanks: {
            sweet: StyleRank.ss,
            sexy: StyleRank.s,
            simple: StyleRank.a,
            lively: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
        {
          id: "fashion__shoes__holy_pity",
          name: "Holy Pity",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.street,
          styleRanks: {
            sweet: StyleRank.ss,
            sexy: StyleRank.s,
            simple: StyleRank.a,
            lively: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
        {
          id: "fashion__hair__broken_shells",
          name: "Broken Shells",
          starRank: 5,
          category: AccessoryCategory.hair,
          tag1: Tag.street,
          styleRanks: {
            sweet: StyleRank.ss,
            sexy: StyleRank.s,
            simple: StyleRank.a,
            lively: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
        {
          id: "fashion__earrings__plain_moonlight",
          name: "Plain Moonlight",
          starRank: 5,
          category: AccessoryCategory.earrings,
          tag1: Tag.street,
          styleRanks: {
            sweet: StyleRank.ss,
            sexy: StyleRank.s,
            simple: StyleRank.a,
            lively: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
        {
          id: "fashion__necklace__secluded_light",
          name: "Secluded Light",
          starRank: 5,
          category: AccessoryCategory.necklace,
          tag1: Tag.street,
          styleRanks: {
            sweet: StyleRank.ss,
            sexy: StyleRank.s,
            simple: StyleRank.a,
            lively: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
        {
          id: "fashion__wrist__jade_bloom",
          name: "Jade Bloom",
          starRank: 5,
          category: AccessoryCategory.wrist,
          tag1: Tag.street,
          styleRanks: {
            sweet: StyleRank.ss,
            sexy: StyleRank.s,
            simple: StyleRank.a,
            lively: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
      ],
    },
  },
  {
    id: "fashion__set__amons_daughter",
    name: "Amon's Daughter",
    starRank: 5,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.lightchaseEssence,
    mainStyle: Style.gorgeous,
    items: {
      create: [
        {
          id: "fashion__hairstyle__light_of_menes",
          name: "Light Of Menes",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.egyptian,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sexy: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__dress__amons_daughter",
          name: "Amon's Daughter",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.egyptian,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sexy: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__socks__guardian_of_sky",
          name: "Guardian of Sky",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.egyptian,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sexy: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__shoes__gilded_footsteps",
          name: "Gilded Footsteps",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.egyptian,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sexy: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__face__gilded_wings",
          name: "Gilded Wings",
          starRank: 5,
          category: AccessoryCategory.face,
          tag1: Tag.egyptian,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sexy: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__wrist__forgotten_sunset",
          name: "Forgotten Sunset",
          starRank: 5,
          category: AccessoryCategory.wrist,
          tag1: Tag.egyptian,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sexy: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__hair__sunshine_on_river",
          name: "Sunshine on River",
          starRank: 5,
          category: AccessoryCategory.hair,
          tag1: Tag.egyptian,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sexy: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__earrings__golden_leaves",
          name: "Golden Leaves",
          starRank: 5,
          category: AccessoryCategory.earrings,
          tag1: Tag.egyptian,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sexy: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
      ],
    },
  },
  {
    id: "fashion__set__myrtles_dream",
    name: "Myrtle's Dream",
    starRank: 5,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.lightchaseNirvana,
    mainStyle: Style.gorgeous,
    items: {
      create: [
        {
          id: "fashion__hairstyle__golden_goblet",
          name: "Golden Goblet",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.dancer,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sexy: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
        {
          id: "fashion__dress__myrtles_dream",
          name: "Myrtle's Dream",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.dancer,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sexy: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
        {
          id: "fashion__socks__golden_fantasy",
          name: "Golden Fantasy",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.dancer,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sexy: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
        {
          id: "fashion__shoes__petal_dance",
          name: "Petal Dance",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.dancer,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sexy: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
        {
          id: "fashion__hat__radiant_sun",
          name: "Radiant Sun",
          starRank: 5,
          category: AccessoryCategory.hat,
          tag1: Tag.dancer,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sexy: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
        {
          id: "fashion__hair__golden_love",
          name: "Golden Love",
          starRank: 5,
          category: AccessoryCategory.hair,
          tag1: Tag.dancer,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sexy: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
        {
          id: "fashion__earrings__silver_glow",
          name: "Silver Glow",
          starRank: 5,
          category: AccessoryCategory.earrings,
          tag1: Tag.dancer,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sexy: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
        {
          id: "fashion__necklace__floral_morning",
          name: "Floral Morning",
          starRank: 5,
          category: AccessoryCategory.necklace,
          tag1: Tag.dancer,
          styleRanks: {
            gorgeous: StyleRank.ss,
            sexy: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
      ],
    },
  },
  {
    id: "fashion__set__sunny_ride",
    name: "Sunny Ride",
    starRank: 5,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.craftMindTravel,
    mainStyle: Style.lively,
    items: {
      create: [
        {
          id: "fashion__hairstyle__gentle_nocturne",
          name: "Gentle Nocturne",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.street_punk,
          tag2: Tag.fairytale,
          styleRanks: {
            lively: StyleRank.ss,
            simple: StyleRank.s,
            sweet: StyleRank.a,
            sexy: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__socks__bright_feeling",
                  quantity: 41,
                },
                {
                  itemId: "fashion__top__dynamic_youth",
                  quantity: 52,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__dress__sunny_ride",
          name: "Sunny Ride",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.street_punk,
          tag2: Tag.fairytale,
          styleRanks: {
            lively: StyleRank.ss,
            simple: StyleRank.s,
            sweet: StyleRank.a,
            sexy: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__eyelashes__shadow_of_tree",
                  quantity: 63,
                },
                {
                  itemId: "fashion__dress__southern_holiday",
                  quantity: 31,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__coat__azure_sail",
          name: "Azure Sail",
          starRank: 5,
          category: FashionCategory.coat,
          tag1: Tag.street_punk,
          tag2: Tag.fairytale,
          styleRanks: {
            lively: StyleRank.ss,
            pure: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              // materialCost: [
              //     {
              //         itemId: "fashion__",
              //         quantity: ,
              //     },
              //     {
              //         itemId: "fashion__",
              //         quantity: ,
              //     },
              //     {
              //         itemId: "fashion__",
              //         quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__socks__dark_night_dace",
          name: "Dark Night Dace",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.street_punk,
          tag2: Tag.fairytale,
          styleRanks: {
            lively: StyleRank.ss,
            simple: StyleRank.s,
            sweet: StyleRank.a,
            sexy: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__socks__night_cherry",
                  quantity: 25,
                },
                {
                  itemId: "fashion__hairstyle__daytime_stars",
                  quantity: 26,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__shoes__wandering_song",
          name: "Wandering Song",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.street_punk,
          tag2: Tag.fairytale,
          styleRanks: {
            lively: StyleRank.ss,
            simple: StyleRank.s,
            sweet: StyleRank.a,
            sexy: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__necklace__beautiful_song",
                  quantity: 25,
                },
                {
                  itemId: "fashion__dress__swans_peck",
                  quantity: 23,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__earrings__wandering_song",
          name: "Wandering Song",
          starRank: 5,
          category: AccessoryCategory.earrings,
          tag1: Tag.street_punk,
          tag2: Tag.fairytale,
          styleRanks: {
            lively: StyleRank.ss,
            simple: StyleRank.s,
            sweet: StyleRank.a,
            sexy: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__socks__night_shadow",
                  quantity: 19,
                },
                {
                  itemId: "fashion__top__curtain_of_night",
                  quantity: 23,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__necklace__startalk_fairytale",
          name: "Startalk Fairytale",
          starRank: 5,
          category: AccessoryCategory.necklace,
          tag1: Tag.street_punk,
          tag2: Tag.fairytale,
          styleRanks: {
            lively: StyleRank.ss,
            simple: StyleRank.s,
            sweet: StyleRank.a,
            sexy: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__bottom__spring_overture",
                  quantity: 19,
                },
                {
                  itemId: "fashion__top__cherry_cream",
                  quantity: 20,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__feather_and_star",
    name: "Feather and Star",
    starRank: 5,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.lightchaseBeloved,
    mainStyle: Style.lively,
    items: {
      create: [
        {
          id: "fashion__hairstyle__silver_star",
          name: "Silver Star",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.girl_group,
          tag2: Tag.lolita,
          styleRanks: {
            lively: StyleRank.ss,
            gorgeous: StyleRank.s,
            cool: StyleRank.a,
            sexy: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__dress__feather_and_star",
          name: "Feather and Star",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.girl_group,
          tag2: Tag.lolita,
          styleRanks: {
            lively: StyleRank.ss,
            gorgeous: StyleRank.s,
            cool: StyleRank.a,
            sexy: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__socks__night_falling",
          name: "Night Falling",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.girl_group,
          tag2: Tag.lolita,
          styleRanks: {
            lively: StyleRank.ss,
            cool: StyleRank.s,
            gorgeous: StyleRank.a,
            sexy: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__shoes__crow_feather",
          name: "Crow Feather",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.girl_group,
          tag2: Tag.lolita,
          styleRanks: {
            lively: StyleRank.ss,
            cool: StyleRank.s,
            gorgeous: StyleRank.a,
            sexy: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__hat__dark_feather",
          name: "Dark Feather",
          starRank: 5,
          category: AccessoryCategory.hat,
          tag1: Tag.girl_group,
          tag2: Tag.lolita,
          styleRanks: {
            lively: StyleRank.ss,
            gorgeous: StyleRank.s,
            cool: StyleRank.a,
            sexy: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__wrist__end_of_stars",
          name: "End of Stars",
          starRank: 5,
          category: AccessoryCategory.wrist,
          tag1: Tag.girl_group,
          tag2: Tag.lolita,
          styleRanks: {
            lively: StyleRank.ss,
            cool: StyleRank.s,
            simple: StyleRank.a,
            sexy: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__gloves__starry_feather",
          name: "Starry Feather",
          starRank: 5,
          category: AccessoryCategory.gloves,
          tag1: Tag.girl_group,
          tag2: Tag.lolita,
          styleRanks: {
            lively: StyleRank.ss,
            gorgeous: StyleRank.s,
            cool: StyleRank.a,
            sexy: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__back__night_star",
          name: "Night Star",
          starRank: 5,
          category: AccessoryCategory.back,
          tag1: Tag.girl_group,
          tag2: Tag.lolita,
          styleRanks: {
            lively: StyleRank.ss,
            cool: StyleRank.s,
            gorgeous: StyleRank.a,
            sexy: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
      ],
    },
  },
  {
    id: "fashion__set__violet_love_poem",
    name: "Violet Love Poem",
    starRank: 5,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.lightchaseBeloved,
    mainStyle: Style.sweet,
    items: {
      create: [
        {
          id: "fashion__hairstyle__eternal_story",
          name: "Elegant Story",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.lolita,
          tag2: Tag.classic,
          styleRanks: {
            sweet: StyleRank.ss,
            gorgeous: StyleRank.s,
            elegant: StyleRank.a,
            pure: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__dress__violet_love_poem",
          name: "Violet Love Poem",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.lolita,
          tag2: Tag.classic,
          styleRanks: {
            sweet: StyleRank.ss,
            gorgeous: StyleRank.s,
            elegant: StyleRank.a,
            pure: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__socks__white_verses",
          name: "White Verses",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.lolita,
          tag2: Tag.classic,
          styleRanks: {
            sweet: StyleRank.ss,
            gorgeous: StyleRank.s,
            elegant: StyleRank.a,
            pure: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__shoes__long_poetry",
          name: "Long Poetry",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.lolita,
          tag2: Tag.classic,
          styleRanks: {
            sweet: StyleRank.ss,
            gorgeous: StyleRank.s,
            elegant: StyleRank.a,
            pure: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__earrings__rabbit_message",
          name: "Rabbit Message",
          starRank: 5,
          category: AccessoryCategory.earrings,
          tag1: Tag.lolita,
          tag2: Tag.classic,
          styleRanks: {
            sweet: StyleRank.ss,
            pure: StyleRank.s,
            elegant: StyleRank.a,
            gorgeous: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__hat__violet_words",
          name: "Violet Words",
          starRank: 5,
          category: AccessoryCategory.hat,
          tag1: Tag.lolita,
          tag2: Tag.classic,
          styleRanks: {
            sweet: StyleRank.ss,
            gorgeous: StyleRank.s,
            elegant: StyleRank.a,
            pure: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__necklace__violet_heart",
          name: "Violet Heart",
          starRank: 5,
          category: AccessoryCategory.necklace,
          tag1: Tag.lolita,
          tag2: Tag.classic,
          styleRanks: {
            sweet: StyleRank.ss,
            gorgeous: StyleRank.s,
            elegant: StyleRank.a,
            pure: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__wrist__rabbits_dream",
          name: "Rabbit's Dream",
          starRank: 5,
          category: AccessoryCategory.wrist,
          tag1: Tag.lolita,
          tag2: Tag.classic,
          styleRanks: {
            sweet: StyleRank.ss,
            pure: StyleRank.s,
            elegant: StyleRank.a,
            gorgeous: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
      ],
    },
  },
  {
    id: "fashion__set__starsnow_love",
    name: "Starsnow Love",
    starRank: 5,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.reward,
    mainStyle: Style.gorgeous,
    items: {
      create: [
        {
          id: "fashion__hairstyle__star_trace",
          name: "Star Trace",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.giftExhibition }],
        },
        {
          id: "fashion__dress__starsnow_love",
          name: "Starsnow Love",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.giftExhibition }],
        },
        {
          id: "fashion__socks__starflow",
          name: "Starflow",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.giftExhibition }],
        },
        {
          id: "fashion__shoes__snowtrek_galaxy",
          name: "Snowtrek Galaxy",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.ss,
            pure: StyleRank.s,
            elegant: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.giftExhibition }],
        },
        {
          id: "fashion__hat__crown_of_snow",
          name: "Crown of Snow",
          starRank: 5,
          category: AccessoryCategory.hat,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.giftExhibition }],
        },
        {
          id: "fashion__earrings__drifting_snow",
          name: "Drifting Snow",
          starRank: 5,
          category: AccessoryCategory.earrings,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.giftExhibition }],
        },
      ],
    },
  },
  {
    id: "fashion__set__perfume_island",
    name: "Perfume Island",
    starRank: 4,
    obtainType: ObtainType.lightchaseDewyTears,
    mainStyle: Style.sexy,
    items: {
      create: [
        {
          id: "fashion__top__perfume_island",
          name: "Perfume Island",
          starRank: 4,
          category: FashionCategory.top,
          tag1: Tag.holiday,
          styleRanks: {
            sexy: StyleRank.s,
            elegant: StyleRank.a,
            sweet: StyleRank.b,
            simple: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
        {
          id: "fashion__bottom__white_curtain",
          name: "White Curtain",
          starRank: 4,
          category: FashionCategory.bottom,
          tag1: Tag.holiday,
          styleRanks: {
            sexy: StyleRank.s,
            elegant: StyleRank.a,
            sweet: StyleRank.b,
            simple: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
        {
          id: "fashion__socks__forest_romance",
          name: "Forest Romance",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.holiday,
          styleRanks: {
            sexy: StyleRank.s,
            elegant: StyleRank.a,
            sweet: StyleRank.b,
            simple: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
        {
          id: "fashion__shoes__wandering_moonlight",
          name: "Wandering Moonlight",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.holiday,
          styleRanks: {
            sexy: StyleRank.s,
            elegant: StyleRank.a,
            sweet: StyleRank.b,
            simple: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
        {
          id: "fashion__handheld__myriad_of_dreams",
          name: "Myriad of Dreams",
          starRank: 4,
          category: AccessoryCategory.handheld,
          tag1: Tag.holiday,
          styleRanks: {
            sexy: StyleRank.s,
            elegant: StyleRank.a,
            sweet: StyleRank.b,
            simple: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
      ],
    },
  },
  {
    id: "fashion__set__puff_pastry",
    name: "Puff Pastry",
    starRank: 4,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.lively,
    items: {
      create: [
        {
          id: "fashion__top__puff_pastry",
          name: "Puff Pastry",
          starRank: 4,
          category: FashionCategory.top,
          tag1: Tag.sporty,
          styleRanks: {
            lively: StyleRank.s,
            simple: StyleRank.b,
            pure: StyleRank.b,
            cool: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__fleeting_gold",
                  quantity: 37,
                },
                {
                  itemId: "fashion__necklace__islands_heart",
                  quantity: 63,
                },
                {
                  itemId: "fashion__face__diamond_alliance",
                  quantity: 63,
                },
                {
                  itemId: "fashion__necklace__empathetic_type",
                  quantity: 31,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__bottom__morning_puff",
          name: "Morning Puff",
          starRank: 4,
          category: FashionCategory.bottom,
          tag1: Tag.sporty,
          styleRanks: {
            lively: StyleRank.s,
            simple: StyleRank.a,
            pure: StyleRank.b,
            cool: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__bottom__gilded_forest",
                  quantity: 35,
                },
                {
                  itemId: "fashion__socks__wintry_lattice",
                  quantity: 63,
                },
                {
                  itemId: "fashion__face__beyond_the_dune",
                  quantity: 63,
                },
                {
                  itemId: "fashion__tattoo__silent_poetry",
                  quantity: 41,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__socks__cheese_nebula",
          name: "Cheese Nebula",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.sporty,
          styleRanks: {
            lively: StyleRank.s,
            simple: StyleRank.a,
            pure: StyleRank.b,
            cool: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__bottom__blueberry_bubble",
                  quantity: 23,
                },
                {
                  itemId: "fashion__hat__coupled_wings",
                  quantity: 50,
                },
                {
                  itemId: "fashion__socks__mottled_snow",
                  quantity: 50,
                },
                {
                  itemId: "fashion__face__sakura_curtain",
                  quantity: 22,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__shoes__fruit_tart",
          name: "Fruit Tart",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.sporty,
          styleRanks: {
            lively: StyleRank.s,
            simple: StyleRank.a,
            pure: StyleRank.b,
            cool: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__southern_holiday",
                  quantity: 13,
                },
                {
                  itemId: "fashion__earrings__black_plaid_fringe",
                  quantity: 48,
                },
                {
                  itemId: "fashion__hat__coupled_wings",
                  quantity: 48,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__gloves__soda_notes",
          name: "Soda Notes",
          starRank: 4,
          category: AccessoryCategory.gloves,
          tag1: Tag.sporty,
          styleRanks: {
            lively: StyleRank.s,
            simple: StyleRank.a,
            pure: StyleRank.b,
            cool: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__honeypeach",
                  quantity: 12,
                },
                {
                  itemId: "fashion__face__diamond_alliance",
                  quantity: 31,
                },
                {
                  itemId: "fashion__tattoo__fiery_badge",
                  quantity: 41,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__spring_drizzle",
    name: "Spring Drizzle",
    starRank: 4,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.lightchaseNightOfVvanna,
    mainStyle: Style.gorgeous,
    items: {
      create: [
        {
          id: "fashion__dress__spring_drizzle",
          name: "Spring Drizzle",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.s,
            sweet: StyleRank.a,
            pure: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },

        {
          id: "fashion__socks__lingering_spring",
          name: "Lingering Spring",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.s,
            sweet: StyleRank.a,
            pure: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },

        {
          id: "fashion__shoes__wet_spring",
          name: "Wet Spring",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.s,
            sweet: StyleRank.a,
            pure: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },

        {
          id: "fashion__wrist__muguet_branch",
          name: "Muguet Branch",
          starRank: 4,
          category: AccessoryCategory.wrist,
          tag1: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.s,
            sweet: StyleRank.a,
            pure: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },

        {
          id: "fashion__necklace__lotus_dream",
          name: "Lotus Dream",
          starRank: 4,
          category: AccessoryCategory.necklace,
          tag1: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.s,
            sweet: StyleRank.a,
            pure: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
      ],
    },
  },
  {
    id: "fashion__set__hazelnut_latte",
    name: "Hazelnut Latte",
    starRank: 4,
    obtainType: ObtainType.event,
    mainStyle: Style.lively,
    items: {
      create: [
        {
          id: "fashion__dress__hazelnut_latte",
          name: "Hazelnut Latte",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.lolita,
          tag2: Tag.pastoral,
          styleRanks: {
            lively: StyleRank.s,
            gorgeous: StyleRank.a,
            sweet: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
        },
        {
          id: "fashion__socks__cream_affogato",
          name: "Cream Affogato",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.lolita,
          tag2: Tag.pastoral,
          styleRanks: {
            lively: StyleRank.s,
            gorgeous: StyleRank.a,
            sweet: StyleRank.b,
            pure: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
        },
        {
          id: "fashion__shoes__sweetheart",
          name: "Sweetheart",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.lolita,
          tag2: Tag.pastoral,
          styleRanks: {
            lively: StyleRank.s,
            gorgeous: StyleRank.a,
            sweet: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
        },
        {
          id: "fashion__hat__cat_ear_cake",
          name: "Cat Ear Cake",
          starRank: 4,
          category: AccessoryCategory.hair,
          tag1: Tag.lolita,
          tag2: Tag.pastoral,
          styleRanks: {
            lively: StyleRank.s,
            gorgeous: StyleRank.a,
            sweet: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
        },
        {
          id: "fashion__gloves__white_mousse",
          name: "White Mousse",
          starRank: 4,
          category: AccessoryCategory.gloves,
          tag1: Tag.lolita,
          tag2: Tag.pastoral,
          styleRanks: {
            lively: StyleRank.s,
            gorgeous: StyleRank.a,
            sweet: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
        },
      ],
    },
  },
  {
    id: "fashion__set__berry_rabbit",
    name: "Berry Rabbit",
    starRank: 4,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.rewardLevel,
    mainStyle: Style.lively,
    items: {
      create: [
        {
          id: "fashion__hairstyle__layered_berries",
          name: "Layered Berries",
          starRank: 4,
          category: FashionCategory.hairstyle,
          tag1: Tag.pastoral,
          tag2: Tag.lolita,
          styleRanks: {
            lively: StyleRank.s,
            pure: StyleRank.a,
            sweet: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.rewardLevel }],
        },
        {
          id: "fashion__dress__berry_rabbit",
          name: "Berry Rabbit",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.pastoral,
          tag2: Tag.lolita,
          styleRanks: {
            lively: StyleRank.s,
            pure: StyleRank.a,
            sweet: StyleRank.b,
            gorgeous: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.rewardLevel }],
        },
        {
          id: "fashion__socks__bunny_courtesy",
          name: "Bunny Courtesy",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.pastoral,
          tag2: Tag.lolita,
          styleRanks: {
            lively: StyleRank.s,
            pure: StyleRank.a,
            sweet: StyleRank.b,
            gorgeous: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.rewardLevel }],
        },
        {
          id: "fashion__shoes__berry_shrubs",
          name: "Berry Shrubs",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.pastoral,
          tag2: Tag.lolita,
          styleRanks: {
            lively: StyleRank.s,
            pure: StyleRank.a,
            sweet: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.rewardLevel }],
        },
        {
          id: "fashion__hat__berry_souffle",
          name: "Berry Souffle",
          starRank: 4,
          category: AccessoryCategory.hat,
          tag1: Tag.pastoral,
          tag2: Tag.lolita,
          styleRanks: {
            lively: StyleRank.s,
            pure: StyleRank.a,
            sweet: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.rewardLevel }],
        },
        {
          id: "fashion__hair__berry_tea_party",
          name: "Berry Tea Party",
          starRank: 4,
          category: AccessoryCategory.hair,
          tag1: Tag.pastoral,
          tag2: Tag.lolita,
          styleRanks: {
            lively: StyleRank.s,
            pure: StyleRank.a,
            sweet: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.rewardLevel }],
        },
        {
          id: "fashion__necklace__frozen_berries",
          name: "Frozen Berries",
          starRank: 4,
          category: AccessoryCategory.necklace,
          tag1: Tag.pastoral,
          tag2: Tag.lolita,
          styleRanks: {
            lively: StyleRank.s,
            pure: StyleRank.a,
            sweet: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.rewardLevel }],
        },
      ],
    },
  },
  {
    id: "fashion__set__starburst_choir",
    name: "Starburst Choir",
    starRank: 4,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.rewardLevel,
    mainStyle: Style.elegant,
    items: {
      create: [
        {
          id: "fashion__dress__starburst_choir",
          name: "Starburst Choir",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.fairytale,
          tag2: Tag.classic,
          styleRanks: {
            elegant: StyleRank.s,
            gorgeous: StyleRank.a,
            sweet: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.rewardLevel }],
        },
        {
          id: "fashion__shoes__the_asteroids",
          name: "The Asteroids",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.fairytale,
          tag2: Tag.classic,
          styleRanks: {
            elegant: StyleRank.s,
            gorgeous: StyleRank.a,
            sweet: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.rewardLevel }],
        },
        {
          id: "fashion__hat__ode_to_the_moon",
          name: "Ode to the Moon",
          starRank: 4,
          category: AccessoryCategory.hat,
          tag1: Tag.fairytale,
          tag2: Tag.classic,
          styleRanks: {
            elegant: StyleRank.s,
            gorgeous: StyleRank.a,
            sweet: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.rewardLevel }],
        },
        {
          id: "fashion__face__apex_moon",
          name: "Apex Moon",
          starRank: 4,
          category: AccessoryCategory.face,
          tag1: Tag.fairytale,
          tag2: Tag.classic,
          styleRanks: {
            elegant: StyleRank.s,
            gorgeous: StyleRank.a,
            sweet: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.rewardLevel }],
        },
        {
          id: "fashion__anklet__starry_verse",
          name: "Starry Verse",
          starRank: 4,
          category: AccessoryCategory.anklet,
          tag1: Tag.fairytale,
          tag2: Tag.classic,
          styleRanks: {
            elegant: StyleRank.s,
            gorgeous: StyleRank.a,
            sweet: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.rewardLevel }],
        },
      ],
    },
  },
  {
    id: "fashion__set__elusive_butterfly",
    name: "Elusive Butterfly",
    starRank: 4,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.gorgeous,
    items: {
      create: [
        {
          id: "fashion__hairstyle__cocoon",
          name: "Cocoon",
          starRank: 4,
          category: FashionCategory.hairstyle,
          tag1: Tag.elfish,
          tag2: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.s,
            cool: StyleRank.a,
            elegant: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__honeypeach",
                  quantity: 5,
                },
                {
                  itemId: "fashion__tattoo__paper_plane",
                  quantity: 42,
                },
                {
                  itemId: "fashion__necklace__golden_light",
                  quantity: 21,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__dress__elusive_butterfly",
          name: "Elusive Butterfly",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.elfish,
          tag2: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.s,
            cool: StyleRank.a,
            elegant: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__refreshing_mint",
                  quantity: 16,
                },
                {
                  itemId: "fashion__bottom__heat_wave",
                  quantity: 64,
                },
                {
                  itemId: "fashion__dress__unfettered_trip",
                  quantity: 31,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__socks__intoxicating_dark",
          name: "Intoxicating Dark",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.elfish,
          tag2: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.s,
            cool: StyleRank.a,
            elegant: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__refreshing_mint",
                  quantity: 5,
                },
                {
                  itemId: "fashion__wrist__deep_resonance",
                  quantity: 21,
                },
                {
                  itemId: "fashion__shoes__rusted_manor",
                  quantity: 21,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__shoes__star_jade",
          name: "Star Jade",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.elfish,
          tag2: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.s,
            cool: StyleRank.a,
            elegant: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__earrings__azure_butterfly",
          name: "Azure Butterfly",
          starRank: 4,
          category: AccessoryCategory.earrings,
          tag1: Tag.elfish,
          tag2: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.s,
            cool: StyleRank.a,
            elegant: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__necklace__glittering_butterfly",
          name: "Glittering Butterfly",
          starRank: 4,
          category: AccessoryCategory.necklace,
          tag1: Tag.elfish,
          tag2: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.s,
            cool: StyleRank.a,
            elegant: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__bottom__gilded_forest",
                  quantity: 5,
                },
                {
                  itemId: "fashion__top__autumn_farm",
                  quantity: 21,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__gloves__hollow_star",
          name: "Hollow Star",
          starRank: 4,
          category: AccessoryCategory.gloves,
          tag1: Tag.elfish,
          tag2: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.s,
            cool: StyleRank.a,
            elegant: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__bottom__blueberry_bubble",
                  quantity: 5,
                },
                {
                  itemId: "fashion__earrings__teardrop_of_star",
                  quantity: 21,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__doris_dream",
    name: "Doris Dream",
    starRank: 4,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.gorgeous,
    items: {
      create: [
        {
          id: "fashion__dress__doris_dream",
          name: "Doris Dream",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.lolita,
          styleRanks: {
            gorgeous: StyleRank.s,
            sexy: StyleRank.a,
            cool: StyleRank.b,
            lively: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__socks__candy_fantasy",
          name: "Candy Fantasy",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.lolita,
          tag2: Tag.rock_and_roll,
          styleRanks: {
            gorgeous: StyleRank.s,
            sexy: StyleRank.a,
            cool: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__hair__verdant_tassle",
                  quantity: 12,
                },
                {
                  itemId: "fashion__face__tender_gaze",
                  quantity: 13,
                },
                {
                  itemId: "fashion__hat__phantom_flower",
                  quantity: 12,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__shoes__rose_baileys",
          name: "Rose Baileys",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.lolita,
          tag2: Tag.rock_and_roll,
          styleRanks: {
            gorgeous: StyleRank.s,
            sexy: StyleRank.a,
            cool: StyleRank.b,
            lively: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__hat__dreamwalker",
                  quantity: 14,
                },
                {
                  itemId: "fashion__face__knight_order",
                  quantity: 14,
                },
                {
                  itemId: "fashion__shoes__mystery_story",
                  quantity: 12,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__hair__mystery_night",
          name: "Mystery Night",
          starRank: 4,
          category: AccessoryCategory.hair,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            gorgeous: StyleRank.s,
            cool: StyleRank.a,
            sexy: StyleRank.b,
            lively: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__shoes__strawberry_soda",
                  quantity: 11,
                },
                {
                  itemId: "fashion__socks__long_moonset",
                  quantity: 13,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__necklace__marvelous_magic",
          name: "Marvelous Magic",
          starRank: 4,
          category: AccessoryCategory.necklace,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            gorgeous: StyleRank.s,
            sexy: StyleRank.a,
            cool: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__socks__blackcat_girl",
                  quantity: 14,
                },
                {
                  itemId: "fashion__hair__birchleaf_pears",
                  quantity: 13,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__gloves__sweet_dream",
          name: "Sweet Dream",
          starRank: 4,
          category: AccessoryCategory.gloves,
          tag1: Tag.lolita,
          tag2: Tag.rock_and_roll,
          styleRanks: {
            gorgeous: StyleRank.s,
            cool: StyleRank.a,
            sexy: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__shoes__fluttering_wings",
                  quantity: 13,
                },
                {
                  itemId: "fashion__earrings__love_melody",
                  quantity: 13,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__ring__ring_of_glinda",
          name: "Ring of Glinda",
          starRank: 4,
          category: AccessoryCategory.ring,
          tag1: Tag.lolita,
          tag2: Tag.fairytale,
          styleRanks: {
            gorgeous: StyleRank.s,
            sexy: StyleRank.a,
            cool: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__shoes__motley_nightlight",
                  quantity: 10,
                },
                {
                  itemId: "fashion__hair__starry_soda",
                  quantity: 13,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__handheld__demon_wings",
          name: "Demon Wings",
          starRank: 4,
          category: AccessoryCategory.handheld,
          tag1: Tag.lolita,
          tag2: Tag.rock_and_roll,
          styleRanks: {
            gorgeous: StyleRank.s,
            sexy: StyleRank.a,
            cool: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__gloves__capturing_sunlight",
                  quantity: 15,
                },
                {
                  itemId: "fashion__necklace__starry_night",
                  quantity: 15,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__sakuras_date",
    name: "Sakura's Date",
    starRank: 4,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.exchangeIntimacyShop,
    mainStyle: Style.gorgeous,
    items: {
      create: [
        {
          id: "fashion__dress__sakuras_date",
          name: "Sakura's Date",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeIntimacyShop, cost: 2300 },
          ],
        },
        {
          id: "fashion__socks__florescence",
          name: "Florescence",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeIntimacyShop, cost: 300 },
          ],
        },
        {
          id: "fashion__shoes__flowery_journey",
          name: "Flowery Journey",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeIntimacyShop, cost: 500 },
          ],
        },
        {
          id: "fashion__hat__blossom_fall",
          name: "Blossom Fall",
          starRank: 4,
          category: AccessoryCategory.hat,
          tag1: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeIntimacyShop, cost: 300 },
          ],
        },
        {
          id: "fashion__necklace__misty_flowers",
          name: "Misty Flowers",
          starRank: 4,
          category: AccessoryCategory.necklace,
          tag1: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeIntimacyShop, cost: 300 },
          ],
        },
        {
          id: "fashion__wrist__blooming_time",
          name: "Blooming Time",
          starRank: 4,
          category: AccessoryCategory.wrist,
          tag1: Tag.gown,
          styleRanks: {
            gorgeous: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeIntimacyShop, cost: 300 },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__whooping_crane",
    name: "Whooping Crane",
    starRank: 4,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.lively,
    items: {
      create: [
        {
          id: "fashion__top__whooping_crane",
          name: "Whooping Crane",
          starRank: 4,
          category: FashionCategory.top,
          tag1: Tag.street_punk,
          tag2: Tag.traditional,
          styleRanks: {
            lively: StyleRank.s,
            pure: StyleRank.a,
            simple: StyleRank.b,
            cool: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__shoes__motley_nightlight",
                  quantity: 6,
                },
                {
                  itemId: "fashion__earrings__summer_love",
                  quantity: 9,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__bottom__fine_feather",
          name: "Fine Feather",
          starRank: 4,
          category: FashionCategory.bottom,
          tag1: Tag.street_punk,
          tag2: Tag.traditional,
          styleRanks: {
            lively: StyleRank.s,
            simple: StyleRank.a,
            sexy: StyleRank.b,
            cool: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__hat__dreamwalker",
                  quantity: 8,
                },
                {
                  itemId: "fashion__anklet__triangle_code",
                  quantity: 14,
                },
                {
                  itemId: "fashion__top__night_echo",
                  quantity: 4,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__coat__rising_sun",
          name: "Rising Sun",
          starRank: 4,
          category: FashionCategory.coat,
          tag1: Tag.street_punk,
          tag2: Tag.traditional,
          styleRanks: {
            lively: StyleRank.s,
            simple: StyleRank.a,
            warm: StyleRank.b,
            cool: StyleRank.b,
            pure: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__hair__verdant_tassel",
                  quantity: 9,
                },
                {
                  itemId: "fashion__necklace__radiant_snow",
                  quantity: 10,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__socks__dawn_of_crane",
          name: "Dawn of Crime",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.street_punk,
          tag2: Tag.traditional,
          styleRanks: {
            lively: StyleRank.s,
            gorgeous: StyleRank.a,
            sexy: StyleRank.b,
            cool: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__shoes__strawberry_soda",
                  quantity: 4,
                },
                {
                  itemId: "fashion__socks__long_moonset",
                  quantity: 6,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__shoes__lost_dance",
          name: "Lost Dance",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.street_punk,
          tag2: Tag.traditional,
          styleRanks: {
            lively: StyleRank.s,
            pure: StyleRank.a,
            simple: StyleRank.b,
            cool: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__socks__blackcat_girl",
                  quantity: 6,
                },
                {
                  itemId: "fashion__socks__snow_hidden",
                  quantity: 6,
                },
                {
                  itemId: "fashion__face__puzzling_poem",
                  quantity: 8,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__necklace_crane_heart",
          name: "Crane Heart",
          starRank: 4,
          category: AccessoryCategory.necklace,
          tag1: Tag.street_punk,
          tag2: Tag.rock_and_roll,
          styleRanks: {
            lively: StyleRank.s,
            gorgeous: StyleRank.a,
            sexy: StyleRank.b,
            cool: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__shoes__fluttering_wings",
                  quantity: 5,
                },
                {
                  itemId: "fashion__face__tender_gaze",
                  quantity: 6,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__hasumachi_tea",
    name: "Hasumachi Tea",
    starRank: 4,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.event,
    eventId: "event__ancient_town",
    mainStyle: Style.simple,
    items: {
      create: [
        {
          id: "fashion__dress__hasumachi_tea",
          name: "Hasumachi Tea",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.holiday,
          styleRanks: {
            simple: StyleRank.s,
            sweet: StyleRank.a,
            pure: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
          extendMethod: "trendWindVane",
          palettes: [
            [
              [10, 3],
              [13, 8],
              [11, 4],
            ],
            [
              [10, 3],
              [10, 7],
              [1, 6],
            ],
            [
              [16, 1],
              [8, 1],
              [8, 5],
            ],
          ],
        },
        {
          id: "fashion__socks__pinkish_dream",
          name: "Pinkish Dream",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.holiday,
          styleRanks: {
            simple: StyleRank.s,
            sweet: StyleRank.a,
            pure: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
          palettes: [[[15, 1]], [[2, 6]], [[8, 5]]],
        },
        {
          id: "fashion__shoes__salt_fragrance",
          name: "Salt Fragrance",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.holiday,
          styleRanks: {
            simple: StyleRank.s,
            sweet: StyleRank.a,
            pure: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
          palettes: [
            [
              [1, 4],
              [0, 0],
              [0, 0],
            ],
            [
              [1, 1],
              [16, 4],
              [11, 5],
            ],
            [
              [6, 8],
              [15, 8],
              [12, 2],
            ],
          ],
        },
        {
          id: "fashion__hair__moonlit_date",
          name: "Moonlit Date",
          starRank: 4,
          category: AccessoryCategory.hair,
          tag1: Tag.holiday,
          styleRanks: {
            simple: StyleRank.s,
            sweet: StyleRank.a,
            pure: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
          palettes: [
            [
              [5, 1],
              [15, 1],
            ],
            [
              [2, 4],
              [7, 4],
            ],
            [
              [14, 7],
              [14, 4],
            ],
          ],
        },
        {
          id: "fashion__necklace__shattered_light",
          name: "Shattered Light",
          starRank: 4,
          category: AccessoryCategory.necklace,
          tag1: Tag.holiday,
          styleRanks: {
            simple: StyleRank.s,
            sweet: StyleRank.a,
            pure: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
          palettes: [[[1, 2]], [[1, 3]], [[16, 5]]],
        },
      ],
    },
  },

  {
    id: "fashion__set__emperor_of_snow",
    name: "Emperor of Snow",
    starRank: 6,
    brandId: "evening_star",
    obtainType: ObtainType.lightchaseSnowDome,
    mainStyle: Style.pure,
    items: {
      create: [
        {
          id: "fashion__hairstyle__dance_of_snow",
          name: "Dream Of Snow",
          starRank: 6,
          category: FashionCategory.hairstyle,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            pure: StyleRank.sss,
            elegant: StyleRank.s,
            warm: StyleRank.s,
            gorgeous: StyleRank.s,
            sweet: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseSnowDome }],
        },
        {
          id: "fashion__dress__emperor_of_snow",
          name: "Emperor of Snow",
          starRank: 6,
          category: FashionCategory.dress,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            pure: StyleRank.sss,
            elegant: StyleRank.s,
            warm: StyleRank.s,
            gorgeous: StyleRank.s,
            sweet: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseSnowDome }],
        },
        {
          id: "fashion__socks__illusion_of_snow",
          name: "Illusion Of Snow",
          starRank: 6,
          category: FashionCategory.socks,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            pure: StyleRank.sss,
            elegant: StyleRank.s,
            sweet: StyleRank.s,
            gorgeous: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseSnowDome }],
        },
        {
          id: "fashion__shoes__flowing_light",
          name: "Flowing Light",
          starRank: 6,
          category: FashionCategory.shoes,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            pure: StyleRank.sss,
            elegant: StyleRank.s,
            sweet: StyleRank.s,
            gorgeous: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseSnowDome }],
        },
        {
          id: "fashion__earrings__whisper_of_snow",
          name: "Whisper of Snow",
          starRank: 6,
          category: AccessoryCategory.earrings,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            pure: StyleRank.sss,
            elegant: StyleRank.s,
            sweet: StyleRank.s,
            gorgeous: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseSnowDome }],
        },
        {
          id: "fashion__gloves__snowy_fantasy",
          name: "Snowy Fantasy",
          starRank: 6,
          category: AccessoryCategory.gloves,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            pure: StyleRank.sss,
            elegant: StyleRank.s,
            sweet: StyleRank.s,
            gorgeous: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseSnowDome }],
        },
        {
          id: "fashion__hat__blizzard_sonata",
          name: "Blizzard Sonata",
          starRank: 6,
          category: AccessoryCategory.hat,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            pure: StyleRank.sss,
            elegant: StyleRank.s,
            sweet: StyleRank.s,
            gorgeous: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseSnowDome }],
        },
        {
          id: "fashion__necklace__engraving_of_snow",
          name: "Engraving Of Snow",
          starRank: 6,
          category: AccessoryCategory.necklace,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            pure: StyleRank.sss,
            elegant: StyleRank.s,
            sweet: StyleRank.s,
            gorgeous: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseSnowDome }],
        },
        {
          id: "fashion__ring__snow_coagulation",
          name: "Snow Coagulation",
          starRank: 6,
          category: AccessoryCategory.ring,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            pure: StyleRank.sss,
            elegant: StyleRank.s,
            sweet: StyleRank.s,
            gorgeous: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseSnowDome }],
        },
        {
          id: "fashion__handheld__jade_fan",
          name: "Jade Fan",
          starRank: 6,
          category: AccessoryCategory.handheld,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            pure: StyleRank.sss,
            elegant: StyleRank.s,
            sweet: StyleRank.s,
            gorgeous: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseSnowDome }],
        },
        {
          id: "fashion__tattoo__crystal_fantasy",
          name: "Crystal Fantasy",
          starRank: 6,
          category: AccessoryCategory.tattoo,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            pure: StyleRank.sss,
            elegant: StyleRank.s,
            sweet: StyleRank.s,
            gorgeous: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseSnowDome }],
        },
      ],
    },
  },
  {
    id: "fashion__set__winds_whisper",
    name: "Wind's Whisper",
    starRank: 6,
    brandId: "evening_star",
    obtainType: ObtainType.lightchaseBeloved,
    mainStyle: Style.elegant,
    items: {
      create: [
        {
          id: "fashion__hairstyle__song_of_sunrise",
          name: "Song of Sunrise",
          starRank: 6,
          category: FashionCategory.hairstyle,
          tag1: Tag.gown,
          styleRanks: {
            elegant: StyleRank.sss,
            gorgeous: StyleRank.s,
            pure: StyleRank.s,
            sweet: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__dress__winds_whisper",
          name: "Wind's Whisper",
          starRank: 6,
          category: FashionCategory.dress,
          tag1: Tag.gown,
          styleRanks: {
            elegant: StyleRank.sss,
            gorgeous: StyleRank.s,
            pure: StyleRank.s,
            sweet: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__socks__falling_feathers",
          name: "Falling Feathers",
          starRank: 6,
          category: FashionCategory.socks,
          tag1: Tag.gown,
          styleRanks: {
            elegant: StyleRank.sss,
            gorgeous: StyleRank.s,
            sexy: StyleRank.s,
            sweet: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__shoes__flutter_feather",
          name: "Flutter Feather",
          starRank: 6,
          category: FashionCategory.shoes,
          tag1: Tag.gown,
          styleRanks: {
            elegant: StyleRank.sss,
            pure: StyleRank.s,
            gorgeous: StyleRank.s,
            sweet: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__hat__crown_of_tides",
          name: "Crown of Tides",
          starRank: 6,
          category: AccessoryCategory.hat,
          tag1: Tag.gown,
          styleRanks: {
            elegant: StyleRank.sss,
            gorgeous: StyleRank.s,
            pure: StyleRank.s,
            sweet: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__necklace__pearl_tides",
          name: "Pearl Tides",
          starRank: 6,
          category: AccessoryCategory.necklace,
          tag1: Tag.gown,
          styleRanks: {
            elegant: StyleRank.sss,
            gorgeous: StyleRank.s,
            pure: StyleRank.s,
            sweet: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__gloves__tears_of_star",
          name: "Tears of Star",
          starRank: 6,
          category: AccessoryCategory.gloves,
          tag1: Tag.gown,
          styleRanks: {
            elegant: StyleRank.sss,
            gorgeous: StyleRank.s,
            pure: StyleRank.s,
            sweet: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__ring__heart_of_tides",
          name: "Heart of Tides",
          starRank: 6,
          category: AccessoryCategory.ring,
          tag1: Tag.gown,
          styleRanks: {
            elegant: StyleRank.sss,
            gorgeous: StyleRank.s,
            pure: StyleRank.s,
            sweet: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__handheld__dancing_butterfly",
          name: "Dancing Butterfly",
          starRank: 6,
          category: AccessoryCategory.handheld,
          tag1: Tag.gown,
          styleRanks: {
            elegant: StyleRank.sss,
            gorgeous: StyleRank.s,
            pure: StyleRank.s,
            sweet: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
      ],
    },
  },
  {
    id: "fashion__set__feather_flower",
    name: "Feather Flower",
    starRank: 6,
    brandId: "evening_star",
    obtainType: ObtainType.exchangeFashionShop,
    mainStyle: Style.simple,
    items: {
      create: [
        {
          id: "fashion__hairstyle__snow_poem",
          name: "Snow Poem",
          starRank: 6,
          category: FashionCategory.hairstyle,
          tag1: Tag.elfish,
          tag2: Tag.fairytale,
          styleRanks: {
            simple: StyleRank.sss,
            elegant: StyleRank.s,
            pure: StyleRank.s,
            sweet: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeFashionShop,
              cost: 4500,
            },
          ],
        },
        {
          id: "fashion__dress__feather_flower",
          name: "Feather Flower",
          starRank: 6,
          category: FashionCategory.dress,
          tag1: Tag.elfish,
          tag2: Tag.fairytale,
          styleRanks: {
            simple: StyleRank.sss,
            elegant: StyleRank.s,
            pure: StyleRank.s,
            sweet: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeFashionShop,
              cost: 13500,
            },
          ],
        },
        {
          id: "fashion__shoes__spring_vine",
          name: "Spring Vine",
          starRank: 6,
          category: FashionCategory.shoes,
          tag1: Tag.elfish,
          tag2: Tag.fairytale,
          styleRanks: {
            simple: StyleRank.sss,
            elegant: StyleRank.s,
            pure: StyleRank.s,
            sweet: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeFashionShop,
              cost: 3000,
            },
          ],
        },
        {
          id: "fashion__hair__flower_picking",
          name: "Flower Picking",
          starRank: 6,
          category: AccessoryCategory.hair,
          tag1: Tag.elfish,
          tag2: Tag.fairytale,
          styleRanks: {
            simple: StyleRank.sss,
            elegant: StyleRank.s,
            pure: StyleRank.s,
            sweet: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeFashionShop,
              cost: 1500,
            },
          ],
        },
        {
          id: "fashion__earrings__morning_dew",
          name: "Morning Dew",
          starRank: 6,
          category: AccessoryCategory.earrings,
          tag1: Tag.elfish,
          tag2: Tag.fairytale,
          styleRanks: {
            simple: StyleRank.sss,
            elegant: StyleRank.s,
            pure: StyleRank.s,
            sweet: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeFashionShop,
              cost: 1500,
            },
          ],
        },
        {
          id: "fashion__wrist__morning_flowers",
          name: "Morning Flowers",
          starRank: 6,
          category: AccessoryCategory.wrist,
          tag1: Tag.elfish,
          tag2: Tag.fairytale,
          styleRanks: {
            simple: StyleRank.sss,
            elegant: StyleRank.s,
            pure: StyleRank.s,
            sweet: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeFashionShop,
              cost: 1500,
            },
          ],
        },
        {
          id: "fashion__wings__fluttering_dream",
          name: "Fluttering Dream",
          starRank: 6,
          category: AccessoryCategory.wings,
          tag1: Tag.elfish,
          tag2: Tag.fairytale,
          styleRanks: {
            simple: StyleRank.sss,
            elegant: StyleRank.s,
            pure: StyleRank.s,
            sweet: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeFashionShop,
              cost: 3000,
            },
          ],
        },
        {
          id: "fashion__tattoo__floral_language",
          name: "Floral Language",
          starRank: 6,
          category: AccessoryCategory.tattoo,
          tag1: Tag.elfish,
          tag2: Tag.fairytale,
          styleRanks: {
            simple: StyleRank.sss,
            elegant: StyleRank.s,
            pure: StyleRank.s,
            sweet: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeFashionShop,
              cost: 1500,
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__flowery_dream",
    name: "Flowery Dream",
    starRank: 5,
    brandId: "evening_star",
    obtainType: ObtainType.craftMindTravel,
    mainStyle: Style.elegant,
    items: {
      create: [
        {
          id: "fashion__hairstyle__flowery_blessing",
          name: "Flowery Blessing",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.classic,
          styleRanks: {
            elegant: StyleRank.ss,
            sweet: StyleRank.s,
            pure: StyleRank.a,
            gorgeous: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__wrist__blurred_coastline",
                  quantity: 52,
                },
                {
                  itemId: "fashion__dress__sunlight",
                  quantity: 50,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__dress__flowery_dream",
          name: "Flowery Dream",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.classic,
          styleRanks: {
            elegant: StyleRank.ss,
            sweet: StyleRank.s,
            pure: StyleRank.a,
            gorgeous: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__earrings__undersea_stars",
                  quantity: 79,
                },
                {
                  itemId: "fashion__top__rainbow_light",
                  quantity: 75,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__socks__hidden_trail",
          name: "Hidden Trail",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.classic,
          styleRanks: {
            elegant: StyleRank.ss,
            sweet: StyleRank.s,
            pure: StyleRank.a,
            gorgeous: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__necklace__new_bud",
                  quantity: 24,
                },
                {
                  itemId: "fashion__top__grayscale_space",
                  quantity: 25,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__shoes__wandering_flowers",
          name: "Wandering Flowers",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.classic,
          styleRanks: {
            elegant: StyleRank.ss,
            sweet: StyleRank.s,
            pure: StyleRank.a,
            gorgeous: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__socks__cubic_sugar",
                  quantity: 32,
                },
                {
                  itemId: "fashion__dress__leisure_weekend",
                  quantity: 31,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__necklace__flowery_fence",
          name: "Flowery Fence",
          starRank: 5,
          category: AccessoryCategory.necklace,
          tag1: Tag.classic,
          styleRanks: {
            elegant: StyleRank.ss,
            sweet: StyleRank.s,
            pure: StyleRank.a,
            gorgeous: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__wrist__lilac_firefly",
                  quantity: 24,
                },
                {
                  itemId: "fashion__top__cherry_cream",
                  quantity: 29,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__ring__weary_flowers",
          name: "Weary Flowers",
          starRank: 5,
          category: AccessoryCategory.ring,
          tag1: Tag.classic,
          styleRanks: {
            elegant: StyleRank.ss,
            sweet: StyleRank.s,
            pure: StyleRank.a,
            gorgeous: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__necklace__ring_of_time",
                  quantity: 24,
                },
                {
                  itemId: "fashion__dress__rose_chanson",
                  quantity: 24,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__dream_poetry",
    name: "Dream Poetry",
    starRank: 5,
    brandId: "evening_star",
    obtainType: ObtainType.event,
    eventId: "event__shoppe_master",
    mainStyle: Style.simple,
    items: {
      create: [
        {
          id: "fashion__hairstyle__flowing_dream",
          name: "Flowing Dream",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.street,
          tag2: Tag.ladylike,
          styleRanks: {
            simple: StyleRank.ss,
            sexy: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            { obtainType: ObtainType.event, eventId: "event__shoppe_master" },
          ],
        },
        {
          id: "fashion__dress__dream_poetry",
          name: "Dream Poetry",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.street,
          tag2: Tag.ladylike,
          styleRanks: {
            simple: StyleRank.ss,
            sexy: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            { obtainType: ObtainType.event, eventId: "event__shoppe_master" },
          ],
        },
        {
          id: "fashion__shoes__pure_poetry",
          name: "Pure Poetry",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.street,
          tag2: Tag.ladylike,
          styleRanks: {
            simple: StyleRank.ss,
            sexy: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            { obtainType: ObtainType.event, eventId: "event__shoppe_master" },
          ],
        },
        {
          id: "fashion__coat__hollow_flower",
          name: "Hollow Flower",
          starRank: 5,
          category: FashionCategory.coat,
          tag1: Tag.street,
          tag2: Tag.ladylike,
          styleRanks: {
            simple: StyleRank.ss,
            sexy: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            { obtainType: ObtainType.event, eventId: "event__shoppe_master" },
          ],
        },
        {
          id: "fashion__earrings__dream_of_butterflies",
          name: "Dream of Butterflies",
          starRank: 5,
          category: AccessoryCategory.earrings,
          tag1: Tag.street,
          tag2: Tag.ladylike,
          styleRanks: {
            simple: StyleRank.ss,
            sexy: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            { obtainType: ObtainType.event, eventId: "event__shoppe_master" },
          ],
        },
        {
          id: "fashion__wrist__rosy_dream",
          name: "Rosy Dream",
          starRank: 5,
          category: AccessoryCategory.wrist,
          tag1: Tag.street,
          tag2: Tag.ladylike,
          styleRanks: {
            simple: StyleRank.ss,
            sexy: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            { obtainType: ObtainType.event, eventId: "event__shoppe_master" },
          ],
        },
        {
          id: "fashion__ring__dream_date",
          name: "Dream Date",
          starRank: 5,
          category: AccessoryCategory.ring,
          tag1: Tag.street,
          tag2: Tag.ladylike,
          styleRanks: {
            simple: StyleRank.ss,
            sexy: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            { obtainType: ObtainType.event, eventId: "event__shoppe_master" },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__moonglow_sonata",
    name: "Moonglow Sonata",
    starRank: 5,
    brandId: "evening_star",
    obtainType: ObtainType.exchangeFashionShop,
    mainStyle: Style.elegant,
    items: {
      create: [
        {
          id: "fashion__hairstyle__music_of_keys",
          name: "Music of Keys",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.gown,
          tag2: Tag.ladylike,
          styleRanks: {
            elegant: StyleRank.ss,
            pure: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeFashionShop,
              cost: 1800,
            },
          ],
        },
        {
          id: "fashion__dress__moonglow_sonata",
          name: "Moonglow Sonata",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.gown,
          tag2: Tag.ladylike,
          styleRanks: {
            elegant: StyleRank.ss,
            pure: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeFashionShop,
              cost: 6000,
            },
          ],
        },
        {
          id: "fashion__socks__moonlight_organ",
          name: "Moonlight Organ",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.gown,
          tag2: Tag.ladylike,
          styleRanks: {
            elegant: StyleRank.ss,
            pure: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeFashionShop,
              cost: 400,
            },
          ],
        },
        {
          id: "fashion__shoes__nights_lovesong",
          name: "Night's Lovesong",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.gown,
          tag2: Tag.ladylike,
          styleRanks: {
            elegant: StyleRank.ss,
            pure: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeFashionShop,
              cost: 1200,
            },
          ],
        },
        {
          id: "fashion__hat__star_concerto",
          name: "Star Concerto",
          starRank: 5,
          category: AccessoryCategory.hat,
          tag1: Tag.gown,
          tag2: Tag.ladylike,
          styleRanks: {
            elegant: StyleRank.ss,
            pure: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeFashionShop,
              cost: 800,
            },
          ],
        },
        {
          id: "fashion__necklace__moon_heart_lock",
          name: "Moon Heart Lock",
          starRank: 5,
          category: AccessoryCategory.necklace,
          tag1: Tag.gown,
          tag2: Tag.ladylike,
          styleRanks: {
            elegant: StyleRank.ss,
            pure: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeFashionShop,
              cost: 600,
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__floral_song",
    name: "Floral Song",
    starRank: 5,
    brandId: "evening_star",
    obtainType: ObtainType.rebateGift,
    mainStyle: Style.elegant,
    items: {
      create: [
        {
          id: "fashion__hairstyle__love_song",
          name: "Love Song",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.wedding,
          styleRanks: {
            elegant: StyleRank.ss,
            sexy: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.rebateGift }],
        },
        {
          id: "fashion__dress__floral_song",
          name: "Floral Song",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.wedding,
          styleRanks: {
            elegant: StyleRank.ss,
            sexy: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.rebateGift }],
        },
        {
          id: "fashion__socks__dream_land",
          name: "Dream Land",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.wedding,
          styleRanks: {
            elegant: StyleRank.ss,
            sexy: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.rebateGift }],
        },
        {
          id: "fashion__shoes__fence_love",
          name: "Fence Love",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.wedding,
          styleRanks: {
            elegant: StyleRank.ss,
            sexy: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.rebateGift }],
        },
        {
          id: "fashion__hat__white_romance",
          name: "White Romance",
          starRank: 5,
          category: AccessoryCategory.hat,
          tag1: Tag.wedding,
          styleRanks: {
            elegant: StyleRank.ss,
            sexy: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.rebateGift }],
        },
      ],
    },
  },
  {
    id: "fashion__set__plaids_secret",
    name: "Plaid's Secret",
    starRank: 5,
    brandId: "evening_star",
    obtainType: ObtainType.craftMindTravel,
    mainStyle: Style.elegant,
    items: {
      create: [
        {
          id: "fashion__hairstyle__ceylon_short_song",
          name: "Ceylon Short Song",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.british,
          styleRanks: {
            elegant: StyleRank.ss,
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__tattoo__star_and_moon",
                  quantity: 42,
                },
                {
                  itemId: "fashion__bottom__blueberry_bubble",
                  quantity: 35,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__dress__plaids_secret",
          name: "Plaid's Secret",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.british,
          styleRanks: {
            elegant: StyleRank.ss,
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__handheld__golden_vivian",
                  quantity: 64,
                },
                {
                  itemId: "fashion__dress__honeypeach",
                  quantity: 29,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__shoes__migrating_birds",
          name: "Migrating Birds",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.british,
          styleRanks: {
            elegant: StyleRank.ss,
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__socks__shattered_stars",
                  quantity: 26,
                },
                {
                  itemId: "fashion__bottom__gilded_forest",
                  quantity: 23,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__coat__misty_night",
          name: "Misty Night",
          starRank: 5,
          category: FashionCategory.coat,
          tag1: Tag.british,
          styleRanks: {
            elegant: StyleRank.ss,
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__socks__embroidered_art",
                  quantity: 45,
                },
                {
                  itemId: "fashion__dress__southern_holiday",
                  quantity: 23,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__hat__houndstooth",
          name: "Houndstooth",
          starRank: 5,
          category: AccessoryCategory.hat,
          tag1: Tag.british,
          styleRanks: {
            elegant: StyleRank.ss,
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__socks__carving_of_bloom",
                  quantity: 19,
                },
                {
                  itemId: "fashion__dress__fleeting_gold",
                  quantity: 18,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__necklace__red_snow",
          name: "Red Snow",
          starRank: 5,
          category: AccessoryCategory.necklace,
          tag1: Tag.british,
          styleRanks: {
            elegant: StyleRank.ss,
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__socks__daytime_skyline",
                  quantity: 19,
                },
                {
                  itemId: "fashion__dress__soft_candy",
                  quantity: 18,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__handheld__night_black_tea",
          name: "Night Black Tea",
          starRank: 5,
          category: AccessoryCategory.handheld,
          tag1: Tag.british,
          styleRanks: {
            elegant: StyleRank.ss,
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__handheld__whisper_of_tomes",
                  quantity: 19,
                },
                {
                  itemId: "fashion__dress__refreshing_mint",
                  quantity: 18,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__disturbed_night",
    name: "Disturbed Night",
    starRank: 5,
    brandId: "evening_star",
    obtainType: ObtainType.exchangeDecomStore,
    mainStyle: Style.pure,
    items: {
      create: [
        {
          id: "fashion__hairstyle__windy_day",
          name: "Windy Day",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.gown,
          tag2: Tag.princess,
          styleRanks: {
            pure: StyleRank.ss,
            simple: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeDecomStore,
              cost: 1200,
            },
          ],
        },
        {
          id: "fashion__dress__disturbed_night",
          name: "Disturbed Night",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.gown,
          tag2: Tag.princess,
          styleRanks: {
            pure: StyleRank.ss,
            simple: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeDecomStore,
              cost: 3600,
            },
          ],
        },
        {
          id: "fashion__shoes__night_step",
          name: "Night Step",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.gown,
          tag2: Tag.princess,
          styleRanks: {
            pure: StyleRank.ss,
            simple: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeDecomStore,
              cost: 600,
            },
          ],
        },
        {
          id: "fashion__hair__night_knitter",
          name: "Night Knitter",
          starRank: 5,
          category: AccessoryCategory.hair,
          tag1: Tag.gown,
          tag2: Tag.princess,
          styleRanks: {
            pure: StyleRank.ss,
            simple: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeDecomStore,
              cost: 300,
            },
          ],
        },
        {
          id: "fashion__earrings__night_chatter",
          name: "Night Chatter",
          starRank: 5,
          category: AccessoryCategory.earrings,
          tag1: Tag.gown,
          tag2: Tag.princess,
          styleRanks: {
            pure: StyleRank.ss,
            simple: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeDecomStore,
              cost: 300,
            },
          ],
        },
        {
          id: "fashion__necklace__halt_of_breeze",
          name: "Halt of Breeze",
          starRank: 5,
          category: AccessoryCategory.necklace,
          tag1: Tag.gown,
          tag2: Tag.princess,
          styleRanks: {
            pure: StyleRank.ss,
            simple: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeDecomStore,
              cost: 300,
            },
          ],
        },
        {
          id: "fashion__gloves__carved_night",
          name: "Carved Night",
          starRank: 5,
          category: AccessoryCategory.gloves,
          tag1: Tag.gown,
          tag2: Tag.princess,
          styleRanks: {
            pure: StyleRank.ss,
            simple: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeDecomStore,
              cost: 300,
            },
          ],
        },
        {
          id: "fashion__handheld__fragrance_of_lily",
          name: "Fragrance of Lily",
          starRank: 5,
          category: AccessoryCategory.handheld,
          tag1: Tag.gown,
          tag2: Tag.princess,
          styleRanks: {
            pure: StyleRank.ss,
            simple: StyleRank.s,
            sweet: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeDecomStore,
              cost: 300,
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__phoenix_arrival",
    name: "Phoenix Arrival",
    starRank: 5,
    brandId: "evening_star",
    obtainType: ObtainType.lightchaseBeloved,
    mainStyle: Style.elegant,
    items: {
      create: [
        {
          id: "fashion__hairstyle__cloud_palace",
          name: "Cloud Palace",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.ss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.a,
            pure: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__dress__phoenix_arrival",
          name: "Phoenix Arrival",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.ss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.a,
            pure: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__socks__phoenix",
          name: "Phoenix",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.ss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.a,
            pure: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__shoes__immortal_moon",
          name: "Immortal Moon",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.ss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.a,
            pure: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__face__jade_curtain",
          name: "Jade Curtain",
          starRank: 5,
          category: AccessoryCategory.face,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.ss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.a,
            pure: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__hat__grand_ambition",
          name: "Grand Ambition",
          starRank: 5,
          category: AccessoryCategory.hat,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.ss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.a,
            pure: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__hair__moon_palace",
          name: "Moon Palace",
          starRank: 5,
          category: AccessoryCategory.hair,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.ss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.a,
            pure: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__earrings__luminous_pearl",
          name: "Luminous Pearl",
          starRank: 5,
          category: AccessoryCategory.earrings,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.ss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.a,
            pure: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__ring__graceful_finger",
          name: "Graceful Finger",
          starRank: 5,
          category: AccessoryCategory.ring,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.ss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.a,
            pure: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
        {
          id: "fashion__handheld__cloud_immortal",
          name: "Cloud Immortal",
          starRank: 5,
          category: AccessoryCategory.handheld,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.ss,
            gorgeous: StyleRank.s,
            sweet: StyleRank.a,
            pure: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseBeloved }],
        },
      ],
    },
  },
  {
    id: "fashion__set__crane_dance",
    name: "Crane Dance",
    starRank: 5,
    brandId: "evening_star",
    obtainType: ObtainType.exchange,
    mainStyle: Style.elegant,
    items: {
      create: [
        {
          id: "fashion__hairstyle__cloud_pile",
          name: "Cloud Pile",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.ss,
            pure: StyleRank.s,
            gorgeous: StyleRank.a,
            sweet: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeInspirationCenter,
              cost: 530,
            },
          ],
        },
        {
          id: "fashion__dress__crane_dance",
          name: "Crane Dance",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.ss,
            pure: StyleRank.s,
            gorgeous: StyleRank.a,
            sweet: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeInspirationCenter,
              cost: 1590,
            },
          ],
        },
        {
          id: "fashion__socks__crane_whisper",
          name: "Crane Whisper",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.ss,
            pure: StyleRank.s,
            gorgeous: StyleRank.a,
            sweet: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeInspirationCenter,
              cost: 180,
            },
          ],
        },
        {
          id: "fashion__shoes__crane_feather",
          name: "Crane Feather",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.ss,
            pure: StyleRank.s,
            gorgeous: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeInspirationCenter,
              cost: 360,
            },
          ],
        },
        {
          id: "fashion__earrings__pear_blossom",
          name: "Pear Blossom",
          starRank: 5,
          category: AccessoryCategory.earrings,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.ss,
            pure: StyleRank.s,
            gorgeous: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeInspirationCenter,
              cost: 180,
            },
          ],
        },
        {
          id: "fashion__necklace__willow_twig",
          name: "Willow Twig",
          starRank: 5,
          category: AccessoryCategory.necklace,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.ss,
            pure: StyleRank.s,
            gorgeous: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.exchangeInspirationCenter,
              cost: 180,
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__pandan_island",
    name: "Pandan Island",
    starRank: 4,
    brandId: "evening_star",
    obtainType: ObtainType.exchangeGuildShop,
    mainStyle: Style.elegant,
    items: {
      create: [
        {
          id: "fashion__top__pandan_island",
          name: "Pandan Island",
          starRank: 4,
          category: FashionCategory.top,
          tag1: Tag.ladylike,
          styleRanks: {
            elegant: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeGuildShop, cost: 220 },
          ],
        },
        {
          id: "fashion__bottom__ode_to_orchids",
          name: "Ode to Orchids",
          starRank: 4,
          category: FashionCategory.bottom,
          tag1: Tag.ladylike,
          styleRanks: {
            elegant: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeGuildShop, cost: 220 },
          ],
        },
        {
          id: "fashion__socks__soft_drizzle",
          name: "Soft Drizzle",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.ladylike,
          styleRanks: {
            elegant: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeGuildShop, cost: 60 },
          ],
        },
        {
          id: "fashion__shoes__blue_stream",
          name: "Blue Stream",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.ladylike,
          styleRanks: {
            elegant: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeGuildShop, cost: 110 },
          ],
        },
        {
          id: "fashion__wrist__refined_flower",
          name: "Refined Flower",
          starRank: 4,
          category: AccessoryCategory.wrist,
          tag1: Tag.ladylike,
          styleRanks: {
            elegant: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeGuildShop, cost: 60 },
          ],
        },
        {
          id: "fashion__anklet__bluebell_traveller",
          name: "Bluebell Traveller",
          starRank: 4,
          category: AccessoryCategory.anklet,
          tag1: Tag.ladylike,
          styleRanks: {
            elegant: StyleRank.s,
            simple: StyleRank.a,
            sweet: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeGuildShop, cost: 60 },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__sky_toffee",
    name: "Sky Toffee",
    starRank: 4,
    brandId: "evening_star",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.simple,
    items: {
      create: [
        {
          id: "fashion__top__sky_toffee",
          name: "Sky Toffee",
          starRank: 4,
          category: FashionCategory.top,
          tag1: Tag.homey,
          styleRanks: {
            simple: StyleRank.s,
            warm: StyleRank.a,
            sweet: StyleRank.b,
            elegant: StyleRank.b,
            pure: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__bottom__gilded_forest",
                  quantity: 38,
                },
                {
                  itemId: "fashion__ring__cherished_days",
                  quantity: 69,
                },
                {
                  itemId: "fashion__face__sidelong_glance",
                  quantity: 69,
                },
                {
                  itemId: "fashion__socks__warm_kapok",
                  quantity: 41,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__bottom__fluffy_milk_ball",
          name: "Fluffy Milk Ball",
          starRank: 4,
          category: FashionCategory.bottom,
          tag1: Tag.homey,
          styleRanks: {
            simple: StyleRank.s,
            warm: StyleRank.a,
            sweet: StyleRank.b,
            elegant: StyleRank.b,
            pure: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__bottom__blueberry_bubble",
                  quantity: 38,
                },
                {
                  itemId: "fashion__earrings__black_plaid_fringe",
                  quantity: 69,
                },
                {
                  itemId: "fashion__hat__coupled_wings",
                  quantity: 69,
                },
                {
                  itemId: "fashion__socks__lakeside_petal",
                  quantity: 32,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__socks__deep_moon",
          name: "Deep Moon",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.homey,
          styleRanks: {
            simple: StyleRank.s,
            warm: StyleRank.a,
            sweet: StyleRank.b,
            elegant: StyleRank.b,
            pure: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__shoes__fluffy_night_dream",
          name: "Fluffy Night Dream",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.homey,
          styleRanks: {
            simple: StyleRank.s,
            warm: StyleRank.a,
            sweet: StyleRank.b,
            elegant: StyleRank.b,
            pure: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__honeypeach",
                  quantity: 13,
                },
                {
                  itemId: "fashion__tattoo__paper_plane",
                  quantity: 59,
                },
                {
                  itemId: "fashion__face__flowing_snow",
                  quantity: 59,
                },
                {
                  itemId: "fashion__socks__strawberry_top",
                  quantity: 22,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__plum_age",
    name: "Plum Age",
    starRank: 4,
    brandId: "evening_star",
    obtainType: ObtainType.rebateGift,
    mainStyle: Style.elegant,
    items: {
      create: [
        {
          id: "fashion__dress__plum_age",
          name: "Plum Age",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.s,
            pure: StyleRank.a,
            sweet: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.rebateGift }],
        },
        {
          id: "fashion__shoes__plum_serenade",
          name: "Plum Serenade",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.s,
            pure: StyleRank.a,
            sweet: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.rebateGift }],
        },
        {
          id: "fashion__earrings__emerald_light",
          name: "Emerald Light",
          starRank: 4,
          category: AccessoryCategory.earrings,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.s,
            pure: StyleRank.a,
            sweet: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.rebateGift }],
        },
        {
          id: "fashion__ring__wheel_of_age",
          name: "Wheel of Age",
          starRank: 4,
          category: AccessoryCategory.ring,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.s,
            pure: StyleRank.a,
            sweet: StyleRank.b,
            fresh: StyleRank.b,
            gorgeous: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.rebateGift }],
        },
        {
          id: "fashion__handheld__leafy_park",
          name: "Leafy Park",
          starRank: 4,
          category: AccessoryCategory.handheld,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.s,
            pure: StyleRank.a,
            sweet: StyleRank.b,
            fresh: StyleRank.b,
            gorgeous: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.rebateGift }],
        },
      ],
    },
  },
  {
    id: "fashion__set__dance_of_tides",
    name: "Dance of Tides",
    starRank: 4,
    brandId: "evening_star",
    obtainType: ObtainType.event,
    mainStyle: Style.simple,
    items: {
      create: [
        {
          id: "fashion__top__dance_of_tides",
          name: "Dance of Tides",
          starRank: 4,
          category: FashionCategory.top,
          tag1: Tag.holiday,
          styleRanks: {
            simple: StyleRank.s,
            sweet: StyleRank.a,
            sexy: StyleRank.b,
            fresh: StyleRank.b,
            elegant: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
        },
        {
          id: "fashion__bottom__tide_in_dusk",
          name: "Tide in Dusk",
          starRank: 4,
          category: FashionCategory.bottom,
          tag1: Tag.holiday,
          styleRanks: {
            simple: StyleRank.s,
            sweet: StyleRank.a,
            sexy: StyleRank.b,
            fresh: StyleRank.b,
            elegant: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
        },
        {
          id: "fashion__socks__deep_sea_foam",
          name: "Deep Sea Foam",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.holiday,
          styleRanks: {
            simple: StyleRank.s,
            sweet: StyleRank.a,
            sexy: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
        },
        {
          id: "fashion__shoes__starry_sea_hunting",
          name: "Starry Sea Hunting",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.holiday,
          styleRanks: {
            simple: StyleRank.s,
            sweet: StyleRank.a,
            sexy: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
        },
        {
          id: "fashion__hat__teardrop_of_sea",
          name: "Teardrop of Sea",
          starRank: 4,
          category: AccessoryCategory.hat,
          tag1: Tag.holiday,
          styleRanks: {
            simple: StyleRank.s,
            sweet: StyleRank.a,
            sexy: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
        },
      ],
    },
  },
  {
    id: "fashion__set__long_ballad",
    name: "Long Ballad",
    starRank: 4,
    brandId: "evening_star",
    obtainType: ObtainType.event,
    mainStyle: Style.elegant,
    items: {
      create: [
        {
          id: "fashion__dress__long_ballad",
          name: "Long Ballad",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.s,
            pure: StyleRank.a,
            cool: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
        },
        {
          id: "fashion__shoes__shadow_steps",
          name: "Shadow Steps",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.s,
            pure: StyleRank.a,
            cool: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
        },
        {
          id: "fashion__earrings__crystal_stardew",
          name: "Crystal Stardew",
          starRank: 4,
          category: AccessoryCategory.earrings,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.s,
            pure: StyleRank.a,
            cool: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
        },
        {
          id: "fashion__necklace__valley_bamboo",
          name: "Valley Bamboo",
          starRank: 4,
          category: AccessoryCategory.necklace,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.s,
            pure: StyleRank.a,
            cool: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
        },
        {
          id: "fashion__ring__shimmering_bud",
          name: "Shimmering Bud",
          starRank: 4,
          category: AccessoryCategory.ring,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.s,
            pure: StyleRank.a,
            cool: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
        },
      ],
    },
  },
  {
    id: "fashion__set__hustle_and_bustle",
    name: "Hustle and Bustle",
    starRank: 4,
    brandId: "evening_star",
    obtainType: ObtainType.lightchaseNightOfVvanna,
    mainStyle: Style.simple,
    items: {
      create: [
        {
          id: "fashion__top__hustle_and_bustle",
          name: "Hustle and Bustle",
          starRank: 4,
          category: FashionCategory.top,
          tag1: Tag.retro,
          tag2: Tag.street,
          styleRanks: {
            simple: StyleRank.s,
            elegant: StyleRank.a,
            sexy: StyleRank.b,
            warm: StyleRank.b,
            sweet: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__bottom__neon_lights",
          name: "Neon Lights",
          starRank: 4,
          category: FashionCategory.bottom,
          tag1: Tag.retro,
          tag2: Tag.street,
          styleRanks: {
            simple: StyleRank.s,
            elegant: StyleRank.a,
            sexy: StyleRank.b,
            warm: StyleRank.b,
            sweet: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__socks__twinkling_stars",
          name: "Twinkling Stars",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.retro,
          tag2: Tag.street,
          styleRanks: {
            simple: StyleRank.s,
            elegant: StyleRank.a,
            sexy: StyleRank.b,
            sweet: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__shoes__bustling_night",
          name: "Bustling Night",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.retro,
          tag2: Tag.street,
          styleRanks: {
            simple: StyleRank.s,
            elegant: StyleRank.a,
            sexy: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__coat__lighted_night",
          name: "Lighted Night",
          starRank: 4,
          category: FashionCategory.coat,
          tag1: Tag.retro,
          tag2: Tag.street,
          styleRanks: {
            simple: StyleRank.s,
            elegant: StyleRank.a,
            sexy: StyleRank.b,
            warm: StyleRank.b,
            sweet: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__handheld__dark_street",
          name: "Dark Street",
          starRank: 4,
          category: AccessoryCategory.handheld,
          tag1: Tag.retro,
          tag2: Tag.street,
          styleRanks: {
            simple: StyleRank.s,
            elegant: StyleRank.a,
            sexy: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
      ],
    },
  },
  {
    id: "fashion__set__chapter_seven",
    name: "Chapter Seven",
    starRank: 4,
    brandId: "evening_star",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.simple,
    items: {
      create: [
        {
          id: "fashion__dress__chapter_seven",
          name: "Chapter Seven",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.fairytale,
          styleRanks: {
            simple: StyleRank.s,
            sweet: StyleRank.a,
            sexy: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__bottom__blueberry_bubble",
                  quantity: 42,
                },
                {
                  itemId: "fashion__tattoo__paper_plane",
                  quantity: 68,
                },
                {
                  itemId: "fashion__face__flowing_snow",
                  quantity: 67,
                },
                {
                  itemId: "fashion__top__surreal_symphony",
                  quantity: 40,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__shoes__ode_to_butterfly",
          name: "Ode to Butterfly",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.fairytale,
          styleRanks: {
            simple: StyleRank.s,
            sweet: StyleRank.a,
            sexy: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__refreshing_mint",
                  quantity: 15,
                },
                {
                  itemId: "fashion__necklace__radiant_snow",
                  quantity: 48,
                },
                {
                  itemId: "fashion__top__dreamy_island",
                  quantity: 22,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__hair__rosy_wings",
          name: "Rosy Wings",
          starRank: 4,
          category: AccessoryCategory.hair,
          tag1: Tag.fairytale,
          styleRanks: {
            simple: StyleRank.s,
            sweet: StyleRank.a,
            sexy: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__bottom__gilded_forest",
                  quantity: 14,
                },
                {
                  itemId: "fashion__bottom__sand_plaid",
                  quantity: 48,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__gloves__silk_dream",
          name: "Silk Dream",
          starRank: 4,
          category: AccessoryCategory.gloves,
          tag1: Tag.fairytale,
          styleRanks: {
            simple: StyleRank.s,
            sweet: StyleRank.a,
            sexy: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__midsummer_sky",
    name: "Midsummer Sky",
    starRank: 4,
    brandId: "evening_star",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.elegant,
    items: {
      create: [
        {
          id: "fashion__dress__midsummer_sky",
          name: "Midsummer Sky",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.formal,
          styleRanks: {
            elegant: StyleRank.s,
            simple: StyleRank.a,
            sexy: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__bottom__blueberry_bubble",
                  quantity: 42,
                },
                {
                  itemId: "fashion__tattoo__paper_plane",
                  quantity: 68,
                },
                {
                  itemId: "fashion__face__flowing_snow",
                  quantity: 67,
                },
                {
                  itemId: "fashion__top__dreamy_island",
                  quantity: 41,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__socks__summer_breeze",
          name: "Summer Breeze",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.formal,
          styleRanks: {
            elegant: StyleRank.s,
            simple: StyleRank.a,
            sexy: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__bottom__gilded_forest",
                  quantity: 14,
                },
                {
                  itemId: "fashion__necklace__starry_night",
                  quantity: 31,
                },
                {
                  itemId: "fashion__top__surreal_symphony",
                  quantity: 41,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__shoes__tree_shadow",
          name: "Tree Shadow",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.formal,
          styleRanks: {
            elegant: StyleRank.s,
            simple: StyleRank.a,
            sexy: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__fleeting_gold",
                  quantity: 15,
                },
                {
                  itemId: "fashion__hat__crane_figure",
                  quantity: 48,
                },
                {
                  itemId: "fashion__tattoo__light_dance",
                  quantity: 22,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__handheld__girls_tea_party",
          name: "Girl's Tea Party",
          starRank: 4,
          category: AccessoryCategory.handheld,
          tag1: Tag.formal,
          styleRanks: {
            elegant: StyleRank.s,
            simple: StyleRank.a,
            sexy: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__southern_holiday",
                  quantity: 8,
                },
                {
                  itemId: "fashion__face__knight_order",
                  quantity: 49,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__silver_plaid",
    name: "Silver Plaid",
    starRank: 4,
    brandId: "evening_star",
    obtainType: ObtainType.craftOther,
    mainStyle: Style.elegant,
    items: {
      create: [
        {
          id: "fashion__dress__silver_plaid",
          name: "Silver Plaid",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.retro,
          styleRanks: {
            elegant: StyleRank.s,
            simple: StyleRank.a,
            pure: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftOther,
              materialCost: [
                {
                  itemId: "drawing__silver_plaid",
                  quantity: 1,
                },
                {
                  itemId: "fashion__bottom__gilded_forest",
                  quantity: 53,
                },
                {
                  itemId: "fashion__hat__crane_figure",
                  quantity: 169,
                },
                {
                  itemId: "fashion__tattoo__light_dance",
                  quantity: 22,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__shoes__old_song",
          name: "Old Song",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.retro,
          styleRanks: {
            elegant: StyleRank.s,
            simple: StyleRank.a,
            pure: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftOther,
              materialCost: [
                {
                  itemId: "drawing__old_song",
                  quantity: 1,
                },
                {
                  itemId: "fashion__bottom__blueberry_bubble",
                  quantity: 18,
                },
                {
                  itemId: "fashion__necklace__starry_night",
                  quantity: 57,
                },
                {
                  itemId: "fashion__top__dreamy_island",
                  quantity: 22,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__necklace__purewhite_teardrop",
          name: "Purewhite Teardrop",
          starRank: 4,
          category: AccessoryCategory.necklace,
          tag1: Tag.retro,
          styleRanks: {
            elegant: StyleRank.s,
            simple: StyleRank.a,
            pure: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftOther,
              materialCost: [
                {
                  itemId: "drawing__purewhite_teardrop",
                  quantity: 1,
                },
                {
                  itemId: "fashion__dress__southern_holiday",
                  quantity: 10,
                },
                {
                  itemId: "fashion__tattoo__paper_plane",
                  quantity: 57,
                },
                {
                  itemId: "fashion__top__surreal_symphony",
                  quantity: 41,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__gloves__silver_face",
          name: "Silver Face",
          starRank: 4,
          category: AccessoryCategory.gloves,
          tag1: Tag.retro,
          styleRanks: {
            elegant: StyleRank.s,
            simple: StyleRank.a,
            pure: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftOther,
              materialCost: [
                {
                  itemId: "drawing__silver_face",
                  quantity: 1,
                },
                {
                  itemId: "fashion__dress__honeypeach",
                  quantity: 9,
                },
                {
                  itemId: "fashion__face__knight_order",
                  quantity: 57,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__heart_iris",
    name: "Heart Iris",
    starRank: 4,
    brandId: "evening_star",
    obtainType: ObtainType.lightchaseNightOfVvanna,
    mainStyle: Style.sexy,
    items: {
      create: [
        {
          id: "fashion__hairstyle__iris_dream",
          name: "Iris Dream",
          starRank: 4,
          category: FashionCategory.hairstyle,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.s,
            elegant: StyleRank.a,
            gorgeous: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__dress__heart_iris",
          name: "Heart Iris",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.s,
            elegant: StyleRank.a,
            gorgeous: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__shoes__iris_road",
          name: "Iris Road",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.s,
            elegant: StyleRank.a,
            gorgeous: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__earrings__inner_words",
          name: "Inner Words",
          starRank: 4,
          category: AccessoryCategory.earrings,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.s,
            elegant: StyleRank.a,
            gorgeous: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
      ],
    },
  },
  {
    id: "fashion__set__night_gibberish",
    name: "Night Gibberish",
    starRank: 4,
    brandId: "evening_star",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.simple,
    items: {
      create: [
        {
          id: "fashion__dress__night_gibberish",
          name: "Night Gibberish",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.formal,
          styleRanks: {
            simple: StyleRank.s,
            cool: StyleRank.a,
            elegant: StyleRank.b,
            pure: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__socks__blackcat_girl",
                  quantity: 19,
                },
                {
                  itemId: "fashion__necklace__silk_and_snow",
                  quantity: 6,
                },
                {
                  itemId: "fashion__gloves__sleeping_star",
                  quantity: 8,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__socks__starless_night",
          name: "Starless Night",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.formal,
          styleRanks: {
            simple: StyleRank.s,
            cool: StyleRank.a,
            elegant: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__hat__dreamwalker",
                  quantity: 6,
                },
                {
                  itemId: "fashion__face__tender_gaze",
                  quantity: 5,
                },
                {
                  itemId: "fashion__ring__glassy_candy",
                  quantity: 6,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__shoes__shining_poem",
          name: "Shining Poem",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.formal,
          styleRanks: {
            simple: StyleRank.s,
            cool: StyleRank.a,
            elegant: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__shoes__fluttering_wings",
                  quantity: 6,
                },
                {
                  itemId: "fashion__socks__snow_hidden",
                  quantity: 4,
                },
                {
                  itemId: "fashion__socks__song_of_flowers",
                  quantity: 12,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__earrings__the_nocturne",
          name: "The Nocturne",
          starRank: 4,
          category: AccessoryCategory.earrings,
          tag1: Tag.formal,
          styleRanks: {
            simple: StyleRank.s,
            cool: StyleRank.a,
            elegant: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__hair__verdant_tassel",
                  quantity: 5,
                },
                {
                  itemId: "fashion__top__autumn_farm",
                  quantity: 5,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__handheld__midnight_murmur",
          name: "Midnight Murmur",
          starRank: 4,
          category: AccessoryCategory.handheld,
          tag1: Tag.formal,
          styleRanks: {
            simple: StyleRank.s,
            cool: StyleRank.a,
            elegant: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__shoes__strawberry_soda",
                  quantity: 5,
                },
                {
                  itemId: "fashion__socks__snow_hidden",
                  quantity: 5,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__plain_moon",
    name: "Plain Moon",
    starRank: 4,
    brandId: "evening_star",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.elegant,
    items: {
      create: [
        {
          id: "fashion__hairstyle__laurel",
          name: "Laurel",
          starRank: 4,
          category: FashionCategory.hairstyle,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.s,
            pure: StyleRank.a,
            gorgeous: StyleRank.b,
            sweet: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__dress__plain_moon",
          name: "Plain Moon",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.s,
            pure: StyleRank.a,
            gorgeous: StyleRank.b,
            sweet: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__socks__toe_and_moon",
          name: "Toe and Moon",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.s,
            pure: StyleRank.a,
            gorgeous: StyleRank.b,
            sweet: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__shoes__moonlight",
          name: "Moonlight",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.s,
            pure: StyleRank.a,
            gorgeous: StyleRank.b,
            sweet: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__hat__cloudy_night",
          name: "Cloudy Night",
          starRank: 4,
          category: AccessoryCategory.hat,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.s,
            pure: StyleRank.a,
            gorgeous: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__hair__long_longing",
          name: "Long Longing",
          starRank: 4,
          category: AccessoryCategory.hair,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.s,
            pure: StyleRank.a,
            gorgeous: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__necklace__moon_of_hearts",
          name: "Moon of Hearts",
          starRank: 4,
          category: AccessoryCategory.necklace,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.s,
            gorgeous: StyleRank.a,
            pure: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__ring__autumn_moon",
          name: "Autumn Moon",
          starRank: 4,
          category: AccessoryCategory.ring,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.s,
            pure: StyleRank.a,
            gorgeous: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__queen_of_snow",
    name: "Queen of Snow",
    starRank: 4,
    brandId: "evening_star",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.sexy,
    items: {
      create: [
        {
          id: "fashion__hairstyle__shining_night",
          name: "Shining Night",
          starRank: 4,
          category: FashionCategory.hairstyle,
          tag1: Tag.gown,
          tag2: Tag.classic,
          styleRanks: {
            sexy: StyleRank.s,
            elegant: StyleRank.a,
            cool: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__shoes__fluttering_wings",
                  quantity: 9,
                },
                {
                  itemId: "fashion__anklet__triangle_code",
                  quantity: 9,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__dress__queen_of_snow",
          name: "Queen of Snow",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.gown,
          styleRanks: {
            sexy: StyleRank.s,
            elegant: StyleRank.a,
            cool: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__shoes__strawberry_soda",
                  quantity: 11,
                },
                {
                  itemId: "fashion__earrings__summer_love",
                  quantity: 15,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__shoes__snow_region",
          name: "Snow Region",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.gown,
          styleRanks: {
            sexy: StyleRank.s,
            elegant: StyleRank.a,
            cool: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__gloves__capturing_starlight",
                  quantity: 5,
                },
                {
                  itemId: "fashion__socks__snow_hidden",
                  quantity: 6,
                },
                {
                  itemId: "fashion__necklace__starlight",
                  quantity: 8,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__hat__crown_of_darkness",
          name: "Crown of Darkness",
          starRank: 4,
          category: AccessoryCategory.hat,
          tag1: Tag.gown,
          styleRanks: {
            sexy: StyleRank.s,
            elegant: StyleRank.a,
            cool: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__socks__blackcat_girl",
                  quantity: 5,
                },
                {
                  itemId: "fashion__earrings__summer_love",
                  quantity: 5,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__wrist__northern_anthem",
          name: "Northern Anthem",
          starRank: 4,
          category: AccessoryCategory.wrist,
          tag1: Tag.gown,
          styleRanks: {
            sexy: StyleRank.s,
            elegant: StyleRank.a,
            cool: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__hat__dreamwalker",
                  quantity: 5,
                },
                {
                  itemId: "fashion__hair__starry_soda",
                  quantity: 6,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__gloves__snow_and_owl",
          name: "Snow and Owl",
          starRank: 4,
          category: AccessoryCategory.gloves,
          tag1: Tag.gown,
          styleRanks: {
            sexy: StyleRank.s,
            elegant: StyleRank.a,
            cool: StyleRank.b,
            gorgeous: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__hair__verdant_tassel",
                  quantity: 4,
                },
                {
                  itemId: "fashion__socks__green_gauze",
                  quantity: 6,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__florescence",
    name: "Florescence",
    starRank: 4,
    brandId: "evening_star",
    obtainType: ObtainType.lightchaseNightOfVvanna,
    mainStyle: Style.elegant,
    items: {
      create: [
        {
          id: "fashion__hairstyle__coiled_topknot",
          name: "Coiled Topknot",
          starRank: 4,
          category: FashionCategory.hairstyle,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__dress__florescence",
          name: "Florescence",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__socks__snow_of_pear",
          name: "Snow of Pear",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__shoes__sunshine_floret",
          name: "Sunshine Floret",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.traditional,
          styleRanks: {
            elegant: StyleRank.s,
            sweet: StyleRank.a,
            gorgeous: StyleRank.b,
            pure: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
      ],
    },
  },

  {
    id: "fashion__set__blurred_nightlight",
    name: "Blurred Nightlight",
    starRank: 6,
    brandId: "voice_and_color",
    obtainType: ObtainType.exchangeEndorsementShop,
    mainStyle: Style.sexy,
    items: {
      create: [
        {
          id: "fashion__hairstyle__nostalgic_twilight",
          name: "Nostalgic Twilight",
          starRank: 6,
          category: FashionCategory.hairstyle,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            elegant: StyleRank.s,
            gorgeous: StyleRank.s,
            cool: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeEndorsementShop, cost: 3080 },
          ],
        },
        {
          id: "fashion__top__blurred_nightlight",
          name: "Blurred Nightlight",
          starRank: 6,
          category: FashionCategory.top,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            elegant: StyleRank.s,
            gorgeous: StyleRank.s,
            cool: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeEndorsementShop, cost: 4620 },
          ],
        },
        {
          id: "fashion__bottom__fond_memories",
          name: "Fond Memories",
          starRank: 6,
          category: FashionCategory.bottom,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            elegant: StyleRank.s,
            gorgeous: StyleRank.s,
            cool: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeEndorsementShop, cost: 4620 },
          ],
        },
        {
          id: "fashion__shoes__shining_twilight",
          name: "Shining Twilight",
          starRank: 6,
          category: FashionCategory.shoes,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            elegant: StyleRank.s,
            gorgeous: StyleRank.s,
            cool: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeEndorsementShop, cost: 1540 },
          ],
        },
        {
          id: "fashion__hat__night_anthem",
          name: "Night Anthem",
          starRank: 6,
          category: AccessoryCategory.hat,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            elegant: StyleRank.s,
            gorgeous: StyleRank.s,
            cool: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeEndorsementShop, cost: 1540 },
          ],
        },
        {
          id: "fashion__hair__anthem_of_night",
          name: "Anthem of Night",
          starRank: 6,
          category: AccessoryCategory.hair,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            elegant: StyleRank.s,
            gorgeous: StyleRank.s,
            cool: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeEndorsementShop, cost: 1540 },
          ],
        },
        {
          id: "fashion__wings__cherished_dream",
          name: "Cherished Dream",
          starRank: 6,
          category: AccessoryCategory.wings,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            elegant: StyleRank.s,
            gorgeous: StyleRank.s,
            cool: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeEndorsementShop, cost: 3080 },
          ],
        },
        {
          id: "fashion__necklace__dim_night",
          name: "Dim Night",
          starRank: 6,
          category: AccessoryCategory.necklace,
          tag1: Tag.classic,
          tag2: Tag.gown,
          styleRanks: {
            sexy: StyleRank.sss,
            elegant: StyleRank.s,
            gorgeous: StyleRank.s,
            cool: StyleRank.s,
            fresh: StyleRank.a,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeEndorsementShop, cost: 1540 },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__lonely_melody",
    name: "Lonely Melody",
    starRank: 5,
    brandId: "voice_and_color",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.cool,
    items: {
      create: [
        {
          id: "fashion__hairstyle__girly_breeze",
          name: "Girly Breeze",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.street,
          styleRanks: {
            cool: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__dress__lonely_melody",
          name: "Lonely Melody",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.street,
          styleRanks: {
            cool: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__shoes__night_steps",
          name: "Night Steps",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.street,
          styleRanks: {
            cool: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__earrings__night_rhythm",
          name: "Night Rhythm",
          starRank: 5,
          category: AccessoryCategory.earrings,
          tag1: Tag.street,
          styleRanks: {
            cool: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__necklace__dark_flower",
          name: "Dark Flower",
          starRank: 5,
          category: AccessoryCategory.necklace,
          tag1: Tag.street,
          styleRanks: {
            cool: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__anklet__night_jade",
          name: "Night Jade",
          starRank: 5,
          category: AccessoryCategory.anklet,
          tag1: Tag.street,
          styleRanks: {
            cool: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__unrelenting_night",
    name: "Unrelenting Night",
    starRank: 5,
    brandId: "voice_and_color",
    obtainType: ObtainType.event,
    mainStyle: Style.cool,
    items: {
      create: [
        {
          id: "fashion__hairstyle__glory_night",
          name: "Glory Night",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.ladylike,
          tag2: Tag.street,
          styleRanks: {
            cool: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
        },
        {
          id: "fashion__top__golden_neon",
          name: "Golden Neon",
          starRank: 5,
          category: FashionCategory.top,
          tag1: Tag.ladylike,
          tag2: Tag.street,
          styleRanks: {
            cool: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
        },
        {
          id: "fashion__bottom__unrelenting_night",
          name: "Unrelenting Night",
          starRank: 5,
          category: FashionCategory.bottom,
          tag1: Tag.ladylike,
          tag2: Tag.street,
          styleRanks: {
            cool: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
        },
        {
          id: "fashion__socks__diamond_clock",
          name: "Diamond Clock",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.ladylike,
          tag2: Tag.street,
          styleRanks: {
            cool: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
        },
        {
          id: "fashion__shoes__void_notes",
          name: "Void Notes",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.ladylike,
          tag2: Tag.street,
          styleRanks: {
            cool: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
        },
        {
          id: "fashion__hat__charming_night",
          name: "Charming Night",
          starRank: 5,
          category: AccessoryCategory.hat,
          tag1: Tag.ladylike,
          tag2: Tag.street,
          styleRanks: {
            cool: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
        },
        {
          id: "fashion__wrist__light_picker",
          name: "Light Picker",
          starRank: 5,
          category: AccessoryCategory.wrist,
          tag1: Tag.ladylike,
          tag2: Tag.street,
          styleRanks: {
            cool: StyleRank.ss,
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.event }],
        },
      ],
    },
  },
  {
    id: "fashion__set__flaming_sky",
    name: "Flaming Sky",
    starRank: 5,
    brandId: "voice_and_color",
    obtainType: ObtainType.lightchaseNirvana,
    mainStyle: Style.lively,
    items: {
      create: [
        {
          id: "fashion__hairstyle__walnut_academy",
          name: "Walnut Academy",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.traditional,
          styleRanks: {
            lively: StyleRank.ss,
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
        {
          id: "fashion__coat__ink_drawn_kingdom",
          name: "Ink Drawn Kingdom",
          starRank: 5,
          category: FashionCategory.coat,
          tag1: Tag.traditional,
          styleRanks: {
            lively: StyleRank.ss,
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
        {
          id: "fashion__top__flaming_sky",
          name: "Flaming Sky",
          starRank: 5,
          category: FashionCategory.top,
          tag1: Tag.traditional,
          styleRanks: {
            lively: StyleRank.ss,
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
        {
          id: "fashion__bottom__fiery_cloud",
          name: "Fiery Cloud",
          starRank: 5,
          category: FashionCategory.bottom,
          tag1: Tag.traditional,
          styleRanks: {
            lively: StyleRank.ss,
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
        {
          id: "fashion__socks__royal_golden_medal",
          name: "Royal Golden Medal",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.traditional,
          styleRanks: {
            lively: StyleRank.ss,
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
        {
          id: "fashion__shoes__cloud_of_fortune",
          name: "Cloud Of Fortune",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.traditional,
          styleRanks: {
            lively: StyleRank.ss,
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
        {
          id: "fashion__earrings__lock_of_wish",
          name: "Lock of Wish",
          starRank: 5,
          category: AccessoryCategory.earrings,
          tag1: Tag.traditional,
          styleRanks: {
            lively: StyleRank.ss,
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
      ],
    },
  },
  {
    id: "fashion__set__witch_contract",
    name: "Witch Contract",
    starRank: 5,
    brandId: "voice_and_color",
    obtainType: ObtainType.lightchaseEssence,
    mainStyle: Style.sexy,
    items: {
      create: [
        {
          id: "fashion__hairstyle__starry_oath",
          name: "Starry Oath",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.gothic,
          tag2: Tag.fairytale,
          styleRanks: {
            sexy: StyleRank.ss,
            gorgeous: StyleRank.s,
            cool: StyleRank.a,
            lively: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__dress__witch_contract",
          name: "Witch Contract",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.gothic,
          tag2: Tag.fairytale,
          styleRanks: {
            sexy: StyleRank.ss,
            cool: StyleRank.s,
            lively: StyleRank.a,
            gorgeous: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__socks__witchs_whisper",
          name: "Witch's Whisper",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.gothic,
          tag2: Tag.fairytale,
          styleRanks: {
            sexy: StyleRank.ss,
            cool: StyleRank.s,
            lively: StyleRank.a,
            gorgeous: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__shoes__devils_pact",
          name: "Devil's Pact",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.gothic,
          tag2: Tag.fairytale,
          styleRanks: {
            sexy: StyleRank.ss,
            cool: StyleRank.s,
            lively: StyleRank.a,
            gorgeous: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__hat__vicissitudes_park",
          name: "Vicissitude Park",
          starRank: 5,
          category: AccessoryCategory.hat,
          tag1: Tag.gothic,
          tag2: Tag.fairytale,
          styleRanks: {
            sexy: StyleRank.ss,
            cool: StyleRank.s,
            lively: StyleRank.a,
            gorgeous: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__gloves__catch_stars",
          name: "Catch Stars",
          starRank: 5,
          category: AccessoryCategory.gloves,
          tag1: Tag.gothic,
          tag2: Tag.fairytale,
          styleRanks: {
            sexy: StyleRank.ss,
            gorgeous: StyleRank.s,
            cool: StyleRank.a,
            lively: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__wrist__diamond_pointer",
          name: "Diamond Pointer",
          starRank: 5,
          category: AccessoryCategory.wrist,
          tag1: Tag.gothic,
          tag2: Tag.fairytale,
          styleRanks: {
            sexy: StyleRank.ss,
            cool: StyleRank.s,
            lively: StyleRank.a,
            gorgeous: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__handheld__starchase_staff",
          name: "Starchase Staff",
          starRank: 5,
          category: AccessoryCategory.handheld,
          tag1: Tag.gothic,
          tag2: Tag.fairytale,
          styleRanks: {
            sexy: StyleRank.ss,
            gorgeous: StyleRank.s,
            lively: StyleRank.a,
            cool: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
      ],
    },
  },
  {
    id: "fashion__set__firefly_avenue",
    name: "Firefly Avenue",
    starRank: 5,
    brandId: "voice_and_color",
    obtainType: ObtainType.event,
    mainStyle: Style.sexy,
    items: {
      create: [
        {
          id: "fashion__hairstyle__busy_night",
          name: "Busy Night",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.street,
          tag2: Tag.ladylike,
          styleRanks: {
            sexy: StyleRank.ss,
            simple: StyleRank.s,
            lively: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
            },
          ],
        },
        {
          id: "fashion__dress__firefly_avenue",
          name: "Firefly Avenue",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.street,
          tag2: Tag.ladylike,
          styleRanks: {
            sexy: StyleRank.ss,
            simple: StyleRank.s,
            lively: StyleRank.a,
            cool: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
            },
          ],
        },
        {
          id: "fashion__coat__night_breeze",
          name: "Night Breeze",
          starRank: 5,
          category: FashionCategory.coat,
          tag1: Tag.street,
          tag2: Tag.ladylike,
          styleRanks: {
            sexy: StyleRank.ss,
            simple: StyleRank.s,
            cool: StyleRank.a,
            warm: StyleRank.a,
            lively: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
            },
          ],
        },
        {
          id: "fashion__socks__night_song",
          name: "Night Song",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.street,
          tag2: Tag.ladylike,
          styleRanks: {
            sexy: StyleRank.ss,
            simple: StyleRank.s,
            lively: StyleRank.a,
            cool: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
            },
          ],
        },
        {
          id: "fashion__shoes__road_to_glory",
          name: "Road to Glory",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.street,
          tag2: Tag.ladylike,
          styleRanks: {
            sexy: StyleRank.ss,
            gorgeous: StyleRank.s,
            warm: StyleRank.a,
            cool: StyleRank.a,
            lively: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
            },
          ],
        },
        {
          id: "fashion__earrings__flowing_light",
          name: "Flowing Light",
          starRank: 5,
          category: AccessoryCategory.earrings,
          tag1: Tag.street,
          tag2: Tag.ladylike,
          styleRanks: {
            sexy: StyleRank.ss,
            simple: StyleRank.s,
            lively: StyleRank.a,
            cool: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
            },
          ],
        },
        {
          id: "fashion__necklace__shining_stars",
          name: "Shining Stars",
          starRank: 5,
          category: AccessoryCategory.necklace,
          tag1: Tag.street,
          tag2: Tag.ladylike,
          styleRanks: {
            sexy: StyleRank.ss,
            simple: StyleRank.s,
            lively: StyleRank.a,
            cool: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
            },
          ],
        },
        {
          id: "fashion__handheld__star_glimmer",
          name: "Star Glimmer",
          starRank: 5,
          category: AccessoryCategory.handheld,
          tag1: Tag.street,
          tag2: Tag.ladylike,
          styleRanks: {
            sexy: StyleRank.ss,
            simple: StyleRank.s,
            lively: StyleRank.a,
            cool: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__auggilias_kiss",
    name: "Auggilia's Kiss",
    starRank: 5,
    brandId: "voice_and_color",
    obtainType: ObtainType.giftExhibition,
    mainStyle: Style.sexy,
    items: {
      create: [
        {
          id: "fashion__hairstyle__silent_nocturne",
          name: "Silent Nocturne",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.classic,
          tag2: Tag.dancer,
          styleRanks: {
            sexy: StyleRank.ss,
            elegant: StyleRank.s,
            gorgeous: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.giftExhibition,
            },
          ],
        },
        {
          id: "fashion__top__auggilias_kiss",
          name: "Auggilia's Kiss",
          starRank: 5,
          category: FashionCategory.top,
          tag1: Tag.classic,
          tag2: Tag.dancer,
          styleRanks: {
            sexy: StyleRank.ss,
            gorgeous: StyleRank.s,
            cool: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.giftExhibition,
            },
          ],
        },
        {
          id: "fashion__bottom__dance_of_black_swan",
          name: "Dance of Black Swan",
          starRank: 5,
          category: FashionCategory.bottom,
          tag1: Tag.classic,
          tag2: Tag.dancer,
          styleRanks: {
            sexy: StyleRank.ss,
            gorgeous: StyleRank.s,
            elegant: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.giftExhibition,
            },
          ],
        },
        {
          id: "fashion__socks__interlaced_waltz",
          name: "Interlaced Waltz",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.classic,
          tag2: Tag.dancer,
          styleRanks: {
            sexy: StyleRank.ss,
            elegant: StyleRank.s,
            gorgeous: StyleRank.a,
            sweet: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.giftExhibition,
            },
          ],
        },
        {
          id: "fashion__shoes__moon_river_ripples",
          name: "Moon River Ripples",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.classic,
          tag2: Tag.dancer,
          styleRanks: {
            sexy: StyleRank.ss,
            elegant: StyleRank.s,
            gorgeous: StyleRank.a,
            cool: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.giftExhibition,
            },
          ],
        },
        {
          id: "fashion__hat__soak_in_the_dawn",
          name: "Soak in the Dawn",
          starRank: 5,
          category: AccessoryCategory.hat,
          tag1: Tag.classic,
          tag2: Tag.dancer,
          styleRanks: {
            sexy: StyleRank.ss,
            elegant: StyleRank.s,
            cool: StyleRank.a,
            gorgeous: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.giftExhibition,
            },
          ],
        },
        {
          id: "fashion__earrings__evening_prayer",
          name: "Evening Prayer",
          starRank: 5,
          category: AccessoryCategory.earrings,
          tag1: Tag.classic,
          tag2: Tag.dancer,
          styleRanks: {
            sexy: StyleRank.ss,
            gorgeous: StyleRank.s,
            elegant: StyleRank.a,
            cool: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.giftExhibition,
            },
          ],
        },
        {
          id: "fashion__gloves__dormant_night",
          name: "Dormant Night",
          starRank: 5,
          category: AccessoryCategory.gloves,
          tag1: Tag.classic,
          tag2: Tag.dancer,
          styleRanks: {
            sexy: StyleRank.ss,
            elegant: StyleRank.s,
            gorgeous: StyleRank.a,
            cool: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.giftExhibition,
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__azure_rhapsody",
    name: "Azure Rhapsody",
    starRank: 5,
    brandId: "voice_and_color",
    obtainType: ObtainType.lightchaseEssence,
    mainStyle: Style.cool,
    items: {
      create: [
        {
          id: "fashion__hairstyle__sunshine_storm",
          name: "Sunshine Storm",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.cyberpunk,
          styleRanks: {
            cool: StyleRank.ss,
            gorgeous: StyleRank.s,
            lively: StyleRank.a,
            sexy: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__dress__azure_rhapsody",
          name: "Azure Rhapsody",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.cyberpunk,
          styleRanks: {
            cool: StyleRank.ss,
            lively: StyleRank.s,
            gorgeous: StyleRank.a,
            sexy: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__coat__reversed_universe",
          name: "Reversed Universe",
          starRank: 5,
          category: FashionCategory.coat,
          tag1: Tag.cyberpunk,
          styleRanks: {
            cool: StyleRank.ss,
            lively: StyleRank.s,
            gorgeous: StyleRank.a,
            sexy: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__shoes__azure_knight",
          name: "Azure Knight",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.cyberpunk,
          styleRanks: {
            cool: StyleRank.ss,
            lively: StyleRank.s,
            gorgeous: StyleRank.a,
            sexy: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__hat__meow_meow",
          name: "Meow Meow",
          starRank: 5,
          category: AccessoryCategory.hat,
          tag1: Tag.cyberpunk,
          styleRanks: {
            cool: StyleRank.ss,
            lively: StyleRank.s,
            gorgeous: StyleRank.a,
            sexy: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__hair__sound_of_stars",
          name: "Sound of Stars",
          starRank: 5,
          category: AccessoryCategory.hair,
          tag1: Tag.cyberpunk,
          styleRanks: {
            cool: StyleRank.ss,
            lively: StyleRank.s,
            gorgeous: StyleRank.a,
            sexy: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__gloves__star_guardian",
          name: "Star Guardian",
          starRank: 5,
          category: AccessoryCategory.gloves,
          tag1: Tag.cyberpunk,
          styleRanks: {
            cool: StyleRank.ss,
            lively: StyleRank.s,
            gorgeous: StyleRank.a,
            sexy: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__handheld__blue_electronica",
          name: "Blue Electronica",
          starRank: 5,
          category: AccessoryCategory.handheld,
          tag1: Tag.cyberpunk,
          styleRanks: {
            cool: StyleRank.ss,
            gorgeous: StyleRank.s,
            lively: StyleRank.a,
            sexy: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
        {
          id: "fashion__wings__transcendent_scale",
          name: "Transcendent Scale",
          starRank: 5,
          category: AccessoryCategory.wings,
          tag1: Tag.cyberpunk,
          styleRanks: {
            cool: StyleRank.ss,
            lively: StyleRank.s,
            gorgeous: StyleRank.a,
            sexy: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseEssence }],
        },
      ],
    },
  },
  {
    id: "fashion__set__evernight_rose",
    name: "Evernight Rose",
    starRank: 5,
    brandId: "voice_and_color",
    obtainType: ObtainType.craftMindTravel,
    mainStyle: Style.cool,
    items: {
      create: [
        {
          id: "fashion__hairstyle__eternal_flower",
          name: "Eternal Flower",
          starRank: 5,
          category: FashionCategory.hairstyle,
          tag1: Tag.gothic,
          tag2: Tag.lolita,
          styleRanks: {
            cool: StyleRank.ss,
            elegant: StyleRank.s,
            gorgeous: StyleRank.a,
            sexy: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__necklace__wear_night",
                  quantity: 32,
                },
                {
                  itemId: "fashion__dress__leisure_weekend",
                  quantity: 19,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__dress__evernight_rose",
          name: "Evernight Rose",
          starRank: 5,
          category: FashionCategory.dress,
          tag1: Tag.gothic,
          tag2: Tag.lolita,
          styleRanks: {
            cool: StyleRank.ss,
            elegant: StyleRank.s,
            gorgeous: StyleRank.a,
            sexy: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__shoes__clever_girl",
                  quantity: 48,
                },
                {
                  itemId: "fashion__bottom__blueberry_bubble",
                  quantity: 31,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__socks__nighttime_riddle",
          name: "Nighttime Riddle",
          starRank: 5,
          category: FashionCategory.socks,
          tag1: Tag.gothic,
          tag2: Tag.lolita,
          styleRanks: {
            cool: StyleRank.ss,
            sexy: StyleRank.s,
            gorgeous: StyleRank.a,
            lively: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__hair__floral_makeup",
                  quantity: 19,
                },
                {
                  itemId: "fashion__dress__rose_chanson",
                  quantity: 11,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__shoes__midnight_dance",
          name: "Midnight Dance",
          starRank: 5,
          category: FashionCategory.shoes,
          tag1: Tag.gothic,
          tag2: Tag.lolita,
          styleRanks: {
            cool: StyleRank.ss,
            sexy: StyleRank.s,
            gorgeous: StyleRank.a,
            elegant: StyleRank.a,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__hair__love_of_butterfly",
                  quantity: 19,
                },
                {
                  itemId: "fashion__top__rainbow_light",
                  quantity: 11,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__hair__thistle_rose",
          name: "Thistle Rose",
          starRank: 5,
          category: AccessoryCategory.hair,
          tag1: Tag.gothic,
          tag2: Tag.lolita,
          styleRanks: {
            cool: StyleRank.ss,
            elegant: StyleRank.s,
            gorgeous: StyleRank.a,
            sexy: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__socks__flower_bow",
                  quantity: 19,
                },
                {
                  itemId: "fashion__dress__fleeting_gold",
                  quantity: 11,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__earrings_night_prayer",
          name: "Night Prayer",
          starRank: 5,
          category: AccessoryCategory.earrings,
          tag1: Tag.gothic,
          tag2: Tag.lolita,
          styleRanks: {
            cool: StyleRank.ss,
            elegant: StyleRank.s,
            gorgeous: StyleRank.a,
            sexy: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__shoes__clever_girl",
                  quantity: 15,
                },
                {
                  itemId: "fashion__bottom__gilded_forest",
                  quantity: 9,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__necklace__dark_lord",
          name: "Dark Lord",
          starRank: 5,
          category: AccessoryCategory.necklace,
          tag1: Tag.gothic,
          tag2: Tag.lolita,
          styleRanks: {
            cool: StyleRank.ss,
            elegant: StyleRank.s,
            gorgeous: StyleRank.a,
            sexy: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__socks__flower_bow",
                  quantity: 19,
                },
                {
                  itemId: "fashion__dress__refreshing_mint",
                  quantity: 11,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__wrist__rose_bracelet",
          name: "Rose Bracelet",
          starRank: 5,
          category: AccessoryCategory.wrist,
          tag1: Tag.gothic,
          tag2: Tag.lolita,
          styleRanks: {
            cool: StyleRank.ss,
            elegant: StyleRank.s,
            gorgeous: StyleRank.a,
            sexy: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__bottom__blue_symphony",
                  quantity: 15,
                },
                {
                  itemId: "fashion__dress__sunlight",
                  quantity: 9,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__gloves__red_crescent",
          name: "Red Crescent",
          starRank: 5,
          category: AccessoryCategory.gloves,
          tag1: Tag.gothic,
          tag2: Tag.lolita,
          styleRanks: {
            cool: StyleRank.ss,
            elegant: StyleRank.s,
            gorgeous: StyleRank.a,
            sexy: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__socks__nocturnal_castle",
                  quantity: 15,
                },
                {
                  itemId: "fashion__dress__swans_peck",
                  quantity: 9,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__wings__night_wings",
          name: "Night Wings",
          starRank: 5,
          category: AccessoryCategory.wings,
          tag1: Tag.gothic,
          tag2: Tag.lolita,
          styleRanks: {
            cool: StyleRank.ss,
            elegant: StyleRank.s,
            gorgeous: StyleRank.a,
            sexy: StyleRank.a,
            warm: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
              materialCost: [
                {
                  itemId: "fashion__face__gold_mask",
                  quantity: 34,
                },
                {
                  itemId: "fashion__dress__soft_candy",
                  quantity: 19,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__rosa_alba",
    name: "Rosa Alba",
    starRank: 4,
    brandId: "voice_and_color",
    obtainType: ObtainType.lightchaseSnowDome,
    mainStyle: Style.sexy,
    items: {
      create: [
        {
          id: "fashion__dress__rosa_alba",
          name: "Rosa Alba",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.girl_group,
          styleRanks: {
            sexy: StyleRank.s,
            cool: StyleRank.a,
            lively: StyleRank.b,
            simple: StyleRank.b,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseSnowDome }],
        },
        {
          id: "fashion__socks__daytime_meteor",
          name: "Daytime Meteor",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.girl_group,
          styleRanks: {
            sexy: StyleRank.s,
            cool: StyleRank.a,
            lively: StyleRank.b,
            simple: StyleRank.b,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseSnowDome }],
        },
        {
          id: "fashion__shoes__dusk_and_dawn",
          name: "Dusk and Dawn",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.girl_group,
          styleRanks: {
            sexy: StyleRank.s,
            cool: StyleRank.a,
            lively: StyleRank.b,
            simple: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseSnowDome }],
        },
        {
          id: "fashion__earrings__night_starsea",
          name: "Night Starsea",
          starRank: 4,
          category: AccessoryCategory.earrings,
          tag1: Tag.girl_group,
          styleRanks: {
            sexy: StyleRank.s,
            cool: StyleRank.a,
            lively: StyleRank.b,
            simple: StyleRank.b,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseSnowDome }],
        },
        {
          id: "fashion__handheld__creeping_darkness",
          name: "Creeping Darkness",
          starRank: 4,
          category: AccessoryCategory.handheld,
          tag1: Tag.girl_group,
          styleRanks: {
            sexy: StyleRank.s,
            cool: StyleRank.a,
            lively: StyleRank.b,
            simple: StyleRank.b,
            fresh: StyleRank.b,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseSnowDome }],
        },
      ],
    },
  },
  {
    id: "fashion__set__throbbing_beats",
    name: "Throbbing Beats",
    starRank: 4,
    brandId: "voice_and_color",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.lively,
    items: {
      create: [
        {
          id: "fashion__coat__locking_signal",
          name: "Locking Signal",
          starRank: 4,
          category: FashionCategory.coat,
          tag1: Tag.sporty,
          styleRanks: {
            lively: StyleRank.s,
            cool: StyleRank.a,
            sexy: StyleRank.b,
            fresh: StyleRank.b,
            simple: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__top__throbbing_beats",
          name: "Throbbing Beats",
          starRank: 4,
          category: FashionCategory.top,
          tag1: Tag.sporty,
          styleRanks: {
            lively: StyleRank.s,
            cool: StyleRank.a,
            sexy: StyleRank.b,
            fresh: StyleRank.b,
            simple: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__bottom__unbalanced_beats",
          name: "Unbalanced Beats",
          starRank: 4,
          category: FashionCategory.bottom,
          tag1: Tag.sporty,
          styleRanks: {
            lively: StyleRank.s,
            cool: StyleRank.a,
            sexy: StyleRank.b,
            fresh: StyleRank.b,
            simple: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__socks__layers_of_love",
          name: "Layers of Love",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.sporty,
          styleRanks: {
            lively: StyleRank.s,
            cool: StyleRank.a,
            sexy: StyleRank.b,
            fresh: StyleRank.b,
            simple: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__shoes__treecreeper",
          name: "Treecreeper",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.sporty,
          styleRanks: {
            lively: StyleRank.s,
            cool: StyleRank.a,
            warm: StyleRank.b,
            simple: StyleRank.b,
            sexy: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__seductive_city",
    name: "Seductive City",
    starRank: 4,
    brandId: "voice_and_color",
    obtainType: ObtainType.event,
    mainStyle: Style.sexy,
    items: {
      create: [
        {
          id: "fashion__dress__seductive_city",
          name: "Seductive City",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.street,
          styleRanks: {
            sexy: StyleRank.s,
            cool: StyleRank.a,
            gorgeous: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
            },
          ],
        },
        {
          id: "fashion__coat__luminating_sky",
          name: "Luminating Sky",
          starRank: 4,
          category: FashionCategory.coat,
          tag1: Tag.street,
          styleRanks: {
            sexy: StyleRank.s,
            cool: StyleRank.a,
            gorgeous: StyleRank.b,
            elegant: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
            },
          ],
        },
        {
          id: "fashion__socks__cover_of_dusk",
          name: "Cover of Dusk",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.street,
          styleRanks: {
            sexy: StyleRank.s,
            cool: StyleRank.a,
            gorgeous: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
            },
          ],
        },
        {
          id: "fashion__shoes__phantom_steps_1",
          name: "Phantom Steps",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.street,
          styleRanks: {
            sexy: StyleRank.s,
            cool: StyleRank.a,
            gorgeous: StyleRank.b,
            elegant: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
            },
          ],
        },
        {
          id: "fashion__handheld__ever_flowing_cloud",
          name: "Ever-flowing Cloud",
          starRank: 4,
          category: AccessoryCategory.handheld,
          tag1: Tag.street,
          styleRanks: {
            sexy: StyleRank.s,
            cool: StyleRank.a,
            gorgeous: StyleRank.b,
            elegant: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__hearts_whisper",
    name: "Heart's Whisper",
    starRank: 4,
    brandId: "voice_and_color",
    obtainType: ObtainType.craftOther,
    mainStyle: Style.simple,
    items: {
      create: [
        {
          id: "fashion__top__hearts_whisper",
          name: "Heart's Whisper",
          starRank: 4,
          category: FashionCategory.top,
          tag1: Tag.ladylike,
          styleRanks: {
            simple: StyleRank.s,
            lively: StyleRank.a,
            fresh: StyleRank.b,
            cool: StyleRank.b,
            sexy: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftOther,
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
            },
          ],
        },
        {
          id: "fashion__bottom__midnight_yearning",
          name: "Midnight Yearning",
          starRank: 4,
          category: FashionCategory.bottom,
          tag1: Tag.ladylike,
          styleRanks: {
            simple: StyleRank.s,
            lively: StyleRank.a,
            fresh: StyleRank.b,
            cool: StyleRank.b,
            sexy: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftOther,
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
            },
          ],
        },
        {
          id: "fashion__socks__myriad_thoughts",
          name: "Myriad Thoughts",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.ladylike,
          styleRanks: {
            simple: StyleRank.s,
            lively: StyleRank.a,
            fresh: StyleRank.b,
            cool: StyleRank.b,
            sexy: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftOther,
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
            },
          ],
        },
        {
          id: "fashion__shoes__starlight_shadow",
          name: "Starlight Shadow",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.ladylike,
          styleRanks: {
            simple: StyleRank.s,
            lively: StyleRank.a,
            fresh: StyleRank.b,
            cool: StyleRank.b,
            sexy: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftOther,
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
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__cowslip_creeper",
    name: "Cowslip Creeper",
    starRank: 4,
    brandId: "voice_and_color",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.simple,
    items: {
      create: [
        {
          id: "fashion__dress_cowslip_creeper",
          name: "Cowslip Creeper",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.formal,
          tag2: Tag.ladylike,
          styleRanks: {
            simple: StyleRank.s,
            elegant: StyleRank.a,
            cool: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__coat__night_aroma",
          name: "Night Aroma",
          starRank: 4,
          category: FashionCategory.coat,
          tag1: Tag.formal,
          tag2: Tag.ladylike,
          styleRanks: {
            simple: StyleRank.s,
            elegant: StyleRank.a,
            cool: StyleRank.b,
            sexy: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__socks__emotion_of_night",
          name: "Emotion Of Night",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.formal,
          tag2: Tag.ladylike,
          styleRanks: {
            simple: StyleRank.s,
            elegant: StyleRank.a,
            cool: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__shoes__night_vines",
          name: "Night Vines",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.formal,
          tag2: Tag.ladylike,
          styleRanks: {
            simple: StyleRank.s,
            elegant: StyleRank.a,
            cool: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__handheld__blooming_jasmine",
          name: "Blooming Jasmine",
          starRank: 4,
          category: AccessoryCategory.handheld,
          tag1: Tag.formal,
          tag2: Tag.ladylike,
          styleRanks: {
            simple: StyleRank.s,
            elegant: StyleRank.a,
            cool: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__gilded_orbit",
    name: "Gilded Orbit",
    starRank: 4,
    brandId: "voice_and_color",
    obtainType: ObtainType.event,
    mainStyle: Style.cool,
    items: {
      create: [
        {
          id: "fashion__dress__gilded_orbit",
          name: "Gilded Orbit",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.street,
          styleRanks: {
            cool: StyleRank.s,
            elegant: StyleRank.a,
            gorgeous: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
            },
          ],
        },

        {
          id: "fashion__socks__sinking_moon_star",
          name: "Sinking Moon Star",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.street,
          styleRanks: {
            cool: StyleRank.s,
            elegant: StyleRank.a,
            gorgeous: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
            },
          ],
        },

        {
          id: "fashion__shoes__pilgrimage_of_star",
          name: "Pilgrimage of Star",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.street,
          styleRanks: {
            cool: StyleRank.s,
            elegant: StyleRank.a,
            gorgeous: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
            },
          ],
        },

        {
          id: "fashion__hat__golden_ceremony",
          name: "Golden Ceremony",
          starRank: 4,
          category: AccessoryCategory.hat,
          tag1: Tag.street,
          styleRanks: {
            cool: StyleRank.s,
            elegant: StyleRank.a,
            gorgeous: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
            },
          ],
        },

        {
          id: "fashion__earrings__willow_twined_star",
          name: "Willow Twined Star",
          starRank: 4,
          category: AccessoryCategory.earrings,
          tag1: Tag.street,
          styleRanks: {
            cool: StyleRank.s,
            elegant: StyleRank.a,
            gorgeous: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.b,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
            },
          ],
        },

        {
          id: "fashion__necklace__bright_star_trail",
          name: "Bright Star Trail",
          starRank: 4,
          category: AccessoryCategory.necklace,
          tag1: Tag.street,
          styleRanks: {
            cool: StyleRank.s,
            elegant: StyleRank.a,
            gorgeous: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.event,
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__dark_banquet",
    name: "Dark Banquet",
    starRank: 4,
    brandId: "voice_and_color",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.cool,
    items: {
      create: [
        {
          id: "fashion__hairstyle__shining_night_2",
          name: "Shining Night",
          starRank: 4,
          category: FashionCategory.hairstyle,
          tag1: Tag.ladylike,
          tag2: Tag.street,
          styleRanks: {
            cool: StyleRank.s,
            simple: StyleRank.a,
            sexy: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__fleeting_gold",
                  quantity: 29,
                },
                {
                  itemId: "fashion__socks__short_step_slipper",
                  quantity: 54,
                },
                {
                  itemId: "fashion__socks__mottled_snow",
                  quantity: 53,
                },
                {
                  itemId: "fashion__tattoo__light_dance",
                  quantity: 32,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__top__dark_banquet",
          name: "Dark Banquet",
          starRank: 4,
          category: FashionCategory.top,
          tag1: Tag.ladylike,
          tag2: Tag.street,
          styleRanks: {
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__bottom__gilded_forest",
                  quantity: 21,
                },
                {
                  itemId: "fashion__socks__mottled_snow",
                  quantity: 48,
                },
                {
                  itemId: "fashion__hat__crane_figure",
                  quantity: 48,
                },
                {
                  itemId: "fashion__tattoo__light_dance",
                  quantity: 32,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__bottom__dark_night_phantom",
          name: "Dark Night Phantom",
          starRank: 4,
          category: FashionCategory.bottom,
          tag1: Tag.ladylike,
          tag2: Tag.street,
          styleRanks: {
            cool: StyleRank.s,
            simple: StyleRank.a,
            sexy: StyleRank.b,
            elegant: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__southern_holiday",
                  quantity: 13,
                },
                {
                  itemId: "fashion__hat__crane_figure",
                  quantity: 47,
                },
                {
                  itemId: "fashion__socks__short_step_slipper",
                  quantity: 47,
                },
                {
                  itemId: "fashion__dress__unfettered_trip",
                  quantity: 32,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__socks__white_fantasy",
          name: "White Fantasy",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.ladylike,
          tag2: Tag.street,
          styleRanks: {
            cool: StyleRank.s,
            simple: StyleRank.a,
            sexy: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__bottom__blueberry_bubble",
                  quantity: 14,
                },
                {
                  itemId: "fashion__tattoo__paper_plane",
                  quantity: 54,
                },
                {
                  itemId: "fashion__shoes__rusted_manor",
                  quantity: 16,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__shoes__phantom_steps_2",
          name: "Phantom Steps",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.ladylike,
          tag2: Tag.street,
          styleRanks: {
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__honeypeach",
                  quantity: 8,
                },
                {
                  itemId: "fashion__socks__short_step_slipper",
                  quantity: 53,
                },
                {
                  itemId: "fashion__necklace__golden_light",
                  quantity: 22,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__handheld__black_serenade",
          name: "Black Serenade",
          starRank: 4,
          category: AccessoryCategory.handheld,
          tag1: Tag.ladylike,
          tag2: Tag.street,
          styleRanks: {
            cool: StyleRank.s,
            simple: StyleRank.a,
            sexy: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__dress__refreshing_mint",
                  quantity: 15,
                },
                {
                  itemId: "fashion__socks__short_step_slipper",
                  quantity: 34,
                },
                {
                  itemId: "fashion__tattoo__light_dance",
                  quantity: 41,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__song_of_thorns",
    name: "Song of Thorns",
    starRank: 4,
    brandId: "voice_and_color",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.cool,
    items: {
      create: [
        {
          id: "fashion__top__song_of_thorns",
          name: "Song of Thorns",
          starRank: 4,
          category: FashionCategory.top,
          tag1: Tag.preppy,
          styleRanks: {
            cool: StyleRank.s,
            simple: StyleRank.a,
            lively: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__bottom__endless_sound",
          name: "Endless Sound",
          starRank: 4,
          category: FashionCategory.bottom,
          tag1: Tag.preppy,
          styleRanks: {
            cool: StyleRank.s,
            simple: StyleRank.a,
            lively: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__shoes__strawberry_soda",
                  quantity: 22,
                },
                {
                  itemId: "fashion__socks__sky_and_sea",
                  quantity: 32,
                },
                {
                  itemId: "fashion__top__warm_sun",
                  quantity: 22,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__socks__badge_of_thorns",
          name: "Badge of Thorns",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.preppy,
          styleRanks: {
            cool: StyleRank.s,
            simple: StyleRank.a,
            lively: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__face__verdant_tassel",
                  quantity: 16,
                },
                {
                  itemId: "fashion__socks__long_moonset",
                  quantity: 18,
                },
                {
                  itemId: "fashion__bottom__noir_trend",
                  quantity: 12,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__shoes__step_over_thorns",
          name: "Step Over Thorns",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.preppy,
          styleRanks: {
            cool: StyleRank.s,
            simple: StyleRank.a,
            lively: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__shoes__motley_nightlight",
                  quantity: 14,
                },
                {
                  itemId: "fashion__hair__starry_soda",
                  quantity: 20,
                },
                {
                  itemId: "fashion__coat__lotus_leaf",
                  quantity: 11,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__necklace__ring_of_thorns",
          name: "Ring of Thorns",
          starRank: 4,
          category: AccessoryCategory.necklace,
          tag1: Tag.preppy,
          styleRanks: {
            cool: StyleRank.s,
            simple: StyleRank.a,
            lively: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__shoes__fluttering_wings",
                  quantity: 17,
                },
                {
                  itemId: "fashion__face__tender_gaze",
                  quantity: 18,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__colorful_heart",
    name: "Colorful Heart",
    starRank: 4,
    brandId: "voice_and_color",
    obtainType: ObtainType.lightchaseNightOfVvanna,
    mainStyle: Style.cool,
    items: {
      create: [
        {
          id: "fashion__dress__colorful_heart",
          name: "Colorful Heart",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.street,
          tag2: Tag.street_punk,
          styleRanks: {
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__shoes__glowing_shadow",
          name: "Glowing Shadow",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.street,
          tag2: Tag.street_punk,
          styleRanks: {
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.b,
            warm: StyleRank.b,
            lively: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__hat__cotton_clouds",
          name: "Cotton Clouds",
          starRank: 4,
          category: AccessoryCategory.hat,
          tag1: Tag.street,
          tag2: Tag.street_punk,
          styleRanks: {
            cool: StyleRank.s,
            simple: StyleRank.a,
            sexy: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__handheld__fluffy_clouds",
          name: "Fluffy Clouds",
          starRank: 4,
          category: AccessoryCategory.handheld,
          tag1: Tag.street,
          tag2: Tag.street_punk,
          styleRanks: {
            cool: StyleRank.s,
            simple: StyleRank.a,
            sexy: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
      ],
    },
  },
  {
    id: "fashion__set__freedom_oath",
    name: "Freedom Oath",
    starRank: 4,
    brandId: "voice_and_color",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.sexy,
    items: {
      create: [
        {
          id: "fashion__dress__freedom_oath",
          name: "Freedom Oath",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.hot_girl,
          tag2: Tag.street,
          styleRanks: {
            sexy: StyleRank.s,
            simple: StyleRank.a,
            cool: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__coat__bumpy_ride",
          name: "Bumpy Ride",
          starRank: 4,
          category: FashionCategory.coat,
          tag1: Tag.hot_girl,
          tag2: Tag.street,
          styleRanks: {
            sexy: StyleRank.s,
            cool: StyleRank.a,
            gorgeous: StyleRank.b,
            lively: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__socks__flowing_light",
          name: "Flowing Light",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.hot_girl,
          tag2: Tag.street,
          styleRanks: {
            sexy: StyleRank.s,
            simple: StyleRank.a,
            cool: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__shoes__star_chart",
          name: "Star Chart",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.hot_girl,
          tag2: Tag.street,
          styleRanks: {
            sexy: StyleRank.s,
            cool: StyleRank.a,
            gorgeous: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__earrings__gold_nighttalk",
          name: "Gold Nighttalk",
          starRank: 4,
          category: AccessoryCategory.earrings,
          tag1: Tag.hot_girl,
          tag2: Tag.street,
          styleRanks: {
            sexy: StyleRank.s,
            simple: StyleRank.a,
            cool: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__silent_midnight",
    name: "Silent Midnight",
    starRank: 4,
    brandId: "voice_and_color",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.elegant,
    items: {
      create: [
        {
          id: "fashion__hairstyle__deep_attachment",
          name: "Deep Attachment",
          starRank: 4,
          category: FashionCategory.hairstyle,
          tag1: Tag.formal,
          styleRanks: {
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.b,
            cool: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__dress__silent_midnight",
          name: "Silent Midnight",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.formal,
          styleRanks: {
            elegant: StyleRank.s,
            cool: StyleRank.b,
            simple: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__socks__ode_to_autumn",
          name: "Ode to Autumn",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.formal,
          styleRanks: {
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.b,
            cool: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__shoes__blurred_night",
          name: "Blurred Night",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.formal,
          styleRanks: {
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.b,
            cool: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__handheld__twinking_stars",
          name: "Twinking Stars",
          starRank: 4,
          category: AccessoryCategory.handheld,
          tag1: Tag.formal,
          styleRanks: {
            elegant: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.b,
            cool: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__frozen_coke",
    name: "Frozen Coke",
    starRank: 4,
    brandId: "voice_and_color",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.cool,
    items: {
      create: [
        {
          id: "fashion__hairstyle__hearty_soda",
          name: "Hearty Soda",
          starRank: 4,
          category: FashionCategory.hairstyle,
          tag1: Tag.sporty,
          styleRanks: {
            cool: StyleRank.s,
            pure: StyleRank.a,
            lively: StyleRank.b,
            simple: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__top__frozen_coke",
          name: "Frozen Coke",
          starRank: 4,
          category: FashionCategory.top,
          tag1: Tag.sporty,
          styleRanks: {
            cool: StyleRank.s,
            pure: StyleRank.a,
            lively: StyleRank.b,
            simple: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__bottom__nulled_genes",
          name: "Nulled Genes",
          starRank: 4,
          category: FashionCategory.bottom,
          tag1: Tag.sporty,
          styleRanks: {
            cool: StyleRank.s,
            pure: StyleRank.a,
            lively: StyleRank.b,
            simple: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__shoes__mint_soda",
          name: "Mint Soda",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.sporty,
          styleRanks: {
            cool: StyleRank.s,
            pure: StyleRank.a,
            lively: StyleRank.b,
            simple: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__handheld__absolute_zero",
          name: "Absolute Zero",
          starRank: 4,
          category: AccessoryCategory.handheld,
          tag1: Tag.sporty,
          tag2: Tag.street_punk,
          styleRanks: {
            cool: StyleRank.s,
            pure: StyleRank.a,
            lively: StyleRank.b,
            simple: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__private_love",
    name: "Private Love",
    starRank: 4,
    brandId: "voice_and_color",
    obtainType: ObtainType.giftExhibition,
    mainStyle: Style.sexy,
    items: {
      create: [
        {
          id: "fashion__top__private_love",
          name: "Private Love",
          starRank: 4,
          category: FashionCategory.top,
          tag1: Tag.girl_group,
          tag2: Tag.street,
          styleRanks: {
            sexy: StyleRank.s,
            lively: StyleRank.a,
            gorgeous: StyleRank.b,
            cool: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.giftExhibition }],
        },
        {
          id: "fashion__bottom__dancing_reverie",
          name: "Dancing Reverie",
          starRank: 4,
          category: FashionCategory.bottom,
          tag1: Tag.girl_group,
          tag2: Tag.street,
          styleRanks: {
            sexy: StyleRank.s,
            lively: StyleRank.a,
            gorgeous: StyleRank.b,
            cool: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.giftExhibition }],
        },
        {
          id: "fashion__shoes__graceful_dancing",
          name: "Graceful Dancing",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.girl_group,
          tag2: Tag.street,
          styleRanks: {
            sexy: StyleRank.s,
            lively: StyleRank.a,
            gorgeous: StyleRank.b,
            cool: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.giftExhibition }],
        },
        {
          id: "fashion__necklace__glittering_feelings",
          name: "Glittering Feelings",
          starRank: 4,
          category: AccessoryCategory.necklace,
          tag1: Tag.girl_group,
          tag2: Tag.street,
          styleRanks: {
            sexy: StyleRank.s,
            lively: StyleRank.a,
            gorgeous: StyleRank.b,
            cool: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.giftExhibition }],
        },
        {
          id: "fashion__handheld__shining_moment",
          name: "Shining Moment",
          starRank: 4,
          category: AccessoryCategory.handheld,
          tag1: Tag.girl_group,
          tag2: Tag.street,
          styleRanks: {
            sexy: StyleRank.s,
            lively: StyleRank.a,
            gorgeous: StyleRank.b,
            cool: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.giftExhibition }],
        },
      ],
    },
  },
  {
    id: "fashion__set__maple_and_dew",
    name: "Maple and Dew",
    starRank: 4,
    brandId: "voice_and_color",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.sexy,
    items: {
      create: [
        {
          id: "fashion__hairstyle__play_and_sing",
          name: "Play and Sing",
          starRank: 4,
          category: FashionCategory.hairstyle,
          tag1: Tag.traditional,
          styleRanks: {
            sexy: StyleRank.s,
            simple: StyleRank.a,
            elegant: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__shoes__fluttering_wings",
                  quantity: 9,
                },
                {
                  itemId: "fashion__necklace__silk_and_snow",
                  quantity: 9,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__dress__maple_and_dew",
          name: "Maple and Dew",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.traditional,
          styleRanks: {
            sexy: StyleRank.s,
            elegant: StyleRank.a,
            simple: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              // materialCost: [
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              //     {
              //     itemId: "fashion__",
              //     quantity: ,
              //     },
              // ],
            },
          ],
        },
        {
          id: "fashion__shoes__flower_dance",
          name: "Flower Dance",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.traditional,
          styleRanks: {
            sexy: StyleRank.s,
            simple: StyleRank.a,
            elegant: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__hair__verdant_tassel",
                  quantity: 4,
                },
                {
                  itemId: "fashion__bracelet__deep_resonance",
                  quantity: 6,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__earrings__evening_song",
          name: "Evening Song",
          starRank: 4,
          category: AccessoryCategory.earrings,
          tag1: Tag.traditional,
          styleRanks: {
            sexy: StyleRank.s,
            simple: StyleRank.a,
            elegant: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__shoes__motley_nightlight",
                  quantity: 3,
                },
                {
                  itemId: "fashion__socks__haze",
                  quantity: 6,
                },
              ],
            },
          ],
        },
        {
          id: "fashion__wrist__jade_mist",
          name: "Jade Mist",
          starRank: 4,
          category: AccessoryCategory.wrist,
          tag1: Tag.traditional,
          styleRanks: {
            sexy: StyleRank.s,
            simple: StyleRank.a,
            elegant: StyleRank.b,
            sweet: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
              materialCost: [
                {
                  itemId: "fashion__shoes__strawberry_soda",
                  quantity: 4,
                },
                {
                  itemId: "fashion__hair__birchleaf_pears",
                  quantity: 5,
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__radiant_declaration",
    name: "Radiant Declaration",
    starRank: 4,
    brandId: "voice_and_color",
    obtainType: ObtainType.exchangeGuildShop,
    mainStyle: Style.sexy,
    items: {
      create: [
        {
          id: "fashion__dress__radiant_declaration",
          name: "Radiant Declaration",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.girl_group,
          tag2: Tag.hot_girl,
          styleRanks: {
            sexy: StyleRank.s,
            cool: StyleRank.b,
            gorgeous: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeGuildShop, cost: 440 },
          ],
        },
        {
          id: "fashion__shoes__dream_chaser",
          name: "Dream Chaser",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.girl_group,
          tag2: Tag.hot_girl,
          styleRanks: {
            sexy: StyleRank.s,
            cool: StyleRank.a,
            gorgeous: StyleRank.b,
            lively: StyleRank.b,
            warm: StyleRank.c,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeGuildShop, cost: 110 },
          ],
        },
        {
          id: "fashion__necklace__fashion_vanguard",
          name: "Fashion Vanguard",
          starRank: 4,
          category: AccessoryCategory.necklace,
          tag1: Tag.girl_group,
          tag2: Tag.hot_girl,
          styleRanks: {
            sexy: StyleRank.s,
            cool: StyleRank.a,
            gorgeous: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeGuildShop, cost: 60 },
          ],
        },
        {
          id: "fashion__gloves__fashion_belief",
          name: "Fashion Belief",
          starRank: 4,
          category: AccessoryCategory.gloves,
          tag1: Tag.girl_group,
          tag2: Tag.hot_girl,
          styleRanks: {
            sexy: StyleRank.s,
            cool: StyleRank.b,
            gorgeous: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeGuildShop, cost: 60 },
          ],
        },
        {
          id: "fashion__ring__ring_promise",
          name: "Ring Promise",
          starRank: 4,
          category: AccessoryCategory.ring,
          tag1: Tag.girl_group,
          tag2: Tag.hot_girl,
          styleRanks: {
            sexy: StyleRank.s,
            cool: StyleRank.a,
            gorgeous: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            { obtainType: ObtainType.exchangeGuildShop, cost: 60 },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__good_morning",
    name: "Good Morning",
    starRank: 4,
    brandId: "voice_and_color",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.cool,
    items: {
      create: [
        {
          id: "fashion__hairstyle__cat_words",
          name: "Cat Words",
          starRank: 4,
          category: FashionCategory.hairstyle,
          tag1: Tag.street_punk,
          tag2: Tag.girl_group,
          styleRanks: {
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.b,
            elegant: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__dress__good_morning",
          name: "Good Morning",
          starRank: 4,
          category: FashionCategory.dress,
          tag1: Tag.street_punk,
          tag2: Tag.girl_group,
          styleRanks: {
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__coat__fluffy_phantom",
          name: "Fluffy Phantom",
          starRank: 4,
          category: FashionCategory.coat,
          tag1: Tag.street_punk,
          tag2: Tag.girl_group,
          styleRanks: {
            cool: StyleRank.s,
            sexy: StyleRank.a,
            warm: StyleRank.b,
            simple: StyleRank.b,
            lively: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__socks__phantom_night",
          name: "Phantom Night",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.street_punk,
          tag2: Tag.girl_group,
          styleRanks: {
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__shoes__tsundere_nightcat",
          name: "Tsundere Nightcat",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.street_punk,
          tag2: Tag.girl_group,
          styleRanks: {
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__earrings__cats_eye",
          name: "Cat's Eye",
          starRank: 4,
          category: AccessoryCategory.earrings,
          tag1: Tag.street_punk,
          tag2: Tag.girl_group,
          styleRanks: {
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__necklace__black_cat_chain",
          name: "Black Cat Chain",
          starRank: 4,
          category: AccessoryCategory.necklace,
          tag1: Tag.street_punk,
          tag2: Tag.girl_group,
          styleRanks: {
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
        {
          id: "fashion__anklet__catty_bandage",
          name: "Catty Bandage",
          starRank: 4,
          category: AccessoryCategory.anklet,
          tag1: Tag.street_punk,
          tag2: Tag.girl_group,
          styleRanks: {
            cool: StyleRank.s,
            sexy: StyleRank.a,
            simple: StyleRank.b,
            lively: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [
            {
              obtainType: ObtainType.craftStoryQuest,
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
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__future_scale",
    name: "Future Scale",
    starRank: 4,
    brandId: "voice_and_color",
    obtainType: ObtainType.lightchaseNightOfVvanna,
    mainStyle: Style.lively,
    items: {
      create: [
        {
          id: "fashion__hairstyle__cheerful_melody",
          name: "Cheerful Melody",
          starRank: 4,
          category: FashionCategory.hairstyle,
          tag1: Tag.girl_group,
          tag2: Tag.cyberpunk,
          styleRanks: {
            lively: StyleRank.s,
            cool: StyleRank.a,
            simple: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__coat__phantom_melody",
          name: "Phantom Melody",
          starRank: 4,
          category: FashionCategory.coat,
          tag1: Tag.girl_group,
          tag2: Tag.cyberpunk,
          styleRanks: {
            lively: StyleRank.s,
            cool: StyleRank.a,
            simple: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__top__future_scale",
          name: "Future Scale",
          starRank: 4,
          category: FashionCategory.top,
          tag1: Tag.girl_group,
          tag2: Tag.cyberpunk,
          styleRanks: {
            lively: StyleRank.s,
            cool: StyleRank.a,
            simple: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__bottom__angel_notes",
          name: "Angel Notes",
          starRank: 4,
          category: FashionCategory.bottom,
          tag1: Tag.girl_group,
          tag2: Tag.cyberpunk,
          styleRanks: {
            lively: StyleRank.s,
            cool: StyleRank.a,
            simple: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__socks__discord_chapter",
          name: "Discord Chapter",
          starRank: 4,
          category: FashionCategory.socks,
          tag1: Tag.girl_group,
          tag2: Tag.cyberpunk,
          styleRanks: {
            lively: StyleRank.s,
            cool: StyleRank.a,
            simple: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__shoes__irregular_notes",
          name: "Irregular Notes",
          starRank: 4,
          category: FashionCategory.shoes,
          tag1: Tag.girl_group,
          tag2: Tag.cyberpunk,
          styleRanks: {
            lively: StyleRank.s,
            cool: StyleRank.a,
            simple: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__earrings__moving_melody",
          name: "Moving Melody",
          starRank: 4,
          category: AccessoryCategory.earrings,
          tag1: Tag.girl_group,
          tag2: Tag.cyberpunk,
          styleRanks: {
            lively: StyleRank.s,
            cool: StyleRank.a,
            simple: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__necklace__wind_beat",
          name: "Wind Beat",
          starRank: 4,
          category: AccessoryCategory.necklace,
          tag1: Tag.girl_group,
          tag2: Tag.cyberpunk,
          styleRanks: {
            lively: StyleRank.s,
            cool: StyleRank.a,
            simple: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__gloves__love_rhythm",
          name: "Love Rhythm",
          starRank: 4,
          category: AccessoryCategory.gloves,
          tag1: Tag.girl_group,
          tag2: Tag.cyberpunk,
          styleRanks: {
            lively: StyleRank.s,
            cool: StyleRank.a,
            simple: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__floating__wandering_signal",
          name: "Wandering Signal",
          starRank: 4,
          category: AccessoryCategory.floating,
          tag1: Tag.girl_group,
          tag2: Tag.cyberpunk,
          styleRanks: {
            lively: StyleRank.s,
            cool: StyleRank.a,
            simple: StyleRank.b,
            sexy: StyleRank.b,
            fresh: StyleRank.c,
          },
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
      ],
    },
  },

  // MAKEUP SETS
  {
    id: "fashion__set__wild_blossom",
    name: "Wild Bossom",
    starRank: 5,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.lightchaseDewyTears,
    items: {
      create: [
        {
          id: "fashion__contacts__green_field",
          name: "Green Field",
          starRank: 5,
          category: MakeupCategory.contacts,
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
        {
          id: "fashion__contacts__blooming_frost",
          name: "Blooming Frost",
          starRank: 5,
          category: MakeupCategory.contacts,
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
        {
          id: "fashion__lipstick__sweet_berries",
          name: "Sweet Berries",
          starRank: 5,
          category: MakeupCategory.lipstick,
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
        {
          id: "fashion__lipstick__dappled_light",
          name: "Dappled Light",
          starRank: 5,
          category: MakeupCategory.lipstick,
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
        {
          id: "fashion__facial_paint__dawn_dew",
          name: "Dawn Dew",
          starRank: 5,
          category: MakeupCategory.facial_paint,
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
        {
          id: "fashion__facial_paint__lonely_flower",
          name: "Lonely Flower",
          starRank: 5,
          category: MakeupCategory.facial_paint,
          obtainMethods: [{ obtainType: ObtainType.lightchaseDewyTears }],
        },
      ],
    },
  },
  {
    id: "fashion__set__antique_blues",
    name: "Antique Blues",
    starRank: 5,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.exchangeAllyShop,
    items: {
      create: [
        {
          id: "fashion__eyebrow__remote_hill",
          name: "Remote Hill",
          starRank: 5,
          category: MakeupCategory.eyebrow,
          obtainMethods: [
            { obtainType: ObtainType.exchangeUpgradeShop, cost: 2000 },
          ],
        },

        {
          id: "fashion__contacts__azure_world",
          name: "Azure World",
          starRank: 5,
          category: MakeupCategory.contacts,
          obtainMethods: [
            { obtainType: ObtainType.exchangeUpgradeShop, cost: 3000 },
          ],
        },

        {
          id: "fashion__eyeliner__rosy_sailing",
          name: "Rosy Sailing",
          starRank: 5,
          category: MakeupCategory.eyeliner,
          obtainMethods: [
            { obtainType: ObtainType.exchangeIntimacyShop, cost: 2000 },
          ],
        },

        {
          id: "fashion__eyeshadow__shallow_sunset",
          name: "Shallow Sunset",
          starRank: 5,
          category: MakeupCategory.eyeshadow,
          obtainMethods: [
            { obtainType: ObtainType.exchangeUpgradeShop, cost: 2000 },
          ],
        },

        {
          id: "fashion__lipstick__every_hour",
          name: "Every Hour",
          starRank: 5,
          category: MakeupCategory.lipstick,
          obtainMethods: [
            { obtainType: ObtainType.exchangeUpgradeShop, cost: 3000 },
          ],
        },

        {
          id: "fashion__eyelashes__limpid_streams",
          name: "Limpid Streams",
          starRank: 5,
          category: MakeupCategory.eyelashes,
          obtainMethods: [
            { obtainType: ObtainType.exchangeIntimacyShop, cost: 2000 },
          ],
        },

        {
          id: "fashion__blush__scattered_clouds",
          name: "Scattered Clouds",
          starRank: 5,
          category: MakeupCategory.blush,
          obtainMethods: [
            { obtainType: ObtainType.exchangeIntimacyShop, cost: 2000 },
          ],
        },

        {
          id: "fashion__facial_paint__iridescent_glow",
          name: "Iridescent Glow",
          starRank: 5,
          category: MakeupCategory.facial_paint,
          obtainMethods: [
            { obtainType: ObtainType.exchangeUpgradeShop, cost: 3000 },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__formless_void",
    name: "Formless Void",
    starRank: 5,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.lightchaseSnowDome,
    items: {
      create: [
        {
          id: "fashion__contacts__fantasy_realm",
          name: "Fantasy Realm",
          starRank: 5,
          category: MakeupCategory.contacts,
          obtainMethods: [{ obtainType: ObtainType.lightchaseSnowDome }],
        },
        {
          id: "fashion__contacts__realm_of_sky",
          name: "Realm of Sky",
          starRank: 5,
          category: MakeupCategory.contacts,
          obtainMethods: [{ obtainType: ObtainType.lightchaseSnowDome }],
        },
        {
          id: "fashion__lipstick__secrets_of_stars",
          name: "Secrets of Stars",
          starRank: 5,
          category: MakeupCategory.lipstick,
          obtainMethods: [{ obtainType: ObtainType.lightchaseSnowDome }],
        },
        {
          id: "fashion__lipstick__caramel_clouds",
          name: "Caramel Clouds",
          starRank: 5,
          category: MakeupCategory.lipstick,
          obtainMethods: [{ obtainType: ObtainType.lightchaseSnowDome }],
        },
        {
          id: "fashion__facial_paint__pearl_raindrops",
          name: "Pearl Raindrops",
          starRank: 5,
          category: MakeupCategory.facial_paint,
          obtainMethods: [{ obtainType: ObtainType.lightchaseSnowDome }],
        },
        {
          id: "fashion__facial_paint__awakened_stars",
          name: "Awakened Stars",
          starRank: 5,
          category: MakeupCategory.facial_paint,
          obtainMethods: [{ obtainType: ObtainType.lightchaseSnowDome }],
        },
      ],
    },
  },
  {
    id: "fashion__set__deserted_realm",
    name: "Deserted Realm",
    starRank: 5,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.lightchaseNirvana,
    items: {
      create: [
        {
          id: "fashion__lipstick__fire_cloud",
          name: "Fire Cloud",
          starRank: 5,
          category: MakeupCategory.lipstick,
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },

        {
          id: "fashion__lipstick__sunset_sea",
          name: "Sunset Sea",
          starRank: 5,
          category: MakeupCategory.lipstick,
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },

        {
          id: "fashion__lipstick__last_ode",
          name: "Last Ode",
          starRank: 5,
          category: MakeupCategory.lipstick,
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },

        {
          id: "fashion__lipstick__moonlit_lake",
          name: "Moonlit Lake",
          starRank: 5,
          category: MakeupCategory.lipstick,
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },

        {
          id: "fashion__facial_paint__stray_starlight",
          name: "Stray Starlight",
          starRank: 5,
          category: MakeupCategory.facial_paint,
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },

        {
          id: "fashion__facial_paint__snowflakes",
          name: "Snowflakes",
          starRank: 5,
          category: MakeupCategory.facial_paint,
          obtainMethods: [{ obtainType: ObtainType.lightchaseNirvana }],
        },
      ],
    },
  },
  {
    id: "fashion__set__dance_of_stars",
    name: "Dance of Stars",
    starRank: 5,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.exchangeFashionShop,
    items: {
      create: [
        {
          id: "fashion__contacts__azure_sky",
          name: "Azure Sky",
          starRank: 5,
          category: MakeupCategory.contacts,
          obtainMethods: [
            { obtainType: ObtainType.exchangeFashionShop, cost: 2400 },
          ],
        },
        {
          id: "fashion__contacts__colorful_stars",
          name: "Colorful Stars",
          starRank: 5,
          category: MakeupCategory.contacts,
          obtainMethods: [
            { obtainType: ObtainType.exchangeFashionShop, cost: 2400 },
          ],
        },
        {
          id: "fashion__contacts__shining_stars",
          name: "Shining Stars",
          starRank: 5,
          category: MakeupCategory.contacts,
          obtainMethods: [
            { obtainType: ObtainType.exchangeFashionShop, cost: 2400 },
          ],
        },
        {
          id: "fashion__lipstick__starry_dream",
          name: "Starry Dream",
          starRank: 5,
          category: MakeupCategory.lipstick,
          obtainMethods: [
            { obtainType: ObtainType.exchangeFashionShop, cost: 2400 },
          ],
        },
        {
          id: "fashion__lipstick__scarlet_stars",
          name: "Scarlet Stars",
          starRank: 5,
          category: MakeupCategory.lipstick,
          obtainMethods: [
            { obtainType: ObtainType.exchangeFashionShop, cost: 2400 },
          ],
        },
        {
          id: "fashion__lipstick__rosy_nebula",
          name: "Rosy Nebula",
          starRank: 5,
          category: MakeupCategory.lipstick,
          obtainMethods: [
            { obtainType: ObtainType.exchangeFashionShop, cost: 2400 },
          ],
        },
        {
          id: "fashion__facial_paint__silver_wings",
          name: "Silver Wings",
          starRank: 5,
          category: MakeupCategory.facial_paint,
          obtainMethods: [
            { obtainType: ObtainType.exchangeFashionShop, cost: 2400 },
          ],
        },
        {
          id: "fashion__facial_paint__white_stardust",
          name: "White Stardust",
          starRank: 5,
          category: MakeupCategory.facial_paint,
          obtainMethods: [
            { obtainType: ObtainType.exchangeFashionShop, cost: 2400 },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__fragrant_breeze",
    name: "Fragrant Breeze",
    starRank: 5,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.lightchaseStarlight,
    items: {
      create: [
        {
          id: "fashion__contacts__flower_story",
          name: "Flower Story",
          starRank: 5,
          category: MakeupCategory.contacts,
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__contacts__camellia",
          name: "Camellia",
          starRank: 5,
          category: MakeupCategory.contacts,
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__contacts__evening_breeze",
          name: "Evening Breeze",
          starRank: 5,
          category: MakeupCategory.contacts,
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__lipstick__flowing_spring",
          name: "Flowing Spring",
          starRank: 5,
          category: MakeupCategory.lipstick,
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__facial_paint__sakura",
          name: "Sakura",
          starRank: 5,
          category: MakeupCategory.facial_paint,
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__facial_paint__tears_in_wind",
          name: "Tears in Wind",
          starRank: 5,
          category: MakeupCategory.facial_paint,
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__facial_paint__hallucination",
          name: "Hallucination",
          starRank: 5,
          category: MakeupCategory.facial_paint,
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
      ],
    },
  },
  {
    id: "fashion__set__cold_star",
    name: "Cold Star",
    starRank: 5,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.lightchaseNightOfVvanna,
    items: {
      create: [
        {
          id: "fashion__contacts__unbounded_galaxy",
          name: "Unbounded Galaxy",
          starRank: 5,
          category: MakeupCategory.contacts,
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__contacts__cold_star",
          name: "Cold Star",
          starRank: 5,
          category: MakeupCategory.contacts,
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__contacts__bright_constellation",
          name: "Bright Constellation",
          starRank: 5,
          category: MakeupCategory.contacts,
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__lipstick__fresh_wave",
          name: "Fresh Wave",
          starRank: 5,
          category: MakeupCategory.lipstick,
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__lipstick__waning_night",
          name: "Waning Night",
          starRank: 5,
          category: MakeupCategory.lipstick,
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
        {
          id: "fashion__lipstick__concubine_tears",
          name: "Concubine Tears",
          starRank: 5,
          category: MakeupCategory.lipstick,
          obtainMethods: [{ obtainType: ObtainType.lightchaseNightOfVvanna }],
        },
      ],
    },
  },
  {
    id: "fashion__set__jewel_box",
    name: "Jewel Box",
    starRank: 4,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.craftMindTravel,
    items: {
      create: [
        {
          id: "fashion__contacts__green_eyes",
          name: "Green Eyes",
          starRank: 4,
          category: MakeupCategory.contacts,
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
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
            },
          ],
        },
        {
          id: "fashion__eyeshadow__silver_night",
          name: "Silver Night",
          starRank: 4,
          category: MakeupCategory.eyeshadow,
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
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
            },
          ],
        },
        {
          id: "fashion__eyelashes__dark_crystal",
          name: "Dark Crystal",
          starRank: 4,
          category: MakeupCategory.eyelashes,
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
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
            },
          ],
        },
        {
          id: "fashion__blush__crystal_pomegranate",
          name: "Crystal Pomegranate",
          starRank: 4,
          category: MakeupCategory.blush,
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
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
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__dusk_snow",
    name: "Dusk Snow",
    starRank: 4,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.fashionCode,
    fashionCodeId: "fashioncode__snow_chapter",
    items: {
      create: [
        {
          id: "fashion__eyeliner__early_nightfall",
          name: "Early Nightfall",
          starRank: 4,
          category: MakeupCategory.eyeliner,
          obtainMethods: [
            {
              obtainType: ObtainType.fashionCode,
              fashionCodeId: "fashioncode__snow_chapter",
            },
          ],
        },
        {
          id: "fashion__eyeshadow__sunny_snow",
          name: "Sunny Snow",
          starRank: 4,
          category: MakeupCategory.eyeshadow,
          obtainMethods: [
            {
              obtainType: ObtainType.fashionCode,
              fashionCodeId: "fashioncode__snow_chapter",
            },
          ],
        },
        {
          id: "fashion__eyeshadow__the_birdnest",
          name: "The Birdnest",
          starRank: 4,
          category: MakeupCategory.eyeshadow,
          obtainMethods: [
            {
              obtainType: ObtainType.fashionCode,
              fashionCodeId: "fashioncode__snow_chapter",
            },
          ],
        },
        {
          id: "fashion__eyeshadow__colored_clouds",
          name: "Colored Clouds",
          starRank: 4,
          category: MakeupCategory.eyeshadow,
          obtainMethods: [
            {
              obtainType: ObtainType.fashionCode,
              fashionCodeId: "fashioncode__snow_chapter",
            },
          ],
        },
        {
          id: "fashion__eyelashes__lost_butterfly",
          name: "Lost Butterfly",
          starRank: 4,
          category: MakeupCategory.eyelashes,
          obtainMethods: [
            {
              obtainType: ObtainType.fashionCode,
              fashionCodeId: "fashioncode__snow_chapter",
            },
          ],
        },
        {
          id: "fashion__blush__sunset_obsession",
          name: "Sunset Obsession",
          starRank: 4,
          category: MakeupCategory.blush,
          obtainMethods: [
            {
              obtainType: ObtainType.fashionCode,
              fashionCodeId: "fashioncode__snow_chapter",
            },
          ],
        },
        {
          id: "fashion__blush__wild_flowers",
          name: "Wild Flowers",
          starRank: 4,
          category: MakeupCategory.blush,
          obtainMethods: [
            {
              obtainType: ObtainType.fashionCode,
              fashionCodeId: "fashioncode__snow_chapter",
            },
          ],
        },
        {
          id: "fashion__blush__foamy_clouds",
          name: "Foamy Clouds",
          starRank: 4,
          category: MakeupCategory.blush,
          obtainMethods: [
            {
              obtainType: ObtainType.fashionCode,
              fashionCodeId: "fashioncode__snow_chapter",
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__river_breeze",
    name: "River Breeze",
    starRank: 4,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    items: {
      create: [
        {
          id: "fashion__eyebrow__remote_sunlight",
          name: "Remote Sunlight",
          starRank: 4,
          category: MakeupCategory.eyebrow,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__shining_star",
              classNumber: 65,
            },
          ],
        },
        {
          id: "fashion__eyebrow__shattered_sun",
          name: "Shattered Sun",
          starRank: 4,
          category: MakeupCategory.eyebrow,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__record_of_youth",
              classNumber: 65,
            },
          ],
        },
        {
          id: "fashion__eyeliner__fleeting_visit",
          name: "Fleeting Visit",
          starRank: 4,
          category: MakeupCategory.eyeliner,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__shining_star",
              classNumber: 80,
            },
          ],
        },
        {
          id: "fashion__eyeliner__flowing_star",
          name: "Flowing Star",
          starRank: 4,
          category: MakeupCategory.eyeliner,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__record_of_youth",
              classNumber: 80,
            },
          ],
        },
        {
          id: "fashion__eyeshadow__sun_in_clouds",
          name: "Sun in Clouds",
          starRank: 4,
          category: MakeupCategory.eyeshadow,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__shining_star",
              classNumber: 75,
            },
          ],
        },
        {
          id: "fashion__eyeshadow__shining_lake",
          name: "Shining Lake",
          starRank: 4,
          category: MakeupCategory.eyeshadow,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__record_of_youth",
              classNumber: 75,
            },
          ],
        },
        {
          id: "fashion__eyelashes__late_dusk",
          name: "Late Dusk",
          starRank: 4,
          category: MakeupCategory.eyelashes,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__shining_star",
              classNumber: 70,
            },
          ],
        },
        {
          id: "fashion__eyelashes__the_duskwind",
          name: "The Duskwind",
          starRank: 4,
          category: MakeupCategory.eyelashes,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__record_of_youth",
              classNumber: 70,
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__candy_island",
    name: "Candy Island",
    starRank: 4,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    items: {
      create: [
        {
          id: "fashion__eyebrow__sweet_dream",
          name: "Sweet Dream",
          starRank: 4,
          category: MakeupCategory.eyebrow,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__bright_mood",
              classNumber: 65,
            },
          ],
        },
        {
          id: "fashion__eyebrow__scattered_snow",
          name: "Scattered Snow",
          starRank: 4,
          category: MakeupCategory.eyebrow,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__charming_scenery",
              classNumber: 65,
            },
          ],
        },
        {
          id: "fashion__eyeliner__the_sleeptalk",
          name: "The Sleeptalk",
          starRank: 4,
          category: MakeupCategory.eyeliner,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__bright_mood",
              classNumber: 65,
            },
          ],
        },
        {
          id: "fashion__eyeliner__caramel_fantasy",
          name: "Caramel Fantasy",
          starRank: 4,
          category: MakeupCategory.eyeliner,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__charming_scenery",
              classNumber: 80,
            },
          ],
        },
        {
          id: "fashion__eyeshadow__strawberry_cream",
          name: "Strawberry Cream",
          starRank: 4,
          category: MakeupCategory.eyeshadow,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__bright_mood",
              classNumber: 75,
            },
          ],
        },
        {
          id: "fashion__lipstick__lime_bonbon",
          name: "Lime Bonbon",
          starRank: 4,
          category: MakeupCategory.lipstick,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__charming_scenery",
              classNumber: 75,
            },
          ],
        },
        {
          id: "fashion__eyelashes__romantic_whisper",
          name: "Romantic Whisper",
          starRank: 4,
          category: MakeupCategory.eyelashes,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__bright_mood",
              classNumber: 70,
            },
          ],
        },
        {
          id: "fashion__blush__all_sweetness",
          name: "All Sweetness",
          starRank: 4,
          category: MakeupCategory.blush,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__charming_scenery",
              classNumber: 70,
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__death_of_phoenix",
    name: "Death of Phoenix",
    starRank: 4,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.craftMindTravel,
    items: {
      create: [
        {
          id: "fashion__eyebrow__rosy_clouds",
          name: "Rosy Clouds",
          starRank: 4,
          category: MakeupCategory.eyebrow,
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
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
            },
          ],
        },
        {
          id: "fashion__eyeshadow__burnt_dust",
          name: "Burnt Dust",
          starRank: 4,
          category: MakeupCategory.eyeshadow,
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
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
            },
          ],
        },
        {
          id: "fashion__lipstick__turbulent_flame",
          name: "Turbulent Flame",
          starRank: 4,
          category: MakeupCategory.lipstick,
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
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
            },
          ],
        },
        {
          id: "fashion__facial_paint__bright_glow",
          name: "Bright Glow",
          starRank: 4,
          category: MakeupCategory.facial_paint,
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
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
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__shadow_of_twins",
    name: "Shadow of Twins",
    starRank: 4,
    brandId: "brand__please_yourself",
    // obtainType: ObtainType.,
    items: {
      create: [
        {
          id: "fashion__eyebrow__roving_light",
          name: "Roving Light",
          starRank: 4,
          category: MakeupCategory.eyebrow,
          //   obtainMethods: [{obtainType: ObtainType. }],
        },

        {
          id: "fashion__eyebrow__dusk_sky",
          name: "Dusk Sky",
          starRank: 4,
          category: MakeupCategory.eyebrow,
          //   obtainMethods: [{obtainType: ObtainType. }],
        },

        {
          id: "fashion__eyeshadow__standing_night",
          name: "Standing Night",
          starRank: 4,
          category: MakeupCategory.eyeshadow,
          //   obtainMethods: [{obtainType: ObtainType. }],
        },

        {
          id: "fashion__eyeshadow__covering_snow",
          name: "Covering Snow",
          starRank: 4,
          category: MakeupCategory.eyeshadow,
          //   obtainMethods: [{obtainType: ObtainType. }],
        },

        {
          id: "fashion__eyelashes__dappled_forest",
          name: "Dappled Forest",
          starRank: 4,
          category: MakeupCategory.eyelashes,
          //   obtainMethods: [{obtainType: ObtainType. }],
        },

        {
          id: "fashion__eyelashes__light_branch",
          name: "Light Branch",
          starRank: 4,
          category: MakeupCategory.eyelashes,
          //   obtainMethods: [{obtainType: ObtainType. }],
        },

        {
          id: "fashion__blush__gust_of_wind",
          name: "Gust of Wind",
          starRank: 4,
          category: MakeupCategory.blush,
          //   obtainMethods: [{obtainType: ObtainType. }],
        },

        {
          id: "fashion__blush__first_snow",
          name: "First Snow",
          starRank: 4,
          category: MakeupCategory.blush,
          //   obtainMethods: [{obtainType: ObtainType. }],
        },
      ],
    },
  },
  {
    id: "fashion__set__revelry_at_midnight",
    name: "Revelry at Midnight",
    starRank: 4,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.lightchaseStarlight,
    items: {
      create: [
        {
          id: "fashion__eyebrow__new_moon",
          name: "New Moon",
          starRank: 4,
          category: MakeupCategory.eyebrow,
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__eyebrow__dawn_note",
          name: "Dawn Note",
          starRank: 4,
          category: MakeupCategory.eyebrow,
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__lipstick__star_symphony",
          name: "Star Symphony",
          starRank: 4,
          category: MakeupCategory.lipstick,
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__lipstick__moonlight_tune",
          name: "Moonlight Tune",
          starRank: 4,
          category: MakeupCategory.lipstick,
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__eyelashes__fantastic_dream",
          name: "Fantastic Dream",
          starRank: 4,
          category: MakeupCategory.eyelashes,
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__eyelashes__the_serenade",
          name: "The Serenade",
          starRank: 4,
          category: MakeupCategory.eyelashes,
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__facial_paint__dusk_hymn",
          name: "Dusk Hymn",
          starRank: 4,
          category: MakeupCategory.facial_paint,
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
      ],
    },
  },
  {
    id: "fashion__set__drowned_night",
    name: "Drowned Night",
    starRank: 4,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.lightchaseStarlight,
    items: {
      create: [
        {
          id: "fashion__eyeliner__tranquil_night",
          name: "Tranquil Night",
          starRank: 4,
          category: MakeupCategory.eyeliner,
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__eyeliner__long_darkness",
          name: "Long Darkness",
          starRank: 4,
          category: MakeupCategory.eyeliner,
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__eyeshadow__night_fire",
          name: "Night Fire",
          starRank: 4,
          category: MakeupCategory.eyeshadow,
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__eyeshadow__crimson_dusk",
          name: "Crimson Dusk",
          starRank: 4,
          category: MakeupCategory.eyeshadow,
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__eyeshadow__final_chapter",
          name: "Final Chapter",
          starRank: 4,
          category: MakeupCategory.eyeshadow,
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__eyeshadow__fallen_moon",
          name: "Fallen Moon",
          starRank: 4,
          category: MakeupCategory.eyeshadow,
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
        {
          id: "fashion__facial_paint__nightdew",
          name: "Nightdew",
          starRank: 4,
          category: MakeupCategory.facial_paint,
          obtainMethods: [{ obtainType: ObtainType.lightchaseStarlight }],
        },
      ],
    },
  },
  {
    id: "fashion__set__lake_and_mountain",
    name: "Lake & Mountain",
    starRank: 4,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.craftMindTravel,
    items: {
      create: [
        {
          id: "fashion__eyebrow__thin_smoke",
          name: "Thin Smoke",
          starRank: 4,
          category: MakeupCategory.eyebrow,
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
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
            },
          ],
        },
        {
          id: "fashion__contacts__blue_stream",
          name: "Blue Stream",
          starRank: 4,
          category: MakeupCategory.contacts,
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
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
            },
          ],
        },
        {
          id: "fashion__contacts__bright_mist",
          name: "Bright Mist",
          starRank: 4,
          category: MakeupCategory.contacts,
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
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
            },
          ],
        },
        {
          id: "fashion__eyeliner__cicada_chirp",
          name: "Cicada Chirp",
          starRank: 4,
          category: MakeupCategory.eyeliner,
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
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
            },
          ],
        },
        {
          id: "fashion__eyeliner__dark_blue_sky",
          name: "Dark Blue Sky",
          starRank: 4,
          category: MakeupCategory.eyeliner,
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
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
            },
          ],
        },
        {
          id: "fashion__eyeshadow__tipsy_twilight",
          name: "Tipsy Twilight",
          starRank: 4,
          category: MakeupCategory.eyeshadow,
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
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
            },
          ],
        },
        {
          id: "fashion__lipstick__red_plum_dew",
          name: "Red Plum Dew",
          starRank: 4,
          category: MakeupCategory.lipstick,
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
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
            },
          ],
        },
        {
          id: "fashion__lipstick__lake_reflection",
          name: "Lake Reflection",
          starRank: 4,
          category: MakeupCategory.lipstick,
          obtainMethods: [
            {
              obtainType: ObtainType.craftMindTravel,
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
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__dim_shadow",
    name: "Dim Shadow",
    starRank: 4,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    items: {
      create: [
        {
          id: "fashion__contacts__shallow_memory",
          name: "Shallow Memory",
          starRank: 4,
          category: MakeupCategory.contacts,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__shining_star",
              classNumber: 60,
            },
          ],
        },
        {
          id: "fashion__eyelashes__looking_around",
          name: "Looking Around",
          starRank: 4,
          category: MakeupCategory.eyelashes,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__record_of_youth",
              classNumber: 50,
            },
          ],
        },
        {
          id: "fashion__eyelashes__wind_eyelashes",
          name: "Wind Eyelashes",
          starRank: 4,
          category: MakeupCategory.eyelashes,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__shining_star",
              classNumber: 50,
            },
          ],
        },
        {
          id: "fashion__blush__home_flight",
          name: "Home Flight",
          starRank: 4,
          category: MakeupCategory.blush,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__shining_star",
              classNumber: 55,
            },
          ],
        },
        {
          id: "fashion__blush__dewy_flower",
          name: "Dewy Flower",
          starRank: 4,
          category: MakeupCategory.blush,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__shining_star",
              classNumber: 45,
            },
          ],
        },
        {
          id: "fashion__blush__solitary_goose",
          name: "Solitary Goose",
          starRank: 4,
          category: MakeupCategory.blush,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__record_of_youth",
              classNumber: 55,
            },
          ],
        },
        {
          id: "fashion__blush__sunset",
          name: "Sunset",
          starRank: 4,
          category: MakeupCategory.blush,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__record_of_youth",
              classNumber: 45,
            },
          ],
        },
        {
          id: "fashion__facial_paint__plum_makeup",
          name: "Plum Makeup",
          starRank: 4,
          category: MakeupCategory.facial_paint,
          obtainMethods: [
            {
              obtainType: ObtainType.beautycourse,
              beautyCourseId: "beautycourse__record_of_youth",
              classNumber: 60,
            },
          ],
        },
      ],
    },
  },
  {
    id: "fashion__set__dreamy_stardust",
    name: "Dreamy Stardust",
    starRank: 4,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.reward,
    items: {
      create: [
        {
          id: "fashion__contacts__azure_planet",
          name: "Azure Planet",
          starRank: 4,
          category: MakeupCategory.contacts,
          obtainMethods: [{ obtainType: ObtainType.giftExhibition }],
        },
        {
          id: "fashion__contacts__morpho_love",
          name: "Morpho Love",
          starRank: 4,
          category: MakeupCategory.contacts,
          obtainMethods: [{ obtainType: ObtainType.giftExhibition }],
        },
        {
          id: "fashion__contacts__indigo_dream",
          name: "Indigo Dream",
          starRank: 4,
          category: MakeupCategory.contacts,
          obtainMethods: [{ obtainType: ObtainType.giftExhibition }],
        },
        {
          id: "fashion__contacts__illusion_of_iris",
          name: "Illusion of Iris",
          starRank: 4,
          category: MakeupCategory.contacts,
          obtainMethods: [{ obtainType: ObtainType.giftExhibition }],
        },
        {
          id: "fashion__lipstick__crimson_dream",
          name: "Crimson Dream",
          starRank: 4,
          category: MakeupCategory.lipstick,
          obtainMethods: [{ obtainType: ObtainType.giftAllies }],
        },
        {
          id: "fashion__lipstick__wake_up",
          name: "Wake Up",
          starRank: 4,
          category: MakeupCategory.lipstick,
          obtainMethods: [{ obtainType: ObtainType.giftAllies }],
        },
        {
          id: "fashion__eyelashes__fallen_star",
          name: "Fallen Star",
          starRank: 4,
          category: MakeupCategory.eyelashes,
          obtainMethods: [{ obtainType: ObtainType.giftExhibition }],
        },
        {
          id: "fashion__eyelashes__flowing_light",
          name: "Flowing Light",
          starRank: 4,
          category: MakeupCategory.eyelashes,
          obtainMethods: [{ obtainType: ObtainType.giftExhibition }],
        },
        {
          id: "fashion__eyelashes__dream_journey",
          name: "Dream Journey",
          starRank: 4,
          category: MakeupCategory.eyelashes,
          obtainMethods: [{ obtainType: ObtainType.giftExhibition }],
        },
        {
          id: "fashion__eyelashes__violet_starsea",
          name: "Violet Starsea",
          starRank: 4,
          category: MakeupCategory.eyelashes,
          obtainMethods: [{ obtainType: ObtainType.giftExhibition }],
        },
      ],
    },
  },
  {
    id: "fashion__set__moonlit_blossoms",
    name: "Moonlit Blossoms",
    starRank: 4,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    items: {
      create: [
        "fashion__eyebrow__fantastic_years",
        "fashion__eyeliner__hazy_moonlight",
        "fashion__lipstick__take_a_sip",
        "fashion__eyelashes__flower_and_moon",
        "fashion__blush__cloudy_creek",
        "fashion__blush__clear_moon",
        "fashion__blush__floral_moonlight",
        "fashion__facial_paint__frosty_moonlight",
      ],
    },
  },
  {
    id: "fashion__set__feast_of_old_days",
    name: "Feast of Old Days",
    starRank: 3,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    items: {
      create: [
        "fashion__eyeliner__vanity_fair",
        "fashion__eyeliner__the_banquet",
        "fashion__eyeshadow__dinner_candle",
        "fashion__eyeshadow__mary_poppins",
        "fashion__eyeshadow__feast_of_light",
        "fashion__blush__illusion_of_life",
        "fashion__blush__like_wind",
        "fashion__blush__old_friends",
      ],
    },
  },
  {
    id: "fashion__set__burning_sunset",
    name: "Burning Sunset",
    starRank: 3,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    items: {
      create: [
        "fashion__eyebrow__sunset_boulevard",
        "fashion__eyebrow__twilight_zone",
        "fashion__eyelashes__distant_skyline",
        "fashion__blush__edge_of_sunset",
        "fashion__blush__pure_kiss",
        "fashion__blush__coastal_blaze",
        "fashion__blush__sunglow",
        "fashion__blush__firesky",
        "fashion__facial_paint__elegy_of_sunset",
        "fashion__facial_paint__beaming_glory",
      ],
    },
  },
  {
    id: "fashion__set__carnival_song",
    name: "Carnival Song",
    starRank: 3,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    items: {
      create: [
        "fashion__lipstick__song_of_riverdale",
        "fashion__lipstick__aromatic_polka",
        "fashion__lipstick__orange_blossom",
        "fashion__lipstick__cherry_folk",
        "fashion__facial_paint__fairytale_carnival",
        "fashion__facial_paint__waltz_of_dots",
        "fashion__facial_paint__fantasia_of_alice",
        "fashion__facial_paint__azure_serenade",
      ],
    },
  },
  {
    id: "fashion__set__depths_of_galaxy",
    name: "Depths of Galaxy",
    starRank: 3,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    items: {
      create: [
        "fashion__eyebrow__star_shadow",
        "fashion__eyebrow__raging_blue_sea",
        "fashion__eyebrow__falling_star",
        "fashion__contacts__star",
        "fashion__contacts__scarlet_aura",
        "fashion__eyelashes__stars_kiss",
        "fashion__eyelashes__sparkling_star",
        "fashion__eyelashes__deep_sea_star",
      ],
    },
  },
  {
    id: "fashion__set__breeze_in_the_woods",
    name: "Breeze in the Woods",
    starRank: 3,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    items: {
      create: [
        "fashion__eyebrow__the_grassland",
        "fashion__eyebrow__distant_mountain",
        "fashion__eyebrow__forest_of_dusk",
        "fashion__contacts__forest_spring",
        "fashion__contacts__forest_hideout",
        "fashion__eyelashes__aeoluss_feather",
        "fashion__eyelashes__forest_fog",
        "fashion__eyelashes__flower_branch",
      ],
    },
  },
  {
    id: "fashion__set__pale_light",
    name: "Pale Light",
    starRank: 3,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    items: {
      create: [
        "fashion__eyeliner__afterglow",
        "fashion__eyeliner__stratus_cloud",
        "fashion__eyeliner__dawn_dream",
        "fashion__eyeliner__flowing_clouds",
        "fashion__eyeliner__lingering_night",
        "fashion__blush__rosy_clouds",
        "fashion__blush__daybreak",
        "fashion__blush__skirt_of_night",
        "fashion__facial_paint__starmoon",
        "fashion__facial_paint__fragments_of_star",
      ],
    },
  },
  {
    id: "fashion__set__mesmerizing_wind",
    name: "Mesmerizing Wind",
    starRank: 3,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    items: {
      create: [
        "fashion__contacts__breezy_moonlit",
        "fashion__contacts__yellow_wheatfield",
        "fashion__contacts__clear_sky",
        "fashion__contacts__remnant_flowers",
        "fashion__eyeliner__nimbus",
        "fashion__eyeliner__ode_to_dark",
        "fashion__eyeliner__breeze_fantasy",
        "fashion__eyeliner__blowing_wind",
      ],
    },
  },
  {
    id: "fashion__set__stray_moonlight",
    name: "Stray Moonlight",
    starRank: 3,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    items: {
      create: [
        "fashion__eyebrow__water_bay",
        "fashion__eyebrow__moon_dirge",
        "fashion__eyebrow__the_crescent",
        "fashion__eyeshadow__misty_light",
        "fashion__eyeshadow__light_chaser",
        "fashion__eyeshadow__colorful_cloud",
        "fashion__eyeshadow__night_trial",
        "fashion__eyeshadow__splendid_moon",
      ],
    },
  },

  {
    id: "fashion__set__sign_in_oct_22",
    name: "(Unofficial Sign In Outfit - October 2022",
    starRank: 4,
    obtainType: ObtainType.event,
    mainStyle: Style.pure,
    items: {
      create: [
        "fashion__item__eternal_beloved",
        "fashion__item__after_class_bell",
        "fashion__item__campus_lane",
        "fashion__item__song_of_youth",
        "fashion__item__cat_party",
        "fashion__item__vibrant_girl",
      ],
    },
  },
];
