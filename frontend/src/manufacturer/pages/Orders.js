import React, { useEffect, useState } from 'react'
import SectionTitle from "../components/Typography/SectionTitle";
import OrderCard from '../components/orders/OrderCard'
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
  Label,
  Input
} from '@windmill/react-ui'
import { Link } from 'react-router-dom'
import {data} from '../utils/demo/tableData'
import { EditIcon, TrashIcon } from '../icons'

  const response2 = data.concat([])

const Orders = () => {

  // setup pages control for every table
  const [pageTable1, setPageTable1] = useState(1)
  const [pageTable2, setPageTable2] = useState(1)

  // setup data for every table
  const [dataTable1, setDataTable1] = useState([])
  const [dataTable2, setDataTable2] = useState([])

  // pagination setup
  const resultsPerPage = 10
  const totalResults = data.length

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
    setDataTable1(data.slice((pageTable1 - 1) * resultsPerPage, pageTable1 * resultsPerPage))
  }, [pageTable1])

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataTable2(response2.slice((pageTable2 - 1) * resultsPerPage, pageTable2 * resultsPerPage))
  }, [pageTable2])

  const [ menu, setMenu ] = useState(0)
  const fakeArray = Array(5).fill(5)

  const State = [
    { name: "Shipped"},
    { name: "Delivered"},
    { name: " On hold "},
  ]

  return (
    <div className="my-3">
      <div className="px-2">
        <SectionTitle>Orders</SectionTitle>
      </div>
      <dv className="grid grid-cols-3 mb-2">
        {State.map((data, i) => (
          <div>
            <div className= {` ${ menu === i ? "bg-orange shadow-none text-white" : ""} bg-white px-2 py-1 m-2 shadow-product rounded-md w-auto`}>
              <div onClick = {(() => setMenu(i))}>
                <div className="text-sm mx-1 whitespace-nowrap">
                  <h2>
                  { data.name }
                  </h2>
                </div>
              </div>
            </div>
          </div>
          ))}
        </dv>
          
          <div className="mb-3 px-2">
            <Label className="p-2 border-2 border-border rounded-md mt-b bg-white"> 
              <Input className="mt-1" type="text" placeholder="Search for orders"/>
            </Label>
          </div>

      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Client</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {dataTable2.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar className="mr-3 md:block" src={"https://res.cloudinary.com/lenx/image/upload/v1619714832/avatar_g2cc3h.png"} alt="User avatar" />
                    <div>
                      <p className="font-semibold">{user.name}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">$ {user.amount}</span>
                </TableCell>
                <TableCell>
                  <Badge type={user.status}>{user.status}</Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{new Date(user.date).toLocaleDateString()}</span>
                </TableCell>
                <TableCell>
                  <Link to={`/admin/dashboard/order/${'orderId'}`}>
                    <div className="flex items-center space-x-4">
                      <Button layout="link" size="icon" aria-label="Edit">
                        <EditIcon className="w-5 h-5" aria-hidden="true" />
                      </Button>
                    </div>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable2}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
    </div>
  )
}

export default Orders
