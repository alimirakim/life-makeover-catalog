import { Tag } from "../types/types";
import styles from "./Tag.module.scss";

const TAG_COLORS = {
  [Tag.homey]: "red",
  [Tag.fairytale]: "red",
};

export default function Tags({ tag }) {
  console.log({ tag: TAG_COLORS[tag.toLowerCase()] });
  return (
    <p
      className={styles.container}
      style={{
        background: `linear-gradient(170deg, ${
          TAG_COLORS[tag.toLowerCase()]
        } 0%, white 120%)`,
      }}
    >
      {tag}
    </p>
  );
}
