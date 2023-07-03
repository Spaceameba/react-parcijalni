import React, { useState } from "react";
import Data from "./Data";

const Form = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [user, setUser] = useState();

  function fetchUser(e) {
    e.preventDefault();
    if (search) {
      const url = `https://api.github.com/users/${search}`;
      fetch(url)
        .then((response) => response.json())
        .then((user) => setUser(user));
      setSearch("");
    }
  }

  function resetSearch() {
    setUser("");
    setData([]);
  }

  // function fetchData(e) {
  //   e.preventDefault();
  //   if (user) {
  //     const url = `${user.repos_url}`;
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((repo) => setData(repo));
  //   } else {
  //     setData();
  //   }
  // }

  return (
    <div>
      <form>
        <label>GitHub Username:</label>
        <br></br>
        <input
          type="text"
          placeholder="e.g. reduxjs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>

      <button
        onClick={(e) => {
          fetchUser(e);
          // if (user) fetchData(e);
        }}
      >
        GO!
      </button>
      <Data user={user} data={data} resetSearch={resetSearch} />
    </div>
  );
};

export default Form;
