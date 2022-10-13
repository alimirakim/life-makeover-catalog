import { Item, ObtainType } from "../types/interfaces";
import { FashionCategory, Material, StyleRank, Tag } from "../types/types";

const coats: Item[] = [
  {
    id: "fashion__coat__rosy_night",
    name: "Rosy Night",
    starRank: 5,
    category: FashionCategory.coat,
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
      { obtainType: ObtainType.rewardChapterPack, chapter: 4, mode: "hard" },
    ],
  },
  {
    id: "fashion__coat__radiant_crown",
    name: "Radiant Crown",
    starRank: 5,
    category: FashionCategory.coat,
    tag1: Tag.classic,
    tag2: Tag.gown,
    styleRanks: {
      gorgeous: StyleRank.ss,
      cool: StyleRank.s,
      elegant: StyleRank.a,
      sexy: StyleRank.a,
      warm: StyleRank.b,
    },
    obtainMethods: [
      {
        obtainType: ObtainType.rewardChapterPack,
        mode: "challenge",
        chapter: 7,
      },
    ],
  },
  {
    id: "fashion__coat__blue_and_fluffy",
    name: "Blue & Fluffy",
    starRank: 5,
    category: FashionCategory.coat,
    tag1: Tag.ladylike,
    tag2: Tag.street,
    styleRanks: {
      sweet: StyleRank.ss,
      pure: StyleRank.s,
      simple: StyleRank.a,
      lively: StyleRank.a,
      warm: StyleRank.b,
    },
    obtainMethods: [{ obtainType: ObtainType.exchangeGlimmerShop, cost: 1570 }],
  },
  {
    id: "fashion__coat__fluffy_orange",
    name: "Fluffy Orange",
    starRank: 5,
    category: FashionCategory.coat,
    tag1: Tag.preppy,
    styleRanks: {
      pure: StyleRank.ss,
      warm: StyleRank.s,
      sweet: StyleRank.a,
      elegant: StyleRank.a,
      simple: StyleRank.b,
    },
    obtainMethods: [
      { obtainType: ObtainType.exchangeChallengeShop, cost: 1800 },
    ],
  },
  {
    id: "fashion__coat__future_space",
    name: "Future Space",
    starRank: 4,
    category: FashionCategory.coat,
    tag1: Tag.dungarees,
    tag2: Tag.sporty,
    styleRanks: {
      cool: StyleRank.s,
      pure: StyleRank.b,
      simple: StyleRank.b,
      lively: StyleRank.b,
      warm: StyleRank.c,
    },
    obtainMethods: [
      {
        obtainType: ObtainType.rewardChapterPack,
        chapter: 6,
        mode: "challenge",
      },
    ],
  },
  {
    id: "fashion__coat__field_breeze",
    name: "Field Breeze",
    starRank: 3,
    category: FashionCategory.coat,
    tag1: Tag.street_punk,
    tag2: Tag.dungarees,
    styleRanks: {
      cool: StyleRank.a,
      lively: StyleRank.c,
      warm: StyleRank.c,
      simple: StyleRank.c,
      pure: StyleRank.c,
    },
    obtainMethods: [
      {
        obtainType: ObtainType.exchangeClothingStore,
        cost: 1188,
        currency: Material.gold,
      },
    ],
  },
  {
    id: "fashion__coat__lotus_leaf",
    name: "Lotus Leaf",
    starRank: 3,
    category: FashionCategory.coat,
    styleRanks: {
      simple: StyleRank.a,
      lively: StyleRank.b,
      cool: StyleRank.c,
      warm: StyleRank.c,
      pure: StyleRank.c,
    },
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "hard",
        stageIds: [
          [7, 5],
          [7, 8],
        ],
      },
    ],
  },
];

