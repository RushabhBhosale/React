import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../Content/AuthContext';

const LoginForm = () => {
    const [loginData, setLoginData] = useState({ email: "", password: "" });

    const { state, dispatch } = useContext(MyContext)


    console.log(loginData, "loginData")
    const router = useNavigate();
    function handleChange(e) {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (loginData.email && loginData.password) {
            try {
                const response = { data: { success: true, message: "Login Successfull.", user: { name: "", email: "" }, token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" } }
                if (response.data.success) {
                    toast.success(response.data.message)
                    dispatch({ type: "LOGIN", payload: response.data.user })
                    localStorage.setItem('my-token', JSON.stringify(response.data.token))
                    setLoginData({ email: "", password: "" })
                    router('/')
                }
            } catch (error) {
                console.log(error)
                toast.error(error.response.data.error)
            }
        } else {
            alert("All fields are mandatory.")
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label><br />
                <input type='email' required onChange={handleChange} name='email' value={loginData.email} /><br />
                <label>Password</label><br />
                <input type='password' required onChange={handleChange} name='password' value={loginData.password} /><br />
                <input type='submit' value='Login' />
            </form>
        </div>
    )
}

export default LoginForm