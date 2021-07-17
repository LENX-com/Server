import { Popover, Transition } from '@headlessui/react'
import { AiOutlineSmallDash, AiOutlineShoppingCart, AiOutlineProfile } from 'react-icons/ai'
import { useRef, useEffect } from 'react'

const solutions = [
  {
    name: 'Products',
    description: 'Measure actions your users take',
    href: '##',
    icon: AiOutlineShoppingCart,
  },
  {
    name: 'Company Profile',
    description: 'Create your own targeted content',
    href: '##',
    icon: AiOutlineProfile,
  },
]


 const ManufacturerProfile = () => {
     
const chatBodyRef= useRef(0)

 useEffect(() => {
    chatBodyRef.current.focus();
  }, []);
    
  return (
    <div className=" max-w-sm relative" ref={chatBodyRef}>
      <Popover className="relative mobile:w-64">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                text-Black absolute right-3 group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <AiOutlineSmallDash
                className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
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
              show={true}
            >
              <Popover.Panel className="-ml-4 absolute top-6 z-50 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className=" Border flex items-center p-2 -m-3 transition duration-150 ease-in-out  hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                          <item.icon className="icon-orange" aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="p-4 bg-gray-50">
                    <a
                      href="##"
                      className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md  focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-red-400 ">
                          Clear Chat
                        </span>
                      </span>
                    </a>
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


export default ManufacturerProfile

