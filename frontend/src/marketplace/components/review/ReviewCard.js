import React from 'react'


const ReviewCard = ({comment}) => {
    return (
        <div className="p-2 border-Grey-border border solid rounded-md bg-white">
            <div className="flex">
                <div>
                    <img className="h-12 w-12 rounded-full" src= {comment.avatar} />
                </div>
                <div className="ml-2">
                    <div className="text-sm ">
                        <span className="font-semibold"> {comment.name} </span>
                        <div className="text-gray-500 text-xs ">{comment.title}</div>
                    </div>
                </div>
            </div>
            <div>
                { comment.text }
            </div>
        </div>
    )
}

export default ReviewCard
