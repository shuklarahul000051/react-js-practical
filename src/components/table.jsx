import "../styles/table.css";
import Weekday from './weekday';
import jsonData from '../data/data.json';
import moment from 'moment-timezone';

export default function Table({ timezone, currWeek }) {
    const dayName = ["Mon", "Tue", "Wed", "Thu", "Fri"];

    const groupedByDate = jsonData.reduce((result, obj) => {

        const dateTime = `${obj.Date} ${obj.Time}`;
        const momentUtc = moment.utc(dateTime, 'YYYY-MM-DD HH:mm');
        const momentTargetTimezone = momentUtc.tz(timezone);
        const formattedDate = momentTargetTimezone.format('YYYY-MM-DD');

        
        if (!result[formattedDate]) {
            result[formattedDate] = [];
        }

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
            <div style={{ padding: 5, marginBottom: "5px" }}>
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