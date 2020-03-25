import React from "react";
import Range from "./General";

const DayPicker = props => {
  return (
    <div>
      <div className="header header-row-days">
        <div className="header-row-cell">ش</div>
        <div className="header-row-cell">ی</div>
        <div className="header-row-cell">د</div>
        <div className="header-row-cell">س</div>
        <div className="header-row-cell">چ</div>
        <div className="header-row-cell">پ</div>
        <div className="header-row-cell">ج</div>
      </div>

      <div className="header-row">
        {(() => {
          let row = [];

          for (var i = 1; i <= props.firstDayOfMonthWeekDay; i++) {
            const j =
              props.getDaysOfLastMonth() - props.firstDayOfMonthWeekDay + i;
            row.push(
              <div
                key={i}
                className="day-tag day-tag-last-month"
                onClick={() => props.onSelectLastMonthDayClick(j)}
              >
                {props.getDaysOfLastMonth() - props.firstDayOfMonthWeekDay + i}
              </div>
            );
          }
          return row;
        })()}

        {Range(1, props.daysOfMonth + 1).map(x => (
          <div
            className={
              "day-tag " +
              (x == "4" && props.date.month == "6" ? " selected" : null)
            }
            key={x}
            onClick={() => props.onSelectDayClick(x)}
          >
            {x}
          </div>
        ))}

        {(() => {
          let row = [];
          for (
            var i = 0;
            i < 14 - ((props.daysOfMonth + props.firstDayOfMonthWeekDay) % 7);
            i++
          ) {
            const j = i;
            row.push(
              <div
                key={i + 31}
                onClick={() => props.onSelectNextMonthDayClick(j + 1)}
                className="day-tag day-tag-next-month"
              >
                {i + 1}
              </div>
            );
          }
          return row;
        })()}
      </div>
    </div>
  );
};
export default DayPicker;
