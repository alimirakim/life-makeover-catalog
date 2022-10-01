import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// See SO Answer: https://stackoverflow.com/a/66626333
// CLI command: node --loader ts-node/esm prisma/script.ts
async function main() {
  // ... you will write your Prisma Client queries here

  await prisma.set.deleteMany();
  await prisma.item.deleteMany();

  if (true) {
    const set = await prisma.set.create({
      data: {
        id: "fashion__set__sleepy_bunny",
        name: "Sleepy Bunny",
        starRank: 4,
        brand: "Amber Shimmer",
        obtainType: "craft",
        mainStyle: "sweet",
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
              obtainMethod: JSON.stringify({
                craftCategory: "Story Quest",
                materialCost: [
                  {
                    itemId: "fashion__shoes__lunar_goddess",
                    quantity: 1,
                  },
                ],
              }),
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
              obtainMethod: JSON.stringify({
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
              }),
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
              obtainMethod: JSON.stringify({
                craftCategory: "Story Quest",
                materialCost: [
                  {
                    itemId: "fashion__socks__flower_dew",
                    quantity: 2,
                  },
                ],
              }),
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
              obtainMethod: JSON.stringify({
                craftCategory: "Story Quest",
                materialCost: [
                  {
                    itemId: "fashion__socks__flower_shade",
                    quantity: 2,
                  },
                ],
              }),
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
              obtainMethod: JSON.stringify({
                craftCategory: "Story Quest",
                materialCost: [
                  {
                    itemId: "fashion__socks__flower_dew",
                    quantity: 2,
                  },
                ],
              }),
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
              obtainMethod: JSON.stringify({
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
              }),
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
              obtainMethod: JSON.stringify({
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
              }),
            },
          ],
        },
      },
    });
  }

  const sets = await prisma.set.findMany({
    include: {
      items: true,
    },
  });
  console.log(sets);

  const items = await prisma.item.findMany();
  console.log(items);
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
