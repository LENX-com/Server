import React from 'react'
import { AiOutlineAppstore } from "react-icons/ai";
import { Company, Shipping, Chat } from '../../assets/icons'

const LinkFeatures = () => {


    const Feature = [
        {
            name: "Buy directly from manufacturers",
            icon: <Company />
        },
        {
            name: " Fast shipping ",
            icon: <Shipping />
        },
        {
            name: " Easy chat",
            icon: <Chat />  
        }
    ]
 
    const LinkFeature = () => {
        return (
            <div className= "grid grid-cols-3 gap-3">
                    {Feature.map((data, i) => (
                    <div className="wrapper">
                         <div className="font-xl p-2 h-16 w-16 text-center">
                            {data.icon}
                        </div>
                        <div className="icon-wrapper text-center">
                            {data.name} 
                        </div>
                    </div>
                    ))}
            </div>
        )
    }

    return (
        <>
         <LinkFeature />   
        </>
    )
}

export default LinkFeatures


