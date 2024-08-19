import CartQuantity from './CartQuantity';
import {  ProductType } from '../productsData/productsData';


export default function CheckoutProductCard({ product, quantity }: { product: ProductType, quantity: number | undefined }) {


    return (
        <div className='w-full py-4 border bg-white rounded-lg shadow-md p-4 flex flex-col justify-between relative'>
            <div className='flex'>
                <div className='h-full w-36 flex-shrink-0 flex items-center justify-center'>
                    <img
                        src={product.productImg[0]}
                        alt='Product Image'
                        className='w-full h-full object-contain rounded-lg'
                    />
                </div>
                <div className='flex-grow ml-6'>
                    <div>
                        <h1 className='text-xl font-semibold'>{product.productName}</h1>
                        <p className='text-sm text-gray-500 mt-1'>{product.productSpecification}</p>
                        <h1 className='text-lg font-medium mt-3 text-gray-800'>{product.productCurrency + " " + product.reducedPrice}</h1>
                    </div>
                    <CartQuantity quantity={quantity} productId={product.productId} />
                </div>
            </div>
            <button className='mt-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-200 ease-in-out absolute bottom-4 right-4'>
                Remove
            </button>
        </div>
    );
}
