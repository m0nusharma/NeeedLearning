import React from "react";
import "./MiniCard.css";
import ImageOne from "../../assets/mini card one.png";
import Imagetwo from "../../assets/Mini image two.png";
import Imagethree from "../../assets/mini image three.png";

const MiniCard = () => {
  return (
    <div className="Mini p-2 row ">
      <div className=" MyCard  col-md-12  ">
        <div className="overflow-hidden card bg-dark text-light h-100">
          <p className="m-0 ">We are new Startup</p>
          <img src="{ImageOne}" alt=""/>
        </div>
      </div>
      <div className=" MyCard col-md-12 my-2   ">
        <div className="MyCardTwo overflow-hidden card text-light  h-100">
        <p className="m-0 ">We are Mid Level</p>
        <img src="{ImageTwo}" alt=""/>
        </div>
      </div>
      <div className=" MyCard col-md-12  ">
        <div className="overflow-hidden card bg-dark text-light h-100">
          <p className="m-0 ">We are a Big Company</p>
          <img src="{Imagethree}" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
