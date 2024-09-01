'use client'

import Input from '@/app/ui/forms/input'
import ProductsList from '../products/checkout/products-list'
import { useEffect, useState } from 'react'
import Heading from '../common/heading'
import { isAuth } from '@/app/lib/services/authService'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { addItem, setCartItems } from '@/redux/features/cart/cartSlice'
import { fetchCartItemsAPI } from '@/app/lib/services/cartService'
import { CartItemType } from '@/app/lib/types'

export default function OrderSummary() {
    const dispatch = useDispatch()
    const cartItems = useSelector((state: RootState) => state.cart.items)
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)

    useEffect(() => {
        const fetchData = async () => {
            if (isAuth()) {
                if (cartItems.length === 0) {
                    const fetchedCartItems = await fetchCartItemsAPI()
                    dispatch(setCartItems(fetchedCartItems))
                }
            } else {
                const fetchedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]')
                dispatch(setCartItems(fetchedCartItems))
            }
        }
        fetchData()
    }, [])

    return (
        <div className='grid grid-cols-6 gap-y-4 gap-x-2'>
            <ProductsList cartItems={cartItems} />

            <Input placeholder='discount code' className='col-span-5' />
            <Input type='submit' value='Apply' className='col-span-1' />

            <div className="col-span-6">
                <div className="flex justify-between">
                    <p className=''>Subtotal</p>
                    <p className=''>{totalPrice} EGP</p>
                </div>
                <div className="flex justify-between">
                    <p className=''>Shipping</p>
                    <p className=''>60.00 EGP</p>
                </div> 
                <div className="flex justify-between">
                    <Heading level={5}>total</Heading>
                    <Heading level={5}>{`${totalPrice + 60} EGP`}</Heading>
                </div> 
            </div>
        </div>
    )
}