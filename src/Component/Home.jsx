import React, { useContext } from 'react'
import { database } from './firebaseConfig'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'


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

    const {user} = useContext(AppContext)
    
  return (
    <div className='p-5'>
        <h1>Home</h1>
        <div className='mt-5'>
            <h3>Welcome, <em className='fs-5'>{user}</em></h3>
        </div>
        {/* <h2></h2> */}
        <button type="submit" className="btn btn-secondary mt-5" onClick={handleClick}>Logout</button>
    </div>
  )
}

export default Home