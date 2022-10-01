import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here

  await prisma.set.deleteMany();
  await prisma.item.deleteMany();

  if (true) {
    const set = await prisma.set.create({
      data: {
        id: "set__sleepy_bunny",
        name: "Sleepy Bunny",
        starRank: 4,
        brand: "Amber Shimmer",
        obtainType: "craft",
        mainStyle: "Sweet",
        items: {
          create: [
            {
              id: "item__dress__sleepy_bunny",
              starRank: 4,
              name: "Sleepy Bunny",
              // description: '',
              category: "Dress",
              tag1: "Homey",
              tag2: "Fairytale",
              // styleRatings: {}
              obtainType: "craft",
              obtainMethod: JSON.stringify({
                craftCategory: "Story Quest",
                materialCost: [
                  {
                    itemId: "item__shoes__lunar_goddess",
                    quantity: 1,
                  },
                ],
              }),
            },

            {
              id: "item__handheld__dreamy_bunny",
              starRank: 4,
              name: "Dreamy Bunny",
              // description: '',
              category: "Handheld",
              tag1: "Animal",
              tag2: "Fairytale",
              // styleRatings: {}
              obtainType: "craft",
              obtainMethod: JSON.stringify({
                craftCategory: "Story Quest",
                materialCost: [
                  {
                    itemId: "item__socks__super_girl",
                    quantity: 2,
                  },
                  {
                    itemId: "item__face__tender_gaze",
                    quantity: 1,
                  },
                ],
              }),
            },

            {
              id: "item__hat__fluffy_bunny",
              starRank: 4,
              name: "Fluffy Bunny",
              // description: '',
              category: "Hat",
              tag1: "Animal",
              tag2: "Fairytale",
              // styleRatings: {}
              obtainType: "craft",
              obtainMethod: JSON.stringify({
                craftCategory: "Story Quest",
                materialCost: [
                  {
                    itemId: "item__socks__flower_dew",
                    quantity: 2,
                  },
                ],
              }),
            },

            {
              id: "item__wrist__candy_kingdom",
              starRank: 4,
              name: "Fluffy Bunny",
              // description: '',
              category: "Wrist",
              tag1: "Homey",
              tag2: "Fairytale",
              // styleRatings: {}
              obtainType: "craft",
              obtainMethod: JSON.stringify({
                craftCategory: "Story Quest",
                materialCost: [
                  {
                    itemId: "item__socks__flower_shade",
                    quantity: 2,
                  },
                ],
              }),
            },

            {
              id: "item__socks__sleepy_bunny",
              starRank: 4,
              name: "Sleepy Bunny",
              // description: '',
              category: "Socks",
              tag1: "Homey",
              tag2: "Fairytale",
              // styleRatings: {}
              obtainType: "craft",
              obtainMethod: JSON.stringify({
                craftCategory: "Story Quest",
                materialCost: [
                  {
                    itemId: "item__socks__flower_dew",
                    quantity: 2,
                  },
                ],
              }),
            },

            {
              id: "item__shoes__pink_lady",
              starRank: 4,
              name: "Pink Lady",
              // description: '',
              category: "Shoes",
              tag1: "Homey",
              tag2: "Fairytale",
              // styleRatings: {}
              obtainType: "craft",
              obtainMethod: JSON.stringify({
                craftCategory: "Story Quest",
                materialCost: [
                  {
                    itemId: "item__socks__flower_shade",
                    quantity: 2,
                  },
                  {
                    itemId: "item__hair__starry_soda",
                    quantity: 2,
                  },
                ],
              }),
            },

            {
              id: "item__hairstyle__fluffy_dream",
              starRank: 4,
              name: "Fluffy Dream",
              // description: '',
              category: "Hairstyle",
              tag1: "Homey",
              tag2: "Fairytale",
              // styleRatings: {}
              obtainType: "craft",
              obtainMethod: JSON.stringify({
                craftCategory: "Story Quest",
                materialCost: [
                  {
                    itemId: "item__socks__super_girl",
                    quantity: 2,
                  },
                  {
                    itemId: "item__earrings__love_melody",
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

  // console.log(set);

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

//   set__sleepy_bunny: {
//     id: 'set__sleepy_bunny',
//     name: 'Sleepy Bunny',
//     starRating: 4,
//     brand: 'Amber Shimmer',
//     obtainMethod: {
//         type: 'fashionStudio',
//         category: 'storyQuest',
//     },
//     itemIds: [
//         'item__fluffy_dream',
//         'item__sleepy_bunny',
//         'item__fairytale_dream',
//         'item__pink_lady',
//         'item__fluffy_bunny',
//         'item__candy_kingdom',
//         'item__dreamy_bunny',
//     ],
//     mainStyles: ['Sweet','Lively'],
//     tags: ['Fairytale','Homey'],
// },
