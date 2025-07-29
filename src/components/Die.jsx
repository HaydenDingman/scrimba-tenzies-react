export default function Die({value, isHeld, onClick}) {
    return (
        <button onClick={onClick} className={`die ${isHeld ? "isHeld" : null}`}>{value}</button>
    )
}