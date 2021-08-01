import React  from 'react'
import { NavLink} from 'react-router-dom'
import { HiChevronRight } from 'react-icons/hi'

const CategoriesList = ({categories}) => {


    return (
        <div class="grid grid-cols-2 gap-3 my-4">
            {categories?.map(data => (
                <NavLink to= {`/marketplace/category/${data.name}`} key={data.name}>
                    <div className=" bg-white rounded p-2 shadow-button relative">
                    <div className="flex ml-2 justify-between hover:bg-Hover">
                        <div>
                        <div className="my-auto">
                            <div className="absolute top-2 left-2 text-base lg:text-2xl">
                                { data.name }
                            </div>
                            <div className="flex text-sm text-orange-light absolute bottom-3 left-2 lg:text-lg">
                                See more 
                                <HiChevronRight className="text-2xl" aria-hidden="true" />
                            </div> 
                        </div>
                        </div>
                        <div className="h-20 rounded flex items-center justify-center lg:h-40">
                            <div className="w-20 h-20 lg:h-40 lg:w-40">
                                <img src="https://d33wubrfki0l68.cloudfront.net/be38c60bf34b2376b393e444d2da9a6b2dd54bf4/f1dfc/assets/img/unlicensed/shoes-3.png" alt="product" className="object-cover" />
                            </div>
                        </div>
                    </div>
                    </div>
                </NavLink> 
            ))}
        </div>
    )
}

export default CategoriesList
