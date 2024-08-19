"use client"
import React from 'react'
import { ProductType } from '../productsData/productsData'
import { useRouter } from 'next/navigation';
import { FaShoppingCart } from 'react-icons/fa';
import { useAppDispatch } from '../lib/hooks';
import { add } from '../lib/features/cart/cartSlice';
import toast from 'react-hot-toast';

export default function ProductCard({ product }: { product: ProductType }) {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleClick = () => {
        router.push(`/${product.productId}`);
    };

    const handleAddToCart = (e: React.MouseEvent, productId: number) => {
        e.stopPropagation();
        dispatch(add(productId));
        toast.success('Item Added to cart');
    };

    return (
        <div 
            className='w-full h-72 md:h-72 lg:h-80 bg-white rounded-md border text-black flex flex-col shadow-md' 
            key={product.productId} 
            onClick={handleClick}
        >
            <div className='flex-shrink-0 border-b-2'>
                <img
                    src={product.productImg[0]}
                    className='w-full h-52 object-contain rounded-t-md p-2'
                    alt='productimg'
                />
            </div>
            <div className='flex-1 flex flex-col justify-between p-2'>
                <div className='flex-1 flex flex-col justify-center'>
                    <h1 className='text-lg font-semibold'>{product.productName}</h1>
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <h3 className='text-lg font-medium'>{product.productCurrency + product.reducedPrice}</h3>
                    <div 
                        className='bg-blue-500 text-white px-2 py-1 rounded-md cursor-pointer'
                        onClick={(e) => handleAddToCart(e, product.productId)}
                    >
                        <button className='flex items-center'>
                            <h3 className='font-bold'>+</h3>
                            <FaShoppingCart />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
