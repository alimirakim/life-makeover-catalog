import Image from "next/image";
import Link from "next/link";
import { Item } from "../types/interfaces";
import HeartMeter from "./HeartMeter";
import ObtainedButton from "./ObtainedButton";
import WishlistButton from "./WishlistButton";

import styles from "./ItemThumbnail.module.scss";
import LockButton from "./LockButton";

interface ItemThumbnailProps {
  catalogItem: Item;
  categories: string[];
}

export default function ItemThumbnail({
  catalogItem,
  categories,
}: ItemThumbnailProps) {
  const itemPageUrl = `/${categories[0]}-${categories[categories.length - 1]}/${
    catalogItem.id
  }`;

  return (
    <article className={styles.container}>
      <div className={styles.buttons}>
        <ObtainedButton />
        <LockButton />
        <WishlistButton />
      </div>
      <HeartMeter />
      <Link href={itemPageUrl}>
        <div>
          <Image
            src={`/images/preview__${catalogItem.id}.jpg`}
            width={200}
            height={300}
            alt={`${catalogItem.category} item "${catalogItem.name}"`}
            title={`${catalogItem.category} item - ${catalogItem.name}`}
            className={styles.image}
          />
          <h3 className={styles.title}>{catalogItem.name}</h3>
        </div>
      </Link>
    </article>
  );
}
