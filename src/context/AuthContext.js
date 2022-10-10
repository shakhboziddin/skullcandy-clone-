import { useEffect, useState } from "react";
import { createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Firebase/FirebaseConfig'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState([])

    useEffect(() => {
        const unsub = () => {
            onAuthStateChanged(auth, (user) => {
                setCurrentUser(user)
            })

        }
        return () => {
            unsub()
        }
    }, [])
    console.log("user >>> ", currentUser)

    return (
        <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>
    )
}







