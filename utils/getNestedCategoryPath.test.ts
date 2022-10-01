import getNestedCategoryPath from "./getNestedCategoryPath";

// TODO Update magic strings with enum values
describe("getNestedCategoryPath()", () => {
  it("works with a category with only children", () => {
    const selectedCategory = "Fashion";

    const actual = getNestedCategoryPath(selectedCategory);
    const expected = "Fashion-Set";

    expect(actual).toEqual(expected);
  });

  it("works with a category with only a parent", () => {
    const selectedCategory = "Hairstyle";

    const actual = getNestedCategoryPath(selectedCategory);
    const expected = "Fashion-Hairstyle";

    expect(actual).toEqual(expected);
  });

  it("works with a category with a parent and children", () => {
    const selectedCategory = "Accessory";

    const actual = getNestedCategoryPath(selectedCategory);
    const expected = "Fashion-Accessory-Hat";

    expect(actual).toEqual(expected);
  });

  it("works with a category with a parent and grandparent", () => {
    const selectedCategory = "Ring";

    const actual = getNestedCategoryPath(selectedCategory);
    const expected = "Fashion-Accessory-Ring";

    expect(actual).toEqual(expected);
  });
});
