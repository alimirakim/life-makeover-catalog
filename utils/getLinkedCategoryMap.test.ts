import getLinkedCategoryMap from "./getLinkedCategoryMap";

describe("getLinkedCategoryMap()", () => {
  it("returns a normalized map of category keys with object values for the parent and firstChild.", () => {
    const categoriesMap = {
      animal: ["dog", "rat", "squirrel"],
      dog: ["havanese", "maltese", "poodle"],
      plant: ["grass", "lily"],
    };

    const actual = getLinkedCategoryMap(categoriesMap);
    const expected = {
      animal: { firstChild: "dog" },
      dog: { parent: "animal", firstChild: "havanese" },
      plant: { firstChild: "grass" },
      rat: { parent: "animal" },
      squirrel: { parent: "animal" },
      havanese: { parent: "dog" },
      maltese: { parent: "dog" },
      poodle: { parent: "dog" },
      grass: { parent: "plant" },
      lily: { parent: "plant" },
    };

    expect(actual).toEqual(expected);
  });
});
