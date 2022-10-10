import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCoadfkft5Tmr9-bXbFglF3QRrdWkG71n0",
    authDomain: "skullcandy-6219a.firebaseapp.com",
    projectId: "skullcandy-6219a",
    storageBucket: "skullcandy-6219a.appspot.com",
    messagingSenderId: "898793666334",
    appId: "1:898793666334:web:bbd0c1cf6e58190d1bfb0f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()