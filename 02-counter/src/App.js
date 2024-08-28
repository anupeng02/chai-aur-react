
import './App.css';
 import {useState} from "react"
function App() {

  let [counter, setCounter] = useState(0)

  function incrementFunction(){
     if(counter<20){
          setCounter(counter=>counter+1)
     }
  }

  function decrementFunction(){
    if(counter>0){
      setCounter(counter=>counter-1)
 }
  }


  return (
    <div>
        <h1> lets make counter</h1>
       
        <h1>{counter}</h1>  <br/> <br/> 

        <button onClick={incrementFunction}>Increment</button>  <br/> <br/> 

        <button onClick={decrementFunction}>Increment</button>


    </div>
  );
}

export default App;
