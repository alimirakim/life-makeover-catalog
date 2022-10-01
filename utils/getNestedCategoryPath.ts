import { CATEGORY_TREE } from "../constants";

/**
 * TODO Test
 *
 * TODO Check if lodash has anything to help iterate through nested object layers to check
 * and construct full path only from the child without currentNestedCategoryPath.
 *
 * @param currentNestedCategoryPath ex. The current URL path is /fashion-accessory-ring
 * @param selectedCategory ex. The user clicks the 'Hairstyle' Category under 'Fashion'
 * @param selectedCategoryIndex ex. 0 for 'Fashion', 2 for 'Fashion/Accessory/Ring'
 * @returns nestedCategoryPath - ex. '/fashion-hairstyle'
 */
export default function getNestedCategoryPath(
  currentNestedCategoryPath: string,
  selectedCategory: string,
  selectedCategoryIndex: number
) {
  const currentNestedCategories = currentNestedCategoryPath.split("-");
  const newNestedCategories = [
    ...currentNestedCategories.slice(0, selectedCategoryIndex),
    selectedCategory,
  ];

  const hasChildren = CATEGORY_TREE[selectedCategory]?.length > 0;
  let categoriesPath = newNestedCategories.join("-");

  if (hasChildren) {
    const firstChild = CATEGORY_TREE[selectedCategory][0];
    categoriesPath += `-${firstChild}`;
  }

  return categoriesPath;
}
