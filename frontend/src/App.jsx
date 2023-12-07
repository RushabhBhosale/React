import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import Counter from './Components/Counter';
import Counter2 from './Components/6-12/Counter2';
import UseEffect from './Components/6-12/UseEffect';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/counter2' element={<Counter2 />}></Route>
        <Route path='/useeffect' element={<UseEffect />}></Route>
      </Routes>
    </div>
  );
}

export default App;
