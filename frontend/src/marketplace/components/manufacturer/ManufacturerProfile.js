import React, { useState } from 'react'
import Button from '../../../components/Buttons/Button'
import { AiOutlineHeart, AiTwotoneStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import ChatPop from '../chat/ChatPop'

const ManufacturerProfile = () => {
    return (
        <div className="relative my-2 min-w-sm border border-gray-100 mb-2 h-60 bg-white shadow-button">
        {/**/}
        <div className="w-full card__media">
            <img src="https://image.freepik.com/free-vector/abstract-binary-code-techno-background_1048-12836.jpg" className="h-32 w-96" />
        </div>
        <div className="absolute top-3 right-2 bg-white rounded-full p-2 ">
            <div className="flex font-bold">
                <AiOutlineHeart className="my-auto mr-2" />
                2.3k
            </div>
        </div>
        <div className="Center w-full">
            <div className="bg-cover bg-center shadow-button h-20 w-20 rounded-sm bg-white m-auto" style= {{backgroundImage: "url(https://http2.mlstatic.com/D_Q_NP_871989-MLA25801430807_072017-T.webp)"}}/>
            <div className="text-center">
                <h1 className="font-bold text-lg mt-1"> Cooperative </h1>
            </div>
         </div>
        <div className="p-2 absolute bottom-0 w-full">
          <div>
            <div className="grid grid-cols-2">
                <div className="ml-auto my-auto">
                    <Button className="border-2 border-Blue text-Blue rounded shadow-none mr-1"> Follow </Button>
                </div>
                <div className="mr-auto">
                    <ChatPop />
                </div>
            </div>
          </div>
            {/* <div className="flex justify-between">
                <div>
                    <Link>
                        <div className="flex underline">
                            <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-200 flex"> 
                            <AiTwotoneStar className="text-orange my-auto"/>
                            240 reviews
                            </h1>
                        </div>
                    </Link>
                </div>
            </div> */}
        </div>
        {/**/}
      </div>
    )
}

export default ManufacturerProfile
