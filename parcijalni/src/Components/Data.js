import React from "react";
import PropTypes from "prop-types";

const Data = ({ resetSearch, user, data }) => {
  return (
    <>
      {user && (
        <div>
          <h1>{user.name}</h1>
          <img
            width={150}
            height={150}
            src={user.avatar_url}
            alt={user.name}
          ></img>
          <p>{user.location}</p>
          <p>{user.bio}</p>
        </div>
      )}
      <hr></hr>
      {/* {data && (
        <ul>
          {data.map((repository) => {
            return <li key={repository.id}>{repository.name}</li>;
          })}
        </ul>
      )} */}
      <button
        onClick={(e) => {
          resetSearch(e);
        }}
      >
        Reset
      </button>
    </>
  );
};

Data.propTypes = {
  resetSearch: PropTypes.func,
  user: PropTypes.string,
  data: PropTypes.array,
};

export default Data;
