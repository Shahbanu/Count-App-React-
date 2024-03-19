import React,{useState} from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
//increase counter
const increase =() =>{
  setCounter(counter +1)
}
//decrease counter

const decrease =() =>{
  if (counter > 0) {
    setCounter(count => count - 1);
  }
};
 //reset counter
 const reset =() =>{
  setCounter(0)
 }
 

  return (
    <>
    <div className="counter">
      <h1>Counter-App</h1>
      <span className="counter__output">{counter}</span>
      <div className="container_btn">
        <button className="control__btn" onClick={increase}>+</button>
        <button className="control__btn" onClick={decrease}>-</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
    </>
  )
}

export default App
