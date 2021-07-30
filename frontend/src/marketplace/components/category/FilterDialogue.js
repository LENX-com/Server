import { Dialog, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react'
import { Filter as FilterIcon } from '../../assets/icons'
import RadioBox from "../shop/RadioBox";
import { AiOutlineClose } from 'react-icons/ai'
import SortByTag from '../category/SortByTag'
import { Swiper, SwiperSlide } from 'swiper/react';

const FilterDialogue =({prices, handleFilters}) => {
  let [isOpen, setIsOpen] = useState(false)
  const [ currentStore, setCurrentStore ] = useState(false)
  const [ currentFilter, setCurrentFilter ] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const Stores = () => {
    const stores = [
        {
            name: "Cool Store",
            logo: ""
        },
        {
            name: "Boring Store",  
            logo: ""
        },
        {
            name: "Exciting Store",
            logo: ""
        },
        {
            name: "Big Store",
            logo: ""
        },
    ];
    return (
    <Swiper
    spaceBetween={20}
    slidesPerView={3}
    freeMode = { true }
    className="search"
    >
    {
        stores?.map( (store, i) => (
            <SwiperSlide
            className= {`${currentStore === i  ? "bg-Black text-white" : null } px-2 py-1 shadow-button m-2`} 
            onClick= {(() => setCurrentStore(i))}
            >
                { store.name }
            </SwiperSlide> 
        ))
    }
    </Swiper>
    )}

    const SortBy = () => {
        const Filters = [
            {
                name: "Price: Low to High",
            },
            {
                name:" Price: High to Low"
            },
            {
                name: "Avg. Customer Review",
            },
            {
                name: "Newest Arrivals"
            }
        ];

        return (
            <>
            { Filters?.map( (data) => (
                <div
                    className= {`${currentFilter === data.name  ? "bg-Black text-white" : "" } px-2 py-1 shadow-button m-2 rounded-md bg-Grey-sd text-sm` } 
                    onClick= {(() => setCurrentFilter(data.name))
                    }>
                    { data.name }
                </div>
            ))}
            </>
        )
    }


  return (
    <>
      <div>
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-lightBlack shadow-button rounded-md  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <FilterIcon />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-y-auto"
          style={{zIndex: '999'}} 
          onClose= { () => setIsOpen(false) }
          open= { isOpen }
        >
          <div className="min-h-screen text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-bottom"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-t-xl">
                <Dialog.Title
                  as="div"
                  className="border-b-2 border-Grey border-solid"
                >
                  <div className="p-5 flex"> 
                  <h2 className="text-lg font-medium leading-6 text-gray-900"> Filter </h2>
                  <div onClick={ () => setIsOpen(false) } className="ml-auto text-xl text-white rounded-full p-2 bg-Black">
                      <AiOutlineClose  />
                  </div>
                  </div> 
                </Dialog.Title>
                <div className="p-6">
                <div className="mt-2">
                  <div> Sort by price </div>
                    <RadioBox
                        prices={prices}
                        handleFilters={handleFilters}
                    />
                </div>


                <div className="my-4 border-t-2 border-Grey border-solid">
                  <div> Sort by tag </div>
                    <div className="grid grid-cols-2 gap-4 mt-2 text-center">
                        <SortByTag />
                    </div>
                </div>

                <div className="my-4 border-t-2 border-Grey border-solid">
                  <div> Stores </div>
                    <div>
                        <Stores />
                    </div>
                </div>

                
                <div className="my-4 border-t-2 border-Grey border-solid">
                  <div> Sort by </div>
                    <div className="grid grid-cols-2 gap-4">
                        <SortBy />
                    </div>
                </div>

                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default FilterDialogue