'use client'

import { add, remove } from "../lib/features/cart/cartSlice"
import { useAppDispatch } from "../lib/hooks"

export default function CartQuantity({ quantity, productId }: { quantity: number | undefined, productId: string }) {
    const dispatch = useAppDispatch()

    const handleAddToCart = (productId:string) => {
        dispatch(add(productId))
    }
    const handleRemoveFromCart = (productId:string) => {
        dispatch(remove(productId))
    }
    return (
        <>
            <div className='flex items-center mt-2'>
                <h1 className='text-sm font-medium mr-4'>Quantity</h1>
                <button className='bg-gray-300 px-2 py-1 rounded-l-md'onClick={()=>handleRemoveFromCart(productId)}>-</button>
                <h1 className='px-4 text-black'>{quantity}</h1>
                <button className='bg-gray-300 px-2 py-1 rounded-r-md' onClick={()=>handleAddToCart(productId)}>+</button>
            </div>
        </>
    )
}
