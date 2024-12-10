import React,{useState} from "react";


function CounterFunction(){

  let [number,setNumber] = useState(0);

  function increment(){
    setNumber(++number)
  }

  return(
    <div>
      <h2>02 . Counter Function based Approach</h2>
      <h1>Counter = {number}</h1>
      <button onClick={e => increment()}>increment</button>
    </div>
  )

}

export default CounterFunction