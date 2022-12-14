import { useMemo, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import prisma from "../../prisma/prisma";

import {
  AccessoryCategory,
  CatalogueCategory,
  FashionCategory,
  MakeupCategory,
  Style,
  Tag,
} from "../../types/types";
import getNestedCategoryPath from "../../utils/getNestedCategoryPath";
import { CATEGORY_TREE, LINKED_CATEGORY_MAP } from "../../constants";
import PageHeader from "../../components/PageHeader";
import ItemThumbnail from "../../components/ItemThumbnail";
import ItemPreview from "../../components/ItemPreview";
import Tabs from "../../components/Tabs";
import PageFooter from "../../components/PageFooter";
import { Item } from "../../types/interfaces";
import CatalogListSettings from "../../components/CatalogListSettings";
import PaletteButtons from "../../components/PaletteButtons";

export async function getServerSideProps({ params }) {
  const categories = params.categoryPath.split("-");
  const supercategory = categories[0];
  const lastCategory = categories[categories.length - 1];

  switch (supercategory) {
    case CatalogueCategory.set:
      let sets;
      if (lastCategory === "all") {
        sets = await prisma.set.findMany();
      } else {
        sets = await prisma.set.findMany({
          where: { brand: lastCategory },
        });
      }
      return { props: { items: sets } };

    case CatalogueCategory.fashion:
      let items;
      if (lastCategory === "all" && categories.length > 2) {
        items = await prisma.item.findMany({
          where: { category: { in: CATEGORY_TREE[categories[1]] } },
        });
      } else if (lastCategory === "all") {
        items = await prisma.item.findMany();
      } else {
        items = await prisma.item.findMany({
          where: { category: lastCategory },
        });
      }
      return { props: { items } };

    default:
      return { props: {} };
  }
}

// const items =
//   supercategory === CatalogueCategory.set
//     ? await prisma.set.findMany()
//     : await prisma.item.findMany({
//         where: {
//           category,
//         },
//       });

export async function maybeGetStaticProps() {
  const catalogItems = [
    {
      id: "hair-a",
      name: "Hair A",
      category: "Fashion",
      subcategory: "Hairstyle",
      starRank: 6,
      description:
        "This popup appears when hovering on the item card... add description here...",
      obtainType: "lightchase",
      obtainMethod: {
        lightchase: "Beloved Gacha",
      },
      gallery: [
        { src: "blah", model: "Blanchet", owner: "trashmyki" },
        { src: "bloo", model: "Dahlia", owner: "gomi" },
      ],
    },
    {
      id: "hair-b",
      name: "Hair B",
      category: "Fashion",
      subcategory: "Hairstyle",
      starRank: 4,
      description: "description here...",
      gallery: [],
    },
    {
      name: "Hair C",
      id: "hair-c",
      category: "Fashion",
      subcategory: "Hairstyle",
      starRank: 5,
      description: "description here...",
      gallery: [],
    },
    {
      name: "Dress A",
      id: "dress-a",
      category: "Fashion",
      subcategory: "Dress",
      starRank: 3,
      description: "description here...",
      gallery: [],
    },
  ];

  return {
    props: { catalogItems },
  };
}

export async function maybeGetStaticPaths() {
  //   const paths = Object.values(CatalogueCategory).flatMap(supercategory => {
  //     return Object.values(CATEGORY_TREE[supercategory]).map(category => {
  //       return {
  //     params: {
  //         supercategory: supercategory,
  //         category: category
  //       }
  //     }
  //   })
  // })
  // const paths = getCategoryPaths([], [], CATEGORY_TREE)
  // const paths = [
  //   {
  //     params: {
  //       category: ["Fashion", "Set"],
  //     },
  //   },
  // ];
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

//
export default function CatalogPage({ children, sets, items }) {
  const router = useRouter();
  const { categoryPath } = router.query;
  const categories = categoryPath ? categoryPath.split("-") : [];
  const catalogHeadingLabel = `${categories[0]} Catalog - ${
    categories[categories.length - 1]
  } Items`;

  // const sortedCatalogItems = useMemo(() => {
  //   return sortCatalog(selectedSort, items);
  // }, [selectedSort, items]);

  return (
    <>
      <Head>
        <title>Life Makeover Catalog</title>
      </Head>

      <PageHeader categories={categories}>
        <Tabs categories={categories} />
      </PageHeader>

      <main>
        <article>
          <h2>{catalogHeadingLabel}</h2>

          <CatalogListSettings />

          <PaletteButtons />

          <ul style={{ display: "flex" }}>
            {items.length
              ? items.map((catalogItem: Item) => {
                  return (
                    <li key={catalogItem.id}>
                      <ItemThumbnail
                        catalogItem={catalogItem}
                        categories={categories}
                      />
                    </li>
                  );
                })
              : "There are no items matching this category"}
          </ul>

          {/* TODO Turn into popup that shows on thumb hover */}
          {/* {items.length > 0 && <ItemPreview catalogItem={items[0]} />} */}
        </article>

        {/* <FilterPopup filters={filters} setFilters={setFilters} /> */}
      </main>

      <PageFooter />
    </>
  );
}

// function sortCatalog(sortType, catalogItems) {
//   switch (sortType) {
//     case SortType.Alphabetical:
//       return catalogItems.sort();

//     // TODO other sorts

//     default:
//       return catalogItems;
//   }
// }
