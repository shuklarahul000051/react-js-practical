import Weekday from './weekday';
import "../styles/table.css";

export default function Table() {
    return (
        <>
            <div style={{ border: "2px solid black", padding: 5, marginBottom: "5px" }}>
                <Weekday />
            </div>            
        </>
    )
}