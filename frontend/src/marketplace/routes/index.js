import { lazy } from 'react'
const address = "/marketplace"

const Categories = lazy(() => import('../pages/Categories'))
const Category = lazy(() => import('../pages/Category'))

const routes = 
[
  {
    path: `${address}/categories`, // the url
    component: Categories, // view rendered
  },
  {
    path: `${address}/category/:categoryId`, // the url
    component: Category, // view rendered
  }
]

export default routes
