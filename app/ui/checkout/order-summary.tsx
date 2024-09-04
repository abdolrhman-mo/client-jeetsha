'use client'

import Input from '@/app/ui/forms/components/input'
import ProductsList from '../products/checkout/products-list'
import Heading from '../common/heading'
import { useEffect } from 'react'
import { useAppDispatch } from '@/redux/store'
import { useAppSelector } from '@/redux/hooks'
import { fetchBuyItNowItem, fetchCartItems } from '@/redux/features/cart/cartThunk'

export default function OrderSummary({
    buyItNowId,
    buyItNowSize,
}: {
    buyItNowId?: number
    buyItNowSize?: string
}) {

    const dispatch = useAppDispatch()
    const cartItems = useAppSelector(state => state.cart.items)
    const totalPrice = useAppSelector(state => state.cart.totalPrice)
    const status = useAppSelector(state => state.cart.status)
    const error = useAppSelector(state => state.cart.error)

    const buyItNowItem = useAppSelector(state => state.cart.buyItNowItem)

    useEffect(() => {
      if (buyItNowId && buyItNowSize) {
        dispatch(fetchBuyItNowItem({ buyItNowId, buyItNowSize }))
      } else {
        dispatch(fetchCartItems())
      }
    }, [])

    return (
      status === 'loading' ? (
        <p>Loading...</p> 
      ) : (
        <div className='grid grid-cols-6 gap-y-4 gap-x-2'>
            {buyItNowId && buyItNowSize && buyItNowItem ? (
                <ProductsList cartItems={[buyItNowItem]} buyItNow={true} />
            ) : (
                <ProductsList cartItems={cartItems} />
            )}

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
    )
}