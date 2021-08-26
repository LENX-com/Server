import React, { useState } from 'react'
import { Dropdown, DropdownItem, Badge, Input, Label } from '@windmill/react-ui'
import { AiOutlineEllipsis, AiOutlineClose, AiOutlineEdit } from "react-icons/ai"
import { Desktop, Mobile } from '../../../ScreenSize'

const ProductList = () => {
    
    const [isOpen, setIsOpen] = useState({
        index : false,
        open: false
    })

    const { index, open } = isOpen;

    const fakeArray = Array(5).fill(5)

      const DropdownMenu = ({i}) => (

      <Dropdown isOpen={ open && index === i } onClose={() => setIsOpen({ open: false})} className="z-50 w-auto top-4 left-4">
        <DropdownItem tag="a" href="#" className="flex">
          <div> <AiOutlineEdit className="my-auto mr-2 text-lg" /> </div>
          <div className="text-Black-medium">Edit Product</div>
        </DropdownItem>
        <DropdownItem className="flex mb-auto" >
          <div> <AiOutlineClose className="my-auto mr-2 text-lg" /> </div>
          <div  className="text-Black-medium truncate "> Remove Product</div>
        </DropdownItem>
      </Dropdown>
  )

  console.log(index)
  console.log(open)
  

  const ProductCard = ({i}) => (
    <div className="flex bg-white shadow-separator px-2">
        <div className="w-2/5">
            <div className="p-3">
                <img
                    alt="ecommerce"
                    className="lg:w-1/2 lg:h-auto  h-22 w-22 object-cover object-center rounded" 
                    src="https://cdn.shopify.com/s/files/1/0597/7974/3953/products/download_1_350x350.png?v=1629802376"
                 />
            </div>
        </div>

        <div className="relative w-3/5">
            <div className="w-1/2 h-full">
                <div className="my-auto mt-4">
                    <div className=" text-Black-medium text-sm mx-auto text-center">
                        Desktop
                    </div>
                    <div className="p-3 my-auto font-bold text-Black text-base text-center">
                        £21.99
                    </div>
                    <div className="text-center">
                         <Badge type="success"> Active </Badge>
                    </div>
                </div>
            </div>
            <button
                className="absolute right-0 top-0"
                onClick={() => setIsOpen({open: !open, index: i})}>
                <div className="m-auto">
                   <AiOutlineEllipsis className="m-auto text-2xl font-bold" />
                </div>
            </button>
            <DropdownMenu i = { i } />
        </div>
    </div>
  ) 

    return (
        <>
            <Desktop>
                <div className="flex flex-col text-left">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-Black-medium uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-Black-medium uppercase tracking-wider">
                                            Title
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-Black-medium uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-Black-medium uppercase tracking-wider">
                                            Role
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                        </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1619914775389-748e5e136c26?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjIwMTk4MjAw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=100" alt="" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        Flora Wu
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        flora.wu@example.com
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">Software engineer</div>
                                        <div className="text-sm text-gray-500">IT</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Active
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Admin
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                    </td>
                                </tr>
                            {/* More people... */}
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
            </Desktop>

            <Mobile>
                <div className="p-2 my-2 shadow-separator">
                     <Input aria-label="Bad" placeholder="Search for products" className="p-2 border-2 border-border rounded-md"/>
                </div>
                {fakeArray.map( (data, i) => (
                    <ProductCard i = {i} />
                ))}
            </Mobile>
        </>
    )
}

export default ProductList
