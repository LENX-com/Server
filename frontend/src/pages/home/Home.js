import React, {useState, useEffect} from 'react'
import {getProducts} from '../../components/ApiCore'
import ProductCard from '../../components/product/ProductCard' 
import CategoryList from '../../components/category/CategoryList'

function Home() {
    const [ producstBySell, setProductsBySell ] = useState([])
    const [ productsByArrival, setProducstByArrival ] = useState ([])
    const [ error, setError ] = useState(false)  

    const loadProductsBySell =() => {
        getProducts('sold').then(data => {
            if(data.error) {
                setError(data.error)
            } else {
                setProductsBySell(data.data)
                console.log(data, "data for produt by sell")
            }
        })
    }

    const loadProductsByArrival =() => {
        getProducts('createdAt').then(data => {
            if(data.error) {
                setError(data.error)
            } else {
                setProducstByArrival (data.data)
                console.log(data, "data for produt by arrival")
            }
        })
    }

    useEffect(() => {
        loadProductsByArrival()
        loadProductsBySell()
    }, [])

    return ( 
        <>
            <div className="container px-5 py-24 mx-auto">
            <h2 className="mb-4">New Arrivals</h2>
              <div className="flex flex-wrap -m-4">
                  {productsByArrival && productsByArrival.map((product, i) => (
                    <ProductCard
                    product={product}
                    key={i}
                    />
                ))}
              </div>
            </div>

            <div className="container px-5 py-24 mx-auto">
              <h2 className="mb-4">Best sellerss</h2>
                <div className="flex flex-wrap -m-4">
                  {producstBySell && producstBySell.map((product, i) => (
                    <ProductCard
                    product={product}
                    key={i}
                    />
                ))}
              </div>
            </div>

           <div className="container px-5 py-24 mx-auto">
              <h2 className="mb-4">By arrival</h2>
                <div className="flex flex-wrap -m-4">
                  {productsByArrival.map((product, i) => (
                    <ProductCard
                    product={product}
                    key={i}
                    />
                ))}
              </div>
            </div>
            <CategoryList />
        </>
    )
}

export default Home



