export default function Weekday({ dayName, data }) {
    return (
        <div className="weekday-row">
            <div className="weekday-head">
                <h1>Mon</h1>
            </div>
            <div className="weekday-body">
                <label>

                    <input type="checkbox" />
                </label>
            </div>
        </div>
    )
}