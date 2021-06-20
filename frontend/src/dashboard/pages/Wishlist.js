import React from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Data } from '../components/stories/Data'
import Button from '../components/elements/Button'

const Wishlist = () => {
    return (
        <div class="lg:w-3/4 my-6 lg:mt-0">
            <div class="bg-grey-light py-4 px-5 md:px-8">
                <PageTitle> My Wishlist </PageTitle>
                <div class="hidden sm:block">
                    <div class="flex justify-between pb-3">
                        <div class="w-1/3 md:w-2/5 pl-4">
                            <span class="font-hkbold text-secondary text-sm uppercase">Product Name</span>
                        </div>
                        <div class="w-1/4 xl:w-1/5 text-center">
                            <span class="font-hkbold text-secondary text-sm uppercase">Quantity</span>
                        </div>
                        <div class="w-1/6 md:w-1/5 text-center mr-3">
                            <span class="font-hkbold text-secondary text-sm uppercase">Price</span>
                        </div>
                        <div class="w-3/10 md:w-1/5 text-center">
                            <span class="font-hkbold text-secondary text-sm uppercase pr-8 md:pr-16 xl:pr-8">Action</span>
                        </div>
                    </div>
                </div>
                
                {Data.map((data, i)=>(
                    <div key = {i} class="bg-white shadow px-4 py-5 sm:py-6 rounded mb-3 flex flex-col sm:flex-row justify-between items-center">
                        <div class="w-full sm:w-1/3 md:w-2/5 flex flex-col md:flex-row md:items-center border-b sm:border-b-0 border-grey-dark pb-4 sm:pb-0 text-center sm:text-left">
                            <span class="font-hkbold text-secondary text-sm uppercase text-center pb-2 block sm:hidden">Product Name</span>
                            <div class="w-20 mx-auto sm:mx-0 relative sm:mr-3 sm:pr-0">
                                <div class="aspect-w-1 aspect-h-1 w-full">
                                    <img src="https://d33wubrfki0l68.cloudfront.net/be38c60bf34b2376b393e444d2da9a6b2dd54bf4/f1dfc/assets/img/unlicensed/shoes-3.png" alt="product image" class="object-cover"/>
                                </div>
                            </div>
                        </div>
                        <div class="w-full sm:w-1/6 md:w-1/6 xl:w-1/5 text-center border-b sm:border-b-0 border-grey-dark pb-4 sm:pb-0">
                            <span class="font-hkbold text-secondary text-sm uppercase text-center pt-3 pb-2 block sm:hidden">Quantity</span>
                            <span class="font-hk text-secondary">11</span>
                        </div>
                        <div class="w-full sm:w-1/6 xl:w-1/5 text-center sm:text-right sm:pr-6 xl:pr-16 pb-4 sm:pb-0">
                            <span class="font-hkbold text-secondary text-sm uppercase text-center pt-3 pb-2 block sm:hidden">Price</span>
                            <span class="font-hk text-secondary">$1045</span>
                        </div>
                        <Button>Order Now</Button>
                    </div>
                ))}

                </div>
            </div>
    )
}

export default Wishlist
