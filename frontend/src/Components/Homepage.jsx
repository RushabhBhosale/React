import { useContext } from "react";
import { MyContext } from "../Content/AuthContext";

function Homepage() {

   const { state, dispatch } = useContext(MyContext);
   console.log(state,"state")
   return(
      <h1>Home Page - {state.user?.name}</h1>
   );
}

export default Homepage
