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
    path: `${address}/store`,
    icon: 'FormsIcon',
    name: 'Store',
  },
]

export default routes
