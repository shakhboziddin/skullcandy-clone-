import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase/FirebaseConfig'
import { async } from '@firebase/util'
import { useNavigate } from 'react-router-dom'

function Sign() {
    const navigate = useNavigate()
    const signIn = async (e) => {
        e.preventDefault()
        const email = e.target[0].value;
        const password = e.target[1].value

        try {
            await signInWithEmailAndPassword(auth, email, password)

        }
        catch (err) {
            console.log(err)
        }
        navigate('/')
    }

    return (
        <div>
            <form onSubmit={signIn}>
                <input type="email" name="email" placeholder='Email' />
                <input type="passwprd" name='password' placeholder='Password' />
                <button type='submut'>Sign in</button>
            </form>
        </div>
    )
}

export default Sign