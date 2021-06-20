import React, { useState, useEffect } from 'react'
import { isAuthenticated } from "../../actions";
import { getPurchaseHistory } from "../components/user/apiUser";
import moment from "moment";
import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Badge,
  Avatar,
  Button,
  Pagination,
} from '@windmill/react-ui'
import { HiChevronRight } from "react-icons/hi";
import response from '../utils/demo/tableData'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import OrderStatus from '../components/orders/OrderStatus'
import { Link } from 'react-router-dom'
import { Data } from '../components/stories/Data'
import { Swiper, SwiperSlide } from 'swiper/react';
import SearchBar from '../components/elements/SearchBar'


// make a copy of the data, for the second table
const response2 = response.concat([])

function MyOrders() {
    const [history, setHistory] = useState([]);
    const {
        user: { _id, name, email, role, profile }
    } = isAuthenticated();
    const token = isAuthenticated().token;

    const init = (userId, token) => {
        getPurchaseHistory(userId, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setHistory(data);
            }
        });
    };

    useEffect(() => {
        init(_id, token);
    }, []);


  // setup pages control for every table
  const [pageTable1, setPageTable1] = useState(1)
  const [pageTable2, setPageTable2] = useState(1)

  // setup data for every table
  const [dataTable1, setDataTable1] = useState([])
  const [dataTable2, setDataTable2] = useState([])

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChangeTable1(p) {
    setPageTable1(p)
  }

  // pagination change control
  function onPageChangeTable2(p) {
    setPageTable2(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable1(response.slice((pageTable1 - 1) * resultsPerPage, pageTable1 * resultsPerPage))
  }, [pageTable1])

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable2(response2.slice((pageTable2 - 1) * resultsPerPage, pageTable2 * resultsPerPage))
  }, [pageTable2])

  const purchaseHistory = () => {

  return (
    <>
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Client</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell className="mobile:hidden"> Purchase Date</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
          {Data.map((h, i) => (
              <TableRow key={i} className="hover:bg-Hover">
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar className="hidden mr-3 md:block" src="https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyJTIwY2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" alt="User avatar" />
                    <div>
                      <p className="font-semibold"> 3D Printer resin </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400"> NewTech </p>
                    </div>
                  </div>
                </TableCell>  
                <TableCell>
                  <span className="text-sm">$ 55</span>
                </TableCell>
                <TableCell>
                  <Badge type="success"> Sucess </Badge>
                </TableCell>
                <TableCell className="mobile:hidden">
                  <span className="text-sm"> 11/02/2088</span>
                </TableCell>
                <div className="table-cell align-middle cursor-pointer">
                  <Link to="/user/dashboard/order">
                  <HiChevronRight className="text-2xl" />
                  </ Link>
                </div>
              </TableRow>
           ))}
              </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            className="pagination"
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable1}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
    </>
    )
  }

return (

  
    <>
    <PageTitle> My orders </PageTitle>
    <SectionTitle>Purchase History</SectionTitle>
    <SearchBar />
     <Tabs>
        <Swiper
           slidesPerView={5} spaceBetween={2} freeMode={true}  className="mySwiper"
        >
        <SwiperSlide>
        <TabList className="flex whitespace-nowrap">
            <Tab>All orders</Tab>
            <Tab>In progress</Tab>
            <Tab>Shipped</Tab>
            <Tab>Received</Tab>
        </TabList>
        </SwiperSlide>
        </Swiper>

      <TabPanel>
        {purchaseHistory()}
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      </Tabs>

      <SectionTitle> Upcoming orders</SectionTitle>
      <OrderStatus />
    </>
  )
} 

export default MyOrders

  