import React from 'react'
import  logo  from '../../assets/black logo.gif'

const BannerBottom = () => {
    return (
        <div className="w-full h-60 p-4 mt-3">
            <div className="w-2/3 m-auto">
                <img src={logo} alt={"cool"} />
            </div>
            <div className="text-Black font-bold text-xl text-center">
                Think differently
            </div>
            <div className="text-Black font-base text-center">
                LENX is the one-stop shop for unique and unexpected finds from outstanding startups.
                Bold products from real people - curated by us, just for you.
            </div>
        </div>
    )
}

export default BannerBottom
