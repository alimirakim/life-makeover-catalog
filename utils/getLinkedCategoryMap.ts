/**
 * A normalized map of category keys with values containing their supercategory parent and subcategory firstChild.
 * @param categoriesMap Keys are categories. Values are subcategories.
 * @returns linkedCategoryMap
 */
export default function getLinkedCategoryMap(categoriesMap: {
  [category: string]: string[];
}) {
  const linkedCategories: {
    [category: string]: { parent?: string; firstChild?: string };
  } = {};

  Object.keys(categoriesMap).forEach((category) => {
    if (linkedCategories[category]) {
      linkedCategories[category].firstChild = categoriesMap[category][0];
    } else {
      linkedCategories[category] = { firstChild: categoriesMap[category][0] };
    }

    categoriesMap[category].forEach((subcategory) => {
      if (linkedCategories[subcategory]) {
        linkedCategories[subcategory].parent = category;
      } else {
        linkedCategories[subcategory] = { parent: category };
      }

      const categoryChildren = categoriesMap[subcategory];

      if (categoryChildren) {
        linkedCategories[subcategory].firstChild = categoryChildren[0];
      }
    });
  });

  return linkedCategories;
}

getLinkedCategoryMap.toString = "getLinkedCategoryMap";
