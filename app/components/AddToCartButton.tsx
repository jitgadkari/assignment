'use client'
import React from 'react'
import { add } from '../lib/features/cart/cartSlice'
import { useAppDispatch } from '../lib/hooks'
import { FaShoppingCart } from 'react-icons/fa'
interface AddToCartButtonProps {
    productId: number
}
export default function AddToCartButton({ productId }: AddToCartButtonProps) {
    const dispatch = useAppDispatch()

    const handleAddToCart = (productId:number) => {
        dispatch(add(productId))
    }
    return (
        <div className='w-full  flex justify-center items-center bg-blue-500 text-white  px-4 py-2 rounded-md gap-2'onClick={() => { handleAddToCart(productId) }}>
<h1>Add To </h1>
<FaShoppingCart />
        </div>
    )
}
