import React from 'react'
import { Link } from 'react-router-dom'

function Product({ product }) {
  const style = {
    img: 'w-[50%]'
  }
  return (
    <div>
      <Link state={product} to={`/product/${product.id}`}>
        <img className={style.img} src={product.data.productImage} alt="" />
        <h1>{product.data.productName}</h1>
        <h2>${product.data.productPrice}</h2>
      </Link>
    </div>

  )
}

export default Product