import moment from "moment-timezone";

export default function Timezone({handleTimezoneChange,timezone}){
    const timezones = moment.tz.names();
    return (
        <>
            <div style={{marginBottom: "20px"}}>
                <h3 className="text-grey font-bold mb-10">Timezone:-</h3>
                <select value={timezone} className="full-width p-10" onChange={(e) => handleTimezoneChange(e.target.value)}>
                    {timezones.map((val, index)=>{
                        return (
                            <option key={index} value={val}>{val}</option>
                        )
                    })}
                </select>
            </div>
        </>
    )
}