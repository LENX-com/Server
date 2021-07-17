import React from 'react'

const Button = ({children, color}) => {
    return (
        <button className= {`shadow-button rounded cursor-pointer hover:shadow-hover text-sm ${color === "orange" ? "bg-orange-light text-white" : "bg-white text-Black"}`} >
            {children}
        </button>
    )
}

export default Button

