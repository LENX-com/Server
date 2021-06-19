import React from 'react'

const Avatar = ( {src } ) => {
    return (
            <div className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-600 min-w-max absolute flex bg-purple-200 text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
                <img className="h-24 w-24 md rounded-full relative" src= {src} alt="avatar" />
                <div className="absolute" />
            </div>
    )
}

export default Avatar
