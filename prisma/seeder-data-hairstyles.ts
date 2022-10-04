import { EventType, LightchaseType, Material } from "../types/enums";
import { Event, Item, Lightchase, ObtainType, Set } from "../types/interfaces";
import { FashionCategory, Style, Tag } from "../types/types";

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
    mainStyle: Style.pure,
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
    mainStyle: Style.lively,
    tag1: Tag.pastoral,
    tag2: Tag.lolita,
    obtainMethods: [
      {
        obtainType: ObtainType.reward,
        rewardType: "levelReward",
      },
    ],
  },
  {
    id: "fashion__hairstyle__nightcats_whisper",
    name: "Nightcat's Whisper",
    starRank: 4,
    category: FashionCategory.hairstyle,
    mainStyle: Style.sweet,
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
    mainStyle: Style.gorgeous,
    tag1: Tag.elfish,
    tag2: Tag.gown,
    obtainMethods: [
      {
        obtainType: ObtainType.craft,
        craftCategory: "storyQuest",
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
    id: "fashion__hairstyle__sakura_fever",
    name: "Sakura Fever",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.sweet,
    tag1: Tag.retro,
    obtainMethods: [
      {
        obtainType: ObtainType.event,
        eventId: "event__sack_of_foxes",
      },
    ],
  },
  {
    id: "fashion__hairstyle__lucid_moments",
    name: "Lucid Moments",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.sweet,
    tag1: Tag.street,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__nirvana",
      },
    ],
  },
  {
    id: "fashion__hairstyle__sun_and_seagull",
    name: "Sun & Seagull",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.simple,
    tag1: Tag.lolita,
    tag2: Tag.fairytale,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__essence",
      },
    ],
  },
  {
    id: "fashion__hairstyle__cinnamon_cutie",
    name: "Cinnamon Cutie",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.pure,
    tag1: Tag.lolita,
    tag2: Tag.fairytale,
    obtainMethods: [
      {
        obtainType: ObtainType.event,
        eventId: "event__greedy_bear",
      },
    ],
  },
  {
    id: "fashion__hairstyle__golden_goblet",
    name: "Golden Goblet",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.gorgeous,
    tag1: Tag.dancer,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__nirvana",
      },
    ],
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
    mainStyle: Style.gorgeous,
    tag1: Tag.egyptian,
    obtainMethods: [
      {
        obtainType: ObtainType.lightchase,
        lightchaseId: "lightchase__essence",
      },
    ],
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
    id: "fashion__hairstyle__silver_star",
    name: "Silver Star",
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
    id: "fashion__hairstyle__island_spirit",
    name: "Island Spirit",
    starRank: 5,
    category: FashionCategory.hairstyle,
    mainStyle: Style.pure,
    // tag1: Tag.,
    // tag2: Tag.,
    // obtainMethods: [
    //   {
    //   obtainType: ObtainType. ,
    //   },
    // ]
  },
  {
    id: "fashion__hairstyle__naughty_witch",
    name: "Naughty Witch",
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
    id: "fashion__hairstyle__frolic_and_stroll",
    name: "Frolic and Stroll",
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
    id: "fashion__hairstyle__grey_movement",
    name: "Grey Movement",
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
    id: "fashion__hairstyle__prayer_of_stars",
    name: "Prayer of Stars",
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
    id: "fashion__hairstyle__dream_concerto",
    name: "Dream Concerto",
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
    id: "fashion__hairstyle__golden_sugar",
    name: "Golden Sugar",
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
    id: "fashion__hairstyle__teary_poem",
    name: "Teary Poem",
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
    id: "fashion__hairstyle__blooms_in_vale",
    name: "Blooms In Vale",
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
    id: "fashion__hairstyle__snow_like_flowers",
    name: "Snow-Like Flowers",
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
];
