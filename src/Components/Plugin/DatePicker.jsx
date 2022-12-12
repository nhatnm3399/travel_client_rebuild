import React from 'react'
import DatePicker from "react-datepicker";
import "./DatePicker.sass"
import moment from "moment"

import "react-datepicker/dist/react-datepicker.css";

const DatePickerPlugin = ({setOpen, startDate, endDate, setStartDate, setEndDate}) => {
  
  const onChange = (dates) => {
    const [start, end] = dates;
    console.log(dates)
    setStartDate(start);
    setEndDate(end);
    if(end !== null) {
      setOpen(()=> false)
    }
  };
  return (
    <div className={"plugin-date-picker"}>
      <DatePicker 
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        inline
        monthsShown={2}
        selectsRange
      >
        <div style={{width: "100%", textAlign: "center"}}>{startDate ? moment(startDate).format("ddd[, ]MMM[ ]D") : "Check in"} - {endDate ? moment(endDate).format("ddd[, ]MMM[ ]D") : "Check out"}</div>
      </DatePicker>
    </div>
  )
}

export default DatePickerPlugin