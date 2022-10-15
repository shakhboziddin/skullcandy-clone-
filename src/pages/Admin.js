import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, storage, db } from '../Firebase/FirebaseConfig'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { async } from '@firebase/util'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
function Admin() {
    const navigate = useNavigate()
    const [progress, setProgress] = useState()
    const createProduct = async (e) => {
        e.preventDefault()
        const productName = e.target[0].value
        const productPrice = e.target[1].value
        const productImg = e.target[2].files[0]

        console.log(productName, productPrice, productImg,);
        try {

            const storageRef = ref(storage, productName);
            const uploadTask = uploadBytesResumable(storageRef, productImg);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await addDoc(collection(db, "products"), {
                            productName: productName,
                            productPrice: Number(productPrice),
                            productImage: downloadURL,
                        });
                        navigate("/shop")
                    });
                }
            );

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div>
            <form onSubmit={createProduct} className='bg-white'>
                <input type="text" name="name" placeholder='Product Name' id="" />
                <input type="text" name="price" placeholder='Product Price' id="" />
                <input type="file" name="img" id="" />
                <button type='submit'>Create Product</button>
            </form>
        </div>
    )
}

export default Admin