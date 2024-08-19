'use client'
import { useAppSelector } from "../lib/hooks";
import CheckoutProductCard from "./CheckoutProductCard";
import { products } from '@/app/productsData/productsData'
export default function SortCheckoutProducts() {
    const items = useAppSelector((state) => state.cart.items);

    const sortedProducts = products.filter(product =>
        items.some(item => item.productId === product.productId)
    );
    return (
        <>
        {sortedProducts.length <=0 &&  <div className="w-full p-4 bg-white rounded-md shadow-lg"> No Products : Please Add Products to Cart</div>}
            {sortedProducts.map((product) => {
                  const cartItem = items.find(item => item.productId === product.productId);
                return (
                    <CheckoutProductCard key={product.productId} product={product} quantity={cartItem?.quantity} />
                )
            }
            )}
        </>
    )
}
