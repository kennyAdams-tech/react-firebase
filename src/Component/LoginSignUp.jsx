import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { database } from './firebaseConfig'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginSignUp = () => {
    const [login, setLogin] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = (e, type) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        
        if (type === 'SignUp') {
            createUserWithEmailAndPassword(database, email, password)
            .then(data => {
                console.log(data)
                // console.log(data.user.email)
                navigate('/home')
            })
            .catch(err => {
                // alert(err.code)
                toast.error(err.code)
                setLogin(true)
            })
        } else {
           signInWithEmailAndPassword(database, email, password)
            .then(data => {
                console.log(data)
                // console.log(data.user.email)
                navigate('/home')
            })
            .catch(err => {
                // alert(err.code)
                toast.error(err.code)
            })
        }
        
    }


  return (
    <div className='m-5 p-5 card shadow '>
        <div className="d-flex gap-4 mx-auto mb-3">
            <div className={login ? 'h2 btn btn-secondary px-3' : 'h2'} onClick={()=>setLogin(true)}>Login</div>
            <div className={!login ? 'h2 btn btn-secondary px-3' : 'h2'} onClick={()=>setLogin(false)}>SignUp</div>
        </div>        <form onSubmit={(e)=>handleSubmit(e, login ? 'Login' : 'SignUp')}>
            <h1 className='text-center'>{login ? 'Login' : 'SignUp'}</h1>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" 
                name='email'
                aria-describedby="emailHelp"/>
                
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" 
                name='password'
                id="exampleInputPassword1"/>
            </div>
            <div className='d-grid'>
            <button type="submit" className="btn btn-secondary">{login ? 'Login' : 'SignUp'}</button>
            </div>
            <ToastContainer/>
        </form>
    </div>
  )
}

export default LoginSignUp