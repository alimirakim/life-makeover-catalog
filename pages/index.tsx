import Link from "next/link";
import { CatalogueCategory } from "../types/types";
import getNestedCategoryPath from "../utils/getNestedCategoryPath";

const DEFAULT_SUPERCATEGORY = CatalogueCategory.fashion;

export default function Home() {
  return (
    <main>
      Go to{" "}
      <Link
        href="/[category]"
        as={getNestedCategoryPath(DEFAULT_SUPERCATEGORY)}
      >
        catalog
      </Link>
      !
    </main>
  );
}
