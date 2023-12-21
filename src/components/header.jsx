// import style from './styles/global.css'

export default function Header() {
    return (
        <>
            <div style={{ border: "2px solid black", padding: 5, marginBottom: "5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <button>Previous Week</button>
                <div>date yaha aayegi</div>
                <button>Next Week</button>
            </div>
        </>
    )
}