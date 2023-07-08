import React from "react";

const CardCustm = ({image,title,cstmStyle}) => {
  return (
    <div className={`${cstmStyle} position-relative middle p-2 card`}>
      <img
        className="imageImport position-absolute top-0 h-50"
        src={image}
        alt=""
      />
      <p className="m-0">{title}</p>
    </div>
  );
};

export default CardCustm;
