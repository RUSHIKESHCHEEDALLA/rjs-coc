import { useState } from 'react'
import './App.css'

function App() {
  const [value,setValue]=useState(0)
  const addValue= ()=>{
    if (value<20){
      setValue(value+1)
    }
  }
  const subValue= ()=>{
    if(value>0){
      setValue(value-1)
    }
  }
  return (
    <>
      <h1>Counter project</h1>
      <h2>Counter value : {value}</h2>
      <button onClick={addValue}   id="increment">Increment</button>
      <br />
      <br />
      <button onClick={subValue} id="decrement">Decrement</button>
    </>
  )
}

export default App
