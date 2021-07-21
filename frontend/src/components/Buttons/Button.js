import React from 'react'

const Button = ({children, className}) => {
    return (
        <button className= {`shadow-button rounded cursor-pointer hover:shadow-hover text-base ${className}`} >
            {children}
        </button>
    )
}

export default Button

