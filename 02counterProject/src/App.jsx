import { useState } from 'react'

function App() {
 let [counter, setCounter] =  useState(15)

  const addValue = () =>{
    setCounter(counter +1);
  }

  const addTwo = () =>{
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
  }

  const reduceValue = () => {
    if(counter -1 >= 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai Aur react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={reduceValue}>Decrease value</button>
      <br />
      <button onClick={addTwo}>Add two value</button>
    </>
  )
}

export default App
