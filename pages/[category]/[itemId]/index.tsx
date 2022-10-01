import Head from "next/head";
import { useRouter } from "next/router";
import prisma from "../../../prisma/prisma";

export async function getServerSideProps({ params }) {
  const itemId = params.itemId;

  const item = await prisma.item.findFirst({
    where: {
      id: itemId,
    },
  });

  return {
    props: {
      item,
    },
  };
}

export default function ItemPage({ item }) {
  const router = useRouter();
  const { itemId } = router.query;
  console.log({ router, itemId, item });

  return (
    <>
      <Head>
        <title>{item.name}</title>
      </Head>

      <header></header>

      <main>
        <h1>{item.name}</h1>
      </main>
    </>
  );
}
