import { Style, Tag } from "../types/types";

export default function FilterMenu({ filters, setFilters }) {
  const filterCategories = {
    obtainStatus: ["obtained", "unobtained"],
    wishlist: ["wishlisted", "not wishlisted"],
    like: [5, 4, 3, 2, 1, 0],
    popularity: [5, 4, 3, 2, 1, 0],
    starRank: [6, 4, 3, 2],
    style: Object.values(Style),
    tag: Object.values(Tag),
    pavilion: ["nirvana", "snow stuff"],
    brand: ["shimmer", "f"],
    obtainType: ["craft", "lightchase"],
  };

  return (
    <form>
      <h2>Filter by:</h2>
      {Object.keys(filterCategories).map((filterCategory) => {
        return (
          <fieldset key={filterCategory}>
            <legend>{filterCategory}</legend>
            {filterCategories[filterCategory].map((filterOption) => {
              return (
                <button
                  key={filterOption}
                  onClick={() => console.log("add/remove filter")}
                >
                  {filterOption}
                </button>
              );
            })}
          </fieldset>
        );
      })}
    </form>
  );
}
