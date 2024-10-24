import React from "react";
import moment from "moment";
import './Time.css';

function Time({ time }) { // Destructure 'time' from props
  const videotime = moment()?.startOf('day')?.seconds(time)?.format('HH:mm:ss');
  return (
    <>
      <div className="time_show">
        <span className="span_time">{videotime}</span>
      </div>
    </>
  );
}

export default Time;
