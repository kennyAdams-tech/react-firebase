import React from 'react'
import { database } from './firebaseConfig'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate =useNavigate()

    const handleClick = () => {
        signOut(database)
        .then(val => {
            console.log(val, 'signed out')
            navigate('/')
        })
        .catch(err => {
            console.log(err)
            toast.error(err)
        })
        
    }
    
  return (
    <div className='p-5'>
        <h1>Home</h1>
        <button type="submit" className="btn btn-secondary mt-5" onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Home