const dresses = [
  {
    id: "fashion__dress__cygnus",
    name: "Cygnus",
    starRank: 4,
    category: FashionCategory.dress,
    tag1: Tag.homey,
    tag2: Tag.retro,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.diamond,
        cost: 67,
      },
    ],
  },
  {
    id: "fashion__dress__miss_dear",
    name: "Miss Dear",
    starRank: 4,
    category: FashionCategory.dress,
    tag1: Tag.sporty,
    tag2: Tag.street_punk,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.diamond,
        cost: 75,
      },
    ],
  },
  {
    id: "fashion__dress__magnificent_dream",
    name: "Magnificent Dream",
    starRank: 4,
    category: FashionCategory.dress,
    tag1: Tag.gown,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.diamond,
        cost: 68,
      },
    ],
  },
  {
    id: "fashion__dress__fluffy_cloud",
    name: "Fluffy Cloud",
    starRank: 4,
    category: FashionCategory.dress,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.diamond,
        cost: 78,
      },
    ],
  },
  {
    id: "fashion__dress__sunlight",
    name: "Sunlight",
    starRank: 3,
    category: FashionCategory.dress,
    tag1: Tag.homey,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 5099,
      },
    ],
  },
  {
    id: "fashion__dress__refreshing_mint",
    name: "Refreshing Mint",
    starRank: 3,
    category: FashionCategory.dress,
    tag1: Tag.homey,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 5368,
      },
    ],
  },
  {
    id: "fashion__dress__leisure_weekend",
    name: "Leisure Weekend",
    starRank: 3,
    category: FashionCategory.dress,
    tag1: Tag.preppy,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 4999,
      },
    ],
  },
  {
    id: "fashion__dress__rose_chanson",
    name: "Rose Chanson",
    starRank: 3,
    category: FashionCategory.dress,
    tag1: Tag.gown,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 4987,
      },
    ],
  },
  {
    id: "fashion__dress__soft_candy",
    name: "Soft Candy",
    starRank: 3,
    category: FashionCategory.dress,
    tag1: Tag.sporty,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 5345,
      },
    ],
  },
  {
    id: "fashion__dress__fleeting_gold",
    name: "Fleeting Gold",
    starRank: 3,
    category: FashionCategory.dress,
    tag1: Tag.gown,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 5384,
      },
    ],
  },
  {
    id: "fashion__dress__southern_holiday",
    name: "Southern Holiday",
    starRank: 3,
    category: FashionCategory.dress,
    tag1: Tag.ladylike,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 9846,
      },
    ],
  },
  {
    id: "fashion__dress__honeypeach",
    name: "Honeypeach",
    starRank: 3,
    category: FashionCategory.dress,
    tag1: Tag.ladylike,
    tag2: Tag.retro,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 10687,
      },
    ],
  },
  {
    id: "fashion__dress__swans_peck",
    name: "Swan's Peck",
    starRank: 3,
    category: FashionCategory.dress,
    tag1: Tag.gown,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 5183,
      },
    ],
  },

  {
    id: "fashion__dress__salty_life",
    name: "Salty Life",
    starRank: 5,
    category: FashionCategory.dress,
    tag1: Tag.japanese,
    obtainMethods: [
      {
        obtainType: ObtainType.rewardChapterPack,
        chapter: 8,
        mode: "hard",
      },
    ],
  },
  {
    id: "fashion__dress__moonlit_tapestry",
    name: "Moonlit Tapestry",
    starRank: 5,
    category: FashionCategory.dress,
    tag1: Tag.gown,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
      },
    ],
  },
  {
    id: "fashion__dress__bright_beads",
    name: "Bright Beads",
    starRank: 5,
    category: FashionCategory.dress,
    tag1: Tag.street,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
      },
    ],
  },
  {
    id: "fashion__dress__white_peach_soda",
    name: "White Peach Soda",
    starRank: 5,
    category: FashionCategory.dress,
    tag1: Tag.girl_group,
    tag2: Tag.street,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__starlight_show",
      },
    ],
  },
  {
    id: "fashion__dress__unstopping_waltz",
    name: "Unstopping Waltz",
    starRank: 4,
    category: FashionCategory.dress,
    tag1: Tag.gown,
    obtainMethods: [
      {
        obtainType: ObtainType.rewardSignIn,
      },
    ],
  },
  {
    id: "fashion__dress__all_the_flowers",
    name: "All the Flowers",
    starRank: 4,
    category: FashionCategory.dress,
    tag1: Tag.mori,
    obtainMethods: [
      {
        obtainType: ObtainType.rewardChapterPack,
        mode: "challenge",
        chapter: 10,
      },
    ],
  },
  {
    id: "fashion__dress__razor_jello",
    name: "Razor Jello",
    starRank: 4,
    category: FashionCategory.dress,
    tag1: Tag.street,
    tag2: Tag.hot_girl,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__starlight_show",
      },
    ],
  },
  {
    id: "fashion__dress__streamside_magnolia",
    name: "Streamside Magnolia",
    starRank: 4,
    category: FashionCategory.dress,
    tag1: Tag.mori,
    tag2: Tag.holiday,
    obtainMethods: [
      {
        obtainType: ObtainType.rewardFreshmenLimited,
      },
    ],
  },
  {
    id: "fashion__dress__apricot_sunset",
    name: "Apricot Sunset",
    starRank: 4,
    category: FashionCategory.dress,
    tag1: Tag.holiday,
    obtainMethods: [
      {
        obtainType: ObtainType.rewardSignIn,
      },
    ],
  },
  {
    id: "fashion__dress__unfettered_trip",
    name: "Unfettered Trip",
    starRank: 3,
    category: FashionCategory.dress,
    tag1: Tag.traditional,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "hard",
        stageIds: [
          [9, 11],
          [10, 1],
        ],
      },
    ],
  },
  {
    id: "fashion__dress__seasalt_milk_cap",
    name: "Seasalt Milk Cap",
    starRank: 3,
    category: FashionCategory.dress,
    tag1: Tag.holiday,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "normal",
        stageIds: [
          [1, 7],
          [3, 7],
          [6, 7],
          [10, 5],
        ],
      },
    ],
  },
  {
    id: "fashion__dress__girl_and_cat",
    name: "Girl and Cat",
    starRank: 3,
    category: FashionCategory.dress,
    tag1: Tag.animal,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "normal",
        stageIds: [
          [1, 6],
          [3, 8],
          [6, 8],
          [10, 6],
        ],
      },
    ],
  },
  {
    id: "fashion__dress__white_dew_beach",
    name: "White Dew Beach",
    starRank: 3,
    category: FashionCategory.dress,
    tag1: Tag.swimsuit,
    tag2: Tag.holiday,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "hard",
        stageIds: [
          [7, 1],
          [7, 2],
        ],
      },
    ],
  },

  {
    id: "fashion__dress__dislocation",
    name: "Dislocation",
    starRank: 3,
    category: FashionCategory.dress,
    tag1: Tag.girl_group,
    tag2: Tag.street,
    obtainMethods: [{ obtainType: ObtainType.reward }],
  },

  {
    id: "fashion__dress__twinkle_of_wings",
    name: "Twinkle of Wings",
    starRank: 3,
    category: FashionCategory.dress,
    tag1: Tag.girl_group,
    tag2: Tag.gown,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "normal",
        stageIds: [
          [3, 5],
          [6, 5],
          [10, 3],
        ],
      },
    ],
  },
  {
    id: "fashion__dress__simple_vibe",
    name: "Simple Vibe",
    starRank: 3,
    category: FashionCategory.dress,
    tag1: Tag.homey,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__starlight_show",
      },
    ],
  },
  {
    id: "fashion__dress__blanket_of_sunlight",
    name: "Blanket of Sunlight",
    starRank: 3,
    category: FashionCategory.dress,
    tag1: Tag.holiday,
    tag2: Tag.ladylike,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "normal",
        stageIds: [
          [1, 11],
          [4, 5],
          [7, 2],
          [11, 4],
        ],
      },
    ],
  },
  {
    id: "fashion__dress__pink_dream",
    name: "Pink Dream",
    starRank: 3,
    category: FashionCategory.dress,
    tag1: Tag.homey,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__starlight_show",
      },
    ],
  },
  {
    id: "fashion__dress__dark_sakura",
    name: "Dark Sakura",
    starRank: 6,
    category: FashionCategory.dress,
    tag1: Tag.japanese,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__beloved",
      },
    ],
  },

  {
    id: "fashion__dress__dawn_concerto",
    name: "Dawn Concerto",
    starRank: 5,
    category: FashionCategory.dress,
    tag1: Tag.gown,
    tag2: Tag.ladylike,
    obtainMethods: [
      {
        obtainType: ObtainType.premium,
        premiumPack: "premium__first_top_up",
      },
    ],
  },

  {
    id: "fashion__dress__glassy_light",
    name: "Glassy Light",
    starRank: 5,
    category: FashionCategory.dress,
    tag1: Tag.gown,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        // shopId: "shop__snowy_decom",
        // cost: ,
      },
    ],
  },

  {
    id: "fashion__dress__rosy_dance",
    name: "Rosy Dance",
    starRank: 5,
    category: FashionCategory.dress,
    tag1: Tag.ladylike,
    obtainMethods: [
      {
        obtainType: ObtainType.fashionCode,
        fashionCode: "fashioncode__snow_chapter",
      },
    ],
  },

  {
    id: "fashion__dress__moonlit_shell",
    name: "Moonlit Shell",
    starRank: 5,
    category: FashionCategory.dress,
    tag1: Tag.holiday,
    obtainMethods: [
      {
        obtainType: ObtainType.rewardChapterPack,
        mode: "hard",
        chapter: 13,
      },
    ],
  },
  {
    id: "fashion__dress__venus_of_spindrift",
    name: "Venus of Spindrift",
    starRank: 4,
    category: FashionCategory.dress,
    tag1: Tag.gown,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__starlight_show",
      },
    ],
  },
  {
    id: "fashion__dress__hymn_to_daylight",
    name: "Hymn to Daylight",
    starRank: 4,
    category: FashionCategory.dress,
    tag1: Tag.classic,
    tag2: Tag.gothic,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__starlight_show",
      },
    ],
  },

  {
    id: "fashion__dress__starry_river",
    name: "Starry River",
    starRank: 4,
    category: FashionCategory.dress,
    tag1: Tag.uniform,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__dewy_decom",
        cost: 340,
      },
    ],
  },
];

