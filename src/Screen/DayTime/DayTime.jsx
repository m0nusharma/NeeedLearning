import React from "react";
import "./DayTime.css";
import DateButton from "../BigCard/DateButton/DateButton";

const DayTime = ({}) => {
  return (
    <div className="mb-3">
      <p>11 july 2023</p>
      <div className="d-flex gap-2 flex-wrap">
      <DateButton title="09:30 PM"/>
      <DateButton title="09:30 PM"/>
      <DateButton title="09:30 PM"/>
      <DateButton title="09:30 PM"/>
      <DateButton title="09:30 PM"/>
      <DateButton title="09:30 PM"/>
      </div>
    </div>
  );
};

export default DayTime;
