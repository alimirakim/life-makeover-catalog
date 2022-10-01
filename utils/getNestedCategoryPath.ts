import { CATEGORY_TREE, LINKED_CATEGORY_MAP } from "../constants";

/**
 * TODO Test
 *
 * @param selectedCategory ex. The user clicks the 'Hairstyle' Category under 'Fashion'
 * @returns nestedCategoryPath - ex. 'fashion-hairstyle'
 */
export default function getNestedCategoryPath(selectedCategory: string) {
  let categoryPath = [selectedCategory];
  console.log({
    selectedCategory,
    linked: LINKED_CATEGORY_MAP[selectedCategory],
  });

  let currentParent = LINKED_CATEGORY_MAP[selectedCategory].parent;
  while (currentParent) {
    categoryPath.unshift(currentParent);
    currentParent = LINKED_CATEGORY_MAP[currentParent].parent;
  }

  let currentChild = LINKED_CATEGORY_MAP[selectedCategory].firstChild;
  while (currentChild) {
    categoryPath.push(currentChild);
    currentChild = LINKED_CATEGORY_MAP[currentChild].firstChild;
  }

  return categoryPath.join("-");
}
