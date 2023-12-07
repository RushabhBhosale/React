import './../Styles/Navbar.css'
import { useNavigate } from 'react-router-dom';

function Navbar() {
   const router = useNavigate();

   return (
      <div className='nav-parent flex'>
         <div className='flex w-15'>
            <p onClick={() => router('/')}>Home</p>
         </div>
         <div className='flex w-45'>
            <p>Men</p>
            <p>Women</p>
            <p>Kids</p>
         </div>
         <div className='flex w-25'>
            <p onClick={() => router('/login')}>Login</p>
            <p onClick={() => router('/register')}>Register</p>
         </div>
      </div>
   )
}

export default Navbar;