const tops = [
  {
    id: "fashion__top__sea_salt_puff",
    name: "Sea Salt Puff",
    starRank: 5,
    category: FashionCategory.top,
    tag1: Tag.ladylike,
    tag2: Tag.street,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__glimmer_shop",
        cost: 1570,
      },
    ],
  },

  {
    id: "fashion__top__cherry_and_bell",
    name: "Cherry & Bell",
    starRank: 5,
    category: FashionCategory.top,
    tag1: Tag.preppy,
    tag2: Tag.uniform,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__vvanna_challenge_shop",
        cost: 2400,
      },
    ],
  },

  {
    id: "fashion__top__dazing_summer",
    name: "Dazing Summer",
    starRank: 4,
    category: FashionCategory.top,
    tag1: Tag.street,
    obtainMethods: [
      {
        obtainType: ObtainType.operationEvents,
      },
    ],
  },

  {
    id: "fashion__top__functional_girl",
    name: "Functional Girl",
    starRank: 4,
    category: FashionCategory.top,
    tag1: Tag.cyberpunk,
    tag2: Tag.sporty,
    obtainMethods: [
      {
        obtainType: ObtainType.rewardChapterPack,
        mode: "normal",
        chapter: 4,
      },
    ],
  },

  {
    id: "fashion__top__milky_tea_kitty",
    name: "Milky Tea Kitty",
    starRank: 4,
    category: FashionCategory.top,
    tag1: Tag.girl_group,
    tag2: Tag.cyberpunk,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        cost: 37,
        currency: Material.diamond,
      },
    ],
  },

  {
    id: "fashion__top__nirvana",
    name: "Nirvana",
    starRank: 4,
    category: FashionCategory.top,
    tag1: Tag.street,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        cost: 35,
        currency: Material.diamond,
      },
    ],
  },

  {
    id: "fashion__top__beats_of_sunshine",
    name: "Beats of Sunshine",
    starRank: 4,
    category: FashionCategory.top,
    tag1: Tag.preppy,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__starlight_show",
      },
    ],
  },

  {
    id: "fashion__top__summer_waggle",
    name: "Summer Waggle",
    starRank: 3,
    category: FashionCategory.top,
    tag1: Tag.homey,
    obtainMethods: [
      {
        obtainType: ObtainType.origin,
      },
    ],
  },

  {
    id: "fashion__top__peach_soda",
    name: "Peach Soda",
    starRank: 3,
    category: FashionCategory.top,
    tag1: Tag.sporty,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        cost: 2468,
        currency: Material.gold,
      },
    ],
  },

  {
    id: "fashion__top__dreamy_island",
    name: "Dreamy Island",
    starRank: 3,
    category: FashionCategory.top,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "hard",
        stageIds: [
          [10, 2],
          [10, 5],
        ],
      },
    ],
  },

  {
    id: "fashion__top__coffee_zero",
    name: "Coffee Zero",
    starRank: 3,
    category: FashionCategory.top,
    tag1: Tag.formal,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "hard",
        stageIds: [
          [6, 2],
          [6, 8],
        ],
      },
    ],
  },

  {
    id: "fashion__top__glamorous_era",
    name: "Glamorous Era",
    starRank: 3,
    category: FashionCategory.top,
    tag1: Tag.sporty,
    tag2: Tag.street_punk,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        cost: 2468,
        currency: Material.gold,
      },
    ],
  },

  {
    id: "fashion__top__lords_story",
    name: "Lord's Story",
    starRank: 3,
    category: FashionCategory.top,
    tag1: Tag.british,
    tag2: Tag.retro,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__starlight_show",
      },
    ],
  },

  {
    id: "fashion__top__frigid_breeze",
    name: "Frigid Breeze",
    starRank: 3,
    category: FashionCategory.top,
    tag1: Tag.street,
    tag2: Tag.ladylike,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        cost: 2987,
        currency: Material.gold,
      },
    ],
  },

  {
    id: "fashion__top__throbbing_pulse",
    name: "Throbbing Pulse",
    starRank: 3,
    category: FashionCategory.top,
    tag1: Tag.sporty,
    obtainMethods: [
      {
        obtainType: ObtainType.origin,
      },
    ],
  },

  {
    id: "fashion__top__warm_sun",
    name: "Warm Sun",
    starRank: 3,
    category: FashionCategory.top,
    tag1: Tag.winter,
    tag2: Tag.dungarees,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "hard",
        stageIds: [
          [7, 7],
          [7, 11],
        ],
      },
    ],
  },

  {
    id: "fashion__top__surreal_symphony",
    name: "Surreal Symphony",
    starRank: 3,
    category: FashionCategory.top,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "hard",
        stageIds: [
          [10, 6],
          [10, 9],
        ],
      },
    ],
  },

  {
    id: "fashion__top__cherry_cream",
    name: "Cherry Cream",
    starRank: 3,
    category: FashionCategory.top,
    tag1: Tag.winter,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        cost: 4150,
        currency: Material.gold,
      },
    ],
  },

  {
    id: "fashion__top__dynamic_youth",
    name: "Dynamic Youth",
    starRank: 3,
    category: FashionCategory.top,
    tag1: Tag.street_punk,
    tag2: Tag.unisex,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        cost: 3158,
        currency: Material.gold,
      },
    ],
  },

  {
    id: "fashion__top__night_echo",
    name: "Night Echo",
    starRank: 3,
    category: FashionCategory.top,
    tag1: Tag.street_punk,
    tag2: Tag.dungarees,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "hard",
        stageIds: [
          [5, 5],
          [5, 11],
        ],
      },
    ],
  },

  {
    id: "fashion__top__mint_parfait",
    name: "Mint Parfait",
    starRank: 3,
    category: FashionCategory.top,
    tag1: Tag.girl_group,
    tag2: Tag.street,
    obtainMethods: [
      {
        obtainType: ObtainType.origin,
      },
    ],
  },

  {
    id: "fashion__top__wave_soda",
    name: "Wave Soda",
    starRank: 3,
    category: FashionCategory.top,
    tag1: Tag.ladylike,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        cost: 2579,
        currency: Material.gold,
      },
    ],
  },

  {
    id: "fashion__top__honeyed_heart",
    name: "Honeyed Heart",
    starRank: 3,
    category: FashionCategory.top,
    tag1: Tag.animal,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "normal",
        stageIds: [
          [1, 9],
          [4, 2],
          [6, 12],
          [10, 9],
        ],
      },
    ],
  },

  {
    id: "fashion__top__curtain_of_night",
    name: "Curtain of Night",
    starRank: 3,
    category: FashionCategory.top,
    tag1: Tag.girl_group,
    tag2: Tag.hot_girl,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        cost: 3150,
        currency: Material.gold,
      },
    ],
  },

  {
    id: "fashion__top__grayscale_space",
    name: "Grayscale Space",
    starRank: 3,
    category: FashionCategory.top,
    tag1: Tag.hot_girl,
    tag2: Tag.street_punk,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        cost: 4867,
        currency: Material.gold,
      },
    ],
  },

  {
    id: "fashion__top__white_verse",
    name: "White Verse",
    starRank: 3,
    category: FashionCategory.top,
    tag1: Tag.formal,
    tag2: Tag.unisex,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "normal",
        stageIds: [
          [1, 8],
          [3, 12],
          [6, 9],
        ],
      },
    ],
  },

  {
    id: "fashion__top__camellia_song",
    name: "Camellia Song",
    starRank: 3,
    category: FashionCategory.top,
    tag1: Tag.traditional,
    tag2: Tag.preppy,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        cost: 3100,
        currency: Material.gold,
      },
    ],
  },

  {
    id: "fashion__top__wave_music",
    name: "Wave Music",
    starRank: 3,
    category: FashionCategory.top,
    tag1: Tag.sporty,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__starlight_show",
      },
    ],
  },

  {
    id: "fashion__top__rainbow_light",
    name: "Rainbow Light",
    starRank: 3,
    category: FashionCategory.top,
    tag1: Tag.cyberpunk,
    tag2: Tag.sporty,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        cost: 5128,
        currency: Material.gold,
      },
    ],
  },

  {
    id: "fashion__top__the_joyland",
    name: "The Joyland",
    starRank: 3,
    category: FashionCategory.top,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__starlight_show",
      },
    ],
  },

  {
    id: "fashion__top__summer_paint",
    name: "Summer Paint",
    starRank: 3,
    category: FashionCategory.top,
    tag1: Tag.homey,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__starlight_show",
      },
    ],
  },

  {
    id: "fashion__top__autumn_farm",
    name: "Autumn Farm",
    starRank: 3,
    category: FashionCategory.top,
    tag1: Tag.winter,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "normal",
        stageIds: [
          [3, 11],
          [5, 9],
          [8, 7],
        ],
      },
    ],
  },

  {
    id: "fashion__top__orange_beach",
    name: "Orange Beach",
    starRank: 5,
    category: FashionCategory.top,
    tag1: Tag.holiday,
    obtainMethods: [
      {
        obtainType: ObtainType.fashionCode,
        // fashionCode: "fashioncode__",
      },
    ],
  },

  {
    id: "fashion__top__windchime_song",
    name: "Windchime Song",
    starRank: 4,
    category: FashionCategory.top,
    tag1: Tag.mori,
    tag2: Tag.pastoral,
    // obtainMethods: [{
    //   obtainType: ObtainType. ,

    // },],
  },

  {
    id: "fashion__top__parade_badge",
    name: "Parade Badge",
    starRank: 4,
    category: FashionCategory.top,
    tag1: Tag.uniform,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__starlight_show",
      },
    ],
  },

  {
    id: "fashion__top__vibrant_girl",
    name: "Vibrant Girl",
    starRank: 4,
    category: FashionCategory.top,
    tag1: Tag.preppy,
    obtainMethods: [
      {
        obtainType: ObtainType.rewardSignIn,
      },
    ],
  },
];

