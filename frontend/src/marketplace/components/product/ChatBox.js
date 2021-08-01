import React from 'react'
import Card from '../../../components/Cards/Card'
import { MdStarBorder, MdStar } from 'react-icons/md'
import Rating from 'react-rating'
import ChatPop from '../chat/ChatPop'

const ChatBox = () => {
    return (
        <Card>
            <div className="justify-between flex">
                <div className="flex">
                    <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                        <div className="ml-2 my-auto">
                            <div className="text-sm ">
                                <span className="font-semibold"> Manufacturer Name </span>
                            </div>
                        </div>
                    </div>
                <div>
                    <Rating
                    className="mt-2 text-base"
                    emptySymbol= { <MdStarBorder/> }
                    fullSymbol= { <MdStar/> }
                    readonly
                    initialRating={4.5}
                    />
                </div>
            </div>
            
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, cum commodi a omnis
            </div>

            <div>
            <ChatPop />
            </div>

        </Card>
    )
}

export default ChatBox
