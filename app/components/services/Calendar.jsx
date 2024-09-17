import React, { useState } from 'react';

const date = new Date();


const Calendar = ({ 
  weekdays = [
    "Sun", 
    "Mon", 
    "Tue", 
    "Wed", 
    "Thu", 
    "Fri", 
    "Sat"
  ],
  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  Day = date.getDate(),
  today = new Date(),
  className,
  id,
  Data,
  Offweekdays,
  Offdays,
  EventState,
  value,
  name, 
  ...attrs 
}) => {


  const [pastClick, setPastClick] = useState(null)

  const [selectedDate, setSelectedDate] = useState()
  
  const [selectedDay, setSelectedDay] = useState(date.getDate())
  const [currentMonth, setCurrentMonth] = useState(date.getMonth())
  const [currentYear, setCurrentYear] = useState(date.getFullYear())
  //console.log(currentMonth+1, currentYear, date)

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayMonth = new Date(currentYear, currentMonth, 1).getDay()

  const prevMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1))
    setCurrentYear((prevYear) => (currentMonth === 0 ? prevYear - 1 : prevYear))

    var day = document.getElementById(pastClick);
    day.classList.remove("selected");
  }
  const nextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1))
    setCurrentYear((prevYear) => (currentMonth === 11 ? prevYear + 1 : prevYear))

    var day = document.getElementById(pastClick);
    day.classList.remove("selected");
  }

  function selectDate(newDay){
    setSelectedDay(newDay)

    const clickedDate = new Date(currentYear, currentMonth, newDay)
    setSelectedDate(clickedDate)
    value = clickedDate;
    
  }

  function Click(id){
    //Past Click Check
    if(pastClick === null || pastClick === id){
        
    }else{
        var day = document.getElementById(pastClick);
        day.classList.remove("selected");

        //console.log("unselect - "+ pastClick)
    }

    //if the past click was the same as the current one
    if(pastClick != id){
        var day = document.getElementById(id);
        day.classList.add("selected");

        //console.log("Select - "+ id)
    }else{
        return;
    }
    setPastClick(id);
    //console.log(pastClick);
    
  }

  function filterByBookedDate(arr, month, day, year) { //checking if the current date is booked by a client
    
    const filter = arr.filter(item => (
      item.BookedDate.Month === month &&
      item.BookedDate.Day === day &&
      item.BookedDate.Year === year
    ));
    //console.log(month, day, year, filter)

    /*if (!filter.length){
      console.log("No Date was Booked Today");
    } else {
      console.log("There is a meeting for this day")
    }
    */
    return filter
  }

  function filterByWeekDay(month, day, year) { // checking if the current date wekday is avaliable for booking
    // Create a Date object
    const date = new Date(year, month - 1, day); // month - 1 because months are 0-indexed in JS
    // Get the day of the week as an integer (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = date.getDay();
    // Map the integer to the corresponding weekday name
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const value = weekdays[dayOfWeek];

    const result = Offweekdays[0].weekDays[value]
    //console.log(month, day, year, dayOfWeek, result)

    return result;
  }

  function filterByOffDay(month, day, year){

    const filter = Offdays.filter(item => (
      item.Date.month === month &&
      item.Date.day === day &&
      item.Date.year === year
    ));

    return filter
  }
  

    return (
      <div className="group">
        <div className='calendar-dropdown'>
          <div className='header'>
            <a onClick={prevMonth}></a>
            <h4>{months[currentMonth]} {currentYear}</h4>
            <a onClick={nextMonth}></a>
          </div>

          <div className='date-toggle'>{currentMonth+1} - {selectedDay} - {currentYear}</div>


          <div className='week-days'>
            {weekdays.map((weekdays) => (
              <span className='underline' key={weekdays}>{weekdays}</span>
            ))}
          </div>


          <div className='month-days'>
            {[...Array(firstDayMonth).keys()].map((_, index) => (
              <div key={`empty-${index}`}></div>
            ))}

            {[...Array(daysInMonth).keys()].map((day) => (
              <>
                { new Date(`${currentMonth+1}/${day+1}/${currentYear}`) > today.setHours(0,0,0,0)? (
                  <>
                    { !filterByWeekDay(currentMonth+1, day+1, currentYear) || filterByOffDay(currentMonth+1, day+1, currentYear).length ?(
                      <>
                        <div className='month-day' key={day+1} id={id+day+1} onClick={() => {}}>{day+1}</div>
                      </>
                    ):(
                      <>
                        { !filterByBookedDate(Data, currentMonth+1, day+1, currentYear).length ?(
                          <div className='month-day current' key={day+1} id={id+day+1} onClick={() => { selectDate(day+1), filterByBookedDate(Data, currentMonth+1, day+1, currentYear), Click(id+day+1)}}>{day+1}</div>
                        ):(
                          <div className='month-day current meeting' key={day+1} id={id+day+1} onClick={() => {}}>{day+1}</div>
                        )}
                      </>
                    )}
                    
                  </>
                  
                ) : (
                  <>
                    { !filterByBookedDate(Data, currentMonth+1, day+1, currentYear).length ?(
                      <div className='month-day' key={day+1} onClick={() => {}}>{day+1}</div>
                    ):(
                      <div className='month-day meeting' key={day+1} onClick={() => {}}>{day+1}</div>
                    )}
                  </>
                )}
              </>
            ))}
          </div>

        </div>
        <input
          name={id}
          id="dateValue"
          value={selectedDate}
        />
      </div>
    );
  };

export default Calendar;