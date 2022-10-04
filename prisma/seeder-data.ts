import { EventType, LightchaseType, Material } from "../types/enums";
import { Event, Item, Lightchase, ObtainType, Set } from "../types/interfaces";
import {
  AccessoryCategory,
  Brand,
  FashionCategory,
  Style,
  StyleRank,
  Tag,
} from "../types/types";

// sets
// craft
// pavilion
// event
// unofficial
// store - endorsement, fashion battle, etc.

// items
// story drops
// achievement
// sign-in
// etc.

// C = 1-5
// B = 6-10
// A   11-15
// S   16-20
// SS  21-25
// SSS 26-30

const lightchases: Lightchase[] = [
  {
    id: "lightchase__dewy_tears",
    name: "Dewy Tears",
    duration: { sea: "29/09/2022, 10:30 - 20/10/2022, 0:00" },
  },
];

const events: Event[] = [
  {
    id: "event__signin__oct_2022",
    name: "Sign In Bonus - October 2022",
    type: EventType.signIn,
    duration: { sea: "01/10/2022 - 31/10/2022" },
  },
  {
    id: "event__treasure_hunt",
    name: "Treasure Hunt",
    type: EventType.treasureHunt,
    duration: { sea: "12/08/2022 10:00 - 19/08/2022 5:00 (UTC+8)" },
  },
];

