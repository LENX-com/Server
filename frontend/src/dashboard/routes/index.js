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
const Chat = lazy(() => import('../pages/Chat'))
const Wishlist = lazy(() => import('../pages/Wishlist'))
const AddNewPost = lazy(() => import('../pages/AddNewPost'))
const Profile = lazy(() => import('../pages/Profile'))


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
    path: `${address}/chat`,
    component: Chat,
  },
  {
    path: `${address}/wishlist`,
    component: Wishlist,
  },
]

export default routes
