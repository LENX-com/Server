import React from 'react'
import  logo  from '../../assets/black logo.gif'

const BannerBottom = () => {
    return (
        <div className="w-full p-4 mt-3">
            <div className="w-1/4 m-auto mobile:w-2/4">
                <img src={logo} alt={"cool"}/>
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
