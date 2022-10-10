import React, { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from './Firebase/FirebaseConfig'

function App() {
  const { currentUser } = useContext(AuthContext)
  console.log(currentUser)
  return (
    <div>
      <img src={currentUser.photoURL} alt="" />
      <h1>{currentUser.displayname}</h1>
      <button onClick={() => signOut(auth)}>signout</button>
    </div>
  )
}

export default App