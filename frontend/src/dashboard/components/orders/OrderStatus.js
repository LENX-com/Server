import React from 'react'
import Questions from './Questions'
import { HiArrowRight } from 'react-icons/hi'
import Button from '../elements/Button'
import { Link } from 'react-router-dom'

const OrderStatus = () => {
    return (
    <div className=" relative flex flex-col mb-10">
            <div className="bg-white shadow-md  rounded-3xl p-4">
              <div className="flex-none lg:flex">
                <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                  <img src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Just a flower" className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl" />
                </div>
                <div className="flex-auto ml-3 justify-evenly py-2">
                  <div className="flex flex-wrap ">
                      <div className="absolute bottom-0 top-0 items-center pt-2 mb-3">
                           <div class="mt-4">
                              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                              <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                              <p class="mt-1">$16.00</p>
                            </div>
                        </div>
                    <div className="flex-none text-xs text-blue-700 font-medium ">
                       <h2 class="text-gray-900 title-font text-lg font-medium"> What is happening to my order? </h2>
                       <Questions />
                    </div>
                  </div>
                  <p className="mt-3" />
                  <div className="flex p-4 pb-2 border-t border-gray-200 " />
                  <div className="absolute bottom-2 right-5 flex space-x-3 text-sm font-medium">
                    <Button className="flex">
                        <Link to="" className="flex text-Black font-bold">
                          Proceed 
                          <HiArrowRight className="ml-3 mt-1" />
                        </Link> 
                    </Button>
                  </div>
                </div>
              </div> 
            </div>
          </div>

    )
}

export default OrderStatus