const bottoms = [
  {
    id: "fashion__bottom__sea_salt_smoothie",
    name: "Sea Salt Smoothie",
    starRank: 5,
    category: FashionCategory.bottom,
    tag1: Tag.ladylike,
    tag2: Tag.street,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__glimmer_shop",
        cost: 940,
      },
    ],
  },
  {
    id: "fashion__bottom__early_sakura",
    name: "Early Sakura",
    starRank: 5,
    category: FashionCategory.bottom,
    tag1: Tag.preppy,
    tag2: Tag.uniform,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__vvanna_challenge_shop",
        cost: 1800,
      },
    ],
  },
  {
    id: "fashion__bottom__peach_jelly",
    name: "Peach Jelly",
    starRank: 5,
    category: FashionCategory.bottom,
    tag1: Tag.preppy,
    obtainMethods: [
      {
        obtainType: ObtainType.event,
      },
    ],
  },
  {
    id: "fashion__bottom__hazy_hedge",
    name: "Hazy Hedge",
    starRank: 4,
    category: FashionCategory.bottom,
    tag1: Tag.street,
    obtainMethods: [
      {
        obtainType: ObtainType.operationEvents,
      },
    ],
  },
  {
    id: "fashion__bottom__geometric_code",
    name: "Geometric Code",
    starRank: 4,
    category: FashionCategory.bottom,
    tag1: Tag.cyberpunk,
    tag2: Tag.street_punk,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.diamond,
        cost: 38,
      },
    ],
  },
  {
    id: "fashion__bottom__modern_lady",
    name: "Modern Lady",
    starRank: 4,
    category: FashionCategory.bottom,
    tag1: Tag.street_punk,
    tag2: Tag.hot_girl,
    obtainMethods: [
      {
        obtainType: ObtainType.rewardChapterPack,
        chapter: 3,
        mode: "normal",
      },
    ],
  },
  {
    id: "fashion__bottom__verdant_spring",
    name: "Verdant Spring",
    starRank: 4,
    category: FashionCategory.bottom,
    tag1: Tag.mori,
    tag2: Tag.traditional,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.diamond,
        cost: 40,
      },
    ],
  },
  {
    id: "fashion__bottom__casual_trip",
    name: "Casual Trip",
    starRank: 4,
    category: FashionCategory.bottom,
    tag1: Tag.sporty,
    tag2: Tag.homey,
    obtainMethods: [
      {
        obtainType: ObtainType.rewardChapterPack,
        chapter: 9,
        mode: "normal",
      },
    ],
  },
  {
    id: "fashion__bottom__night_and_lie",
    name: "Night and Lie",
    starRank: 4,
    category: FashionCategory.bottom,
    tag1: Tag.preppy,
    tag2: Tag.fairytale,
    obtainMethods: [
      {
        obtainType: ObtainType.rewardChapterPack,
        chapter: 1,
        mode: "challenge",
      },
    ],
  },
  {
    id: "fashion__bottom__streamer_night",
    name: "Streamer Night",
    starRank: 4,
    category: FashionCategory.bottom,
    tag1: Tag.uniform,
    obtainMethods: [
      {
        obtainType: ObtainType.rewardEndorsementQueen,
        endorsementQueent: "twinkling_grails",
        season: 1,
      },
    ],
  },
  {
    id: "fashion__bottom__summer_skirt",
    name: "Summer Skirt",
    starRank: 3,
    category: FashionCategory.bottom,
    tag1: Tag.homey,
    obtainMethods: [
      {
        obtainType: ObtainType.origin,
      },
    ],
  },
  {
    id: "fashion__bottom__heat_wave",
    name: "Heat Wave",
    starRank: 3,
    category: FashionCategory.bottom,
    tag1: Tag.hot_girl,
    tag2: Tag.sporty,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "normal",
        stageIds: [[9, 4]],
      },
    ],
  },
  {
    id: "fashion__bottom__equation",
    name: "Equation",
    starRank: 3,
    category: FashionCategory.bottom,
    tag1: Tag.sporty,
    tag2: Tag.sunproof,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 2003,
      },
    ],
  },
  {
    id: "fashion__bottom__azure_youth",
    name: "Azure Youth",
    starRank: 3,
    category: FashionCategory.bottom,
    tag1: Tag.unisex,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 2487,
      },
    ],
  },
  {
    id: "fashion__bottom__sugar_free",
    name: "Sugar-free",
    starRank: 3,
    category: FashionCategory.bottom,
    tag1: Tag.formal,
    tag2: Tag.ladylike,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 2658,
      },
    ],
  },
  {
    id: "fashion__bottom__grayish_blue",
    name: "Grayish-blue",
    starRank: 3,
    category: FashionCategory.bottom,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "hard",
        stageIds: [
          [5, 1],
          [5, 3],
        ],
      },
    ],
  },
  {
    id: "fashion__bottom__retro_reminiscence",
    name: "Retro Reminiscence",
    starRank: 3,
    category: FashionCategory.bottom,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "hard",
        stageIds: [
          [2, 5],
          [2, 9],
        ],
      },
    ],
  },
  {
    id: "fashion__bottom__modern_girl",
    name: "Modern Girl",
    starRank: 3,
    category: FashionCategory.bottom,
    tag1: Tag.street,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "hard",
        stageIds: [
          [1, 2],
          [1, 9],
        ],
      },
    ],
  },
  {
    id: "fashion__bottom__blue_symphony",
    name: "Blue Symphony",
    starRank: 3,
    category: FashionCategory.bottom,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "mind",
        stageIds: [[1, 3]],
      },
    ],
  },
  {
    id: "fashion__bottom__dynamic_element",
    name: "Dynamic Element",
    starRank: 3,
    category: FashionCategory.bottom,
    tag1: Tag.sporty,
    tag2: Tag.dungarees,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 1985,
      },
    ],
  },
  {
    id: "fashion__bottom__spring_overture",
    name: "Spring Overture",
    starRank: 3,
    category: FashionCategory.bottom,
    tag1: Tag.preppy,
    tag2: Tag.uniform,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "mind",
        stageIds: [[2, 5]],
      },
    ],
  },
  {
    id: "fashion__bottom__noir_trend",
    name: "Noir Trend",
    starRank: 3,
    category: FashionCategory.bottom,
    tag1: Tag.sporty,
    tag2: Tag.dungarees,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "hard",
        stageIds: [
          [7, 4],
          [7, 6],
        ],
      },
    ],
  },
  {
    id: "fashion__bottom__corner_waltz",
    name: "Corner Waltz",
    starRank: 3,
    category: FashionCategory.bottom,
    tag1: Tag.street_punk,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 2108,
      },
    ],
  },
  {
    id: "fashion__bottom__broken_night",
    name: "Broken Night",
    starRank: 3,
    category: FashionCategory.bottom,
    tag1: Tag.sporty,
    obtainMethods: [
      {
        obtainType: ObtainType.origin,
      },
    ],
  },
  {
    id: "fashion__bottom__summer_shade",
    name: "Summer Shade",
    starRank: 3,
    category: FashionCategory.bottom,
    tag1: Tag.girl_group,
    tag2: Tag.holiday,
    obtainMethods: [
      {
        obtainType: ObtainType.origin,
      },
    ],
  },
  {
    id: "fashion__bottom__pink_summer",
    name: "Pink Summer",
    starRank: 3,
    category: FashionCategory.bottom,
    tag1: Tag.sporty,
    tag2: Tag.homey,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__starlight_show",
      },
    ],
  },
  {
    id: "fashion__bottom__blueberry_bubble",
    name: "Blueberry Bubble",
    starRank: 3,
    category: FashionCategory.bottom,
    tag1: Tag.ladylike,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 5712,
      },
    ],
  },
  {
    id: "fashion__bottom__cool_summer",
    name: "Cool Summer",
    starRank: 3,
    category: FashionCategory.bottom,
    tag1: Tag.hot_girl,
    tag2: Tag.girl_group,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 2354,
      },
    ],
  },
  {
    id: "fashion__bottom__mixed_feelings",
    name: "Mixed Feelings",
    starRank: 3,
    category: FashionCategory.bottom,
    tag1: Tag.unisex,
    tag2: Tag.street,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 2787,
      },
    ],
  },
  {
    id: "fashion__bottom__gilded_forest",
    name: "Gilded Forest",
    starRank: 3,
    category: FashionCategory.bottom,
    tag1: Tag.street,
    tag2: Tag.ladylike,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 5684,
      },
    ],
  },
  {
    id: "fashion__bottom__sand_plaid",
    name: "Sand Plaid",
    starRank: 3,
    category: FashionCategory.bottom,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "normal",
        stageIds: [
          [7, 1],
          [9, 8],
        ],
      },
    ],
  },
  {
    id: "fashion__bottom__young_spirit",
    name: "Young Spirit",
    starRank: 3,
    category: FashionCategory.bottom,
    tag1: Tag.holiday,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
        currency: Material.gold,
        cost: 2658,
      },
    ],
  },
  {
    id: "fashion__bottom__coffee_zero",
    name: "Coffee Zero",
    starRank: 3,
    category: FashionCategory.bottom,
    tag1: Tag.formal,
    tag2: Tag.british,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__starlight_show",
      },
    ],
  },
  {
    id: "fashion__bottom__knight_of_darkness",
    name: "Knight of Darkness",
    starRank: 3,
    category: FashionCategory.bottom,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__starlight_show",
      },
    ],
  },
  {
    id: "fashion__bottom__city_walk",
    name: "City Walk",
    starRank: 3,
    category: FashionCategory.bottom,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "mind",
        stageIds: [[2, 6]],
      },
    ],
  },
  {
    id: "fashion__bottom__sparkle_ball",
    name: "Sparkle Ball",
    starRank: 5,
    category: FashionCategory.bottom,
    tag1: Tag.street,
    tag2: Tag.girl_group,
    obtainMethods: [
      {
        obtainType: ObtainType.rewardEvolution,
        allyId: "ally__perfect_match",
      },
    ],
  },
  {
    id: "fashion__bottom__orange_figure",
    name: "Orange Figure",
    starRank: 5,
    category: FashionCategory.bottom,
    tag1: Tag.holiday,
    obtainMethods: [
      {
        obtainType: ObtainType.fashionCode,
        // fashionCode: "fashioncode__",
      },
    ],
  },
  {
    id: "fashion__bottom__spring_dream",
    name: "Spring Dream",
    starRank: 4,
    category: FashionCategory.bottom,
    tag1: Tag.mori,
    tag2: Tag.pastoral,
    // obtainMethods: [{
    //     obtainType: ObtainType.rewardSignIn
    // },],
  },
  {
    id: "fashion__bottom__song_of_youth",
    name: "Song of Youth",
    starRank: 4,
    category: FashionCategory.bottom,
    tag1: Tag.preppy,
    obtainMethods: [
      {
        obtainType: ObtainType.rewardSignIn,
      },
    ],
  },
];

