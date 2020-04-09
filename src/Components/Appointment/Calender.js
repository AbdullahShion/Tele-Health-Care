import React, {useContext} from "react";
import Calendar  from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.css'
import { CalenderContext } from "../../App";

const ReactCalender = () => {
  const calenderData = useContext(CalenderContext)
  const onChange = date => calenderData.setDate(date)

  return (
    <div className="col-md-6 align-self-end pr-5 ">
        <div className="calender-area">
            <h3 className="text-uppercase col-12 mb-5">Appointment</h3>
            <Calendar
              onChange={onChange}
              value={calenderData.value}
            />
        </div>
    </div>
  );
};

export default ReactCalender;
