import React from "react";
import { useParams } from "react-router-dom"


function UseParams() {
   const {age} = useParams()

   return (
      <div>
         <h1>Use Params: {age}</h1>
      </div>
   )
}

export default useParams;