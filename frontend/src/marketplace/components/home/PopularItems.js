import React from 'react'
import Card from '../../../components/Cards/Card'
import Button from '../../../components/Buttons/Button'
import { Link } from "react-router-dom"

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
        }
    ]
    
    return (
        <Card title="Popular Products">  
            { PopularProducts.map((data)=> (
                <div className="my-2 flex items-center lg:w-3/5 mx-auto sm:flex-row border-2 border-border rounded-sm">
                    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-sm bg-Grey text-Black flex-shrink-0">
                        <img src= {data.photo} alt= {data.name} >
                        </img>
                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 mb-3">
                        <h2 className="text-gray-900 text-lg title-font font-medium mb-2"> { data.name } </h2>
                            <Link to="">
                                <Button color= "orange">
                                    Source now
                                </Button>
                            </Link>
                    </div>
                </div>
            ))}
           <Link to="">
                Source More 
            </Link>            
        </Card>
    )
}

export default PopularItems
