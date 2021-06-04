import React, { useState, useEffect } from 'react'
import CardInfo from '../components/Cards/CardInfo'
import UserCard from '../components/Cards/UserCard'
import Stories from '../components/stories/Stories'
import PageTitle from '../components/Typography/PageTitle'
import { ChatIcon, CartIcon, conversation, order, Information} from '../icons'
import RoundIcon from '../components/RoundIcon'
import response from '../utils/demo/tableData'
import Conversations from '../components/chat/Conversations'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { isAuthenticated } from '../../actions/authAction'
import Orders  from '../components/orders/Orders'
import Twit from '../components/twit/Twit' 
import Closure from '../components/Closure/Closure'
import { NavLink, useRouteMatch } from 'react-router-dom'
import { HiChevronRight } from 'react-icons/hi'



// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Dashboard() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const {user} = isAuthenticated();
  const { path } = useRouteMatch();
  // pagination setup 
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChange(p) {
    setPage(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
  }, [page])

  return (
    <>
      <PageTitle>Dashboard</PageTitle>
      <UserCard user= {user.name} seen="3 days ago" image="not found" role="administrator"/>
      {/* <Stories /> */}

        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3 mt-5">
        <CardInfo title="My orders" value="6389">
          <RoundIcon
            icon={order}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </CardInfo>

        <CardInfo title="Conversations" value="You have 3 unread messages">
          <RoundIcon
            icon={conversation}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </CardInfo>

        <CardInfo title="Resources" value= 
          {<>
            <NavLink to="/user/dashboard/faq">
              <div className="flex ml-4 justify-between">
                <h1>FAQ</h1>
                  <div>
                    <HiChevronRight className="w-4 h-4 mr-3" aria-hidden="true" />
                  </div>
                </div>
              </NavLink>

              <NavLink to="/user/dashboard/faq">
                <div className="flex ml-4 justify-between">
                <h1> What is LENX?</h1>
                  <div>
                    <HiChevronRight className="w-4 h-4 mr-3" aria-hidden="true" />
                  </div>
                </div>
              </NavLink>

              <NavLink to={`${path}/faq`}>
                <div className="flex ml-4 justify-between">
                <h1> Where is my order?</h1>
                  <div>
                    <HiChevronRight className="w-4 h-4 mr-3" aria-hidden="true" />
                  </div>
                </div>
              </NavLink>  
          </>}
         >
          
            <RoundIcon
            icon={Information}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </CardInfo>
        </div>

      <PageTitle>My conversations</PageTitle>
      <Conversations color="blue"/>

      <PageTitle>Popular Posts</PageTitle>
      <Twit />

      {/* <PageTitle>My orders</PageTitle>
      <Orders /> */}

    </>
  )
}

export default Dashboard

