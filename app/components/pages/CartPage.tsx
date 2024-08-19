import SortCheckoutProducts from '../SortCheckoutProducts'
import TotalPrice from '../TotalPrice'

export default function CartPage() {

  return (
    <div className='w-[97%] mx-auto  h-full flex flex-col md:flex-row justify-start md:justify-center items-start my-4 rounded-md gap-2 '>
      <div className='w-full h-max md:h-full  overflow-hidden '>
        <div className='flex flex-col items-start w-full h-1/2 gap-2'>
          <SortCheckoutProducts />
        </div>
      </div>
      <div className='w-full h-max bg-white rounded-md '>
        <TotalPrice />
      </div>
    </div>
  )
}
