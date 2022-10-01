import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import prisma from "../../../prisma/prisma";

export async function getServerSideProps({ params }) {
  const itemId = params.itemId;

  const item = await prisma.item.findFirst({
    where: {
      id: itemId,
    },
    include: {
      set: true,
    },
  });

  return {
    props: {
      item,
    },
  };
}

/**
 * TODO Add heart and rating meter etc. interaction buttons
 *
 * @param props Destructured props
 * @param props.item
 * @returns ItemPages
 */
export default function ItemPage({ item }) {
  const router = useRouter();
  const { itemId } = router.query;
  console.log({ router, itemId, item });

  return (
    <>
      <Head>
        <title>{item.name}</title>
      </Head>

      <header>
        <h1>
          {item.name} [{item.category}] {getStars(item.starRank)}
        </h1>
        {item.set ? (
          <small>
            Part of set{" "}
            <Link
              href={`/fashion-set/${item.setId}`}
            >{`"${item.set.name}"`}</Link>
          </small>
        ) : (
          <small>Standalone item</small>
        )}
      </header>

      <main>
        <Image src="/images/" height={200} width={100} alt={item.name} />

        <section>
          <h2>Tags</h2>
          <ul>
            {item.tag1 && <li>{item.tag1}</li>}
            {item.tag2 && <li>{item.tag2}</li>}
          </ul>
        </section>

        <section>
          <h2>Style Ratings</h2>
          TBA
        </section>

        <section>
          <h2>Description</h2>
          {item.description}
        </section>

        <section>
          <h2>Obtain Method</h2>
          <ObtainMethodDescription
            obtainType={item.obtainType}
            obtainMethodJson={item.obtainMethod}
          />
        </section>

        <section>
          <h2>Gallery</h2>
          {/* TODO Fetch, sort, and display item images */}* Official preview
          image * Full-body * close-up (original, recolor1, recolor2, custom1,
          custom2) * angles (front, 3/4, side, back) * user images
        </section>
      </main>
    </>
  );
}

function getStars(starRank) {
  const stars = "⭐".repeat(starRank);
  return stars;
}

function ObtainMethodDescription({ obtainType, obtainMethodJson }) {
  const obtainMethod = JSON.parse(obtainMethodJson);

  switch (obtainType) {
    case "craft":
      return (
        <dl>
          <dt>Obtain Type</dt>
          <dd>{obtainType}</dd>

          <dt>Craft Category</dt>
          <dd>{obtainMethod.craftCategory}</dd>

          <dt>Material Cost</dt>
          <dd>
            <dl>
              {obtainMethod.materialCost.map((material) => {
                return (
                  <>
                    <dt>Item</dt>
                    <dd>
                      <Link href={material.itemId}>{material.itemId}</Link>
                    </dd>
                    <dt>Quantity</dt>
                    <dd>{material.quantity}</dd>
                  </>
                );
              })}
            </dl>
          </dd>
        </dl>
      );
    default:
      return <p>TODO: Implement component for obtain type '{obtainType}'.</p>;
  }
}