const socks = [
  "fashion__socks__sea_foam",
  "fashion__socks__tender_buds",
  "fashion__socks__spring_love",
  "fashion__socks__starry_bubbles",
  "fashion__socks__gold_ceremony",
  "fashion__socks__curtain_of_stars",
  "fashion__socks__white_lovesong",
  "fashion__socks__soft_dance_steps",
  "fashion__socks__snowy_sakura",
  "fashion__socks__flower_shade",
  "fashion__socks__haze",
  "fashion__socks__blackcat_girl",
  "fashion__socks__white_ripples",
  "fashion__socks__flower_dew",
  "fashion__socks__floew_bow",
  "fashion__socks__green_gauze",
  "fashion__socks__chill_style",
  "fashion__socks__song_of_flowers",
  "fashion__socks__long_moonset",
  "fashion__socks__nocturnal_castle",
  "fashion__socks__watermelon_candy",
  "fashion__socks__sky_and_sea",
  "fashion__socks__night_cherry",
  "fashion__socks__star_course",
  "fashion__socks__floral_silhouette",
  "fashion__socks__cowmilk_bath",
  "fashion__socks__strawberry_icing",
  "fashion__socks__twig_brocade",
  "fashion__socks__girl_letter",
  "fashion__socks__feather_hymn",
  "fashion__socks__orange_plaid",
  "fashion__socks__super_girl",
  "fashion__socks__night_shadow",
  "fashion__socks__creamy_toffee",
  "fashion__socks__startalk",
  "fashion__socks__young_voyage",
  "fashion__socks__pure_imprint",
  "fashion__socks__bright_feeling",
  "fashion__socks__snow_hidden",
  "fashion__socks__daytime_skyline",
  "fashion__socks__strawberry_top",
  "fashion__socks__short_step_slipper",
  "fashion__socks__mottled_snow",
  "fashion__socks__silk_woven_love",
  "fashion__socks__night_time_skyline",
  "fashion__socks__valley_morning",
  "fashion__socks__lakeside_petal",
  "fashion__socks__embroidered_art",
  "fashion__socks__carving_of_bloom",
  "fashion__socks__shattered_stars",
  "fashion__socks__warm_kapok",
  "fashion__socks__snowy_ribbon",
  "fashion__socks__intertwined_beats",
  "fashion__socks__cubic_sugar",
  "fashion__socks__nebulas",
  "fashion__socks__trail_of_flower",
  "fashion__socks__music_movement",
  "fashion__socks__moon_night_treetop",
  "fashion__socks__trace_of_romance",
  "fashion__socks__dew_of_affection",
  "fashion__socks__remaining_aura",
  "fashion__socks__morning_dream",
  "fashion__socks__campus_lane",
  "fashion__socks__starnet",
  "fashion__socks__drawing_star",
  "fashion__socks__soft_cherry",
  "fashion__socks__flower_wrap",
  "fashion__socks__wintry_lattice",
];

