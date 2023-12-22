export default function Timezone(){
    return (
        <>
            <div style={{marginBottom: "20px"}}>
                <h3 className="text-grey font-bold mb-10">Timezone:-</h3>
                <select className="full-width p-10">
                    <option value="utc">UTC</option>
                    <option value="gmt+530">GMT+5:30</option>
                </select>
            </div>
        </>
    )
}