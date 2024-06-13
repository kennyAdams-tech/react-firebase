import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import { database } from './firebaseConfig'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from '../Context/AppContext'

const LoginSignUp = () => {
    const [username, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [login, setLogin] = useState(false)
    const navigate = useNavigate()

    const {setUser} = useContext(AppContext)

    const handleSubmit = (e, type) => {
        e.preventDefault()

        setUser(username, userPassword)

        console.log(username)
        console.log(userPassword)
        
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
<<<<<<< HEAD
    <div className='container card shadow mt-5 '>

        <div className="d-flex gap-5 mx-auto pt-5">

            <div className={login ? 'h2 btn btn-secondary ' : 'h2 btn btn-light '} onClick={()=>setLogin(true)}>Login</div>

            <div className={!login ? 'h2 btn btn-secondary ' : 'h2 btn btn-light'} onClick={()=>setLogin(false)}>SignUp</div>

        </div>  

        <form onSubmit={(e)=>handleSubmit(e, login ? 'Login' : 'SignUp')} className=' p-3 pb-5 '>
            <h1 className='text-center h3'>{login ? 'Login' : 'SignUp'}</h1>
=======
    <div className='m-5 p-5 card shadow '>
        <div className="d-flex gap-5 mx-auto mb-3">
            <div className={login ? 'h2 btn btn-secondary px-4' : 'h2'} onClick={()=>setLogin(true)}>Login</div>
            <div className={!login ? 'h2 btn btn-secondary px-4' : 'h2'} onClick={()=>setLogin(false)}>SignUp</div>
        </div>        <form onSubmit={(e)=>handleSubmit(e, login ? 'Login' : 'SignUp')}>
            <h1 className='text-center'>{login ? 'Login' : 'SignUp'}</h1>
>>>>>>> ce77ab28967e91a3e68bcad3e79fa9b3424f200a
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input 
                type="email" className="form-control" id="exampleInputEmail1" 
                name='email'
                aria-describedby="emailHelp"
                onChange={(e) => setUserName(e.target.value)}
                value={username}
                />
                
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" 
                name='password'
                id="exampleInputPassword1"
                onChange={(e) => setUserPassword(e.target.value)}
                value={userPassword}
                />
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