import React, { useEffect, useState } from 'react';
import DayPicker, { DateUtils, RangeModifier } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const CalenderMenu = () => {
  const [showCalender, setShowCalender] = useState(false);
  // const [range, setRange] = useState({
  //   from: undefined,
  //   to: undefined,
  // });

  // const { from, to } = range;
  // const modifiers = { start: from, end: to };

  // const handleDayClick = (day) => {
  //   const dateRange = DateUtils.addDayToRange(day, range);
  //   setRange(dateRange);
  // };

  return (
    <div className="flex flex-col flex-1 p-1 my-1 relative">
      <span className="text-sm leading-5 font-medium text-gray-700">Dates</span>
      <button
        onClick={() => setShowCalender(!showCalender)}
        className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-outsite-green focus:border-outsite-green sm:text-sm text-gray-500"
      >
        Check-in &#8594; Check-out
      </button>
      <div>
        <div
          className={
            !showCalender
              ? 'hidden'
              : 'absolute z-10 bg-white mt-2 border rounded '
          }
        >
          <DayPicker />
        </div>
      </div>
    </div>
  );
};

export default CalenderMenu;
