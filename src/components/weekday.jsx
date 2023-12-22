export default function Weekday({ dayName, data }) {
    // Creating an array for time intervals between 8 AM to 11 PM with half-hour differences
    let timeIntervalsArray = [];

    for (let hour = 8; hour <= 23; hour++) {
        let ampm = (hour < 12) ? 'AM' : 'PM';
        let displayHour = (hour <= 12) ? hour : hour - 12;
      
        // Adding the current hour
        timeIntervalsArray.push(displayHour + ':00 ' + ampm);
      
        // Adding the half-hour mark if it's not 11:30 PM
        if (hour < 23) {
          timeIntervalsArray.push(displayHour + ':30 ' + ampm);
        }
      }

    return (
        <div className="weekday-row">
            <div className="weekday-head">
                <h1>{dayName}</h1>
            </div>
            <div className="weekday-body">
                {timeIntervalsArray?.map((val, index) => {
                    return (
                        <label key={index}  >
                            <input type="checkbox" value={val}/>
                            {val}
                        </label>
                    )
                })}

            </div>
        </div>
    )
}