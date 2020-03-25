import React from 'react';

const MonthPicker = (props) => {

    return (

        <div className="header-row">



{props.months.map((item, index) => (
    <div key={index} className={"month-label " + ((props.date.month==item.id)?' selected':null )}    onClick={()=>props.onSelectMonthClick(item.id)}>{item.title}</div>

                                                ))}


 
        </div>
    )
}
export default MonthPicker;