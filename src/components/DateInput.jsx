// src/components/DateInput.jsx

import React, { useState } from "react";

function DateInput({ date, startTime, endTime, onChange }) {
  const [localDate, setLocalDate] = useState(date);
  const [localStartTime, setLocalStartTime] = useState(startTime);
  const [localEndTime, setLocalEndTime] = useState(endTime);

  const handleChange = (type, value) => {
    if (type === "date") setLocalDate(value);
    if (type === "start") setLocalStartTime(value);
    if (type === "end") setLocalEndTime(value);
    
    onChange(
      type === "date" ? value : localDate,
      type === "start" ? value : localStartTime,
      type === "end" ? value : localEndTime
    );
  };

  return (
    <div>
      <input
        type="date"
        value={localDate}
        onChange={(e) => handleChange("date", e.target.value)}
      />
      <input
        type="time"
        value={localStartTime}
        onChange={(e) => handleChange("start", e.target.value)}
      />
      <input
        type="time"
        value={localEndTime}
        onChange={(e) => handleChange("end", e.target.value)}
      />
    </div>
  );
}

export default DateInput;

