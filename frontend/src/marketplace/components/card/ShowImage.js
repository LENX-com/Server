import React from 'react'
import {API} from '../../../config'
function ShowImage({item, url, clase}) {
    return (
        <>
            <img src={`${url}`} alt={item.name} className={clase}/>
        </>
    )
}

export default ShowImage 
