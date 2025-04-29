import React from "react";

const SearchAndSort = ({ setSearch, setSortBy }) => {
  return (
    <div className="space-y-3">
      <input
        placeholder="Search by name or description..."
        onChange={(e) => setSearch(e.target.value)}
        className="input w-full"
      />
      <div className="flex flex-wrap gap-3">
        <button onClick={() => setSortBy("name")} className="sort-btn">Sort by Name</button>
        <button onClick={() => setSortBy("category")} className="sort-btn">Sort by Category</button>
        <button onClick={() => setSortBy("amount")} className="sort-btn">Sort by Amount</button>
        <button onClick={() => setSortBy("date")} className="sort-btn">Sort by Date</button>
      </div>
    </div>
  );
};

export default SearchAndSort;
