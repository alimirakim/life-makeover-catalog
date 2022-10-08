import Image from "next/image";
import Link from "next/link";
import { Item } from "../types/interfaces";

interface ItemPreviewProps {
  catalogItem: Item;
}
/**
 * Maybe have this be embed?
 * @param props.catalogItem
 * @returns
 */
export default function ItemPreview({ catalogItem }: ItemPreviewProps) {
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
        {/* <ObtainedButton />
          <WishlistButton />
          <HeartMeter />
          <PaletteButtons /> */}
      </form>
      <Image
        src={`/images/${catalogItem.id}`}
        height={200}
        width={200}
        alt="item preview image"
      />
      <hr />
      <h3>Obtain Method</h3>
      TBA
      <h4>Gallery</h4>
      {catalogItem.gallery?.map((image) => {
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
