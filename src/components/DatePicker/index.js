import React from "react";

import MonthPicker from "./MonthPicker";
import moment from "moment-jalaali";

import DayPicker from "./DayPicker";
import YearPicker from "./YearPicker";
import DateManager from "./DateManager";
import "./style.scss";

const months = DateManager().getMonths();

class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    var todayDate = new Date();
    todayDate = moment(
      todayDate.getFullYear() +
        "/" +
        (todayDate.getMonth() + 1) +
        "/" +
        todayDate.getDate()
    );

    this.state = {
      mode: props.mode == "birthdate" ? "year" : "day",
      day: props.date && props.date.day ? props.date.day : todayDate.jDate(),
      month:
        props.date && props.date.month
          ? props.date.month
          : todayDate.jMonth() + 1,
      year: props.date && props.date.year ? props.date.year : todayDate.jYear(),
      firstDayOfMonthWeekDay: 0,
      startYear:
        props.mode == "birthdate"
          ? todayDate.jYear() - 20
          : todayDate.jYear() - 2,
      picker: "date"
    };
  }

  componentDidMount() {
    if (this.props.date) {
      this.setState(
        {
          day: this.props.date ? this.props.date.day : 1,
          month: this.props.date ? this.props.date.month : 1,
          year: this.props.date ? this.props.date.year : 1397
        },
        () => {
          this.computeMonthDaysArrangment();
        }
      );
    } else {
      this.computeMonthDaysArrangment();
    }
  }

  onMonthPickerClick = () => {
    this.setState({ mode: "month" });
  };

  onSelectMonthClick = month => {
    this.setState({ mode: "day", month: month, day: 1 }, () => {
      this.computeMonthDaysArrangment();
    });
  };

  onYearPickerClick = () => {
    this.setState({ mode: "year" });
  };

  onSelectYearClick = year => {
    this.setState({ mode: "month", year: year });
  };

  onSelectDayClick = day => {
    this.setState({ day: day }, () => {
      let { day, year, month } = this.state;
      this.props.handleGetDate({ year, month, day });
    });
  };

  onSelectNextMonthDayClick = day => {
    var month = this.state.month + 1;
    var year = this.state.year;
    if (month == 13) {
      month = 1;
      year += 1;
    }

    this.setState({ day: day, month: month, year: year }, () => {
      this.computeMonthDaysArrangment();
    });
  };
  onSelectLastMonthDayClick = day => {
    var month = this.state.month - 1;
    var year = this.state.year;
    if (month == 0) {
      month = 12;
      year -= 1;
    }

    this.setState({ day: day, month: month, year: year }, () => {
      this.computeMonthDaysArrangment();
    });
  };
  getDateString = () => {
    return this.state.year + "/" + this.state.month + "/" + this.state.day;
  };

  setDate = date => {
    this.setState({ year: date.year, month: date.month, day: date.day });
  };
  getDate = () => {
    return {
      year: this.state.year,
      month: this.state.month,
      day: this.state.day
    };
  };
  onNextClick = () => {
    var self = this;
    var mm = moment(this.getDateString(), "jYYYY/jMM/jDD");
    if (this.state.mode === "day") {
      mm.jMonth(mm.jMonth() + 1);
    } else if (this.state.mode === "month") {
      mm.jYear(mm.jYear() + 1);
    } else if (this.state.mode === "year") {
      this.setState({ startYear: this.state.startYear + 12 });
    }

    this.setState(
      {
        year: mm.jYear(),
        month: mm.jMonth() + 1,
        day: mm.jDate()
      },
      () => {
        this.computeMonthDaysArrangment();
      }
    );
  };

  computeMonthDaysArrangment = () => {
    this.getFirstDayOfMonthWeekDay();
  };

  onPrevClick = () => {
    var self = this;
    var mm = moment(this.getDateString(), "jYYYY/jMM/jDD");
    if (this.state.mode === "day") {
      mm.jMonth(mm.jMonth() - 1);
    } else if (this.state.mode === "month") {
      mm.jYear(mm.jYear() - 1);
    } else if (this.state.mode === "year") {
      this.setState({ startYear: this.state.startYear - 12 });
    }

    this.setState(
      {
        year: mm.jYear(),
        month: mm.jMonth() + 1,
        day: mm.jDate()
      },
      () => {
        this.computeMonthDaysArrangment();
      }
    );
  };

  isLeapYear = () => {
    return moment.jIsLeapYear(this.state.year);
  };

  getDayOfWeek = () => {
    var mm = moment(this.getDateString());
  };

  getFirstDayOfMonthWeekDay = () => {
    var mm = moment(this.getDateString(), "jYYYY/jMM/jDD");

    mm.jDate(1);

    this.setState({ firstDayOfMonthWeekDay: (mm.weekday() + 1) % 7 }, () => {});
  };

  onTodayClick = () => {
    var todayDate = new Date();

    todayDate = moment(
      todayDate.getFullYear() +
        "/" +
        (todayDate.getMonth() + 1) +
        "/" +
        todayDate.getDate()
    );

    this.setState(
      {
        year: todayDate.jYear(),
        month: todayDate.jMonth() + 1,
        day: todayDate.jDate()
      },
      () => {
        this.computeMonthDaysArrangment();
      }
    );
  };

  getLastDayOfMonthWeekDay = () => {
    var mm = moment(this.getDateString(), "jYYYY/jMM/jDD");

    mm.jDate(this.getDaysOfMonth());
  };

  getDaysOfMonth = () => {
    if (this.state.month != 12) {
      return months[this.state.month - 1].days;
    } else {
      if (this.isLeapYear()) return 30;
      else return 29;
    }

    return 31;
  };
  getDaysOfLastMonth = () => {
    var mm = moment(this.getDateString(), "jYYYY/jMM/jDD");

    mm.jMonth(mm.jMonth() - 1);

    if (mm.jMonth() != 11) {
      return months[mm.jMonth()].days;
    } else {
      if (moment.jIsLeapYear(mm.jYear())) return 30;
      else return 29;
    }

    return 31;
  };

  render() {
    return (
      <div className="BBDatePicker">
        <div className="datepicked">
          <div className="date day">{this.state.day}</div>
          <div className="date month">{months[this.state.month - 1].title}</div>
          <div className="date year">{this.state.year}</div>

          <div className="toolbox">
            <div className="pwt-btn-today" onClick={this.onTodayClick}>
              امروز
            </div>
          </div>
        </div>
        {this.state.picker === "date" && (
          <div className="datepicker-plot-area  datepicker-state-no-meridian  ">
            <div data-navigator="" className="datepicker-navigator">
              <div className="pwt-btn pwt-btn-prev" onClick={this.onNextClick}>
                &gt;
              </div>

              {this.state.mode === "day" && (
                <div
                  onClick={this.onMonthPickerClick}
                  className="pwt-btn pwt-btn-switch"
                >
                  {months[this.state.month - 1].title} {this.state.year}
                </div>
              )}

              {this.state.mode === "month" && (
                <div
                  onClick={this.onYearPickerClick}
                  className="pwt-btn pwt-btn-switch"
                >
                  {this.state.year}{" "}
                </div>
              )}

              {this.state.mode === "year" && (
                <div
                  onClick={this.onYearPickerClick}
                  className="pwt-btn pwt-btn-switch"
                >
                  انتخاب سال
                </div>
              )}

              <div className="pwt-btn pwt-btn-next" onClick={this.onPrevClick}>
                &lt;
              </div>
            </div>

            <div className="datepicker-grid-view">
              <div className="datepicker-day-view">
                <div className="month-grid-box">
                  {this.state.mode === "year" && (
                    <YearPicker
                      date={this.getDate()}
                      startYear={this.state.startYear}
                      onSelectYearClick={this.onSelectYearClick}
                    />
                  )}

                  {this.state.mode === "day" && (
                    <DayPicker
                      onSelectLastMonthDayClick={this.onSelectLastMonthDayClick}
                      getDaysOfLastMonth={this.getDaysOfLastMonth}
                      date={this.getDate()}
                      firstDayOfMonthWeekDay={this.state.firstDayOfMonthWeekDay}
                      onSelectDayClick={this.onSelectDayClick}
                      daysOfMonth={this.getDaysOfMonth()}
                      onSelectNextMonthDayClick={this.onSelectNextMonthDayClick}
                      months={months}
                    />
                  )}

                  {this.state.mode === "month" && (
                    <MonthPicker
                      date={this.getDate()}
                      onSelectMonthClick={this.onSelectMonthClick}
                      months={months}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <TimePicker></TimePicker> */}
      </div>
    );
  }
}
export default DatePicker;
