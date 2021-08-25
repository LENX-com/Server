import React from 'react'
import routes from '../../routes/sidebar'
import { NavLink, Route, Link, useRouteMatch } from 'react-router-dom'
import * as Icons from '../../icons'
import SidebarSubmenu from './SidebarSubmenu'
import { Button } from '@windmill/react-ui'
import Logo from '../../../assets/Logo 1 white gif.gif'

function Icon({ icon, ...props }) {
  const Icon = Icons[icon]
  return <Icon {...props} />
}

function SidebarContent() {
  const { url } = useRouteMatch()
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <Link to={url}>
      <img className="ml-6" src={Logo} alt="logo" style={{"width":"80%"}}>
      </img>
      </Link>
      <ul className="mt-6">
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative px-6 py-3" key={route.name}>
              <NavLink
                exact
                to={route.path}
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                activeClassName="text-orange dark:text-gray-100"
              >
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg"
                    style={{"background":"#ff5722"}}
                    aria-hidden="true"
                  ></span>
                </Route>
                <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
                <span className="ml-4">{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
      <div className="px-6 my-6">
        <Link to="/">
          <Button className="link-marketplace bg-orange">
            Explore Marketplace
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default SidebarContent
