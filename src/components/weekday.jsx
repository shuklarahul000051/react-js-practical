import moment from 'moment-timezone';

export default function Weekday({ dayName, currentDate, data, timezone, currWeek }) {

    const isDateOlderThanToday = (date, timezone) => {

        const momentDate = moment(date, timezone);
        const currentMoment = moment.tz(timezone);
        const result = momentDate.isBefore(currentMoment, 'day')

        return result;
    };

    let timeIntervalsArray = [];
    let isPastDay = isDateOlderThanToday(currentDate, timezone);

    for (let hour = 8; hour <= 23; hour++) {
        const utcMoment = moment.utc().day(dayName).add(currWeek, 'weeks').set({ hour, minute: 0, second: 0 });
        const localizedMoment = utcMoment.tz(timezone);
        const formattedTime = localizedMoment.format('hh:mm A');
        timeIntervalsArray.push(formattedTime);

        if (hour < 23) {
            const utcHalfHourMoment = moment.utc().day(dayName).add(currWeek, 'weeks').set({ hour, minute: 30, second: 0 });
            const localizedHalfHourMoment = utcHalfHourMoment.tz(timezone);
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
