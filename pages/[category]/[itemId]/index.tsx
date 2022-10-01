import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import startCase from "lodash/startCase";
import prisma from "../../../prisma/prisma";
import getNestedCategoryPath from "../../../utils/getNestedCategoryPath";
import { FashionCategory } from "../../../types/types";
import HeaderBar from "../../../components/HeaderBar/HeaderBar";

export async function getServerSideProps({ params }) {
  const itemId = params.itemId;
  let item;

  if (itemId.split("__")[1] === FashionCategory.set) {
    item = await prisma.set.findFirst({
      where: {
        id: itemId,
      },
      include: {
        items: true,
      },
    });
  } else {
    item = await prisma.item.findFirst({
      where: {
        id: itemId,
      },
      include: {
        set: true,
      },
    });
  }

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

  const isSet = !item.category;

  return (
    <>
      <Head>
        <title>{item.name}</title>
      </Head>

      <header>
        <HeaderBar
          title={`${item.name} [${isSet ? "Set" : item.category}] ${getStars(
            item.starRank
          )}`}
        />
        {item.set ? (
          <small>
            Part of set{" "}
            <Link
              href={`/${getNestedCategoryPath(FashionCategory.set)}/${
                item.setId
              }`}
            >{`"${item.set.name}"`}</Link>
          </small>
        ) : (
          <small>Standalone item</small>
        )}
      </header>

      <main>
        <Image src="/images/" height={200} width={100} alt={item.name} />

        {!isSet && (
          <>
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
          </>
        )}

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

function getStars(starRank: number) {
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
                const [_, itemCategory, itemName] = material.itemId.split("__");

                return (
                  <>
                    <dt>Item</dt>
                    <dd>
                      <Link href={getNestedCategoryPath(itemCategory)}>
                        {startCase(itemName)}
                      </Link>
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
