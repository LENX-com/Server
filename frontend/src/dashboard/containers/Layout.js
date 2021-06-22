import React, { useContext, Suspense, useEffect, lazy } from 'react'
import { Switch, Route, Redirect, useLocation, useRouteMatch } from 'react-router-dom'
import routes from '../routes'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Main from '../containers/Main'
import ThemedSuspense from '../components/ThemedSuspense'
import { SidebarContext } from '../context/SidebarContext'
import ChatApp from '../../chat/ChatApp'

const Page404 = lazy(() => import('../pages/404'))

function Layout() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
  let location = useLocation()
  const { path } = useRouteMatch();
  console.log(path)

  useEffect(() => {
    closeSidebar()
  }, [location])

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${isSidebarOpen && 'overflow-hidden'}`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
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
                <Route path={`${path}/chat`} component = {ChatApp} />
              
              <Redirect exact from= {`${path}`} to={`${path}/dashboard`} />
              <Route component={Page404} />
            </Switch>
          </Suspense>
        </Main>
      </div>
    </div>
  )
}

export default Layout
  