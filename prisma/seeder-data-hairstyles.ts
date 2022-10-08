import { EventType, LightchaseType, Material } from "../types/enums";
import { Event, Item, Lightchase, ObtainType, Set } from "../types/interfaces";
import { FashionCategory, MakeupCategory, Style, Tag } from "../types/types";

const hairstyles: Item[] = [
  // {
  //     id: "fashion__hairstyle__",
  //     name: "",
  //     starRank: 5,
  //     category: FashionCategory.hairstyle,
  //     mainStyle: Style.,
  //     tag1: Tag.,
  //     tag2: Tag.,
  //     obtainMethods: [
  //       {
  //       obtainType: ObtainType. ,
  //       },
  //     ]
  // },

  {
    id: "fashion__hairstyle__starry_sunset",
    name: "Starry Sunset",
    starRank: 3,
    category: FashionCategory.hairstyle,
    mainStyle: Style.sweet,
    tag1: Tag.street_punk,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__starlight_show",
      },
    ],
  },
  {
    id: "fashion__hairstyle__daytime_stars",
    name: "Daytime Stars",
    starRank: 3,
    category: FashionCategory.hairstyle,
    mainStyle: Style.cool,
    tag1: Tag.unisex,
    tag2: Tag.rock_and_roll,
    obtainMethods: [
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
      },
    ],
  },
  {
    id: "fashion__hairstyle__comets_tail",
    name: "Comet's Tail",
    starRank: 3,
    category: FashionCategory.hairstyle,
    mainStyle: Style.cool,
    tag1: Tag.girl_group,
    tag2: Tag.street,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "hard",
      },
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
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
    id: "fashion__hairstyle__worn_seasalt",
    name: "Worn Seasalt",
    starRank: 3,
    category: FashionCategory.hairstyle,
    mainStyle: Style.lively,
    tag1: Tag.holiday,
    tag2: Tag.swimsuit,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "hard",
      },
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
      },
    ],
  },
  {
    id: "fashion__hairstyle__fashion_signal",
    name: "Fashion Signal",
    starRank: 3,
    category: FashionCategory.hairstyle,
    mainStyle: Style.simple,
    tag1: Tag.street_punk,
    tag2: Tag.cool,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "hard",
      },
      {
        obtainType: ObtainType.exchange,
        shopId: "shop__clothing_store",
      },
    ],
  },
  {
    id: "fashion__hairstyle__light_and_bird",
    name: "Light & Bird",
    starRank: 3,
    category: FashionCategory.hairstyle,
    mainStyle: Style.gorgeous,
    tag1: Tag.gown,
    obtainMethods: [
      {
        obtainType: ObtainType.stage,
        mode: "hard",
      },
      { obtainType: ObtainType.exchange, shopId: "shop__clothing_store" },
    ],
  },

  {
    id: "fashion__hairstyle__shining_night_2",
    name: "Shining Night",
    starRank: 4,
    category: FashionCategory.hairstyle,
    mainStyle: Style.cool,
    tag1: Tag.ladylike,
    tag2: Tag.street,
    obtainMethods: [
      {
        obtainType: ObtainType.craft,
        craftCategory: "storyQuest",
      },
    ],
  },
  {
    id: "fashion__hairstyle__sweet_research",
    name: "Sweet Research",
    starRank: 4,
    category: FashionCategory.hairstyle,
    tag1: Tag.preppy,
    obtainMethods: [
      {
        obtainType: ObtainType.craft,
        craftCategory: "storyQuest",
      },
    ],
  },

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
    obtainMethods: [{obtainType: ObtainType.rewardLevel}],
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
    id: "fashion__hairstyle__coiled_topknot",
    name: "Coiled Topknot",
    starRank: 4,
    category: FashionCategory.hairstyle,
    mainStyle: Style.elegant,
    tag1: Tag.traditional,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
      },
    ],
  },
  {
    id: "fashion__hairstyle__aloof_lily",
    name: "Aloof Lily",
    starRank: 4,
    category: FashionCategory.hairstyle,
    mainStyle: Style.elegant,
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
    id: "fashion__hairstyle__deep_attachment",
    name: "Deep Attachment",
    starRank: 4,
    category: FashionCategory.hairstyle,
    mainStyle: Style.elegant,
    tag1: Tag.formal,
    obtainMethods: [
      {
        obtainType: ObtainType.craft,
        craftCategory: "storyQuest",
      },
    ],
  },
  {
    id: "fashion__hairstyle__laurel",
    name: "Laurel",
    starRank: 4,
    category: FashionCategory.hairstyle,
    mainStyle: Style.elegant,
    tag1: Tag.traditional,
    obtainMethods: [
      {
        obtainType: ObtainType.craft,
        craftCategory: "storyQuest",
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
    mainStyle: Style.sweet,
    obtainMethods: [
      {
        obtainType: ObtainType.craft,
        craftCategory: "storyQuest",
        materialCosts: [
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
  {
    id: "fashion__hairstyle__play_and_sing",
    name: "Play and Sing",
    starRank: 4,
    category: FashionCategory.hairstyle,
    mainStyle: Style.sexy,
    tag1: Tag.traditional,
    obtainMethods: [
      {
        obtainType: ObtainType.craft,
        craftCategory: "storyQuest",
      },
    ],
  },
  {
    id: "fashion__hairstyle__iris_dream",
    name: "Iris Dream",
    starRank: 4,
    category: FashionCategory.hairstyle,
    mainStyle: Style.sexy,
    tag1: Tag.classic,
    tag2: Tag.gown,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
      },
    ],
  },
  {
    id: "fashion__hairstyle__hearty_soda",
    name: "Hearty Soda",
    starRank: 4,
    category: FashionCategory.hairstyle,
    mainStyle: Style.cool,
    tag1: Tag.sporty,
    obtainMethods: [
      {
        obtainType: ObtainType.craft,
        craftCategory: "storyQuest",
      },
    ],
  },
  {
    id: "fashion__hairstyle__cheerful_melody",
    name: "Cheerful Melody",
    starRank: 4,
    category: FashionCategory.hairstyle,
    mainStyle: Style.lively,
    tag1: Tag.girl_group,
    tag2: Tag.cyberpunk,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__night_of_vvanna",
      },
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__dewy_tears",
      },
    ],
  },
  {
    id: "fashion__hairstyle__shining_night_1",
    name: "Shining Night",
    starRank: 4,
    category: FashionCategory.hairstyle,
    mainStyle: Style.sexy,
    tag1: Tag.gown,
    tag2: Tag.classic,
    obtainMethods: [
      {
        obtainType: ObtainType.craft,
        craftCategory: "storyQuest",
      },
    ],
  },
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
    id: "fashion__hairstyle__cat_words",
    name: "Cat Words",
    starRank: 4,
    category: FashionCategory.hairstyle,
    mainStyle: Style.cool,
    tag1: Tag.street_punk,
    tag2: Tag.girl_group,
    obtainMethods: [
      {
        obtainType: ObtainType.craft,
        craftCategory: "storyQuest",
      },
    ],
  },
  {
    id: "fashion__hairstyle__summer_cherry",
    name: "Summer Cherry",
    starRank: 4,
    category: FashionCategory.hairstyle,
    mainStyle: Style.sweet,
    tag1: Tag.preppy,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__starlight_show",
      },
    ],
  },
  {
    id: "fashion__hairstyle__summer_memory",
    name: "Summer Memory",
    starRank: 4,
    category: FashionCategory.hairstyle,
    mainStyle: Style.pure,
    tag1: Tag.preppy,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__starlight_show",
      },
    ],
  },

  {
    id: "fashion__hairstyle__glory_night",
    name: "Glory Night",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.cool,
    tag1: Tag.ladylike,
    tag2: Tag.street,
    obtainMethods: [
      {
        obtainType: ObtainType.event,
      },
    ],
  },
  {
    id: "fashion__hairstyle__lucid_moments",
    name: "Lucid Moments",
    starRank: 5,
    category: FashionCategory.hairstyle,
    tag1: Tag.street,
    styleRanks: {
        sweet: StyleRank.ss,
            sexy: StyleRank.s,
            simple: StyleRank.a,
            lively: StyleRank.a,
            fresh: StyleRank.b,
    },
    obtainMethods: [{obtainType: ObtainType.lightchaseNirvana}],
  },
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
    obtainMethods: [{obtainType: ObtainType.lightchaseNirvana}],
  },
  {
    id: "fashion__hairstyle__ceylon_short_song",
    name: "Ceylon Short Song",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.elegant,
    tag1: Tag.british,
    obtainMethods: [
      {
        obtainType: ObtainType.craft,
        craftCategory: "mindTravel",
      },
    ],
  },
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
    obtainMethods: [{obtainType: ObtainType.lightchaseEssence}],
  },
  {
    id: "fashion__hairstyle__busy_night",
    name: "Busy Night",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.sexy,
    // tag1: Tag.,
    // tag2: Tag.,
    // obtainMethods: [
    //   {
    //   obtainType: ObtainType. ,
    //   },
    // ]
  },
  {
    id: "fashion__hairstyle__sunny_clouds",
    name: "Sunny Clouds",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.lively,
    //   tag1: Tag.,
    //   tag2: Tag.,
    //   obtainMethods: [
    //     {
    //     obtainType: ObtainType. ,
    //     },
    //   ]
  },
  {
    id: "fashion__hairstyle__silent_nocturne",
    name: "Silent Nocturne",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.sexy,
    //   tag1: Tag.,
    //   tag2: Tag.,
    //   obtainMethods: [
    //     {
    //     obtainType: ObtainType. ,
    //     },
    //   ]
  },
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
      obtainMethods: [{obtainType: ObtainType.giftExhibition}],
  },

  {
    id: "fashion__hairstyle__cloud_pile",
    name: "Cloud Pile",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.elegant,
    //   tag1: Tag.,
    //   tag2: Tag.,
    //   obtainMethods: [
    //     {
    //     obtainType: ObtainType. ,
    //     },
    //   ]
  },
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
      obtainMethods: [{obtainType: ObtainType.lightchaseBeloved}],
  },
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
      obtainMethods: [{obtainType: ObtainType.lightchaseBeloved }],
  },
  {
    id: "fashion__hairstyle__eternal_flower",
    name: "Eternal Flower",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.cool,
    //   tag1: Tag.,
    //   tag2: Tag.,
    //   obtainMethods: [
    //     {
    //     obtainType: ObtainType. ,
    //     },
    //   ]
  },
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
      ]
  },
  {
    id: "fashion__hairstyle__sunshine_storm",
    name: "Sunshine Storm",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.cool,
    // tag1: Tag.,
    // tag2: Tag.,
    // obtainMethods: [
    //   {
    //   obtainType: ObtainType. ,
    //   },
    // ]
  },
  {
    id: "fashion__hairstyle__night_breeze",
    name: "Night Breeze",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.elegant,
    // tag1: Tag.,
    // tag2: Tag.,
    // obtainMethods: [
    //   {
    //   obtainType: ObtainType. ,
    //   },
    // ]
  },
  {
    id: "fashion__hairstyle__windy_day",
    name: "Windy Day",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.pure,
    //   tag1: Tag.,
    //   tag2: Tag.,
    //   obtainMethods: [
    //     {
    //     obtainType: ObtainType. ,
    //     },
    //   ]
  },
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
        cost: ,
        },
      ]
  },
  {
    id: "fashion__hairstyle__moon_dance",
    name: "Moon Dance",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.gorgeous,
    //   tag1: Tag.,
    //   tag2: Tag.,
    //   obtainMethods: [
    //     {
    //     obtainType: ObtainType. ,
    //     },
    //   ]
  },
  {
    id: "fashion__hairstyle__cloud_palace",
    name: "Cloud Palace",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.elegant,
    //   tag1: Tag.,
    //   tag2: Tag.,
    //   obtainMethods: [
    //     {
    //     obtainType: ObtainType. ,
    //     },
    //   ]
  },
  {
    id: "fashion__hairstyle__walnut_academy",
    name: "Walnut Academy",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.lively,
    //   tag1: Tag.,
    //   tag2: Tag.,
    //   obtainMethods: [
    //     {
    //     obtainType: ObtainType. ,
    //     },
    //   ]
  },
  {
    id: "fashion__hairstyle__double_concerto",
    name: "Double Concerto",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.elegant,
    //   tag1: Tag.,
    //   tag2: Tag.,
    //   obtainMethods: [
    //     {
    //     obtainType: ObtainType. ,
    //     },
    //   ]
  },
  {
    id: "fashion__hairstyle__starry_oath",
    name: "Starry Oath",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.sexy,
    //   tag1: Tag.,
    //   tag2: Tag.,
    //   obtainMethods: [
    //     {
    //     obtainType: ObtainType. ,
    //     },
    //   ]
  },
  {
    id: "fashion__hairstyle__music_of_keys",
    name: "Music of Keys",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.elegant,
    //   tag1: Tag.,
    //   tag2: Tag.,
    //   obtainMethods: [
    //     {
    //     obtainType: ObtainType. ,
    //     },
    //   ]
  },
  {
    id: "fashion__hairstyle__love_song",
    name: "Love Song",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.elegant,
    //   tag1: Tag.,
    //   tag2: Tag.,
    //   obtainMethods: [
    //     {
    //     obtainType: ObtainType. ,
    //     },
    //   ]
  },
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
      obtainMethods: [{obtainType: ObtainType.rebateGift}],
  },
  {
    id: "fashion__hairstyle__lost_sunlight",
    name: "Lost Sunlight",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.elegant,
    //   tag1: Tag.,
    //   tag2: Tag.,
    //   obtainMethods: [
    //     {
    //     obtainType: ObtainType. ,
    //     },
    //   ]
  },
  {
    id: "fashion__hairstyle__girly_breeze",
    name: "Girly Breeze",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.cool,
    //   tag1: Tag.,
    //   tag2: Tag.,
    //   obtainMethods: [
    //     {
    //     obtainType: ObtainType. ,
    //     },
    //   ]
  },
  {
    id: "fashion__hairstyle__wild_jasmine",
    name: "Wild Jasmine",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.sexy,
    //   tag1: Tag.,
    //   tag2: Tag.,
    //   obtainMethods: [
    //     {
    //     obtainType: ObtainType. ,
    //     },
    //   ]
  },
  {
    id: "fashion__hairstyle__flowery_blessing",
    name: "Flowery Blessing",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.elegant,
    //   tag1: Tag.,
    //   tag2: Tag.,
    //   obtainMethods: [
    //     {
    //     obtainType: ObtainType. ,
    //     },
    //   ]
  },
  {
    id: "fashion__hairstyle__nostalgic_twilight",
    name: "Nostalgic Twilight",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.sexy,
    //   tag1: Tag.,
    //   tag2: Tag.,
    //   obtainMethods: [
    //     {
    //     obtainType: ObtainType. ,
    //     },
    //   ]
  },
  {
    id: "fashion__hairstyle__snow_poem",
    name: "Snow Poem",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.simple,
    //   tag1: Tag.,
    //   tag2: Tag.,
    //   obtainMethods: [
    //     {
    //     obtainType: ObtainType. ,
    //     },
    //   ]
  },
  {
    id: "fashion__hairstyle__dance_of_snow",
    name: "Dream Of Snow",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.pure,
    //   tag1: Tag.,
    //   tag2: Tag.,
    //   obtainMethods: [
    //     {
    //     obtainType: ObtainType. ,
    //     },
    //   ]
  },
  {
    id: "fashion__hairstyle__song_of_sunrise",
    name: "Song of Sunrise",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.elegant,
    //   tag1: Tag.,
    //   tag2: Tag.,
    //   obtainMethods: [
    //     {
    //     obtainType: ObtainType. ,
    //     },
    //   ]
  },
  {
    id: "fashion__hairstyle__streamer_rotation",
    name: "Streamer Rotation",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.sweet,
    //   tag1: Tag.,
    //   tag2: Tag.,
    //   obtainMethods: [
    //     {
    //     obtainType: ObtainType. ,
    //     },
    //   ]
  },
  {
    id: "fashion__hairstyle_light_pigment",
    name: "Light Pigment",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.elegant,
    //   tag1: Tag.,
    //   tag2: Tag.,
    //   obtainMethods: [
    //     {
    //     obtainType: ObtainType. ,
    //     },
    //   ]
  },
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



];

const scratch =   {
    name: "",
    starRank: 4,
    category: MakeupCategory.blush,
    obtainMethods: [{
      obtainType: ObtainType.beautycourse,
                beautyCourseId: "beautycourse__shining_star",
                classNumber: 3,
  }],
  }
  

const sample = {
  name: "",
  starRank: 4,
  category: ,
  tag1: Tag. ,
  tag2: Tag. ,
  styleRanks: {
    sexy: StyleRank.s,
    gorgeous: StyleRank.a,
    sweet: StyleRank.b,
    elegant: StyleRank.b,
    warm: StyleRank.c,
  },
  obtainMethods: [{obtainType: ObtainType. }],
},

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