const shoes = [
  "fashion__shoes__b_w_realm",
  "fashion__shoes__song_of_glory",
  "fashion__shoes__leisurely_stroll",
  "fashion__shoes__childishness",
  "fashion__shoes__joyful_sakura",
  "fashion__shoes__roam_in_moonlight",
  "fashion__shoes__song_of_praise",
  "fashion__shoes__peach_rhythm",
  "fashion__shoes__golden_days",
  "fashion__shoes__star_traveler",
  "fashion__shoes__fairy_tale",
  "fashion__shoes__wavy_suite",
  "fashion__shoes__casual_step",
  "fashion__shoes__autumn_stroll",
  "fashion__shoes__after_class_bell",
  "fashion__shoes__nap",
  "fashion__shoes__mountain_snow",
  "fashion__shoes__bouncing_balls",
  "fashion__shoes__clever_girl",
  "fashion__shoes__fluttering_wings",
  "fashion__shoes__mystery_story",
  "fashion__shoes__rusted_manor",
  "fashion__shoes__vine_shade",
  "fashion__shoes__black_wings",
  "fashion__shoes__tides_collection",
  "fashion__shoes__lotus_waltz",
  "fashion__shoes__end_of_night",
  "fashion__shoes__mood_badge",
  "fashion__shoes__strawberry_soda",
  "fashion__shoes__lunar_goddess",
  "fashion__shoes__motley_nightlight",
  "fashion__shoes__drifting_petals",
  "fashion__shoes__fluffys_trace",
  "fashion__shoes__evening_twilight",
  "fashion__shoes__floral_serenade",
  "fashion__shoes__star_trail",
  "fashion__shoes__moonlit_spring",
  "fashion__shoes__floral_shadow",
  "fashion__shoes__fluffy_rabbit",
  "fashion__shoes__pearl_under_lake",
  "fashion__shoes__sea_of_wisteria",
  "fashion__shoes__field_stroll",
  "fashion__shoes__spring_song",
  "fashion__shoes__sweet_coco",
  "fashion__shoes__winter_tale",
  "fashion__shoes__surfing_sunshine",
  "fashion__shoes__night_roaming",
  "fashion__shoes__peachy_mood",
  "fashion__shoes__bubble_wrappers",
  "fashion__shoes__lost_in_mist",
];

