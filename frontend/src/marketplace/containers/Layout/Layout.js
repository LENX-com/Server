import React, { Suspense,lazy } from 'react'
import { Switch, Route, useLocation} from 'react-router-dom'
import Header from '../../components/header/Header'
import Main from '../Main'
import Footer from '../../components/footer/Footer'
import ThemedSuspense from '../ThemesSuspense'
import routes from '../../routes'


const Page404 = lazy(() => import('../../../pages/404'))

function Layout() {
  let location = useLocation()
  console.log(location)


  return (
    <div
      className={`flex h-screen`}
    >
      <div className="flex flex-col flex-1 w-full">
        <Header />
         <Main>
          <Suspense f-allback={<ThemedSuspense />}>
            <Switch>
            {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    exact={true}  
                    path={`${route.path}`}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null
              })}
              <Route component={Page404} />
            </Switch>
          </Suspense>
        </Main>
       <Footer />
      </div>
    </div>
  )
}

export default Layout
  