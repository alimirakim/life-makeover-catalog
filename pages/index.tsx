import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { CatalogueCategory, FashionCategory, MakeupCategory, Style, Tag } from '../types/types'

const categoryMap = {
    [CatalogueCategory.Fashion]: Object.values(FashionCategory),
    [CatalogueCategory.Makeup]: Object.values(MakeupCategory),
    [CatalogueCategory.Allies]: ['All', 'SSR', 'SR', 'R'],
    [CatalogueCategory.Photo]: ['Pose', 'Scene', 'Cute Effect', 'Effect', 'Filter', 'Frame', 'Sticker', 'Brush'],
    [CatalogueCategory.Home]: ['Furniture']
}

enum SortType {
    Latest='Latest',
    Alphabetical='Alphabetical',
    StarRank='Star Rank',
    Obtained='Obtained',
    LikeRating='Like Rating',
    Popularity='Popularity',
}

enum ViewMode {
  Tiles = 'Tiles',
  Posters = 'Posters',
  List = 'List',
}

export async function getStaticProps() {
    const catalogItems = [{
        name: 'Test A',
        id: 'test-a',
        starRank: 6,
        description: 'This popup appears when hovering on the item card... add description here...',
        obtainType: 'lightchase',
        obtainMethod: {
          lightchase: 'Beloved Gacha'
        },
        gallery: [{src: '', model: 'Blanchet', owner: 'trashmyki'}, {src: '', model: 'Dahlia', owner: 'gomi'}]
    },
    {
      name: 'Test B',
      id: 'test-b',
      starRank: 4,
      description: 'description here...',
      gallery: []
    },
  {
    name: 'Test C',
    id: 'test-c',
    starRank: 5,
    description: 'description here...',
    gallery: []
  }]

    return {
        props: {catalogItems}
    }
}

//
export default function CatalogLayout({children, catalogItems}) {
    const router = useRouter()
    const pathname = router.pathname;
    const [selectedCatalogueCategory, setSelectedCatalogueCategory] = useState(CatalogueCategory.Fashion)
    const [selectedCategory, setSelectedCategory] = useState(categoryMap[selectedCatalogueCategory])
    const [selectedSort, setSelectedSort] = useState(SortType.Latest);
    const [viewMode, setViewMode] = useState('tiles') // tiles, posters, list
    const [isReverseSort, setIsReverseSort] = useState(false)
    const [filters, setFilters] = useState([]);

    const sortedCatalogItems = useMemo(() => {
      return sortCatalog(selectedSort, catalogItems)
    }, [selectedSort, catalogItems])
console.log(sortedCatalogItems[0])
    return <>
    <Head>
      <title>Life Makeover Catalog</title>
    </Head>

    <header>
      <h1><Link href="/">{`Life Makeover Catalog (${selectedCatalogueCategory})`}</Link></h1>
      <button onClick={() => console.log('toggle dark mode')}>dark mode</button>

  dropdownsettings:
<ul>
  <li><button onClick={() => 'use firebase and oauth!!'}>Login or Sign up</button></li>
  <li><Link href={`/users/[user-id-here]`}>User Profile</Link></li>
  <li><Link href="/me">My settings</Link></li>
  <li><Link href="/admin">Admin Board</Link></li>

  </ul>


      <nav>
        <ul style={{display: 'flex', listStyle: 'none'}}>
            {Object.values(CatalogueCategory).map((category) => {
            return <li key={category}>
                <button onClick={() => setSelectedCatalogueCategory(category)}>
                    {category}
                </button>
              </li>
            })}
        </ul>

        <ul style={{display: 'flex', listStyle: 'none'}}>
          {categoryMap[selectedCatalogueCategory].map((category) => {
            return <li key={category}>
              <button><Link href={`/items/${category.toLowerCase()}`}>{category}</Link></button>
            </li>
          })}
        </ul>

          {/* TODO Add navlinks for final layer of nested categories ex. accessories */}

<hr/>

<div>
  View mode: 
  {Object.values(ViewMode).map(viewMode => {
    return <button key={viewMode} onClick={()=>setViewMode(viewMode)}>{viewMode}</button>
  })}
</div>

        <div>
            Filter by: {filters.map(filter => <div key={filter}>{filter} <button onClick={()=>console.log('remove filter')}>X</button></div>)}
            <button onClick={() => console.log('open filter popup')}>+</button>
        </div>
        <div>
            <button onClick={() => setIsReverseSort(!isReverseSort)}>{isReverseSort ? 'Desc' : 'Asc'}</button> Sort by: {Object.values(SortType).map(sortBy => {
                return <button key={sortBy} onClick={() => setSelectedSort(sortBy)} className={sortBy === selectedSort && 'selected'}>{sortBy}</button>
            })}
        </div>

        <hr/>

      </nav>


    </header>
    
    <main>
      <article>
<h2>{selectedCatalogueCategory} Catalog</h2>
        <div style={{display: 'flex'}}>
          {sortedCatalogItems.map(catalogItem => (
            <section key={catalogItem.id} style={{border: "1px dashed pink", borderRadius: 16, margin: 8, width: 'max-content', padding: 8, backgroundColor: 'lightyellow'}}>
                <ObtainedButton />
                <WishlistButton />
                <HeartMeter />

                <Image src={`/images/${catalogItem.id}`} height={100} width={100} alt="item icon or preview image" />

                <button onClick={() => console.log('redirect to item page')}>
                  {catalogItem.name}
                </button>
              </section>
        ))}
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
}

