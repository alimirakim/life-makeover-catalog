import { startCase } from "lodash";
import Link from "next/link";
import { CATEGORY_TREE, LINKED_CATEGORY_MAP } from "../constants";
import { CatalogueCategory } from "../types/types";
import getNestedCategoryPath from "../utils/getNestedCategoryPath";
import styles from "./Tabs.module.scss";

interface TabsProps {
  categories: string[];
}

/**
 * TODO Add 'all' tabs
 * TODO Should I reorganize categories to separate sets from items?
 * Set subcategories... by obtain method? stars?
 *  pavilion, event, craft, exchange, premium, other
 * @returns
 */
export default function Tabs({ categories }: TabsProps) {
  return (
    <nav>
      <TabRow categories={Object.values(CatalogueCategory)} hasAllTab={false} />

      {categories
        .filter((category) => CATEGORY_TREE[category])
        .map((category) => {
          return <TabRow categories={CATEGORY_TREE[category]} />;
        })}
    </nav>
  );
}

function TabRow({
  categories,
  hasAllTab = true,
}: {
  categories: string[];
  hasAllTab?: boolean;
}) {
  return (
    <ul className={styles.tabs}>
      {hasAllTab && (
        <li>
          <Link href={`/${LINKED_CATEGORY_MAP[categories[0]].parent}-all`}>
            All
          </Link>
        </li>
      )}
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
