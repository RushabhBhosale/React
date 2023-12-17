import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

   const [logindata, setLoginData] = useState({ email: "", password: "" });
   const router = useNavigate();

   function handleChange(e) {
      setLoginData({ ...logindata, [e.target.name]: e.target.value })
   }

   async function handleSubmit(e) {
      e.preventDefault();

      if (logindata.email && logindata.password) {
         try {
            const response = { data: { success: true, message: "Login Sucessful" } }
            if (response.data.success) {
               toast.success(response.data.message)
               setLoginData({ email: "", password: "" })
               router('/')
            }
         } catch (error) {
            console.log(error)
            toast.error(error.response.data.error)
         }
      } else {
         toast.error("All the fields are required")
      }
   }

   return (
      <div>
         <h1>Login Form</h1>
         <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="email" name='email' onChange={handleChange} required value={logindata.email} /><br />
            <label>Password:</label>
            <input type="password" name='password' onChange={handleChange} value={logindata.password} /><br />
            <input type="submit" value="Login" />
         </form>
      </div>
   )
}

export default LoginForm