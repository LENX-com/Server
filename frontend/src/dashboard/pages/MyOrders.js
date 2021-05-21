import React, { useState, useEffect } from 'react'
import { isAuthenticated } from "../../actions";
import { getPurchaseHistory } from "../../components/user/apiUser";
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

  /**
   * DISCLAIMER: This code could be badly improved, but for the sake of the example
   * and readability, all the logic for both table are here.
   * You would be better served by dividing each table in its own
   * component, like Table(?) and TableWithActions(?) hiding the
   * presentation details away from the page view.
   */

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
      <PageTitle>Tables</PageTitle>

      <SectionTitle>Purchase History</SectionTitle>
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
    {purchaseHistory(history)}
    </>
  )
}

export default MyOrders


// const Dashboard = () => {
//     const [history, setHistory] = useState([]);

//     const {
//         user: { _id, name, email, role }
//     } = isAuthenticated();
//     const token = isAuthenticated().token;

//     const init = (userId, token) => {
//         getPurchaseHistory(userId, token).then(data => {
//             if (data.error) {
//                 console.log(data.error);
//             } else {
//                 setHistory(data);
//             }
//         });
//     };

//     useEffect(() => {
//         init(_id, token);
//     }, []);

//     const userLinks = () => {
//         return (
//             <div className="card">
//                 <h4 className="card-header">User Links</h4>
//                 <ul className="list-group">
//                     <li className="list-group-item">
//                         <Link className="nav-link" to="/cart">
//                             My Cart
//                         </Link>
//                     </li>
//                     <li className="list-group-item">
//                         <Link className="nav-link" to={`/profile/${_id}`}>
//                             Update Profile
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         );
//     };

//     const userInfo = () => {
//         return (
//             <div className="card mb-5">
//                 <h3 className="card-header">User Information</h3>
//                 <ul className="list-group">
//                     <li className="list-group-item">{name}</li>
//                     <li className="list-group-item">{email}</li>
//                     <li className="list-group-item">
//                         {role === 1 ? "Admin" : "Registered User"}
//                     </li>
//                 </ul>
//             </div>
//         );
//     };

//     const purchaseHistory = history => {
//         return (
//             <div className="card mb-5">
//                 <h3 className="card-header">Purchase history</h3>
//                 <ul className="list-group">
//                     <li className="list-group-item">
//                         {history.map((h, i) => {
//                             return (
//                                 <div>
//                                     <hr />
//                                     {h.products.map((p, i) => {
//                                         return (
//                                             <div key={i}>
//                                                 <h6>Product name: {p.name}</h6>
//                                                 <h6>
//                                                     Product price: ${p.price}
//                                                 </h6>
//                                                 <h6>
//                                                     Purchased date:{" "}
//                                                     {moment(
//                                                         p.createdAt
//                                                     ).fromNow()}
//                                                 </h6>
//                                             </div>
//                                         );
//                                     })}
//                                 </div>
//                             );
//                         })}
//                     </li>
//                 </ul>
//             </div>
//         );
//     };

//     return (
//         <Layout
//             title="Dashboard"
//             description={`G'day ${name}!`}
//             className="container-fluid"
//         >
//             <div className="row">
//                 <div className="col-3">{userLinks()}</div>
//                 <div className="col-9">
//                     {userInfo()}
//                     {purchaseHistory(history)}
//                 </div>
//             </div>
//         </Layout>
//     );
// };

// export default Dashboard;