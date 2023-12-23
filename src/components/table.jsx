import Weekday from './weekday';
import "../styles/table.css";

export default function Table({timezone, currWeek}) {
    const dayName = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    return (
        <>
            <div style={{ border: "2px solid black", padding: 5, marginBottom: "5px" }}>
                {dayName?.map((val, index) => {
                    return (
                        <Weekday dayName={val} key={index} timezone={timezone} currWeek={currWeek}/>
                    )
                })}
            </div>
        </>
    )
}