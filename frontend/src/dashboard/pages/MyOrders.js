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
import { EditIcon, TrashIcon } from '../icons'
import response from '../utils/demo/tableData'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import OrderStatus from '../components/orders/OrderStatus'




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
              {/* <TableCell>Status</TableCell> */}
              <TableCell> Purchase Date</TableCell>
            </tr>
          </TableHeader>
          {history.map((h, i) => {
                            return (
          <TableBody>
            {h.products.map((p, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar className="hidden mr-3 md:block" src={p.photo} alt="User avatar" />
                    <div>
                      <p className="font-semibold">{p.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{p.name}</p>
                    </div>
                  </div>
                </TableCell>  
                <TableCell>
                  <span className="text-sm">$ {p.price}</span>
                </TableCell>
                {/* <TableCell>
                  <Badge type={user.status}>{user.status}</Badge>
                </TableCell> */}
                <TableCell>
                  <span className="text-sm">{moment(p.createdAt).fromNow()}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
            )
          })}
        </Table>
        <TableFooter>
          <Pagination
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
    <PageTitle>Tables</PageTitle>
    <SectionTitle>Purchase History</SectionTitle>
     <Tabs>
      <TabList>
        <Tab>All orders</Tab>
        <Tab>In progress</Tab>
        <Tab>Shipped</Tab>
        <Tab>Received</Tab>
      </TabList>

      <TabPanel>
        {purchaseHistory(history)}
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

