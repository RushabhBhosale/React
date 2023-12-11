import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import Counter from './Components/Counter';
import Counter2 from './Components/6-12/Counter2';
import UseEffect from './Components/6-12/UseEffect';
import UseEffect2 from './Components/8-12/UseEffect2';
import UseEffect3 from './Components/8-12/UseEffect3';
import DynamicRouting from './Components/8-12/DynamicRouting';
import UseEffect4 from './Components/8-12/UseEffect4';
import RegisterForm from './Components/10-12/RegisterForm';
import MapObjects from './Components/9-12/MapObjects';
import PropMaps from './Components/9-12/PropMaps';
import StyledComponents from './Components/9-12/StyledComponents';
import { useState } from 'react';


function App() {

  const [myName, setMyName] = useState("Rushi")

  const [students, setStudents] = useState([{ image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGMH6bdKBXo2C2Oa4dst1A6k6igXEv3cy49A&usqp=CAU', name: 'Luffy', age: 19 }, { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQublebW7lweVArLVON4phFduLxC9WCJkCRbg&usqp=CAU', name: 'Zoro', age: 21 }, { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6I1w9bBTluDW1-7aYRer-ENc8cm6XZHR2g&usqp=CAU', name: 'Sanji', age: 21 }])

  function ChangeName() {
    setMyName((prevName) => prevName === "Rushabh" ? "Rohan" : "Rushabh")
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/counter2' element={<Counter2 />} />
        <Route path='/use-effect' element={<UseEffect />} />
        <Route path='/use-effect-2' element={<UseEffect2 />} />
        <Route path='/use-effect-3' element={<UseEffect3 />} />
        <Route path='/dynamic-routing' element={<DynamicRouting />} />
        <Route path='/use-effect-4' element={<UseEffect4 />} />
        <Route path='/register-form' element={<RegisterForm />} />
        <Route path='/map-object' element={<MapObjects myStudentsData={students} />} />
        <Route path='/prop-map' element={<PropMaps lame={myName} myAge= "20" ChangeName={ChangeName} myStudents={["rushabh", "rohan", "jay"]}  />} />
        <Route path='/styled-components' element={<StyledComponents />} />
      </Routes>
    </div>
  );
}

export default App;
