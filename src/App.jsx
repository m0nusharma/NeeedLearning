import React from "react";
import Navigation from "./Screen/Navigation/Navigation";
import Text from "./Screen/Dashboard/Text/Text";
import SearchBar from "./Screen/SearchBar/SearchBar";
import Body from "./Screen/Body/Body";

const App = () => {
  return (
    <div className="row">
      <div className="col-lg-9 p-0">
        <Navigation
          className="float-end"
          title="Check Website"
          titletwo="clients"
        />
        <div className=" text-center">
          <Text />
          <SearchBar />
        </div>
        <br/> <br/>
        <Body />
      </div>
      <div className="col-lg-3 bg-secondary">
      </div>
    </div>
  );
};

export default App;
