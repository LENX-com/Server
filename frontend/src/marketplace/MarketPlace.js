import React, { Suspense } from 'react'
import ThemedSuspense from './containers/ThemesSuspense'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './Marketplace.scss'

const MarketPlace = () => {
    return (
    <BrowserRouter>
    <Suspense fallback={<ThemedSuspense />}>
        <App />
    </Suspense> 
    </BrowserRouter>
    )
}

export default MarketPlace
