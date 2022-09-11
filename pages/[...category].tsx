import { useMemo, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  AccessoryCategory,
  CatalogueCategory,
  FashionCategory,
  MakeupCategory,
  Style,
  Tag,
} from "../types/types";

// /fashion/dress
// /fashion/accessory/hat
// /fashion/accessory/earrings
// /makeup/all
// /makeup/lipstick

const CATEGORY_TREE = {
  [CatalogueCategory.Fashion]: [
    ...Object.values(FashionCategory), 
    {[FashionCategory.Accessory]: Object.values(AccessoryCategory)},
  ],
  [CatalogueCategory.Makeup]: Object.values(MakeupCategory),
  [CatalogueCategory.Allies]: ["All", "SSR", "SR", "R"],
  [CatalogueCategory.Photo]: [
    "Pose",
    "Scene",
    "Cute Effect",
    "Effect",
    "Filter",
    "Frame",
    "Sticker",
    "Brush",
  ],
  [CatalogueCategory.Home]: ["Furniture"],
};

enum SortType {
  Latest = "Latest",
  Alphabetical = "Alphabetical",
  StarRank = "Star Rank",
  Obtained = "Obtained",
  LikeRating = "Like Rating",
  Popularity = "Popularity",
}

enum ViewMode {
  Tiles = "Tiles",
  Posters = "Posters",
  List = "List",
}

