'use client'

import { useSelector } from "react-redux" 
import { RootState } from "@/lib/store"

export default function Test() {
    const loggedIn = useSelector((state: RootState) => state.user.loggedIn)
    
    return (
        <>
            {/* <button onClick={handleClick}>Click to check!</button> */}
            <p>{loggedIn ? 'loged in' : 'not loged in'}</p>
        </>
    )
}