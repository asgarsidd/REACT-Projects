import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,Setcount] = useState(15);

  const addValue = () => {
    
    // counter +=1;
    // if(counter < 20)
    Setcount(prevCount => prevCount +1)
    Setcount(prevCount => prevCount +1)
    Setcount(prevCount => prevCount +1)
    Setcount(prevCount => prevCount +1)
    // Setcount(counter+1)
    console.log("Value added", counter);
  }
  const removeValue = () => {
    if (counter>0)
    Setcount(counter-1);
  }

  return (
    <>
    
      <h1>chai aur react</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p> 
     
    </>
  )
}


export default App
