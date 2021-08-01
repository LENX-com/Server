import React from 'react'
import Card from '../../../components/Cards/Card'
import Button from '../../../components/Buttons/Button'
import { Link } from "react-router-dom"
import { AiOutlineRight } from 'react-icons/ai'

const PopularItems = () => {

    const PopularProducts = [
        {
            name: "3d Printer",
            photo: "https://http2.mlstatic.com/D_Q_NP_2X_922205-MLA41374470987_042020-G.webp"
        },
        {
            name: "Card",
            photo: "https://images-na.ssl-images-amazon.com/images/I/51QKvd62vVL._AC_SY240_.jpg"
        },
        {
            name: "Mouse",
            photo: "https://images-na.ssl-images-amazon.com/images/I/51QKvd62vVL._AC_SY240_.jpg"
        },
        {
            name: "Mouse",
            photo: "https://images-na.ssl-images-amazon.com/images/I/51QKvd62vVL._AC_SY240_.jpg"
        }
    ]
    
    return (
        <Card title="Popular Products">  
            { PopularProducts.map((data)=> (
                <div className="my-3 flex items-center lg:w-3/5 mx-auto sm:flex-row shadow-button rounded-md p-1 bg-white">
                    <div className=" bg-contain bg-center h-36 w-36 bg-no-repeat " style= {{background: `url("${data.photo}")`}}>
                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 mb-3">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-2"> { data.name } </h2>
                            <Link to="">
                                <Button className= "bg-Blue text-white">
                                    Source now
                                </Button>
                            </Link>
                    </div>
                </div>
            ))}
            <div className="flex">
                <Link to="">
                    Source More 
                </Link>
                <AiOutlineRight className="ml-2 my-auto"/>            
            </div>
        </Card>
    )
}

export default PopularItems
