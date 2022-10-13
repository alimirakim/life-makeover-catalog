export enum Shop {
  GlimmerShop,
  InspirationCenter,
  ConvenienceStore,
  AllyUpgradeShop,
  AllyIntimacyShop,
  AllyShardShop,
  DecomGlitteringStore,
  DecomStarlightStore,
  DecomGildedStore,
  EndorsementShop,
  GuildShop,
  FashionShop,
  VvannaShop,
  ReferralShop,
  ValueRebates,
  SpecialRebates,
  SuperRebates,
  DeluxeRebates,
  MemberShop,
}

export type Invitation = "Gilded Invitation" | "Radiant Invitation" | "hmmm";

export enum ImageAngle {
  Front,
  ThreeQuarter,
  Left,
  Right,
  Back,
  Above,
  Below,
  Closeup,
}

export enum SourceType {
  Shop,
  Exchange,
  Craft,
  Achievement,
  Event,
  Lightchase,
  FashionPlan,
  Rebate,
}

export enum Region {
  Global,
  SEA,
  Japan,
  Korea,
}

export enum AllyRating {
  SSR,
  SR,
  R,
}

enum ObtainType {
  lightchase,
  drop,
  pack,
  craft,
  event,
  evolution,
  reward,
  beautycourse,
}

export enum StageType {
  normal,
  hard,
  challenge,
  mind,
}

export enum LightchaseType {
  night_of_vvanna,
  essence,
  beloved,
  starlight_show,
  nirvana,
  dewy_tears,
}

enum FashionStudioCategory {
  StoryQuest,
  MindTravel,
  Other,
}

export enum EventType {
  signIn,
  houseVisitor,
  diceBoard,
  fishing,
  treasureHunt,
  stylingWizard,
  spinWheel,
  caretaker,
}
