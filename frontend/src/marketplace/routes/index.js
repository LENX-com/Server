import { lazy } from "react";

const address = "/marketplace";

const Categories = lazy(() => import("../pages/Categories"));
const Category = lazy(() => import("../pages/Category"));
const Product = lazy(() => import("../pages/Product"));
const ProductReview = lazy(() => import("../pages/ProductReview"));
const Stores = lazy(() => import("../pages/Stores"));
const Manufacturer = lazy(() => import("../pages/Manufacturer"));
const Blog = lazy(() => import("../../components/Blog/Blog"));
const Search = lazy(() => import("../pages/SearchResult"));
const Questions = lazy(() => import('../pages/Questions'))

const routes = [
  {
    path: `${address}/categories`, // the url
    component: Categories, // view rendered
  },
  {
    path: `${address}/search`, // the url
    component: Search, // view rendered
    
  },
  {
    path: `${address}/category/:categoryId`,
    component: Category,
  },
  {
    path: `${address}/products/:productId`,
    component: Product,
  },  
  { path: `${address}/products/reviews/:productId`, 
    component: ProductReview, 
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
  },
  {
    path: `${address}/stores`,
    component: Stores,
  },
  {
    path: `${address}/questions/:productId`, 
    component: Questions, 
  }
];
export default routes;
