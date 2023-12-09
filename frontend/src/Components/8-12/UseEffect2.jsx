import { useEffect } from "react";
import { useState } from "react";


function UseEffect2() {
   const [counter, setCounter] = useState(0);

   function Increment() {
      setCounter((prevState) => prevState + 1)
   };

   useEffect(() => {
      alert("Hiii")
   }, [])

   return (
      <div>
         <h1>Use Effect Empty Dependency</h1>
         <h1>Counter: {counter}</h1>
         <button onClick={Increment}>+</button>
      </div>
   )
}

export default UseEffect2;