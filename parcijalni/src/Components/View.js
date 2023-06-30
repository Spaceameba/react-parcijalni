import React from "react";
import Search from "./Search";
import Data from "./Data";

const View = ({ data, setData, setSearch, search }) => {
  return (
    <>
      <Search setSearch={setSearch} />
      <Data search={search} setData={setData} />
      <ul>
        <li></li>
      </ul>
    </>
  );
};

export default View;
