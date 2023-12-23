import React, { useState } from 'react';
import moment from 'moment-timezone';
import { keyframes } from '@emotion/react';

export default function Weekday({ dayName, currentDate, data, timezone, currWeek }) {

    const isDateOlderThanToday = (date, timezone) => {
        // Create a moment object for the given date in the specified timezone
        const momentDate = moment(date, timezone);

        // Get the current moment in the specified timezone
        const currentMoment = moment.tz(timezone);

        // Check if the date is before today
        const result = momentDate.isBefore(currentMoment, 'day')

        return result;
    };

    // Creating an array for time intervals between 8 AM to 11 PM with half-hour differences
    let timeIntervalsArray = [];
    let isPastDay = isDateOlderThanToday(currentDate, timezone);

    for (let hour = 8; hour <= 23; hour++) {
        // Creating a moment object in UTC for the given week offset
        const utcMoment = moment.utc().day(dayName).add(currWeek, 'weeks').set({ hour, minute: 0, second: 0 });

        // Converting the moment object to the selected timezone
        const localizedMoment = utcMoment.tz(timezone);

        // Displaying the time in the format you want
        const formattedTime = localizedMoment.format('hh:mm A');

        // Adding the current hour
        timeIntervalsArray.push(formattedTime);
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
                        const isChecked = data.find(x => x.key === val);

                        return (
                            <label key={index} style={{ pointerEvents: 'none', opacity: 1 }}>
                                <input checked={isChecked} disabled type="checkbox" value={val} style={{ pointerEvents: 'none', opacity: 1 }} />
                                {val}
                            </label>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
