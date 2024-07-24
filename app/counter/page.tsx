'use client'

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
    decrement,
    increment,
    incrementByAmount,
    selectCount,
} from '@/lib/features/counter/counterSlice'

export default function Page() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2')

    return (
        <div className="flex w-24 justify-around py-8">
            <button
                onClick={() => dispatch(decrement())}
            >
                - 
            </button>
            <p>{count}</p>
            <button
                onClick={() => dispatch(increment())}
            >
                + 
            </button>
        </div>
    )
}