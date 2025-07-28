import { useState } from 'react'
import './App.css'
import Die from './components/Die'

function App() {

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }

    const [dice, setDice] = useState(generateAllNewDice);
    console.log(dice)
    const diceElements = dice.map((val) => {
        return <Die value={val} />
    })

  return (

    <>
      <main>
        <section className="dice-container">
          {diceElements}
        </section>
      </main>
    </>
  )
}

export default App
