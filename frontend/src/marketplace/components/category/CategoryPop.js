import { Popover, Transition } from '@headlessui/react'
import { AiOutlineDown } from 'react-icons/ai'
import { AiFillBank } from "react-icons/ai";


const CategoryPop = ({children}) => {
  return (
    <div className="w-full max-w-sm px-4">
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                text-white group bg-orange-700 px-3 py-2 inline-flex items-center text-base font-medium rounded-md bg-lightBlack`}
            >
              <span className="text-white text-sm"> Categories </span>
              <AiOutlineDown
                className={`${open ? '' : 'text-opacity-70 text-white'}
                   h-4 w-4 transition ease-in-out duration-150 text-sm ml-1 `}
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
                <div className="overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 grid-cols-2 bg-white p-7 lg:grid-cols-2">
                 {children}
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