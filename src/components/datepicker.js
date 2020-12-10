import React,{useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

 function Datepicker() {
    const [selectedDate,setSelectedDate]= useState(null)
    return (
        <div>
             <DatePicker
                   selected={selectedDate}
                   onChange={date=>setSelectedDate(date)}
                   dateFormat='dd/mm/yyyy'
                   filterDate={date=>date.getDay()!== 6 && date.getDay() !==0}
                   isclearable
                    showYearDropdown
                    showMonthDropdown
                    scrollableMonthYearDropdown
                   />
        </div>
    )
}

export default Datepicker;
