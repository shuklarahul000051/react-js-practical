import React, { useState } from 'react';
import moment from 'moment-timezone';
import jsonData from '../data/data.json';

export default function Weekday({ dayName, data, timezone, currWeek }) {

    // Get the current date for the given week offset
    const currentDate = moment().day(dayName).add(currWeek, 'weeks').tz(timezone);

    const isDateOlderThanToday = (date, timezone) => {
        // Create a moment object for the given date in the specified timezone
        const momentDate = moment.tz(date, timezone);
      
        // Get the current moment in the specified timezone
        const currentMoment = moment.tz(timezone);
      
        // Check if the date is before today
        return momentDate.isBefore(currentMoment, 'day');
    };

    // Creating an array for time intervals between 8 AM to 11 PM with half-hour differences
    let timeIntervalsArray = [];
    let isPastDay = isDateOlderThanToday(currentDate, timezone);

    console.log("isPastDaeee", isPastDay);

    for (let hour = 8; hour <= 23; hour++) {
        let ampm = hour < 12 ? 'AM' : 'PM';
        let displayHour = hour <= 12 ? hour : hour - 12;

        if (displayHour < 10) {
            displayHour = `0${displayHour}`;
        }

        // Creating a moment object in UTC for the given week offset
        const utcMoment = moment.utc().day(dayName).add(currWeek, 'weeks').set({ hour, minute: 0, second: 0 });

        // Converting the moment object to the selected timezone
        const localizedMoment = utcMoment.tz(timezone);

        // Displaying the time in the format you want
        const formattedTime = localizedMoment.format('hh:mm A');

        // Adding the current hour
        timeIntervalsArray.push(formattedTime);

        // Adding the half-hour mark if it's not 11:30 PM
        if (hour < 23) {
            // Creating a moment object for half-hour mark in UTC for the given week offset
            const utcHalfHourMoment = moment.utc().day(dayName).add(currWeek, 'weeks').set({ hour, minute: 30, second: 0 });

            // Converting the half-hour moment object to the selected timezone
            const localizedHalfHourMoment = utcHalfHourMoment.tz(timezone);

            // Displaying the half-hour mark in the format you want
            const formattedHalfHour = localizedHalfHourMoment.format('hh:mm A');

            timeIntervalsArray.push(formattedHalfHour);
        }
    }

    return (
        <div className={`weekday-row`}>
            <div className="weekday-head">
                <h1>{dayName}</h1>
                <p>{currentDate.format('DD/MM')}</p>
            </div>
            {isPastDay ? (
                <div style={{ display: "flex", alignItems: "center", marginLeft: 5 }}>
                    Past
                </div>
            ) : (
                <div className="weekday-body">
                    {timeIntervalsArray?.map((val, index) => {
                        return (
                            <label key={index}>
                                <input type="checkbox" value={val} />
                                {val}
                            </label>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
