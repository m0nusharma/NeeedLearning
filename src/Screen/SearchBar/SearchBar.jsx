import React from "react";
import "./SearchBar.css";
import Button from "../../Componemts/Button/Button";

const SearchBar = () => {
  return (
    <div className="parentSearch center">
    <div className=" d-flex searchBr rounded-5 ">
    <i className="fa-solid fa-magnifying-glass text-dark m-3"></i>
      <input
        className="form-control border-0 rounded-5 align-item-center"
        placeholder="Looking For an IT Services"
      />
      <Button item="Search"/>
    </div>
   
    </div>
  );
};

export default SearchBar;
