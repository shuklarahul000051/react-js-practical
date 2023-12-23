import "../styles/table.css";
import Weekday from './weekday';
import jsonData from '../data/data.json';
import moment from 'moment-timezone';

export default function Table({ timezone, currWeek }) {
    const dayName = ["Mon", "Tue", "Wed", "Thu", "Fri"];

    // Use reduce to group objects by date
    const groupedByDate = jsonData.reduce((result, obj) => {
        // Extract the date and time from the object
        const dateTime = `${obj.Date} ${obj.Time}`;

        // Create a moment object in UTC
        const momentUtc = moment.utc(dateTime, 'YYYY-MM-DD HH:mm');

        // Convert to the target timezone
        const momentTargetTimezone = momentUtc.tz(timezone);

        // Format the date in the target timezone
        const formattedDate = momentTargetTimezone.format('YYYY-MM-DD');

        // If the date is not in the result, add it as a key with an array
        if (!result[formattedDate]) {
            result[formattedDate] = [];
        }

        // Push the object with converted date and time to the array associated with the date
        result[formattedDate].push({
            ...obj,
            Date: momentTargetTimezone.format('YYYY-MM-DD'),
            Time: momentTargetTimezone.format('HH:mm'),
            key: momentTargetTimezone.format('hh:mm A')
        });

        return result;
    }, {});

    return (
        <>
            <div style={{ border: "2px solid black", padding: 5, marginBottom: "5px" }}>
                {dayName?.map((val, index) => {
                    const currentDate = moment.tz(timezone).day(val).add(currWeek, 'weeks')
                    const dateKey = currentDate.format('YYYY-MM-DD');
                    let data = []
                    if (dateKey in groupedByDate) {
                        data = groupedByDate[dateKey];
                    }
                    return (
                        <Weekday data={data} currentDate={currentDate} dayName={val} key={index} timezone={timezone} currWeek={currWeek} />
                    )
                })}
            </div>
        </>
    )
}