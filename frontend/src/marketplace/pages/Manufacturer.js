import React, { useEffect, useState } from 'react'
import ProductList from '../components/manufacturer/ProductList'
import ManufacturerProfile from '../components/manufacturer/ManufacturerProfile'
import Card from '../../components/Cards/Card'
import { useSelector } from 'react-redux'
import AboutManufacturer from '../components/manufacturer/AboutManufacturer'
import ManufacturerReview from '../components/review/ManufacturerReview'


const Manufacturer = (props) => {

      const { isAuthenticated } = useSelector( state => state.auth);
    
     const [ section, setSection ] = useState({
         menu: 0,
         content: <ProductList />,
     })
    
     const {content, menu } = section;

     const Profile = () => (
        <Card className="grid grid-cols-3 gap-3 rounded-none my-2">
            <div className= {`text-center font-bold ${menu === 0  && "border-b-2 border-orange text-orange "}`}
                 onClick ={(() => setSection({
                                menu: 0,
                                content: <ProductList />
                           }))}>
                Products 
            </div>
            <div className= {`text-center font-bold ${menu === 1  && "border-b-2 border-orange text-orange "}`}
                 onClick ={(() => setSection({
                     menu: 1,
                     content: <ManufacturerReview />
                 }))}>
                Reviews
            </div>
            <div className= {`text-center font-bold ${menu === 2  && "border-b-2 border-orange text-orange "}`}
                 onClick ={(() => setSection({
                                menu:2,
                                content: <AboutManufacturer />
                 }))}>
                About
            </div>
        </Card>
     )

    return (
        <div>
            <div className="my-2">
                <ManufacturerProfile />

                <Profile />
                {content}
            </div>
            
        </div>
    )
}

export default Manufacturer
