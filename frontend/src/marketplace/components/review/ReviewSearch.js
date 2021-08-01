import React from 'react'
import { useHistory } from 'react-router-dom'
import {MdArrowBack} from 'react-icons/md'


const ReviewSearch = () => {
    const history = useHistory();

    return (
        <div className="relative">
            <div className=" absolute top-2 left-0">
                <div className="flex">
                   <button
                      className="rounded-full w-8 h-8 bg-Grey-light p-0 border-0 inline-flex items-center justify-center text-white ml-4"
                      onClick={() => setTimeout(() => history.goBack(), 150)}>
                        <MdArrowBack className="w-5 h-5"/>
                    </button>
                    </div>
                </div>
        </div>
    )
}

export default ReviewSearch
