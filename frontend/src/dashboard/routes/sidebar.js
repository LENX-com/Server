const address = "/user/dashboard"
const routes = [
  {
    path: `${address}/dashboard`, // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: `${address}/my-orders`,
    icon: 'TablesIcon',
    name: 'My orders',
  },
  {
    path: `${address}/chat`,
    icon: 'FormsIcon',
    name: 'Chat',
  },
  {
    path: `${address}/blog`,
    icon: 'CardsIcon',
    name: 'Blogs',
  },
  {
    path: `${address}/wishlist`,
    icon: 'CardsIcon',
    name: 'Wishlist',
  },
  {
    path: `${address}/my-reviews`,
    icon: 'TablesIcon',
    name: 'My reviews',
  },
]

export default routes
