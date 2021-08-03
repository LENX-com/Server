/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import CardInfo from '../components/Cards/CardInfo'
import UserCard from '../components/Cards/UserCard'
import PageTitle from '../components/Typography/PageTitle'
import { conversation, order, Information} from '../icons'
import RoundIcon from '../components/RoundIcon'
import {data}from '../utils/demo/tableData'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { NavLink, useRouteMatch } from 'react-router-dom'
import { HiChevronRight } from 'react-icons/hi'
import ChatElement from '../components/chat/ChatElement'
import OrderItem from '../components/orders/OrderItem' 
import { useSelector } from 'react-redux' 


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Dashboard = () => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const { path } = useRouteMatch();
  const address = "/user/dashboard"
  const { user }  = useSelector( state => state.auth);

  // pagination setup 
  const resultsPerPage = 10
  const totalResults = data.length

  // pagination change control
  function onPageChange(p) {
    setPage(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(data.slice((page - 1) * resultsPerPage, page * resultsPerPage))
  }, [page])

  return (
    <>
      <PageTitle>Dashboard</PageTitle>
      <UserCard user= {user.name} seen="3 days ago" image="not found" role="administrator"/>

        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3 mt-5">

        {/* Order Card */}
        <CardInfo title="My orders"
                  button="See all"
                  link= {`${address}/my-orders`}
          icon = {<RoundIcon
            icon={order}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />}>
            {<OrderItem/>}
        </CardInfo>
      

        {/* Conversation Card */}
        <CardInfo
          title="Conversations"
          button="See all"
          link = {`${address}/chat`} 
          icon = {<RoundIcon
            icon={conversation}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />}>
            {<ChatElement />}
        </CardInfo>

        {/* Resources */}
        <CardInfo title="Resources"          
            icon = {<RoundIcon
            icon={Information}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />}>
            <div className="text-base mt-3" >
             <NavLink to="/user/dashboard/faq">
              <div className="flex ml-4 justify-between hover:bg-Hover">
                <h1>FAQ</h1>
                  <div>
                    <HiChevronRight className="w-4 h-4 mr-3" aria-hidden="true" />
                  </div>
                </div>
              </NavLink>

              <NavLink to="/user/dashboard/faq">
                <div className="flex ml-4 justify-between hover:bg-Hover">
                <h1> What is LENX?</h1>
                  <div>
                    <HiChevronRight className="w-4 h-4 mr-3" aria-hidden="true" />
                  </div>
                </div>
              </NavLink>

              <NavLink to={`${address}/status-order`}>
                <div className="flex ml-4 justify-between hover:bg-Hover">
                <h1> Where is my order?</h1>
                  <div>
                    <HiChevronRight className="w-4 h-4 mr-3" aria-hidden="true" />
                  </div>
                </div>
              </NavLink>
              </div>  
        </CardInfo>
        </div>
    </>
  )
}

export default Dashboard

