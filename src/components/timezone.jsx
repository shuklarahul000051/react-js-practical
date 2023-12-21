export default function Timezone(){
    return (
        <>
            <div style={{ border: "2px solid black", padding: 5, marginBottom: "5px" }}>
                <h3>Timezone:-</h3>
                <select>
                    <option value="utc">UTC</option>
                    <option value="gmt+530">GMT+5:30</option>
                </select>
            </div>
        </>
    )
}