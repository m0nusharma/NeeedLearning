import React from "react";
import "./Body.css";
import ImageOne from "../../assets/vactor image.png";
import CardCustm from "../../Componemts/Button/CardCustm/CardCustm";
import BigCard from "../../Screen/BigCard/BigCard";

const Body = () => {
  return (
    <div className=" row m-0 ">
      <div className="col-md-5">
        <div className="row ">
          <div className="col-md-4 col-xs-12 mb-2 ">
            <CardCustm image={ImageOne} cstmStyle="CardOne" title="Cloud" />
          </div>
          <div className="col-md-8 col-xs-12 mb-2">
            <CardCustm image={ImageOne} cstmStyle="CardTwo" title="Analytics" />
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-12 ">
            <CardCustm
              image={ImageOne}
              cstmStyle="CardThree"
              title="CRM/ERP/ECM/Full Stack / ETL Solutions"
            />
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <BigCard title="Get Free Quotation & No Consultation Fee!" />
      </div>
      <div className="col-md-2 ">
        <div className="vstack h-100 gap-3">
          <div className="card CardLest h-50 middle">
          <h6 className="mb-0 fw-bolder"> UI/UX Design</h6>
          </div>
          <div className="card CardLestTwo  h-50 middle">
          <h6 className="mb-0 fw-bolder"> Web/Mobile</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
