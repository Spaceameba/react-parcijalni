import React, { useState } from "react";
import Data from "./Data";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Search = () => {
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
      <Form>
        <Form.Group className="mb-3" controlId="formSearch">
          <Form.Label clasName="label">GitHub Username:</Form.Label>
          <br></br>
          <Form.Control
            type="text"
            placeholder="e.g. reduxjs"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button
          variant="dark"
          onClick={(e) => {
            fetchUser(e);
            // if (user) fetchData(e);
          }}
        >
          GO!
        </Button>
        <Data user={user} data={data} resetSearch={resetSearch} />
      </Form>
    </div>
  );
};

export default Search;
