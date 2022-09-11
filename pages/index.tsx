import Link from 'next/link'
import { CatalogueCategory, FashionCategory, MakeupCategory } from '../types/types'

const DEFAULT_SUPERCATEGORY = CatalogueCategory.Fashion;
const DEFAULT_CATEGORY_MAP = {
  [CatalogueCategory.Fashion]: FashionCategory.Set,
  [CatalogueCategory.Makeup]:  MakeupCategory.Collection,
  [CatalogueCategory.Allies]: 'All',
}


export default function Home() {
  const catalogHref = '/' + [DEFAULT_SUPERCATEGORY, DEFAULT_CATEGORY_MAP[DEFAULT_SUPERCATEGORY]].join('/')

  return (
    <main>
      Go to <Link 
      href="/[...category]"
      as={catalogHref}>
        catalog</Link>!
    </main>
  )
}