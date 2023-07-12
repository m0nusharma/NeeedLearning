import React from "react";
import "./BigCard.css";
import ImageBig from "../../assets/big Image one.png";

const BigCard = ({ title, Imagesize, BigCardStyle  }) => {
  return (
  <div className={`bigcard card h-100 position-relative ${BigCardStyle}`} >
      <h6 className="fw-bolder text-center "> {title}</h6>
      <img src={ImageBig} alt=""  className="mediaaa position-absolute bottom-0" style={{height:Imagesize}} />
      <br/>
    </div>
  );
};

export default BigCard;
