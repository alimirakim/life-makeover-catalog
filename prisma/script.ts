import { PrismaClient } from "@prisma/client";
import { ObtainType } from "../types/interfaces";
import {
  AccessoryCategory,
  FashionCategory,
  Style,
  StyleRank,
  Tag,
} from "../types/types";

const prisma = new PrismaClient();

// See SO Answer: https://stackoverflow.com/a/66626333
// CLI command: node --loader ts-node/esm prisma/script.ts
async function main() {
  // ... you will write your Prisma Client queries here

  await prisma.set.deleteMany();
  await prisma.item.deleteMany();

  if (true) {
    const sets = [
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
              obtainMethods: [
                { obtainType: ObtainType.lightchaseNightOfVvanna },
              ],
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
              obtainMethods: [
                { obtainType: ObtainType.lightchaseNightOfVvanna },
              ],
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
              obtainMethods: [
                { obtainType: ObtainType.lightchaseNightOfVvanna },
              ],
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
              obtainMethods: [
                { obtainType: ObtainType.lightchaseNightOfVvanna },
              ],
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
              obtainMethods: [
                { obtainType: ObtainType.lightchaseNightOfVvanna },
              ],
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
              obtainMethods: [
                { obtainType: ObtainType.lightchaseNightOfVvanna },
              ],
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
              obtainMethods: [
                { obtainType: ObtainType.lightchaseNightOfVvanna },
              ],
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
              obtainMethods: [
                { obtainType: ObtainType.lightchaseNightOfVvanna },
              ],
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
              obtainMethods: [
                { obtainType: ObtainType.lightchaseNightOfVvanna },
              ],
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
              obtainMethods: [
                { obtainType: ObtainType.lightchaseNightOfVvanna },
              ],
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
              obtainMethods: [
                { obtainType: ObtainType.lightchaseNightOfVvanna },
              ],
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
    ];

    const setPromises = sets.map((set) => {
      prisma.set.create({
        data: set,
      });
    });
  }

  const savedSets = await prisma.set.findMany({
    include: {
      items: true,
    },
  });
  console.log({ savedSets });

  const items = await prisma.item.findMany();
  console.log({ items });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

//   fashion__set__sleepy_bunny: {
//     id: 'fashion__set__sleepy_bunny',
//     name: 'Sleepy Bunny',
//     starRating: 4,
//     brand: 'Amber Shimmer',
//     obtainMethod: {
//         type: 'fashionStudio',
//         category: 'storyQuest',
//     },
//     itemIds: [
//         'fashion__fluffy_dream',
//         'fashion__sleepy_bunny',
//         'fashion__fairytale_dream',
//         'fashion__pink_lady',
//         'fashion__fluffy_bunny',
//         'fashion__candy_kingdom',
//         'fashion__dreamy_bunny',
//     ],
//     mainStyles: ['Sweet','Lively'],
//     tags: ['Fairytale','Homey'],
// },
