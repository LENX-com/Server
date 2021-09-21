import React from 'react'

function Main({ children }) {
  return (
    <main className="">
      <div className="container grid mx-auto">{children}</div>
    </main>
  )   
}

export default Main
