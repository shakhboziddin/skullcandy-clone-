import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, storage, db } from '../Firebase/FirebaseConfig'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'
import { async } from '@firebase/util'


function Register() {
    const navigate = useNavigate()
    const [err, setErr] = useState(false)
    const CreateAcc = async (e) => {
        e.preventDefault()
        const firstName = e.target[0].value
        const lastName = e.target[1].value
        const email = e.target[2].value
        const password = e.target[3].value
        const file = e.target[4].files[0]

        const res = await createUserWithEmailAndPassword(auth, email, password)

        // localStorage.setItem("firstName", firstName)
        // localStorage.setItem("lastName", lastName)

        const storageRef = ref(storage, firstName)
        const upload = uploadBytesResumable(storageRef, file)
        upload.on('state_changed',

            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('upload is ' + Math.floor(progress) + '% done')
            },

            (error) => {
                setErr(true)
            },
            () => {
                getDownloadURL(upload.snapshot.ref).then(async (downloadURL) => {
                    await updateProfile(res.user, {
                        firstName,
                        photoURL: downloadURL
                    })
                    await setDoc(doc(db, 'users', res.user.uid), {
                        displayName: firstName,
                        lastName: lastName,
                        password: password,
                        photoURL: downloadURL
                    })
                    navigate('/')
                })
            }
        )



    }



    return (
        <div>
            <form onSubmit={CreateAcc}>
                <div>
                    <input type="text" placeholder='First Name' name='First Name' />
                    <input type="text" placeholder='Last Name' name='Last Name' />
                    <input type="email" placeholder='Email' name='Email' />
                    <input type="password" placeholder='Password' name='password' />
                    <input type="file" name="file" />
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Register