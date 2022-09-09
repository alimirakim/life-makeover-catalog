import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from '../node_modules/next/router'
import { CatalogueCategory, FashionCategory, MakeupCategory } from '../types/types'

const categoryMap = {
    [CatalogueCategory.Fashion]: Object.values(FashionCategory),
    [CatalogueCategory.Makeup]: Object.values(MakeupCategory),
    [CatalogueCategory.Allies]: ['All', 'SSR', 'SR', 'R'],
    [CatalogueCategory.Photo]: ['Pose', 'Scene', 'Cute Effect', 'Effect', 'Filter', 'Frame', 'Sticker', 'Brush'],
    [CatalogueCategory.Home]: ['Furniture']
}

enum SortBy {
    Latest='Latest',
    Alphabetical='Alphabetical',
    StarRank='Star Rank',
    Obtained='Obtained',
    LikeRating='Like Rating'
}

export async function getStaticProps() {
    const catalogItems = [{
        name: 'Test',
        id: 'test',
        starRating: 6,
        description: 'description here...'
    }]

    return {
        props: {catalogItems}
    }
}

//
export default function CatalogLayout({children, catalogItems}) {
    const router = useRouter()
    const pathname = router.pathname;
    const [selectedCatalogueCategory, setSelectedCatalogueCategory] = useState('Fashion')
    const [selectedCategory, setSelectedCategory] = useState(categoryMap[selectedCatalogueCategory])
    const [selectedSort, setSelectedSort] = useState('latest');
    const [filters, setFilters] = useState([]);
console.log(selectedCatalogueCategory);

    return (<>
    <Head>
      <title>Life Makeover Catalog</title>
    </Head>

    <header>
      <h1><Link href="/">Life Makeover Catalog ({selectedCatalogueCategory})</Link></h1>

      <nav>
        <ul>
            {Object.values(CatalogueCategory).map((category) => {
            return <li key={category}>
                <button onClick={() => setSelectedCatalogueCategory(category)}>
                    {category}
                </button>
            </li>
            })}
        </ul>

        <ul>
          {categoryMap[selectedCatalogueCategory].map((category) => {
            console.log({category}, typeof category, 'yo')
            return <li key={category}>
              <Link href={`/items/${category.toLowerCase()}`}>{category}</Link>
            </li>
          })}
        </ul>

          {/* TODO Add navlinks for final layer of nested categories ex. accessories */}

        <div>
            Filter by: {filters.map(filter => <div key={filter}>{filter}</div>)}
        </div>
        <div>
            Sort by: {Object.values(SortBy).map(sortBy => {
                return <button key={sortBy} onClick={() => setSelectedSort(sortBy)} className={sortBy === selectedSort && 'selected'}>{sortBy}</button>
            })}
        </div>

      </nav>
    </header>
    
    <main>
        hey
        {catalogItems.map(catalogItem => (
            <section key={catalogItem.id}>
                <h3>{catalogItem.name}</h3>
                <small>{catalogItem.starRating} stars</small>
                <p>{catalogItem.description}</p>
                <Image src={`/images/${catalogItem.id}`} alt={catalogItem.name} height={200} width={200s} />
            </section>
        ))}
    </main>

    <footer>
      Made by alimirakim.
    </footer>
    </>)
}

function SortModule() {

}