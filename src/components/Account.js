import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from './Firebase/FirebaseConfig'
import { Link } from 'react-router-dom'


function Account() {
  const { currentUser } = useContext(AuthContext)
  console.log(currentUser)
  return (
    <div>
      <img src={currentUser?.photoURL} alt="" />
      <h1>{currentUser?.displayName}</h1>
      <button onClick={() => signOut(auth)}>signout</button>
      <br />
      <Link to={'/register'}>Register</Link>
    </div>
  )
}

export default Account