import { lazy } from 'react'
const address = "/marketplace"

const Categories = lazy(() => import('../pages/Categories'))
const Category = lazy(() => import('../pages/Category'))
const Product = lazy(() => import('../pages/Product'))
const ProductReview = lazy(() => import('../pages/ProductReview'))


const routes = 
[
  {
    path: `${address}/categories`, // the url
    component: Categories, // view rendered
  },
  {
    path: `${address}/category/:categoryId`, // the url
    component: Category, // view rendered
  },
  {
    path: `${address}/category/products/:productId`, // the url
    component: Product, // view rendered
  },
  {
    path: `${address}/category/products/reviews/:productId`, // the url
    component: ProductReview, // view rendered
  }
]

export default routes