const items: Item[] = [
  // {
  //     id: "fashion__",
  //     name: "",
  //     description: "",
  //     starRank: 4,
  //     category: ,
  //     mainStyle: Style.,
  //
  //     tag1: ,
  //     tag2: ,
  //     obtainMethods: [{
  //     obtainType: ObtainType. ,

  //     }],
  // },

  //   {
  //       id: "",
  //       name: "",
  //       description: "",
  //       starRank: 4,
  //       category: ,
  //       mainStyle: Style.,
  //
  //       tag1: ,
  //       tag2: ,
  //       obtainMethods: [
  //         {
  //           obtainType: ObtainType. ,

  //       }
  //     ],
  //   },

  {
    id: "fashion__shoes__lunar_goddess",
    name: "Lunar Goddess",
    starRank: 3,
    category: FashionCategory.shoes,
    mainStyle: Style.elegant,
    tag1: Tag.formal,
    tag2: Tag.ladylike,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        stageIds: [
          "stage__story__1_2",
          "stage__story__3_1",
          "stage__story__6_1",
        ],
        mode: "normal",
      },
    ],
  },
  {
    id: "fashion__shoes__mountain_snow",
    name: "Mountain Snow",
    starRank: 3,
    category: FashionCategory.shoes,
    mainStyle: Style.lively,
    tag1: Tag.sporty,
    tag2: Tag.cool,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        stageIds: [
          "stage__story__1_4",
          "stage__story__3_3",
          "stage__story__6_2",
        ],
        mode: "normal",
      },
    ],
  },
  {
    id: "fashion__hairstyle__good_wishes",
    name: "Good Wishes",
    starRank: 3,
    category: FashionCategory.hairstyle,
    mainStyle: Style.pure,

    tag1: Tag.traditional,
    tag2: Tag.street_punk,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        stageIds: [
          "stage__story__1_8",
          "stage__story__8_5",
          "stage__story__6_10",
          "stage__story__10-7",
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
    id: "fashion__dress__hazelnut_latte",
    name: "Hazelnut Latte",
    description:
      "The hazelnut flavor wanders around the tongue, as if it is returning to the forest.",
    starRank: 4,
    category: FashionCategory.dress,
    mainStyle: Style.lively,
    styleRanks: {
      lively: StyleRank.s,
      gorgeous: StyleRank.a,
      sweet: StyleRank.b,
      pure: StyleRank.b,
      fresh: StyleRank.c,
    },
    tag1: Tag.lolita,
    tag2: Tag.pastoral,
    obtainMethods: [
      {
        obtainType: ObtainType.event,
        eventId: "event__treasure_hunt",
      },
    ],
  },

  {
    id: "fashion__socks__cream_affogato",
    name: "Cream Affogato",
    starRank: 4,
    category: FashionCategory.socks,
    mainStyle: Style.lively,
    styleRanks: {
      lively: StyleRank.s,
      gorgeous: StyleRank.a,
      sweet: StyleRank.b,
      pure: StyleRank.b,
      warm: StyleRank.b,
    },
    tag1: Tag.lolita,
    tag2: Tag.pastoral,
    obtainMethods: [
      {
        obtainType: ObtainType.event,
        eventId: "event__treasure_hunt",
      },
    ],
  },
  {
    id: "fashion__shoes__sweetheart",
    name: "Sweetheart",
    starRank: 4,
    category: FashionCategory.shoes,
    mainStyle: Style.lively,
    styleRanks: {
      lively: StyleRank.s,
      gorgeous: StyleRank.a,
      sweet: StyleRank.b,
      pure: StyleRank.b,
      fresh: StyleRank.c,
    },
    tag1: Tag.lolita,
    tag2: Tag.pastoral,
    obtainMethods: [
      {
        obtainType: ObtainType.event,
        eventId: "event__treasure_hunt",
      },
    ],
  },
  {
    id: "fashion__hat__cat_ear_cake",
    name: "Cat Ear Cake",
    starRank: 4,
    category: AccessoryCategory.hat,
    mainStyle: Style.lively,
    styleRanks: {
      lively: StyleRank.s,
      gorgeous: StyleRank.a,
      sweet: StyleRank.b,
      pure: StyleRank.b,
      fresh: StyleRank.c,
    },
    tag1: Tag.lolita,
    tag2: Tag.pastoral,
    obtainMethods: [
      {
        obtainType: ObtainType.event,
        eventId: "event__treasure_hunt",
      },
    ],
  },
  {
    id: "fashion__gloves__white_mousse",
    name: "White Mousse",
    starRank: 4,
    category: AccessoryCategory.gloves,
    mainStyle: Style.lively,
    styleRanks: {
      lively: StyleRank.s,
      gorgeous: StyleRank.a,
      sweet: StyleRank.b,
      pure: StyleRank.b,
      fresh: StyleRank.c,
    },
    tag1: Tag.lolita,
    tag2: Tag.pastoral,
    obtainMethods: [
      {
        obtainType: ObtainType.event,
        eventId: "event__treasure_hunt",
      },
    ],
  },

  {
    id: "fashion__socks__forest_romance",
    name: "Forest Romance",
    description: "The brook babbles away in a green forest.",
    starRank: 4,
    category: FashionCategory.socks,
    mainStyle: Style.sexy,
    styleRanks: {
      sexy: 19,
      elegant: 13,
      sweet: 8,
      simple: 8,
      fresh: 5,
    },
    tag1: Tag.holiday,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__dewy_tears",
      },
    ],
  },

  {
    id: "fashion__shoes__wandering_moonlight",
    name: "Wandering Moonlight",
    description: "Only the moonlight is wandering in a night without wind.",
    starRank: 4,
    category: FashionCategory.shoes,
    mainStyle: Style.sexy,
    styleRanks: {
      sexy: 19,
      elegant: 13,
      sweet: 9,
      simple: 8,
      fresh: 5,
    },
    tag1: Tag.holiday,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__dewy_tears",
      },
    ],
  },

  {
    id: "fashion__handheld__myriad_of_dreams",
    name: "Myriad of Dreams",
    description:
      "Myriads of dreams are hidden beneath the sea, whispering to ears.",
    starRank: 4,
    category: AccessoryCategory.handheld,
    mainStyle: Style.sexy,
    styleRanks: {
      sexy: 19,
      elegant: 12,
      sweet: 8,
      simple: 8,
      fresh: 5,
    },
    tag1: Tag.holiday,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__dewy_tears",
      },
    ],
  },

  {
    id: "fashion__top__perfume_island",
    name: "Perfume Island",
    description:
      "Seawater overflows the beach. The fragrance from a girl intoxicates rosy clouds.",
    starRank: 4,
    category: FashionCategory.top,
    mainStyle: Style.sexy,
    styleRanks: {
      sexy: 19,
      elegant: 11,
      sweet: 8,
      simple: 7,
      fresh: 5,
    },
    tag1: Tag.holiday,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__dewy_tears",
      },
    ],
  },

  {
    id: "fashion__bottom__white_curtain",
    name: "White Burtains",
    description: "Wisps of fragrance came from white curtains",
    starRank: 4,
    category: FashionCategory.bottom,
    mainStyle: Style.sexy,
    styleRanks: {
      sexy: 19,
      elegant: 12,
      sweet: 7,
      simple: 8,
      fresh: 6,
    },
    tag1: Tag.holiday,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__dewy_tears",
      },
    ],
  },

  {
    id: "fashion__earrings__eternal_beloved",
    name: "Eternal Beloved",
    description: "The shimmer in gems is my love.",
    starRank: 4,
    category: AccessoryCategory.earrings,
    mainStyle: Style.pure,
    tag1: Tag.preppy,
    obtainMethods: [
      {
        obtainType: ObtainType.event,
        eventId: "event__signin__oct_2022",
      },
    ],
  },
  {
    id: "fashion__shoes__after_class_bell",
    name: "After-Class Bell",
    description: "When will the class be over? I'm ready!",
    starRank: 4,
    category: FashionCategory.shoes,
    mainStyle: Style.pure,

    tag1: Tag.preppy,
    obtainMethods: [
      {
        obtainType: ObtainType.event,
        eventId: "event__signin__oct_2022",
      },
    ],
  },
  {
    id: "fashion__socks__campus_lane",
    name: "Campus Lane",
    description: "There's always someone calling after you on that lane.",
    starRank: 4,
    category: FashionCategory.socks,
    mainStyle: Style.pure,
    tag1: Tag.preppy,
    obtainMethods: [
      {
        obtainType: ObtainType.event,
        eventId: "event__signin__oct_2022",
      },
    ],
  },
  {
    id: "fashion__bottom__song_of_youth",
    name: "Song of Youth",
    description: "At the most carefree age, write a song of youth.",
    starRank: 4,
    category: FashionCategory.bottom,
    mainStyle: Style.pure,
    tag1: Tag.preppy,
    obtainMethods: [
      {
        obtainType: ObtainType.event,
        eventId: "event__signin__oct_2022",
      },
    ],
  },
  {
    id: "fashion__handheld__cat_party",
    name: "Cat Party",
    description: "So many footprints! Cats throw a party here!",
    starRank: 4,
    category: AccessoryCategory.handheld,
    mainStyle: Style.pure,
    tag1: Tag.preppy,
    obtainMethods: [
      {
        obtainType: ObtainType.event,
        eventId: "event__signin__oct_2022",
      },
    ],
  },
  {
    id: "fashion__top__vibrant_girl",
    name: "Vibrant Girl",
    description: "Youth outshines the spring.",
    starRank: 4,
    category: FashionCategory.top,
    mainStyle: Style.pure,
    tag1: Tag.preppy,
    obtainMethods: [
      {
        obtainType: ObtainType.event,
        eventId: "event__signin__oct_2022",
      },
    ],
  },
];

