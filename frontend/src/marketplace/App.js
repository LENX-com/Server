import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, useRouteMatch} from 'react-router-dom'
// import Posts from "./components/posts/Posts";
// import Post from "./components/post/Post";
// import Category from "./pages/categories/Category";
// import Checkout from "./components/checkout/Checkout";
// import Manufacturer from "./manufacturer/Manufacturer";
// import Categories from "./pages/categories/Categories";
// import SingleCategory from "./pages/categories/SingleCategory";
// import Signin from "./dashboard/components/user/Signin";
// import Signup from "./dashboard/components/user/Signup";
// import Shop from "./components/shop/Shop";
// import Cart from "./components/cart/Cart";

const Layout = lazy(() => import('./containers/Layout/Layout'))

function App() {
  const { path } = useRouteMatch();
  console.log( path )

  return (
    <>
      <Router>
        <Switch>
          <Route path= {`${path}`} component={Layout} />
          {/* <Route path="/shop" exact component={Shop} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/category" exact component={SingleCategory} />
        <Route exact path="/posts/" component={Posts} />
        <Route exact path="/posts/:id" component={Post} />
        <Route exact path="/category/:id" component={Category} />
        <Route exact path="/manufacturer/:userId" component={Manufacturer} />
        <Route exact path="/checkout" component={Checkout} /> */}
        </Switch>
      </Router>
    </>
  )
}

export default App
