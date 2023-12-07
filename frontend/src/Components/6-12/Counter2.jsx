import { useState } from "react"; 

function Counter2() {

   const [counter, setCounter] = useState(100);

   console.log(counter, "counter")

   function Increment() {
      setCounter((prevState) => prevState + 1) 
   }
   
   function Decrement() {
      setCounter((prevState) => prevState - 1) 
   }

   function Reset() {
      setCounter(100)
   }

   return (
      <div>
         <h1>Counter : {counter}</h1>
         <button onClick={Increment}>+</button><br />
         <button onClick={Decrement}>-</button><br />
         <button onClick={Reset}>Reset</button>
      </div>
   )
}

export default Counter2;