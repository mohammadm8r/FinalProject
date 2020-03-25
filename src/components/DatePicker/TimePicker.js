import React from 'react';





class TimePicker extends React.Component {


    constructor(props) {
        super(props);


        this.state = {
            hour: 12,
            minute: 45
        };



    }



    setHour = (hour) => {

        this.setState({ hour: hour })

    }


    setMinutes = (minute) => {
        this.setState({ minute: minute })

    }

    render() {


        var minutes = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 0];

        var hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        return (




            <div className="datetimepicker" >


                <div className="datetimepicker-section datetimepicker-date-time" >
                    <div className="time-circle-outer">


                        <div className="time-circle-center"><img src="/landing-page/dist/img/og-logo.png" /></div>


                        <div className={'time-circle-hand time-circle-hand-large deg-' + (this.state.minute / 5)}></div>

                        {

                            minutes.map((item, index) => (

                                <div className={'time' + ' time-' + (index + 1) + (this.state.minute == item ? ' selected' : '')}
                                    onClick={() => this.setMinutes(item)} >{item}</div>

                            ))


                        }


                        <div className="time-circle-inner">

                            <div className={'time-circle-hand  deg-' + (this.state.hour)}></div>


                            {
                                hours.map((item, index) => (
                                    <div className={'time' + ' time-' + (index + 1) + (this.state.hour == item ? ' selected' : '')} onClick={() => this.setHour(item)} >{item}</div>

                                ))}


                        </div>

                    </div> </div>
            </div>

        )




    }



}

export default TimePicker;