const sets: Set[] = [
  // {
  //     id: "fashion__set__",
  //     name: "",
  //     starRank: 4,
  //     obtainType: ObtainType.,
  //     mainStyle: Style.,
  //     itemIds: [
  //         '',
  //     ],
  // },

  {
    id: "fashion__set__hazelnut_latte",
    name: "Hazelnut Latte",
    starRank: 4,
    obtainType: ObtainType.event,
    mainStyle: Style.lively,
    itemIds: [
      "fashion__dress__hazelnut_latte",
      "fashion__socks__cream_affogato",
      "fashion__shoes__sweetheart",
      "fashion__hat__cat_ear_cake",
      "fashion__gloves__white_mousse",
    ],
  },

  {
    id: "fashion__set__perfume_island",
    name: "Perfume Island",
    starRank: 4,
    obtainType: ObtainType.lightchase,
    mainStyle: Style.sexy,
    itemIds: [
      "fashion__socks__forest_romance",
      "fashion__shoes__wandering_moonlight",
      "fashion__handheld__myriad_of_dreams",
      "fashion__top__perfume_island",
      "fashion__bottom__white_curtain",
    ],
  },

  {
    id: "fashion__set__sign_in_oct_22",
    name: "(Unofficial Sign In Outfit - October 2022",
    starRank: 4,
    obtainType: ObtainType.event,
    mainStyle: Style.pure,
    itemIds: [
      "fashion__item__eternal_beloved",
      "fashion__item__after_class_bell",
      "fashion__item__campus_lane",
      "fashion__item__song_of_youth",
      "fashion__item__cat_party",
      "fashion__item__vibrant_girl",
    ],
  },

  {
    id: "fashion__set__sleepy_bunny",
    name: "Sleepy Bunny",
    starRank: 4,
    brand: Brand.amber_shimmer,
    obtainType: ObtainType.craft,
    mainStyle: Style.sweet,
    itemIds: [],
  },
];

const fluffy_items = {
  items: {
    create: [
      {
        id: "fashion__dress__sleepy_bunny",
        starRank: 4,
        name: "Sleepy Bunny",
        // description: '',
        category: "dress",
        tag1: "Homey",
        tag2: "Fairytale",
        // styleRatings: {}
        obtainType: "craft",
        obtainMethods: [
          {
            craftCategory: "Story Quest",
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
        // description: '',
        category: "handheld",
        tag1: "Animal",
        tag2: "Fairytale",
        // styleRatings: {}
        obtainType: "craft",
        obtainMethods: [
          {
            craftCategory: "Story Quest",
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
        // description: '',
        category: "hat",
        tag1: "Animal",
        tag2: "Fairytale",
        // styleRatings: {}
        obtainType: "craft",
        obtainMethods: [
          {
            craftCategory: "Story Quest",
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
        // description: '',
        category: "wrist",
        tag1: "Homey",
        tag2: "Fairytale",
        // styleRatings: {}
        obtainType: "craft",
        obtainMethods: [
          {
            craftCategory: "Story Quest",
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
        // description: '',
        category: "socks",
        tag1: "Homey",
        tag2: "Fairytale",
        // styleRatings: {}
        obtainType: "craft",
        obtainMethods: [
          {
            craftCategory: "Story Quest",
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
        // description: '',
        category: "shoes",
        tag1: "Homey",
        tag2: "Fairytale",
        // styleRatings: {}
        obtainType: "craft",
        obtainMethods: [
          {
            craftCategory: "Story Quest",
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
        // description: '',
        category: "hairstyle",
        tag1: "Homey",
        tag2: "Fairytale",
        // styleRatings: {}
        obtainType: "craft",
        obtainMethods: [
          {
            craftCategory: "Story Quest",
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
};
