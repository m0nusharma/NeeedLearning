import React from "react";
import "./App.css";
import Navigation from "./Screen/Navigation/Navigation";
import Text from "./Screen/Dashboard/Text/Text";
import SearchBar from "./Screen/SearchBar/SearchBar";
import Body from "./Screen/Body/Body";
import bg from "./assets/backgrond.svg";
import MoreInfo from './Screen/MoreInfo/MoreInfo'
import LeftHeading from './Screen/LeftHeading/LeftHeading'
import CardListing from './Screen/CardListing/CardListing'
import MiniCard from './Screen/MiniCard/MiniCard'
import DateTime from './Screen/Date/DateTime'
import DayTime from "./Screen/DayTime/DayTime";


const App = () => {
  return (
    <div className="">
      <img src={bg} alt="bg" className="bg" />
      <div className="row m-0 ">
        <div className="col-lg-9 p-0">
          <Navigation
            className="float-end"
            title="Check Website"
            titletwo="clients"
          />
          <div className="container px-5">
            <div className=" text-center">
              <Text />
              <SearchBar />
            </div>
            <br /> <br />
            <Body />
          </div>
        </div>
        <div className="LeftSideBar col-lg-3 p-0  overflow-auto">
        <LeftHeading />
        <div className="px-5">
        <CardListing />
        <MiniCard />
        <DateTime />
        <DayTime />                 
        <DayTime />                 
        <DayTime />                 
        <DayTime />                 
        <DayTime />                 
        <DayTime /> 
        </div>                
        </div>
      </div>
    </div>
  );
};

export default App;
