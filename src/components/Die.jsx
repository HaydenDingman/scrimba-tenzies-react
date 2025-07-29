export default function Die({value, isHeld}) {
    return (
        <button className={`die ${isHeld ? "isHeld" : null}`}>{value}</button>
    )
}