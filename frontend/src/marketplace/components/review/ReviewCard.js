import React from 'react'
import moment from 'moment'


const ReviewCard = ({comment}) => {

     //function to capitalise first letter
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const MAX_LENGTH = 150

    return (
        <div className="review-box">
            <div className="flex">
                <div>
                    <img className="h-12 w-12 rounded-full" src= {comment.avatar} />
                </div>
                <div className="ml-2">
                    <div className="text-sm ">
                        <span className="font-semibold"> {comment.name} </span>
                        <div className="text-gray-500 text-xs "> { capitalizeFirstLetter(moment(comment.date).startOf('day').fromNow())} </div>
                    </div>
                </div>
            </div>
            <div className="mt-4">
             {`${comment.text.substring(0, MAX_LENGTH)}${comment.text.length > 150 ? "..." : ""}`}
            </div>
        </div>
    )
}

export default ReviewCard
