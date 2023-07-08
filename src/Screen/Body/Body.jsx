import React from "react";
import "./Body.css";
import ImageOne from "../../assets/vactor image.png";
import CardCustm from "../../Componemts/Button/CardCustm/CardCustm";

const Body = () => {
  return (
    <div className=" row m-0 ">
      <div className="col-5">
        <div className="row ">
          <div className="col-sm-4 col-xs-12 ">
            <CardCustm image={ImageOne} cstmStyle="CardOne" title="Cloud"/>
          </div>
          <div className="col-sm-8 col-xs-12">
          <CardCustm image={ImageOne} cstmStyle="CardTwo" title="Analytics"/>

          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-12">
          <CardCustm image={ImageOne} cstmStyle="CardThree" title="CRM/ERP/ECM/Full Stack / ETL Solutions"/>

          </div>
        </div>
      </div>

      <div className="col-5">
      <CardCustm image={ImageOne} cstmStyle="CardMid h-100" title="CRM/ERP/ECM/Full Stack / ETL Solutions"/>

      </div>

      <div className="col-2">
        <div className="CardLest p-2 card ">hello</div>
        <div className="CardLest p-2 card mt-2 ">hello</div>
      </div>
    </div>
  );
};

export default Body;