export async function getStaticProps() {
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


export async function getStaticPaths() {
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
  const paths = [{
    params: {
      category: ['Fashion', 'Set']
    } 
  }]
  console.log(paths)

  return {
    paths,
    fallback: false,
  }
}

function getCategoryPaths(paths, currentPath, currentCategory) {

  if (typeof currentCategory === 'string') {
    return [...paths, {
      params: {
        category: [...currentPath, currentCategory],
      }
    }]
  }

  let currentPaths = [...paths]
  console.log({currentPaths})
  Object.entries(currentCategory).forEach(([key, value]) => {
    currentPaths = getCategoryPaths(currentPaths, [...currentPath, key], value)
  })

  return currentPaths
}

// function Tabs({}) {


//   {CATEGORY_TREE[category[0]].map((subcategory) => {
//     return (
//       <li key={subcategory}>
//           <Link 
//             href="/[...category]"
//             as={`/${category[0]}/${subcategory}`}>
            
            
//           </Link>
//       </li>
//     );
//   })}
// }

//
export default function CatalogLayout({ children, catalogItems }) {
  const router = useRouter();
  const {category} = router.query
  console.log({category})
  const [selectedSort, setSelectedSort] = useState(SortType.Latest);
  const [viewMode, setViewMode] = useState("tiles"); // tiles, posters, list
  const [isReverseSort, setIsReverseSort] = useState(false);
  const [filters, setFilters] = useState([]);

  const selectedCatalogItems = useMemo(() => {
    return catalogItems.filter((catalogItem) => {
      console.log({ catalogItem, category });
      return catalogItem.subcategory === category;
    });
  }, [catalogItems, category]);

  const sortedCatalogItems = useMemo(() => {
    return sortCatalog(selectedSort, catalogItems);
  }, [selectedSort, catalogItems]);

  return (
    <>
      <Head>
        <title>Life Makeover Catalog</title>
      </Head>

      <header>
        <h1>
          <Link href="/">{`Life Makeover Catalog (${category.join(' / ')})`}</Link>
        </h1>
        <button onClick={() => console.log("toggle dark mode")}>
          dark mode
        </button>
        dropdownsettings:
        <ul>
          <li>
            <button onClick={() => "use firebase and oauth!!"}>
              Login or Sign up
            </button>
          </li>
          <li>
            <Link href={`/users/[user-id-here]`}>User Profile</Link>
          </li>
          <li>
            <Link href="/me">My settings</Link>
          </li>
          <li>
            <Link href="/admin">Admin Board</Link>
          </li>
        </ul>
        <nav>
          <ul style={{ display: "flex", listStyle: "none" }}>
            {Object.keys(CatalogueCategory).map((currentCategory) => {
              return (
                <li key={currentCategory}>
                    <Link 
                      href="/[...category]"
                      as={`/${currentCategory}/blah`}> 
                      {currentCategory}
                    </Link>
                </li>
              );
            })}
          </ul>

          <ul style={{ display: "flex", listStyle: "none" }}>
            {CATEGORY_TREE[category[0]].map((subcategory) => {
              return (
                <li key={subcategory}>
                    <Link 
                      href="/[...category]"
                      as={`/${category[0]}/${subcategory}`}>
                      blah
                      
                    </Link>
                </li>
              );
            })}
          </ul>

          {/* TODO Add navlinks for final layer of nested categories ex. accessories */}

          <hr />

          <div>
            View mode:
            {Object.values(ViewMode).map((viewMode) => {
              return (
                <button key={viewMode} onClick={() => setViewMode(viewMode)}>
                  {viewMode}
                </button>
              );
            })}
          </div>

          <div>
            Filter by:{" "}
            {filters.map((filter) => (
              <div key={filter}>
                {filter}{" "}
                <button onClick={() => console.log("remove filter")}>X</button>
              </div>
            ))}
            <button onClick={() => console.log("open filter popup")}>+</button>
          </div>
          <div>
            <button onClick={() => setIsReverseSort(!isReverseSort)}>
              {isReverseSort ? "Desc" : "Asc"}
            </button>{" "}
            Sort by:{" "}
            {Object.values(SortType).map((sortBy) => {
              return (
                <button
                  key={sortBy}
                  onClick={() => setSelectedSort(sortBy)}
                  className={sortBy === selectedSort && "selected"}
                >
                  {sortBy}
                </button>
              );
            })}
          </div>

          <hr />
        </nav>
      </header>

      <main>
        <article>
          <h2>
            {category[0]} Catalog - {category[category.length-1]} Items
          </h2>
          <div style={{ display: "flex" }}>
            {selectedCatalogItems.map((catalogItem) => {
              return (
                <section
                  key={catalogItem.id}
                  style={{
                    border: "1px dashed pink",
                    borderRadius: 16,
                    margin: 8,
                    width: "max-content",
                    padding: 8,
                    backgroundColor: "lightyellow",
                  }}
                >
                  <button onClick={() => console.log("redirect to item page")}>
                    <Link
                      href={`/${category[0]}/${category[category.length-1]}/${
                        catalogItem.id
                      }`}
                    >
                      {catalogItem.name}
                    </Link>
                  </button>

                  <Image
                    src={`/images/${catalogItem.id}`}
                    height={100}
                    width={100}
                    alt="item icon or preview image"
                  />
                  <hr />

                  <ObtainedButton />
                  <WishlistButton />
                  <HeartMeter />
                </section>
              );
            })}
          </div>

          <CatalogItemPopup catalogItem={sortedCatalogItems[0]} />
        </article>

        <FilterPopup filters={filters} setFilters={setFilters} />
      </main>

      <footer>
        Made by alimirakim.
        <nav>
          <button>Go to top</button>
          <button>Contact me</button>
          <button>GitHub</button>
          <button>About & FAQ</button>
        </nav>
      </footer>
    </>
  );
}

/**
 * Maybe have this be embed?
 * @param param0
 * @returns
 */
function CatalogItemPopup({ catalogItem }) {
  return (
    <aside
      style={{
        border: "1px dashed pink",
        borderRadius: 16,
        margin: 8,
        width: "max-content",
        padding: 8,
        backgroundColor: "lightblue",
      }}
    >
      <h3>{catalogItem.name}</h3>
      <Link href={`/items/${catalogItem.id}`}>{`See full page ->`}</Link>
      <button onClick={() => console.log("edit mode")}>Edit</button>
      <small>{catalogItem.starRank} stars</small>
      <p>{catalogItem.description}</p>
      <form>
        <ObtainedButton />
        <WishlistButton />
        <HeartMeter />
        <PaletteButtons />
      </form>
      <Image
        src={`/images/${catalogItem.id}`}
        height={100}
        width={100}
        alt="item preview image"
      />
      <hr />
      <h4>Obtain Method</h4>
      TBA
      <h4>Gallery</h4>
      {catalogItem.gallery.map((image) => {
        return (
          <Image
            key={image.src}
            src={`/images/${image.src}`}
            height={100}
            width={200}
            alt={`Model ${image.model} wearing ${catalogItem.name}, courtesy of ${image.owner}`}
          />
        );
      })}
    </aside>
  );
}

function ObtainedButton() {
  const isObtained = false;
  const setIsObtained = (isObtained) => true;

  return (
    <button onClick={() => setIsObtained(!isObtained)}>
      {isObtained ? "Obtained" : "Unobtained"}
    </button>
  );
}

function WishlistButton() {
  const isWishlisted = true;
  const setIsWishlisted = (isWishlisted) => false;

  return (
    <button onClick={() => setIsWishlisted(!isWishlisted)}>
      {isWishlisted ? "Wishlisted" : "Add to wishlist"}
    </button>
  );
}

function HeartMeter() {
  const popularityLevel = 5;
  const userHeartLevel = 3;
  const setUserHeartRating = (heartValue) => heartValue;

  const getHandleClick = (heartValue) => () => {
    console.log("like");
    setUserHeartRating(heartValue);
  };

  return (
    <div>
      <button onClick={getHandleClick(1)}>{`<3`}</button>
      <button onClick={getHandleClick(2)}>{`<3`}</button>
      <button onClick={getHandleClick(3)}>{`<3`}</button>
      <button onClick={getHandleClick(4)}>{`<3`}</button>
      <button onClick={getHandleClick(5)}>{`<3`}</button>
    </div>
  );
}

const palettesMock = [
  { mainColor: "#a00", isObtained: true, isWishlisted: false },
  { mainColor: "#00a", isObtained: true, isWishlisted: true },
  { mainColor: "#0a0", isObtained: false, isWishlisted: false },
];
function PaletteButtons() {
  const isUnlocked = true;
  const palettes = palettesMock;

  return (
    <div style={{ display: "flex" }}>
      {palettes.map((palette, i) => {
        return (
          <section key={i}>
            <div style={{ backgroundColor: palette.mainColor, width: 50 }}>
              color swatch
            </div>
            <ObtainedButton />
            <WishlistButton />
          </section>
        );
      })}
    </div>
  );
}

function FilterPopup(filters, setFilters) {
  const filterCategories = {
    obtainStatus: ["obtained", "unobtained"],
    wishlist: ["wishlisted", "not wishlisted"],
    like: [5, 4, 3, 2, 1, 0],
    popularity: [5, 4, 3, 2, 1, 0],
    starRank: [6, 4, 3, 2],
    style: Object.values(Style),
    tag: Object.values(Tag),
    pavilion: ["nirvana", "snow stuff"],
    brand: ["shimmer", "f"],
    obtainType: ["craft", "lightchase"],
  };

  return (
    <form>
      <h2>Filter by:</h2>
      {Object.keys(filterCategories).map((filterCategory) => {
        return (
          <fieldset key={filterCategory}>
            <legend>{filterCategory}</legend>
            {filterCategories[filterCategory].map((filterOption) => {
              return (
                <button
                  key={filterOption}
                  onClick={() => console.log("add/remove filter")}
                >
                  {filterOption}
                </button>
              );
            })}
          </fieldset>
        );
      })}
    </form>
  );
}

function sortCatalog(sortType, catalogItems) {
  switch (sortType) {
    case SortType.Alphabetical:
      return catalogItems.sort();

    // TODO other sorts

    default:
      return catalogItems;
  }
}
