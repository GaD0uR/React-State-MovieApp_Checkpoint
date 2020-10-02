import React from "react";
import AddMovie from "./AddMovie";
import "./header.css";

const Header = ({
  setNameSearch,
  ratingSearch,
  setRatingSearch,
  addNewMovie,
}) => {
  return (
    <div className="nav-header">
      <div className="header-logo">
        <span>Gadour TV</span>
      </div>
      <div className="search-content">
        <input
          type="text"
          placeholder="Movie name..."
          className="form-control"
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <i className="fa fa-search"></i>
      </div>
      <AddMovie addNewMovie={addNewMovie}></AddMovie>
    </div>
  );
};

export default Header;
