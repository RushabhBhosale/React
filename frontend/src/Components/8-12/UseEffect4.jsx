import { useEffect } from "react";
import { useState } from "react";


function UseEffect4() {
   const [counter, setCounter] = useState(0);
   const [counter2, setCounter2] = useState(5);

   function Increment() {
      setCounter((prevState) => prevState + 1)
   };
   function Increment2() {
      setCounter2((prevState) => prevState + 1)
   };

   useEffect(() => {
      alert("Hiii")
   }, [counter2, counter])

   return (
      <div>
         <h1>Use Effect Single Dependency</h1>
         <h1>Counter: {counter}</h1>
         <button onClick={Increment}>+</button>
         <h1>Counter: {counter2}</h1>
         <button onClick={Increment2}>+</button>
      </div>
   )
}

export default UseEffect4;