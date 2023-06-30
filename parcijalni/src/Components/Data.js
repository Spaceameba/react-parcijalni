import React from "react";

const Data = ({ user, data }) => {
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
      {/* {data.lenght > 0 && ()} */}
      {/* <ul>
        {data.map((repository) => {
          return <li key={repository.id}></li>;
        })}
      </ul> */}
    </>
  );
};

export default Data;
