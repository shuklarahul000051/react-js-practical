// import style from './styles/global.css'

export default function Header() {
    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
      ];
      
    const date = new Date();
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const monthName = months[monthIndex]; 
    const day = date.getDate();
    return (
        <>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center" }} className="mb-10">
                <button className="p-5">Previous Week</button>
                <div className="font-bold font-size-20">{monthName} {day} {year}</div>
                <button className="p-5">Next Week</button>
            </div>
        </>
    )
}