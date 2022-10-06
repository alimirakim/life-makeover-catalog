import Image from "next/image";
import Link from "next/link";
import { Item } from "../types/interfaces";
import HeartMeter from "./HeartMeter";
import ObtainedButton from "./ObtainedButton";
import WishlistButton from "./WishlistButton";

interface ItemThumbnailProps {
  catalogItem: Item;
  categories: string[];
}

export default function ItemThumbnail({
  catalogItem,
  categories,
}: ItemThumbnailProps) {
  return (
    <section
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
          href={`/${categories[0]}-${categories[categories.length - 1]}/${
            catalogItem.id
          }`}
        >
          {catalogItem.name}
        </Link>
      </button>
      {console.log({
        img: `/images/thumbnail__${catalogItem.id}.jpg`,
      })}
      <Image
        src={`/images/thumbnail__${catalogItem.id}.jpg`}
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
}
