import React from 'react'


const ReviewCard = () => {
    return (
        <div className="p-2 border-Grey-border border solid rounded-md bg-white">
            <div className="flex">
                <div>
                    <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                </div>
                <div className="ml-2">
                    <div className="text-sm ">
                        <span className="font-semibold">Dallin Baumbach</span>
                        <div className="text-gray-500 text-xs ">Software Engineer at Tesla, Inc</div>
                    </div>
                </div>
            </div>
            <div>
                This product was great, I am very satisfied
            </div>
        </div>
    )
}

export default ReviewCard
