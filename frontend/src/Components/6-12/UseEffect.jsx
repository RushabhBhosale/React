import { useEffect, useState } from "react";

function UseEffect() {
   const [counter, setCounter] = useState(0)
   const [counter2, setCounter2] = useState(100)

   function Increment() {
      setCounter((prevState) => prevState + 1)
   }
   function Increment2() {
      setCounter((prevState) => prevState + 1)
   }

   useEffect(() => {
      alert("Hii")
   });

   return (
      <div>
         <h1>Use Effect</h1>
         <h2>Counter : {counter}</h2>
         <button onClick={Increment}>+</button>
         <h2>Counter 2 : {counter2}</h2>
         <button onClick={Increment2}>-</button>
      </div>
   )
}

export default UseEffect;