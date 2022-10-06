import { startCase } from "lodash";
import Link from "next/link";
import { CATEGORY_TREE } from "../constants";
import { CatalogueCategory } from "../types/types";
import getNestedCategoryPath from "../utils/getNestedCategoryPath";
import styles from "./Tabs.module.scss";

interface TabsProps {
  categories: string[];
}

export default function Tabs({ categories }: TabsProps) {
  return (
    <nav>
      <TabRow categories={Object.values(CatalogueCategory)} />

      {categories
        .filter((category) => CATEGORY_TREE[category])
        .map((category) => {
          return <TabRow categories={CATEGORY_TREE[category]} />;
        })}
    </nav>
  );
}

function TabRow({ categories }: { categories: string[] }) {
  return (
    <ul className={styles.tabs}>
      {categories.map((category) => {
        return (
          <li key={category}>
            <Link href={getNestedCategoryPath(category)}>
              {startCase(category)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
