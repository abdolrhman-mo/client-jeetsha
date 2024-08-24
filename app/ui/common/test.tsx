'use client'

import { useSelector } from "react-redux" 
import { RootState } from "@/lib/store"

export default function Test() {
    let handleClick = () => {
        // let cartItems = [1, 4, 6, 10]
        // let string = JSON.stringify(cartItems) 
        // localStorage.setItem('cartItems', string)
        // let retString = localStorage.getItem('cartItems') || ''
        // let retArray = JSON.parse(retString)
        // console.log(retArray)
        localStorage.removeItem('cartItems')
    }
    
    return (
        <>
            <br />
            <br />
            <button onClick={handleClick}>Click Me!</button>
        </>
    )
}