
import React from 'react';
import Range from './General';

const YearPicker = (props) => {

    return (

        <div className="header-row">



            {
                Range(props.startYear - 12, props.startYear + 4).map(x =>
                    <div key={x} className={"year-label " + ((props.date.year == x) ? ' selected' : null)} onClick={() => props.onSelectYearClick(x)}>{x}</div>
                )
            }





        </div>
    )
}
export default YearPicker;