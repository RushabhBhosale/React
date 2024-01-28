import React, { useReducer } from 'react'

const initialState = { count: 0, username: "Awdiz", userRole: "admin" }

const Reducer = (state, action) => {
   switch (action.type) {
      case "INCREMENT":
         return { ...state, count: state.count + 1 }
      case "DECREMENT":
         return { ...state, count: state.count - 1 }
      case "RESET":
         return { ...state, count: 0 }
      case "ChangeName":
         return {...state, username: "Rushabh"}
      default:
         return state
   }
}

const UseReducer = () => {

   const [state, dispatch] = useReducer(Reducer, initialState)

   return (
      <div>
         <h1>{state.count}</h1>
         <h1>{state.username}</h1>
         <button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button><br />
         <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button><br />
         <button onClick={() => dispatch({type: "RESET"})}>Reset</button><br />
         <button onClick={() => dispatch({type: "ChangeName"})}>Change Name</button><br />
      </div> 
   )
}

export default UseReducer