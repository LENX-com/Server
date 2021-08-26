const address = "/admin/dashboard"
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
    path: `${address}/reviews`,
    icon: 'FormsIcon',
    name: 'Reviews',
  },
  {
    path: `${address}/products`,
    icon: 'FormsIcon',
    name: 'Products',
  },
]

export default routes
