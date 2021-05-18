const address = "/user/dashboard"
const routes = [
  {
    path: `${address}/dashboard`, // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: `${address}/chat`,
    icon: 'FormsIcon',
    name: 'Chat',
  },
  {
    path: `${address}/add-post`,
    icon: 'CardsIcon',
    name: 'Posts',
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
  // {
  //   path: `${address}/charts`,
  //   icon: 'ChartsIcon',
  //   name: 'Charts',
  // },
  // {
  //   path: `${address}/buttons`,
  //   icon: 'ButtonsIcon',
  //   name: 'Buttons',
  // },
  // {
  //   path: `${address}/modals`,
  //   icon: 'ModalsIcon',
  //   name: 'Modals',
  // },
  // {
  //   path: `${address}/tables`,
  //   icon: 'TablesIcon',
  //   name: 'Tables',
  // },
  {
    path: `${address}/my-orders`,
    icon: 'TablesIcon',
    name: 'My orders',
  },
  {
    icon: 'PagesIcon',
    name: 'Pages',
    routes: [
      // submenu
      {
        path: '/login',
        name: 'Login',
      },
      {
        path: '/create-account',
        name: 'Create account',
      },
      {
        path: '/forgot-password',
        name: 'Forgot password',
      },
      {
        path: '/app/404',
        name: '404',
      },
      {
        path: '/app/blank',
        name: 'Blank',
      },
    ],
  },
]

export default routes
