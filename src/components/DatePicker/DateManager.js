

import moment from 'moment-jalaali'

const months = [

    {
        id: 1,
        title: "فروردین",
        days: 31
    },
    {
        id: 2,
        title: "اردیبهشت",
        days: 31
    },
    {
        id: 3,
        title: "خرداد",
        days: 31
    },
    {
        id: 4,
        title: "تیر",
        days: 31
    },
    {
        id: 5,
        title: "مرداد",
        days: 31
    },
    {
        id: 6,
        title: "شهریور",
        days: 31
    },
    {
        id: 7,
        title: "مهر",
        days: 30
    },
    {
        id: 8,
        title: "آبان",
        days: 30
    },
    {
        id: 9,
        title: "آذر",
        days: 30
    },
    {
        id: 10,
        title: "دی",
        days: 30
    },
    {
        id: 11,
        title: "بهمن",
        days: 30
    },
    {
        id: 12,
        title: "اسفند",
        days: 30
    }

];


const WEEK_DAY_PERSIAN = {
    0: 'یکشنبه',
    1: 'دوشنبه',
    2: 'سه‌شنبه',
    3: 'چهارشنبه',
    4: 'پنجشنبه',
    5: 'جمعه',
    6: 'شنبه',
}






export default function DateManager() {

    return {
        convertDateToPersian: function (date) {
            
            
                    return date? moment(date, 'YYYY-MM-DD').format('jYYYY/jMM/jDD') : null

           
        },
        getMonths: function () {
            
            
            return months;

   
},
        beautifyDate: function (date) {
            
            
            return date? date.replace(/-/g,'/'): null
        
        },
        getPersianWeekDay: function (day){
            return WEEK_DAY_PERSIAN[day]
        }
    }
}
