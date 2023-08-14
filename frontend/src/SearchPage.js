import React from "react";
import SearchBox from "./searchbox/SearchBox";

const SearchPage = () => {
  const handleSearch = (query) => {
    // 検索処理を実行
    console.log("検索クエリ:", query);
  };

  return (
    <div className="main-content">
      <h1>検索</h1>
      <SearchBox onSearch={handleSearch} />
    </div>
  );
};

export default SearchPage;
