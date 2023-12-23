// import style from './styles/global.css'
import moment from 'moment-timezone';

export default function Header({ updateCurrWeek, timezone }) {
    const momentDate = moment.tz(timezone);
    const day = momentDate.format('DD MMMM YYYY');
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} className="mb-10">
                <button className="p-5" onClick={() => updateCurrWeek(-1)}>Previous Week</button>
                <div className="font-bold font-size-20">{day}</div>
                <button className="p-5" onClick={() => updateCurrWeek(1)}>Next Week</button>
            </div>
        </>
    )
}