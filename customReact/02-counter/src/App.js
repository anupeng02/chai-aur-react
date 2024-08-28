
import './App.css';
import {useState} from "react"
function App() {

  let [counter, setCounter] = useState(0)
    console.log(counter)

  function incrementFunction(){
   
   if(counter<20){
    setCounter(counter=>counter+1)
   }
  }

  function decrementFunction(){
    //  setCounter(counter=>counter-1)
    if(counter>0){
      setCounter(counter=>counter-1)
    }
  }

  return (
    <div >
         <h1>lets make counter</h1>

         <h1>{counter}</h1>
         
          <button onClick={incrementFunction}>increment</button> <br/>
          <button onClick={decrementFunction}>Decrement</button> <br/>
         
    </div>
  );
}

export default App;
