-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "starRank" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "tag1" TEXT,
    "tag2" TEXT,
    "styleRatings" TEXT,
    "obtainType" TEXT NOT NULL,
    "obtainMethod" TEXT NOT NULL,
    "setId" TEXT,
    CONSTRAINT "Item_setId_fkey" FOREIGN KEY ("setId") REFERENCES "Set" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Set" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "starRank" INTEGER NOT NULL,
    "brand" TEXT,
    "obtainType" TEXT NOT NULL,
    "mainStyle" TEXT NOT NULL
);
