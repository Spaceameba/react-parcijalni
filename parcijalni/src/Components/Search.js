import React, { useState } from "react";

const Form = (setSearch) => {
  return (
    <div>
      <form>
        <label>GitHub Username:</label>
        <input
          type="text"
          placeholder="e.g. reduxjs"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
      <button>GO!</button>
    </div>
  );
};

export default Form;
