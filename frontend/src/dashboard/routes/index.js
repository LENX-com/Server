import { lazy } from 'react'
const address = "/user/dashboard"

const Dashboard = lazy(() => import('../pages/Dashboard'))
const Forms = lazy(() => import('../pages/Forms'))
const Cards = lazy(() => import('../pages/Cards'))
const Charts = lazy(() => import('../pages/Charts'))
const Buttons = lazy(() => import('../pages/Buttons'))
const Modals = lazy(() => import('../pages/Modals'))
const Tables = lazy(() => import('../pages/Tables'))
const Page404 = lazy(() => import('../pages/404'))
const Blank = lazy(() => import('../pages/Blank'))
const MyOrders = lazy(() => import('../pages/MyOrders'))
const Blog = lazy(() => import('../pages/Blog'))
const Wishlist = lazy(() => import('../pages/Wishlist'))
const AddNewPost = lazy(() => import('../pages/AddNewPost'))
const Profile = lazy(() => import('../pages/Profile'))
const Reviews = lazy(() => import('../pages/Reviews'))
const FAQ = lazy(() => import('../pages/FAQ'))
const SingleOrder = lazy(() => import('../pages/SingleOrder'))
const WriteReview = lazy(() => import('../pages/WriteReview'))
const SingleBlog = lazy(() => import('../pages/SingleBlog'))
const FindStatusOrder = lazy(() => import('../pages/FindStatusOrder'))
const FetchConversation = lazy(() => import('../../chat/FetchConversation'))


const routes = 
[
  {
    path: `${address}/dashboard`, // the url
    component: Dashboard, // view rendered
  },
  {
    path: `${address}/forms`,
    component: Forms,
  },
  {
    path: `${address}/cards`,
    component: Cards,
  },
  {
    path: `${address}/charts`,
    component: Charts,
  },
  {
    path: `${address}/buttons`,
    component: Buttons,
  },
  {
    path: `${address}/modals`,
    component: Modals,
  },
  {
    path: `${address}/tables`,
    component: Tables,
  },
  {
    path: `${address}/404`,
    component: Page404,
  },
  {
    path: `${address}/profile`,
    component: Profile,
  },
  {
    path: `${address}/add-post`,
    component: AddNewPost,
  },
  {
    path: '/blank',
    component: Blank,
  },
  {
    path: `${address}/my-orders`,
    component: MyOrders,
  },
  {
    path: `${address}/blog`,
    component: Blog,
  },
  {
    path: `${address}/wishlist`,
    component: Wishlist,
  },
  {
    path: `${address}/my-reviews`,
    component: Reviews,
  },
  {
    path: `${address}/faq`,
    component: FAQ,
  },
  {
    path: `${address}/order`,
    component: SingleOrder,
  },
   {
    path: `${address}/write-review`,
    component: WriteReview,
  },
   {
    path: `${address}/blog/:id`,
    component: SingleBlog,
  },  
    {
    path: `${address}/status-order`,
    component: FindStatusOrder,
  },
      {
    path: `${address}/conversation`,
    component: FetchConversation,
  },
  
]

export default routes
