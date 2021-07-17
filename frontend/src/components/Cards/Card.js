import React from 'react'
import SectionTitle from '../Typography/SectionTitle'

const Card = ({children, title}) => {
    return (    
        <div className=" bg-white rounded p-3 shadow-button relative my-2">
            {title && <SectionTitle> {title} </SectionTitle>}
            {children}
        </div>
    )
}

export default Card
