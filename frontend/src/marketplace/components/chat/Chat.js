import React, { useState } from 'react'
import Avatar from '../../../components/Avatar/Avatar'
import { AiFillWechat, AiFillSecurityScan } from "react-icons/ai";
import Button from '../../../components/Buttons/Button'

const Chat = () => {
      const [ manufacturer, setManufacturer ] = useState({
      state:false,  
      name:"pedro",
  });
    return (
        <div className="relative">
            <div className="mt-3">
                <div className="p-3">
                    <div className="p-2 rounded-lg bg-orange-light flex mt-1 mb-4 mr-3">
                        <AiFillSecurityScan className="my-auto text-xl text-white h-10 w-10" />
                        <h1 className="text-sm text-white ml-2">To protect your orders，always communicate and pay through the LENX website. </h1>
                    </div>
                    <div className="my-3 text-sm"
                         onClick ={(() => setManufacturer({
                                            state: true,
                                            name: "Pedro"
                            }))}
                    >
                        <Avatar src="https://avatars3.githubusercontent.com/u/11801238?v=4"/>
                        Pedro Rondale
                    </div>
                    {   manufacturer.state &&
                        <div className="mt-4 mb-2">
                            {`Contact ${manufacturer.name}`}
                        </div>
                    }
                    <div>
                        <input className="shadow appearance-none border rounded py-2 h-28 text-Black w-full focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent p-2" />
                    </div>
                </div>
            </div> 
            <div className="sticky bottom-0 border-t-2 border-Grey-border p-2 bg-white w-full">
                <div className="grid px-2">
                    <Button className="bg-Black text-white"> Send message </Button>
                </div>
            </div>
        </div>
    )
}

export default Chat
