import { Popover, Transition } from '@headlessui/react'
import { AiOutlineDown } from 'react-icons/ai'
import { AiFillBank } from "react-icons/ai";


const CategoryPop = ({categories}) => {
  return (
    <div className="w-full max-w-sm px-4">
      <Popover className="bg-lightBlack shadow-button rounded-md">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                text-white group bg-orange-700 px-3 py-2 inline-flex items-center text-base font-medium  shadow-button`}
            >
              <span className="text-white"> Categories </span>
              <AiOutlineDown
                className={`${open ? '' : 'text-opacity-70 text-Grey'}
                   h-4 w-4 group-hover:text-opacity-80 transition ease-in-out duration-150 text-sm `}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
              show= {true}
            >
              <Popover.Panel className="absolute bottom-0 z-10 w-screen max-w-sm mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 grid-cols-2 bg-white p-7 lg:grid-cols-2">
                    {categories?.map((item) => (
                      <div
                        key={item.name}
                        style = {{background: '#F6F7F8'}}
                        className="rounded-md items-center p-2 -m-3 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-orange-light sm:h-12 sm:w-12 text-2xl text-center m-auto">
                          <AiFillBank aria-hidden="true" />
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

export default CategoryPop