export default function Die({value, isHeld, onClick}) {
    return (
        <button 
            onClick={onClick} 
            className={`die ${isHeld ? "isHeld" : null}`}
            aria-pressed={isHeld}
            aria-label={`Die value: ${value}, currently ${isHeld ? "held" : "not held"}`}
        >{value}</button>
    )
}