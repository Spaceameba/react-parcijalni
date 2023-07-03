import React from "react";

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
      {data && (
        <ul>
          {data.map((repository) => {
            return <li key={repository.id}>{repository.name}</li>;
          })}
        </ul>
      )}
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

export default Data;
