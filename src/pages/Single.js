import React from 'react'
import { useLocation } from 'react-router-dom'

function Single({ }) {
    let location = useLocation()

    let StateData = location.state

    console.log(location.state)


    return (
        <div>
            <img src={StateData.data.productImage} alt="" />
            <h1 className='text-white'>{StateData.data.productName}</h1>
            <h2 className='text-red-500'>${StateData.data.productPrice}</h2>
            <button className='text-white w-[200px]'>Add To Cart</button>
        </div>
    )
}

export default Single