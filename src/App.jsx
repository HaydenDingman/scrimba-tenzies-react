import { useState } from 'react'
import './App.css'
import {nanoid} from "nanoid"
import Die from './components/Die'

function App() {

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => {
              return {value: Math.ceil(Math.random() * 6),
                      isHeld: false,
                      id: nanoid(),
              }
            })
    }

    function hold(id) {
      setDice(prevDice => {
          return prevDice.map(die => {
              if (id === die.id){
                  return {...die, isHeld: !die.isHeld}
              } else {
                return die
              }
          })
      })
    }

    const [dice, setDice] = useState(generateAllNewDice());

    const diceElements = dice.map((die) => {
        return <Die key={die.id} value={die.value} isHeld={die.isHeld} onClick={() => (hold(die.id))} />
    })

    function rollDice() {
        setDice(prevDice => prevDice.map(die => 
        die.isHeld ?
            die : {...die, value: Math.ceil(Math.random() * 6)}))
    }

  return (

    <>
      <main>
        <section className="dice-container">
          {diceElements}
        </section>

        <button className="roll-dice" onClick={rollDice}>Roll Dice</button>

      </main>
    </>
  )
}

export default App
