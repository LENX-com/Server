import { lazy } from 'react'

const address = "/marketplace"

const Categories = lazy(() => import('../pages/Categories'))
const Category = lazy(() => import('../pages/Category'))
const Product = lazy(() => import('../pages/Product'))
const ProductReview = lazy(() => import('../pages/ProductReview'))
const Manufacturer = lazy(() => import('../pages/Manufacturer'))
const Blog = lazy(() => import('../../components/Blog/Blog'))


const routes = 
[
  {
    path: `${address}/categories`, // the url
    component: Categories, // view rendered
  },
  {
    path: `${address}/category/:categoryId`, 
    component: Category, 
  },
  {
    path: `${address}/category/products/:productId`, 
    component: Product, 
  },
  {
    path: `${address}/category/products/reviews/:productId`, 
    component: ProductReview, 
  },
  {
    path: `${address}/manufacturer/:manufacturerId`, 
    component: Manufacturer, 
  },
  {
    path: `${address}/manufacturer/:BlogId`, 
    component: Blog, 
  }
]

export default routes
