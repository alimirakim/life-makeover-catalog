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

const sets: Set[] = [
  // {
  //     id: "fashion__set__",
  //     name: "",
  //     starRank: 4,
  //     brandId: "",
  //     obtainType: ObtainType.,
  //     mainStyle: Style.,
  //     itemIds: [],
  // },

  {
    id: "fashion__set__secret_garden",
    name: "Secret Garden",
    starRank: 6,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.exchangeSuperRebates,
    mainStyle: Style.sweet,
    itemIds: [
      "fashion__hairstyle__snow_like_flowers",
      "fashion__dress__secret_garden",
      "fashion__shoes__flower_rain",
      "fashion__hat__in_fallen_flowers",
      "fashion__earrings__falling_petals",
      "fashion__ring__misty_shadow",
      "fashion__handheld__layers_of_flowers",
    ],
  },
  {
    id: "fashion__set__flower_whisper",
    name: "Flower Whisper",
    starRank: 6,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.lightchaseEssence,
    mainStyle: Style.sweet,
    itemIds: [
      "fashion__handheld__blooming_flowers",
      "fashion__hairstyle__golden_sugar",
      "fashion__dress__miss_flower",
      "fashion__socks__light_veil",
      "fashion__shoes__floral_shadow",
      "fashion__hat__dreamy_laurel",
      "fashion__hairpiece__floral_prayer",
      "fashion__necklace__full_bloom",
      "fashion__ring__fleeting_time",
      "fashion__wings__windflower_feather",
    ],
  },
  {
    id: "fashion__set__miracle_elsie",
    name: "Miracle Elsie",
    starRank: 5,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.lightchaseDewyTears,
    mainStyle: Style.simple,
    itemIds: [
      "fashion__hairstyle__dream_concerto",
      "fashion__dress__miracle_elsie",
      "fashion__socks__early_night",
      "fashion__shoes__summer_yard",
      "fashion__hat__silver_notes",
      "fashion__hairpiece__fluttering_petals",
      "fashion__handheld__flowery_scene",
    ],
  },
  {
    id: "fashion__set__lost_tale",
    name: "Lost Tale",
    starRank: 5,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.lightchaseEssence,
    mainStyle: Style.simple,
    itemIds: [
      "fashion__hair__sun_and_seagull",
      "fashion__dress__lost_tale",
      "fashion__coat__fluffy_tale",
      "fashion__socks__weaving_snow",
      "fashion__shoes__castle_tour",
      "fashion__hat__snowy_forest",
      "fashion__handheld__candy_castle",
    ],
  },
  {
    id: "fashion__set__fluffy_mousse",
    name: "Fluffy Mousse",
    starRank: 5,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.event,
    mainStyle: Style.pure,
    itemIds: [
      "fashion__hairstyle__cinnamon_cutie",
      "fashion__dress__fluffy_mousse",
      "fashion__socks__creamy_mousse",
      "fashion__shoes__banquet_of_forest",
      "fashion__hairpiece__sweet_chocolate",
      "fashion__earrings__startled_bambi",
      "fashion__ring__elk_dark_forest",
    ],
  },
  {
    id: "fashion__set__shallow_sleep",
    name: "Shallow Sleep",
    starRank: 5,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.event,
    mainStyle: Style.sweet,
    itemIds: [
      "fashion__hairstyle__sakura_fever",
      "fashion__dress__shallow_sleep",
      "fashion__shoes__floral_step",
      "fashion__hairpiece__evening_blossom",
      "fashion__earrings__wandering_star",
      "fashion__necklace__thorn_key",
      "fashion__ring__morning_kiss",
    ],
  },
  {
    id: "fashion__set__hymn_to_ceres",
    name: "Hymn to Ceres",
    starRank: 5,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.lightchaseDewyTears,
    mainStyle: Style.elegant,
    itemIds: [
      "fashion__hairstyle__prayer_of_stars",
      "fashion__dress__hymn_to_ceres",
      "fashion__socks__poem_of_wheat",
      "fashion__shoes__prayer_of_flowers",
      "fashion__hat__dewy_branch",
      "fashion__necklace__golden_fall",
      "fashion__earrings__golden_bud",
      "fashion__handheld__praise_of_wheat",
      "fashion__tattoo__sunlight_engraving",
    ],
  },
  {
    id: "fashion__set__cat_walk",
    name: "Cat Walk",
    starRank: 5,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.exchangeEndorsementShop,
    mainStyle: Style.sweet,
    itemIds: [
      "fashion__hairstyle__frolic_and_stroll",
      "fashion__dress__cat_walk",
      "fashion__socks__fun_and_frolic",
      "fashion__shoes__sleepy_cat",
      "fashion__hat__fluffy_ears",
      "fashion__tail__waving_cat_tail",
      "fashion__anklet__jericho_ball",
    ],
  },
  {
    id: "fashion__set__tipsy_jam",
    name: "Tipsy Jam",
    starRank: 5,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.lightchaseStarlight,
    mainStyle: Style.gorgeous,
    itemIds: [
      "fashion__hairstyle__naughty_witch",
      "fashion__dress__tipsy_jam",
      "fashion__socks__strawberry_boba",
      "fashion__shoes__cherry_path",
      "fashion__hairpiece__bunch_of_berries",
      "fashion__necklace__midnight_folk",
      "fashion__bracelet__sweet_legend",
      "fashion__anklet__berry_nighttalk",
    ],
  },
  {
    id: "fashion__set__island_starshine",
    name: "Island Starshine",
    starRank: 5,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.lightchaseBeloved,
    mainStyle: Style.pure,
    itemIds: [
      "fashion__hairstyle__island_spirit",
      "fashion__dress__island_starshine",
      "fashion__shoes__lost_forest",
      "fashion__hat__deer_song",
      "fashion__earrings__starfall_lake",
      "fashion__necklace__sarnath_flower",
      "fashion__gloves__spring_dance",
    ],
  },
  {
    id: "fashion__set__morning_chorus",
    name: "Morning Chorus",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.pure,
    itemIds: [
      "fashion__dress__morning_chorus",
      "fashion__socks__dawn_rose",
      "fashion__shoes__silent_dew",
      "fashion__earrings__morning_nap",
      "fashion__necklace__morning_bud",
    ],
  },
  {
    id: "fashion__set__miss_cookie",
    name: "Miss Cookie",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.lively,
    itemIds: [
      "fashion__dress__miss_cookie",
      "fashion__socks__nutella_waffles",
      "fashion__shoes__black_bean_muffin",
      "fashion__handheld__sugar_mesona",
    ],
  },
  {
    id: "fashion__set__sea_stream",
    name: "Sea Stream",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.pure,
    itemIds: [
      "fashion__dress__sea_stream",
      "fashion__socks__gentle_fish_tail",
      "fashion__shoes__step_into_river",
      "fashion__earrings__spiraling_galaxy",
      "fashion__handheld__sparks_in_night",
    ],
  },
  {
    id: "fashion__set__renaissance",
    name: "Renaissance",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.simple,
    itemIds: [
      "fashion__top__renaissance",
      "fashion__bottom__california_wind",
      "fashion__socks__plain_sketching",
      "fashion__shoes__milky_journal",
      "fashion__hat__dreamcatcher",
      "fashion__handheld__cherry_crepe",
    ],
  },
  {
    id: "fashion__set__first_date",
    name: "First Date",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.sweet,
    itemIds: [
      "fashion__top__first_date",
      "fashion__bottom__white_love_spark",
      "fashion__socks__bright_whisper",
      "fashion__shoes__crush_and_date",
      "fashion__handheld__pink_first_love",
    ],
  },
  {
    id: "fashion__set__whispering_lane",
    name: "Whispering Lane",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.sweet,
    itemIds: [
      "fashion__dress__whispering_lane",
      "fashion__shoes__the_underground",
      "fashion__earrings__street_whispers",
      "fashion__handheld__song_of_streets",
    ],
  },
  {
    id: "fashion__set__plum_sugar_love",
    name: "Plum Sugar Love",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.sweet,
    itemIds: [
      "fashion__coat__the_encounter",
      "fashion__top__plum_sugar_love",
      "fashion__bottom__sweet_youth",
      "fashion__shoes__first_meet",
      "fashion__hat__peach_date",
    ],
  },
  {
    id: "fashion__set__azure_bunny",
    name: "Azure Bunny",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.lightchaseStarlight,
    mainStyle: Style.pure,
    itemIds: [
      "fashion__hairstyle__summer_memory",
      "fashion__coat__azure_bunny",
      "fashion__top__froth_cream",
      "fashion__bottom__azure_ripple",
      "fashion__socks__mint_icing",
      "fashion__shoes__mint_smoothie",
    ],
  },
  {
    id: "fashion__set__morning_chatter",
    name: "Morning Chatter",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.pure,
    itemIds: [
      "fashion__hairstyle__sweet_research",
      "fashion__top__morning_chatter",
      "fashion__bottom__academy_voice",
      "fashion__socks__wish_study",
      "fashion__shoes__campus_stroll",
      "fashion__handheld__strawberry_kiss",
    ],
  },
  {
    id: "fashion__set__lie_of_flower",
    name: "Lie of Flower",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.pure,
    itemIds: [
      "fashion__dress__lie_of_flower",
      "fashion__socks__waning_dream",
      "fashion__shoes__white_dance",
      "fashion__hairpiece__sweet_language",
      "fashion__necklace__tear_of_flower",
      "fashion__gloves__youth_date",
    ],
  },
  {
    id: "fashion__set__lemon_soda",
    name: "Lemon Soda",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.craftOther,
    mainStyle: Style.simple,
    itemIds: [
      "fashion__coat__sweetfruit_youth",
      "fashion__top__lemon_soda",
      "fashion__bottom__coffee__caramel",
      "fashion__shoes__coke_gummy",
    ],
  },
  {
    id: "fashion__set__misty_morning",
    name: "Misty Morning",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.exchangeUpgradeShop,
    mainStyle: Style.pure,
    itemIds: [
      "fashion__coat__ethereal_mist",
      "fashion__top__misty_morning",
      "fashion__bottom__lost_woods",
      "fashion__socks__morning_dew",
      "fashion__shoes__fragrant_passage",
      "fashion__hat__song_of_deers",
      "fashion__necklace__dancing_firefly",
      "fashion__bracelet__shimmering_light",
      "fashion__handheld__verdant_vine",
    ],
  },
  {
    id: "fashion__set__honey_angel",
    name: "Honey Angel",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.lightchaseNightOfVvanna,
    mainStyle: Style.sweet,
    itemIds: [
      "fashion__dress__honey_angel",
      "fashion__socks__heart_pounding",
      "fashion__shoes__crimson_heart",
      "fashion__hat__focused_beat",
      "fashion__gloves__love_protection",
      "fashion__handheld__telepathy",
    ],
  },
  {
    id: "fashion__set__sleepy_bunny",
    name: "Sleepy Bunny",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.sweet,
    itemIds: [
      "fashion__",
      "fashion__",
      "fashion__",
      "fashion__",
      "fashion__",
      "fashion__",
      "fashion__",
    ],
  },
  {
    id: "fashion__set__cockle_collection",
    name: "Cockle Collection",
    starRank: 4,
    brandId: "brand__amber_shimmer",
    obtainType: ObtainType.lightchaseNightOfVvanna,
    mainStyle: Style.pure,
    itemIds: [
      "fashion__dress__cockle_collection",
      "fashion__socks__sunny_ceremony",
      "fashion__shoes__wind_seeker",
      "fashion__earrings__crystal_of_sea",
      "fashion__handheld__time_rift",
    ],
  },

  {
    id: "fashion__set__void_butterfly",
    name: "Void Butterfly",
    starRank: 6,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.exchangeSpecialRebates,
    mainStyle: Style.sexy,
    itemIds: [],
  },
  {
    id: "fashion__set__tears_of_wings",
    name: "Tears of Wings",
    starRank: 6,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.lightchaseEssence,
    mainStyle: Style.cool,
    itemIds: [],
  },
  {
    id: "fashion__set__rosy_crown",
    name: "Rosy Crown",
    starRank: 6,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.lightchaseBeloved,
    mainStyle: Style.sexy,
    itemIds: [],
  },
  {
    id: "fashion__set__starry_fantasy",
    name: "Starry Fantasy",
    starRank: 5,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.rebateGift,
    mainStyle: Style.gorgeous,
    itemIds: [],
  },
  {
    id: "fashion__set__starry_serenade",
    name: "Starry Serenade",
    starRank: 5,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.exchangeGlitteringDecom,
    mainStyle: Style.gorgeous,
    itemIds: [],
  },
  {
    id: "fashion__set__azure_nebula",
    name: "Azure Nebula",
    starRank: 5,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.lightchaseNirvana,
    mainStyle: Style.sweet,
    itemIds: [],
  },
  {
    id: "fashion__set__amons_daughter",
    name: "Amon's Daughter",
    starRank: 5,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.lightchaseEssence,
    mainStyle: Style.gorgeous,
    itemIds: [],
  },
  {
    id: "fashion__set__myrtles_dream",
    name: "Myrtle's Dream",
    starRank: 5,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.lightchaseNirvana,
    mainStyle: Style.gorgeous,
    itemIds: [],
  },
  {
    id: "fashion__set__sunny_ride",
    name: "Sunny Ride",
    starRank: 5,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.craftMindTravel,
    mainStyle: Style.lively,
    itemIds: [],
  },
  {
    id: "fashion__set__feather_and_star",
    name: "",
    starRank: 5,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.lightchaseBeloved,
    mainStyle: Style.lively,
    itemIds: [],
  },
  {
    id: "fashion__set__violet_love_poem",
    name: "Violet Love Poem",
    starRank: 5,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.lightchaseBeloved,
    mainStyle: Style.sweet,
    itemIds: [],
  },
  {
    id: "fashion__set__starsnow_love",
    name: "Starsnow Love",
    starRank: 5,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.reward,
    mainStyle: Style.gorgeous,
    itemIds: [],
  },
  {
    id: "fashion__set__perfume_island",
    name: "Perfume Island",
    starRank: 4,
    obtainType: ObtainType.lightchaseDewyTears,
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
    id: "fashion__set__puff_pastry",
    name: "Puff Pastry",
    starRank: 4,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.lively,
    itemIds: [],
  },
  {
    id: "fashion__set__spring_drizzle",
    name: "Spring Drizzle",
    starRank: 4,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.lightchaseNightOfVvanna,
    mainStyle: Style.gorgeous,
    itemIds: [],
  },
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
    id: "fashion__set__berry_rabbit",
    name: "Berry Rabbit",
    starRank: 4,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.rewardLevel,
    mainStyle: Style.lively,
    itemIds: [],
  },
  {
    id: "fashion__set__starburst_choir",
    name: "Starburst Choir",
    starRank: 4,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.rewardLevel,
    mainStyle: Style.elegant,
    itemIds: [],
  },
  {
    id: "fashion__set__elusive_butterfly",
    name: "Elusive Butterfly",
    starRank: 4,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.gorgeous,
    itemIds: [],
  },
  {
    id: "fashion__set__doris_dream",
    name: "Doris Dream",
    starRank: 4,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.gorgeous,
    itemIds: [],
  },
  {
    id: "fashion__set__sakuras_date",
    name: "Sakura's Date",
    starRank: 4,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.exchangeIntimacyShop,
    mainStyle: Style.gorgeous,
    itemIds: [],
  },
  {
    id: "fashion__set__whooping_crane",
    name: "Whooping Crane",
    starRank: 4,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.craftStoryQuest,
    mainStyle: Style.lively,
    itemIds: [],
  },
  {
    id: "fashion__set__hasumachi_tea",
    name: "Hasumachi Tea",
    starRank: 4,
    brandId: "brand__offshore_fireworks",
    obtainType: ObtainType.event,
    mainStyle: Style.simple,
    itemIds: [],
  },

  {
    id: "fashion__set__wild_blossom",
    name: "Wild Bossom",
    starRank: 5,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.lightchaseDewyTears,
    itemIds: [
      "fashion__contacts__green_field",
      "fashion__contacts__blooming_frost",
      "fashion__lipstick__sweet_berries",
      "fashion__lipstick__dappled_light",
      "fashion__facepaint__dawn_dew",
      "fashion__facepaint__lonely_flower",
    ],
  },
  {
    id: "fashion__set__antique_blues",
    name: "Antique Blues",
    starRank: 5,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.exchangeAllyShop,
    itemIds: [
      "fashion__eyebrow__remote_hill",
      "fashion__contacts__azure_world",
      "fashion__eyeliner__rosy_sailing",
      "fashion__eyeshadow__shallow_sunset",
      "fashion__lipstick__every_hour",
      "fashion__eyelashes__limpid_streams",
      "fashion__blush__scattered_clouds",
      "fashion__facepaint__iridescent_glow",
    ],
  },
  {
    id: "fashion__set__formless_void",
    name: "Formless Void",
    starRank: 5,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.lightchaseSnowDome,
    itemIds: [
      "fashion__contacts__fantasy_realm",
      "fashion__contacts__realm_of_sky",
      "fashion__lipstick__secrets_of_stars",
      "fashion__lipstick__caramel_clouds",
      "fashion__facepaint__pearl_raindrops",
      "fashion__facepaint__awakened_stars",
    ],
  },
  {
    id: "fashion__set__deserted_realm",
    name: "Deserted Realm",
    starRank: 5,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.lightchaseNirvana,
    itemIds: [
      "fashion__lipstick__fire_cloud",
      "fashion__lipstick__sunset_sea",
      "fashion__lipstick__last_ode",
      "fashion__lipstick__moonlit_lake",
      "fashion__facepaint__stray_starlight",
      "fashion__facepaint__snowflakes",
    ],
  },
  {
    id: "fashion__set__dance_of_stars",
    name: "Dance of Stars",
    starRank: 5,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.exchangeFashionShop,
    itemIds: [
      "fashion__contacts__azure_sky",
      "fashion__contacts__colorful_stars",
      "fashion__contacts__shining_stars",
      "fashion__lipstick__starry_dream",
      "fashion__lipstick__scarlet_stars",
      "fashion__lipstick__rosy_nebula",
      "fashion__facepaint__silver_wings",
      "fashion__facepaint__white_stardust",
    ],
  },
  {
    id: "fashion__set__fragrant_breeze",
    name: "Fragrant Breeze",
    starRank: 5,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.lightchaseStarlight,
    itemIds: [
      "fashion__contacts__flower_story",
      "fashion__contacts__camellia",
      "fashion__contacts__evening_breeze",
      "fashion__lipstick__flowing_spring",
      "fashion__facepaint__sakura",
      "fashion__facepaint__tears_in_wind",
      "fashion__facepaint__hallucination",
    ],
  },
  {
    id: "fashion__set__cold_star",
    name: "Cold Star",
    starRank: 5,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.lightchaseNightOfVvanna,
    itemIds: [
      "fashion__contacts__unbounded_galaxy",
      "fashion__contacts__cold_star",
      "fashion__contacts__bright_constellation",
      "fashion__lipstick__fresh_wave",
      "fashion__lipstick__waning_night",
      "fashion__lipstick__concubine_tears",
    ],
  },
  {
    id: "fashion__set__jewel_box",
    name: "Jewel Box",
    starRank: 4,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.craftMindTravel,
    itemIds: [
      "fashion__contacts__green_eyes",
      "fashion__eyeshadow__silver_night",
      "fashion__eyelashes__dark_crystal",
      "fashion__blush__crystal_pomegranate",
    ],
  },
  {
    id: "fashion__set__dusk_snow",
    name: "Dusk Snow",
    starRank: 4,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.fashionCode,
    itemIds: [
      "fashion__eyeliner__early_nightfall",
      "fashion__eyeshadow__sunny_snow",
      "fashion__eyeshadow__the_birdnest",
      "fashion__eyeshadow__colored_clouds",
      "fashion__eyelashes__lost_butterfly",
      "fashion__blush__sunset_obsession",
      "fashion__blush__wild_flowers",
      "fashion__blush__foamy_clouds",
    ],
  },
  {
    id: "fashion__set__river_breeze",
    name: "River Breeze",
    starRank: 4,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    itemIds: [
      "fashion__eyebrow__remote_sunlight",
      "fashion__eyebrow__shattered_sun",
      "fashion__eyeliner__fleeting_visit",
      "fashion__eyeliner__flowing_star",
      "fashion__eyeshadow__sun_in_clouds",
      "fashion__eyeshadow__shining_lake",
      "fashion__eyelashes__late_dusk",
      "fashion__eyelashes__the_duskwind",
    ],
  },
  {
    id: "fashion__set__candy_island",
    name: "Candy Island",
    starRank: 4,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    itemIds: [
      "fashion__eyebrow__sweet_dream",
      "fashion__eyebrow__scattered_snow",
      "fashion__eyeliner__the_sleeptalk",
      "fashion__eyeliner__caramel_fantasy",
      "fashion__eyeshadow__strawberry_cream",
      "fashion__lipstick__lime_bonbon",
      "fashion__eyelashes__romantic_whisper",
      "fashion__blush__all_sweetness",
    ],
  },
  {
    id: "fashion__set__death_of_phoenix",
    name: "Death of Phoenix",
    starRank: 4,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.craftMindTravel,
    itemIds: [
      "fashion__eyebrow__rosy_clouds",
      "fashion__eyeshadow__burnt_dust",
      "fashion__lipstick__turbulent_flame",
      "fashion__facepaint__bright_glow",
    ],
  },
  {
    id: "fashion__set__shadow_of_twins",
    name: "Shadow of Twins",
    starRank: 4,
    brandId: "brand__please_yourself",
    // obtainType: ObtainType.,
    itemIds: [
      "fashion__eyebrow__roving_light",
      "fashion__eyebrow__dusk_sky",
      "fashion__eyeshadow__standing_night",
      "fashion__eyeshadow__covering_snow",
      "fashion__eyelashes__dappled_forest",
      "fashion__eyelashes__light_branch",
      "fashion__blush__gust_of_wind",
      "fashion__blush__first_snow",
    ],
  },
  {
    id: "fashion__set__revelry_at_midnight",
    name: "Revelry at Midnight",
    starRank: 4,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.lightchaseStarlight,
    itemIds: [
      "fashion__eyebrow__new_moon",
      "fashion__eyebrow__dawn_note",
      "fashion__lipstick__star_symphony",
      "fashion__lipstick__moonlight_tune",
      "fashion__eyelashes__fantastic_dream",
      "fashion__eyelashes__the_serenade",
      "fashion__facepaint__dusk_hymn",
    ],
  },
  {
    id: "fashion__set__drowned_night",
    name: "Drowned Night",
    starRank: 4,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.lightchaseStarlight,
    itemIds: [
      "fashion__eyeliner__tranquil_night",
      "fashion__eyeliner__long_darkness",
      "fashion__eyeshadow__night_fire",
      "fashion__eyeshadow__crimson_dusk",
      "fashion__eyeshadow__final_chapter",
      "fashion__eyeshadow__fallen_moon",
      "fashion__facepaint__nightdew",
    ],
  },
  {
    id: "fashion__set__lake_and_mountain",
    name: "Lake & Mountain",
    starRank: 4,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.craftMindTravel,
    itemIds: [
      "fashion__eyebrow__thin_smoke",
      "fashion__contacts__blue_stream",
      "fashion__contacts__bright_mist",
      "fashion__eyeliner__cicada_chirp",
      "fashion__eyeliner__dark_blue_sky",
      "fashion__eyeshadow__tipsy_twilight",
      "fashion__lipstick__red_plum_dew",
      "fashion__lipstick__lake_reflection",
    ],
  },
  {
    id: "fashion__set__dim_shadow",
    name: "Dim Shadow",
    starRank: 4,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    itemIds: [
      "fashion__contacts__shallow_memory",
      "fashion__eyelashes__looking_around",
      "fashion__eyelashes__wind_eyelashes",
      "fashion__blush__home_flight",
      "fashion__blush__dewy_flower",
      "fashion__blush__solitary_goose",
      "fashion__blush__sunset",
      "fashion__facepaint__plum_makeup",
    ],
  },
  {
    id: "fashion__set__dreamy_stardust",
    name: "Dreamy Stardust",
    starRank: 4,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.reward,
    itemIds: [
      "fashion__contacts__azure_planet",
      "fashion__contacts__morpho_love",
      "fashion__contacts__indigo_dream",
      "fashion__contacts__illusion_of_iris",
      "fashion__lipstick__crimson_dream",
      "fashion__lipstick__wake_up",
      "fashion__eyelashes__fallen_star",
      "fashion__eyelashes__flowing_light",
      "fashion__eyelashes__dream_journey",
      "fashion__eyelashes__violet_starsea",
    ],
  },
  {
    id: "fashion__set__moonlit_blossoms",
    name: "Moonlit Blossoms",
    starRank: 4,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    itemIds: [
      "fashion__eyebrow__fantastic_years",
      "fashion__eyeliner__hazy_moonlight",
      "fashion__lipstick__take_a_sip",
      "fashion__eyelashes__flower_and_moon",
      "fashion__blush__cloudy_creek",
      "fashion__blush__clear_moon",
      "fashion__blush__floral_moonlight",
      "fashion__facepaint__frosty_moonlight",
    ],
  },
  {
    id: "fashion__set__feast_of_old_days",
    name: "Feast of Old Days",
    starRank: 3,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    itemIds: [
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
  {
    id: "fashion__set__burning_sunset",
    name: "Burning Sunset",
    starRank: 3,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    itemIds: [
      "fashion__eyebrow__sunset_boulevard",
      "fashion__eyebrow__twilight_zone",
      "fashion__eyelashes__distant_skyline",
      "fashion__blush__edge_of_sunset",
      "fashion__blush__pure_kiss",
      "fashion__blush__coastal_blaze",
      "fashion__blush__sunglow",
      "fashion__blush__firesky",
      "fashion__facepaint__elegy_of_sunset",
      "fashion__facepaint__beaming_glory",
    ],
  },
  {
    id: "fashion__set__carnival_song",
    name: "Carnival Song",
    starRank: 3,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    itemIds: [
      "fashion__lipstick__song_of_riverdale",
      "fashion__lipstick__aromatic_polka",
      "fashion__lipstick__orange_blossom",
      "fashion__lipstick__cherry_folk",
      "fashion__facepaint__fairytale_carnival",
      "fashion__facepaint__waltz_of_dots",
      "fashion__facepaint__fantasia_of_alice",
      "fashion__facepaint__azure_serenade",
    ],
  },
  {
    id: "fashion__set__depths_of_galaxy",
    name: "Depths of Galaxy",
    starRank: 3,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    itemIds: [
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
  {
    id: "fashion__set__breeze_in_the_woods",
    name: "Breeze in the Woods",
    starRank: 3,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    itemIds: [
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
  {
    id: "fashion__set__pale_light",
    name: "Pale Light",
    starRank: 3,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    itemIds: [
      "fashion__eyeliner__afterglow",
      "fashion__eyeliner__stratus_cloud",
      "fashion__eyeliner__dawn_dream",
      "fashion__eyeliner__flowing_clouds",
      "fashion__eyeliner__lingering_night",
      "fashion__blush__rosy_clouds",
      "fashion__blush__daybreak",
      "fashion__blush__skirt_of_night",
      "fashion__facepaint__starmoon",
      "fashion__facepaint__fragments_of_star",
    ],
  },
  {
    id: "fashion__set__mesmerizing_wind",
    name: "Mesmerizing Wind",
    starRank: 3,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    itemIds: [
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
  {
    id: "fashion__set__stray_moonlight",
    name: "Stray Moonlight",
    starRank: 3,
    brandId: "brand__please_yourself",
    obtainType: ObtainType.beautycourse,
    itemIds: [
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
];
