import { useState } from "react";

enum ViewMode {
  Tiles = "Tiles",
  Posters = "Posters",
  List = "List",
}

enum SortType {
  Latest = "Latest",
  Alphabetical = "Alphabetical",
  StarRank = "Star Rank",
  Obtained = "Obtained",
  LikeRating = "Like Rating",
  Popularity = "Popularity",
}

export default function CatalogListSettings() {
  return (
    <nav>
      <hr />
      {/* <ViewModeSettings /> */}
      <SortSettings />
      <FilterList />
      <hr />
    </nav>
  );
}

function ViewModeSettings() {
  const [viewMode, setViewMode] = useState("tiles"); // tiles, posters, list

  return (
    <div>
      View mode:
      {Object.values(ViewMode).map((viewMode) => {
        return (
          <button key={viewMode} onClick={() => setViewMode(viewMode)}>
            {viewMode}
          </button>
        );
      })}
    </div>
  );
}

function SortSettings() {
  const [selectedSort, setSelectedSort] = useState(SortType.Latest);
  const [isReverseSort, setIsReverseSort] = useState(false);

  return (
    <div>
      <button onClick={() => setIsReverseSort(!isReverseSort)}>
        {isReverseSort ? "Desc" : "Asc"}
      </button>{" "}
      Sort by:{" "}
      {Object.values(SortType).map((sortBy) => {
        return (
          <button
            key={sortBy}
            onClick={() => setSelectedSort(sortBy)}
            className={sortBy === selectedSort && "selected"}
          >
            {sortBy}
          </button>
        );
      })}
    </div>
  );
}

function FilterList() {
  const [filters, setFilters] = useState([]);

  return (
    <div>
      Filter by:{" "}
      {filters.map((filter) => (
        <div key={filter}>
          {filter}{" "}
          <button onClick={() => console.log("remove filter")}>X</button>
        </div>
      ))}
      <button onClick={() => console.log("open filter popup")}>+</button>
    </div>
  );
}
