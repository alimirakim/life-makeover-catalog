import Head from 'next/head'
import { FashionCategory } from '../../types/types'


export async function getStaticProps({params}) {
    const item = {
        name: 'Fake Item',
        description: 'blah blah blah...'
    }

    return {
        props: {
            item
        }
    }
}

export async function getStaticPaths() {
    const paths = Object.values(FashionCategory).map(category => {
        return {
            params: {
                item: category.toLowerCase()
            }
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export default function ItemSlugPage({item}) {

    return (
        <>
            <Head>
                <title>{item.name}</title>
            </Head>

            <header>
            <h1>{item.name}</h1>
            </header>

            <main>
                {item.description}
            </main>
        </>
    )
}