/**
 * Maybe have this be embed?
 * @param param0 
 * @returns 
 */
function CatalogItemPopup({catalogItem}) {
  return (
            <aside style={{border: "1px dashed pink", borderRadius: 16, margin: 8, width: 'max-content', padding: 8, backgroundColor: 'lightblue'}}>
                <h3>{catalogItem.name}</h3> 
                <Link href={`/items/${catalogItem.id}`}>{`See full page ->`}</Link>
                <button onClick={() => console.log('edit mode')}>Edit</button>

                <small>{catalogItem.starRank} stars</small>
                <p>{catalogItem.description}</p>

                <form>
                  <ObtainedButton />
                  <WishlistButton />
                  <HeartMeter />
                  <PaletteButtons />

                </form>
                <Image src={`/images/${catalogItem.id}`} height={100} width={100} alt="item preview image" />
                
                <hr/>

                <h4>Obtain Method</h4>
                TBA 

                <h4>Gallery</h4>
                {catalogItem.gallery.map(image => {
                  return <Image key={image.src} src={`/images/${image.src}`} height={100} width={200} alt={`Model ${image.model} wearing ${catalogItem.name}, courtesy of ${image.owner}`} />
                })}
    </aside>
  )
}

function ObtainedButton() {
  const isObtained = false;
  const setIsObtained = (isObtained) => true;

  return (
    <button onClick={() => setIsObtained(!isObtained)}>
      {isObtained ? 'Obtained' : 'Unobtained'}
    </button>
  )
}

function WishlistButton() {
  const isWishlisted = true;
  const setIsWishlisted = (isWishlisted) => false;

  return (
    <button onClick={() => setIsWishlisted(!isWishlisted)}>
      {isWishlisted ? 'Wishlisted' : 'Add to wishlist'}
    </button>
  )
}

function HeartMeter() {
  const popularityLevel = 5;
  const userHeartLevel = 3;
  const setUserHeartRating = (heartValue) => heartValue;

  const getHandleClick = (heartValue) => () => {
    console.log('like')
    setUserHeartRating(heartValue)
  }

  return (
    <div>
    <button onClick={getHandleClick(1)}>{`<3`}</button>
    <button onClick={getHandleClick(2)}>{`<3`}</button>
    <button onClick={getHandleClick(3)}>{`<3`}</button>
    <button onClick={getHandleClick(4)}>{`<3`}</button>
    <button onClick={getHandleClick(5)}>{`<3`}</button>
    </div>
  )
}

const palettesMock = [
  {mainColor: '#a00', isObtained: true, isWishlisted: false},
  {mainColor: '#00a', isObtained: true, isWishlisted: true},
  {mainColor: '#0a0', isObtained: false, isWishlisted: false},
]
function PaletteButtons() {
  const isUnlocked = true;
  const palettes = palettesMock


  return (
    <div style={{display: 'flex'}}>
      {palettes.map((palette, i) => {
        return <section key={i}>
            <div style={{backgroundColor: palette.mainColor, width: 50}}>color swatch</div>
            <ObtainedButton />
            <WishlistButton />
          </section>
      })}
    </div>
  )
}

function FilterPopup(filters, setFilters) {
  const filterCategories = {
    obtainStatus: ['obtained', 'unobtained'],
    wishlist: ['wishlisted', 'not wishlisted'],
    like: [5, 4, 3, 2, 1, 0],
    popularity: [5, 4, 3, 2, 1, 0],
    starRank: [6,4,3,2],
    style: Object.values(Style),
    tag: Object.values(Tag),
    pavilion: ['nirvana', 'snow stuff'],
    brand: ['shimmer', 'f'],
    obtainType: ['craft', 'lightchase'],
  }

  return (
    <form>
      <h2>Filter by:</h2>
      {Object.keys(filterCategories).map(filterCategory => {
        return (
          <fieldset key={filterCategory}>
            <legend>{filterCategory}</legend>
            {filterCategories[filterCategory].map(filterOption => {
              return <button key={filterOption} onClick={() => console.log('add/remove filter')}>{filterOption}</button>
            })}
          </fieldset>
        )
      })}
    </form>
  )
}


function sortCatalog(sortType, catalogItems) {
  switch (sortType) {
    case SortType.Alphabetical:
      return catalogItems.sort()

    // TODO other sorts

    default:
      return catalogItems;
  }
}