const hats = [
  "fashion__hat__deer_forest",
  "fashion__hat__coffee_bud",
  "fashion__hat__embroidery",
  "fashion__hat__frost_coronation",
  "fashion__hat__dazzling_halo",
  "fashion__hat__retro_tune",
  "fashion__hat__crystal_nightsky",
  "fashion__hat__tales_of_wings",
  "fashion__hat__little_devil",
  "fashion__hat__nights_treat",
  "fashion__hat__crane_figure",
  "fashion__hat__phantom_flower",
  "fashion__hat__flying_lavender",
  "fashion__hat__dreamwalker",
  "fashion__hat__coupled_wings",
  "fashion__hat__cute_rabbit_carrot",
  "fashion__hat__crane_crown",
  "fashion__hat__wonderful_dream",
  "fashion__hat__the_aries",
  "fashion__hat__heart_of_clown",
  "fashion__hat__spy_in_sunset",
  "fashion__hat__arcadian_rhyme",
  "fashion__hat__spring_flowers",
  "fashion__hat__drizzling_morning",
  "fashion__hat__night_ballad",
];

const hairs = [
  "fashion__hair__fleeting_joy",
  "fashion__hair__golden_time",
  "fashion__hair__heart_of_crane",
  "fashion__hair__devils_horns",
  "fashion__hair__warm_sunshine",
  "fashion__hair__wind_of_freedom",
  "fashion__hair__heartfelt_weave",
  "fashion__hair__floral_makeup",
  "fashion__hair__starry_soda",
  "fashion__hair__love_of_butterfly",
  "fashion__hair__fancy_years",
  "fashion__hair__birchleaf_pears",
  "fashion__hair__neon_moon_berry",
  "fashion__hair__verdant_tassel",
  "fashion__hair__water_tenderness",
  "fashion__hair__heart_of_rose",
  "fashion__hair__binary_star",
  "fashion__hair__starlight_date",
  "fashion__hair__flickering_butterfly",
];

