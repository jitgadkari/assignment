import { products } from '@/app/productsData/productsData'
import ProductCard from '../ProductCard'

export default function HomePage() {
   
  return (
    <div className=' w-[97%] mt-2 mx-auto h-max  rounded-t-md '>
    <div className='h-64 w-full mb-8'>
      <h1 className=' text-center text-black'>slider</h1>
    </div>
    <div className='bg-white mt-4 border-2 rounded-md pb-2'>
      <h1 className='text-black p-2  md:p-3 font-semibold text-lg md:text-xl lg:text-2xl'>Products</h1>
      <div className='grid grid-cols-2  md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-8 md:gap-3 lg:gap-4 sm:gap-2  place-items-center px-4 '>
        {products.map((product) => {
          return (
            <ProductCard product={product} key={product.productId} />
          )
        })}

      </div>
    </div>

  </div>
  )
}
