import Image from 'next/image'
import React from 'react'
import { products, ProductType } from '@/app/productsData/productsData'
import AddToCartButton from '@/app/components/AddToCartButton';


interface ProductDetailPageProps {
    params: {
        productDetail: string;
    }
}


export default function ProductDetailPage({ params }: ProductDetailPageProps) {
    //get a single product with product id 
    const productId = Number(params.productDetail);
    const singleProduct: ProductType | undefined = products.find(
        (product) => product.productId === productId
    );

    if (!singleProduct) {
        return (
            <div>Product not found</div>
        );
    }
    return (
        <div className='w-[97%] mx-auto bg-white h-full flex flex-col md:flex-row justify-center items-center my-4 rounded-md shadow-md '>
            <div className='w-full h-3/4 md:border-r-2 md:border-b-0 border-b-2 border-black'>
                <div className='flex flex-col w-full h-full '>
                    <div className='w-full h-full flex justify-center items-center flex-grow p-4'>

                        <Image
                            src={singleProduct.productImg[0]}
                            width={300}
                            height={300}
                            className=' object-contain'
                            alt=''
                        />
                    </div>
                    <div className='w-full flex justify-center items-center py-3' >
                        <div className='flex justify-center items-center'>
                            {singleProduct.productImg.map((productImg:string, index:any) => {
                                return (
                                    <div className='w-20 h-20 border ' key={index}>
                                        <img src={productImg} className="w-full h-full object-contain" alt='' />
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-3/4 flex flex-col justify-start p-4 bg-white rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-3 text-gray-900">{singleProduct.productName}</h1>
    <p className="text-lg text-gray-700 mb-4">{singleProduct.productSpecification}</p>

    <div className="flex items-center mb-4">
        <h3 className="text-2xl font-semibold text-black mr-3">
            {singleProduct.productCurrency}{singleProduct.reducedPrice}
        </h3>
        <p className="text-gray-500 line-through">
            {singleProduct.productCurrency + singleProduct.actualPrice}
        </p>
    </div>

    <p className="text-green-600 font-medium mb-4">{singleProduct.offPercentage}% off</p>
    


    <AddToCartButton productId={singleProduct.productId} />
</div>



        </div>
    )
}
