import React  from 'react'
import { NavLink} from 'react-router-dom'
import { HiChevronRight } from 'react-icons/hi'
import Button from '../../../components/Buttons/Button'

const CategoriesList = ({categories}) => {


    return (
        <div className="p-3">
        <div class="grid grid-cols-1 gap-3 my-4">
            {categories?.map(data => (
<<<<<<< HEAD
                    <div className=" bg-cover bg-center rounded p-2 shadow-button relative h-36" style = {{background : `url("https://i.etsystatic.com/15381940/d/il/daf379/1277057015/il_340x270.1277057015_anlg.jpg?version=0")`}}>
                        <NavLink to= {`/marketplace/category/${data.name}`} key={data.name}>
                            <div className="flex ml-2 justify-between hover:bg-Hover">
                                <div>
                                <div className="my-auto">
                                    <div className="absolute top-2 left-4  lg:text-2xl text-2xl font-bold text-white">
                                        { data.name }
                                    </div>
                                    <Button className="text-base text-white bg-Black absolute bottom-3 left-4 lg:text-lg rounded-full">
                                        Shop 
                                    </Button> 
                                </div>
                                </div>
||||||| 942a279
                <NavLink to= {`/marketplace/${data.name}`} key={data.name}>
                    <div className=" bg-white rounded p-2 shadow-button relative">
                    <div className="flex ml-2 justify-between hover:bg-Hover">
                        <div>
                        <div className="my-auto">
                            <div className="absolute top-2 left-2 text-base lg:text-2xl">
                                { data.name }
=======
                <NavLink to= {`/marketplace/category/${data.name}`} key={data.name}>
                    <div className=" bg-white rounded p-2 shadow-button relative">
                    <div className="flex ml-2 justify-between hover:bg-Hover">
                        <div>
                        <div className="my-auto">
                            <div className="absolute top-2 left-2 text-base lg:text-2xl">
                                { data.name }
>>>>>>> e4917cbb9d552960a905005267df8ca00a8c8612
                            </div>
                        </NavLink> 
                    </div>
            ))}
        </div>
        </div>
    )
}

export default CategoriesList
