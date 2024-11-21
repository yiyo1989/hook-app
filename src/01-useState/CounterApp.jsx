import { useState } from "react"


export const CounterApp = () => {

    const [counter, setCounter] = useState(
        {
            counter1: 10,
            counter2: 20,
            counter3: 30
        }
    );


// Desestructuración
const { counter1, counter2, counter3 } = counter;


    return (
    <>
    <h2>Counter 1:{counter1}</h2>
    <h2>Counter 1:{counter2}</h2>
    <h2>Counter 1:{counter3}</h2>
    <hr />
    <button className="btn"
    onClick={ ()=>setCounter(
        {
           ...counter,
           counter2: counter2+1
        }
    ) } >Counter +1</button>    
    </>
  )
}