const faceItems = [
  "fashion__face__heart_bubble",
  "fashion__face__tales_of_butterfly",
  "fashion__face__dappled_twilight",
  "fashion__face__glistening_eyes",
  "fashion__face__tender_gaze",
  "fashion__face__flowing_snow",
  "fashion__face__knight_order",
  "fashion__face__gross_knight",
  "fashion__face__puzzling_poem",
  "fashion__face__golden_days",
  "fashion__face__gold_mask",
  "fashion__face__light_tea_world",
  "fashion__face__dusk_holiday",
  "fashion__face__sidelong_glance",
  "fashion__face__troop_of_peaches",
  "fashion__face__sakura_curtain",
  "fashion__face__diamond_alliance",
  "fashion__face__star_journey",
  "fashion__face__golden_whisper",
  "fashion__face__fair_lady",
  "fashion__face__beyond_the_dune",
  "fashion__face__reflected_sunlight",
];

const earrings = [
  "fashion__earrings__girls_worry",
  "fashion__earrings__lunar_poem",
  "fashion__earrings__beautiful_sun",
  "fashion__earrings__poker_queen",
  "fashion__earrings__cage_of_thorns",
  "fashion__earrings__sweet_dance",
  "fashion__earrings__midnight_sun",
  "fashion__earrings__elven_tears",
  "fashion__earrings__missing_star",
  "fashion__earrings__wish_of_plum",
  "fashion__earrings__falling_moonlight",
  "fashion__earrings__florid_eventide",
  "fashion__earrings__eternal_beloved",
  "fashion__earrings__summer_love",
  "fashion__earrings__delight_time",
  "fashion__earrings__light_butterfly",
  "fashion__earrings__resounding_romance",
  "fashion__earrings__half_moonlight",
  "fashion__earrings__love_melody",
  "fashion__earrings__teardrop_of_star",
  "fashion__earrings__black_plaid_fringe",
  "fashion__earrings__undersea_stars",
  "fashion__earrings__floral_farewell",
  "fashion__earrings__farewell_in_petals",
  "fashion__earrings__purple_blossom",
  "fashion__earrings__heart_controller",
  "fashion__earrings__whispering_rain",
  "fashion__earrings__radiant_banquet",
  "fashion__earrings__starry_snow",
  "fashion__earrings__birchleaf_pear",
  "fashion__earrings__sky_fantasy",
  "fashion__earrings__velvety_moonlight",
  "fashion__earrings__fluffy_snow",
];

const necklaces = [
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
  "fashion__necklace__",
];

const wristItems = [
  "fashion__wrist__spring_dandelion",
  "fashion__wrist__mood_binder_clip",
  "fashion__wrist__star_ring",
  "fashion__wrist__rosy_encounter",
  "fashion__wrist__deep_resonance",
  "fashion__wrist__youth_message",
  "fashion__wrist__colorful_crystal",
  "fashion__wrist__moonlit_crystal",
  "fashion__wrist__lilac_firefly",
  "fashion__wrist__white_candy",
  "fashion__wrist__brightmoon_galaxy",
  "fashion__wrist__empathetic_type",
  "fashion__wrist__blurred_coastline",
  "fashion__wrist__bond_of_crystal",
];

const gloves = [
  "fashion__gloves__shining_stars",
  "fashion__gloves__moonlight_shower",
  "fashion__gloves__melting_thaw",
  "fashion__gloves__peachy_meteor",
  "fashion__gloves__capturing_sunlight",
  "fashion__gloves__moon_river",
  "fashion__gloves__sleeping_star",
];

const rings = [
  "fashion__ring__flickering_firefly",
  "fashion__ring__brilliant_moon",
  "fashion__ring__divine_punishment",
  "fashion__ring__shine_of_sunstone",
  "fashion__ring__glassy_candy",
  "fashion__ring__cherished_days",
  "fashion__ring__peachy_rhyme",
];

const handhelds = [
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
  "fashion__handheld__",
];

const wings = [
  "fashion__wings__wing_of_icarus",
  "fashion__wings__white_wings",
  "fashion__wings__butterfly_dream",
  "fashion__wings__transient_light",
  "fashion__wings__moonlit_amber",
];

const tails = [
  "fashion__tail__pink_blue_furry",
  "fashion__tail__special_meow",
  "fashion__tail__brisk_pace",
  "fashion__tail__magic_fox",
];

const backItems = [
  "fashion__back__motto_of_study",
  "fashion__back__sweet_teddy",
  "fashion__back__heart_of_crane",
];

const anklets = ["fashion__anklet_triangle_code"];

const crossbodyItems = [
  "fashion__crossbody__white_envelope",
  "fashion__crossbody__teddy_academy",
  "fashion__crossbody__sticky_dumpling",
];

const floatingItems = [
  "fashion__floating__lord_rabbit",
  "fashion__floating__fairy_tale_planet",
  "fashion__floating__fluttering_dance",
  "fashion__floating__kitty_fantasy",
];

const tattoos = [
  "fashion__tattoo__light_dance",
  "fashion__tattoo__childhood_fun",
  "fashion__tattoo__paper_plane",
  "fashion__tattoo__star_and_moon",
  "fashion__tattoo__fiery_badge",
  "fashion__tattoo__poem_of_windchimes",
  "fashion__tattoo__silent_poetry",
];
