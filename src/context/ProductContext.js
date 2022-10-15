import { useEffect, useReducer, useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext()

export const addToCart = (product, cart) => {
    const check = cart.every((item) => {
        return item.id !== product.id
    })

    if (!check)
        return { type: "ADD_CART", poyload: [...cart, { ...product, quantity: 1, proce: product.data.productPrice }] }
}

export const decrease = (data, id) => {
    const newData = [...data];
    newData.forEach((item) => {
        if (item.id === id) item.quantity -= 1;
    });
    return { type: 'ADD_CART', poyload: newData }
}

export const increase = (data, id) => {
    const newData = [...data];
    newData.forEach((item) => {
        if (item.id === id) item.quantity += 1;
    })
    return { type: 'ADD_CART', poyload: newData }
}
export const deleteItem = (data, id, type) => {
    const newData = data.filter((item) => item.id != -id)
    return { type, poyload: newData }
}

export const ProductContextProvider = ({ children }) => {
    const began = {
        cart: []
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD_CART':
                return {
                    ...state,
                    cart: action.poyload
                }

            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, began)

    return (
        <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>
    )

}