import React, { useState, useEffect } from "react";
import PageTitle from "../components/Typography/PageTitle";
import { useSelector, useDispatch, connect } from "react-redux";
import { createSelector } from "reselect";
import SectionTitle from "../components/Typography/SectionTitle";
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
  Pagination,
} from "@windmill/react-ui";
import { HiChevronRight } from "react-icons/hi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import OrderStatus from "../components/orders/OrderStatus";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { orderByUser } from "../../actions/orderAction";
import {} from "query-string";
import SearchBar from "../components/elements/SearchBar";
import {
  filterdIdlist,
  filteredIdArray,
  dataSearchText,
} from "../../dashboard/components/elements/selectors";
function MyOrders({ filterdIdlist }) {
  const dispatch = useDispatch();
  const meorders = useSelector((state) => state.order.orders);
  const [orderPerPage] = useState(5);
  const [neworders, setNewOrders] = useState([]);
  useEffect(() => {
    dispatch(orderByUser());
  }, [dispatch]);
  useEffect(() => {
    const indexOfLastOrder = 1 * orderPerPage;
    const indexOfFirstOrder = indexOfLastOrder - orderPerPage;
    setNewOrders(meorders.slice(indexOfFirstOrder, indexOfLastOrder));
  }, [meorders, orderPerPage]);
  const handlePagination = (value) => {
    const indexOfLastOrder = value * orderPerPage;
    const indexOfFirstOrder = indexOfLastOrder - orderPerPage;
    setNewOrders(meorders.slice(indexOfFirstOrder, indexOfLastOrder));
  };
  const totalResults = meorders.length;

  const searchResult = useSelector((state) => state.search.orders.result);
  const textValue = useSelector((state) => state.search.orders.text);
  let orders = filterdIdlist.filter((num) =>
    textValue === "" ? filterdIdlist : searchResult.includes(num._id)
  );

  const progressTab = neworders.filter((i) => i.status.includes("Processing"));
  const shippedTab = neworders.filter((i) => i.status.includes("Shipped"));
  const receivedTab = neworders.filter((i) => i.status.includes("Delivered"));

  const AllOrderFilter = () => (
    <TableBody>
      {!searchResult.length ? (
        "no result"
      ) : neworders ? (
        neworders.map((h, i) => (
          <TableRow key={i} className="hover:bg-Hover">
            <TableCell>
              <div className="flex items-center text-sm">
                <Avatar
                  className="hidden mr-3 md:block"
                  src=""
                  // src="https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyJTIwY2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
                  alt="User avatar"
                />
                <div>
                  <p className="font-semibold"> {h.name}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {" "}
                    NewTech{" "}
                  </p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <span className="text-sm">${h.price}</span>
            </TableCell>
            <TableCell>
              <Badge type="success"> {h.status} </Badge>
            </TableCell>
            <TableCell className="mobile:hidden">
              <span className="text-sm"> 11/02/2088</span>
            </TableCell>
            <div className="table-cell align-middle cursor-pointer">
              <Link to="/user/dashboard/order">
                <HiChevronRight className="text-2xl" />
              </Link>
            </div>
          </TableRow>
        ))
      ) : (
        <h1>No orders yet</h1>
      )}
    </TableBody>
  );

  const AllOrderFilters = () => (
    <TableBody>
      {!searchResult.length ? (
        "no result"
      ) : orders ? (
        orders.map((h, i) => (
          <TableRow key={i} className="hover:bg-Hover">
            <TableCell>
              <div className="flex items-center text-sm">
                <Avatar
                  className="hidden mr-3 md:block"
                  src=""
                  // src="https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyJTIwY2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
                  alt="User avatar"
                />
                <div>
                  <p className="font-semibold"> {h.name}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {" "}
                    NewTech{" "}
                  </p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <span className="text-sm">${h.price}</span>
            </TableCell>
            <TableCell>
              <Badge type="success"> {h.status} </Badge>
            </TableCell>
            <TableCell className="mobile:hidden">
              <span className="text-sm"> 11/02/2088</span>
            </TableCell>
            <div className="table-cell align-middle cursor-pointer">
              <Link to="/user/dashboard/order">
                <HiChevronRight className="text-2xl" />
              </Link>
            </div>
          </TableRow>
        ))
      ) : (
        <h1>No orders yet</h1>
      )}
    </TableBody>
  );
  const ProgressFilter = () => (
    <TableBody>
      {!searchResult.length ? (
        "no result"
      ) : progressTab ? (
        progressTab.map((h, i) => (
          <TableRow key={i} className="hover:bg-Hover">
            <TableCell>
              <div className="flex items-center text-sm">
                <Avatar
                  className="hidden mr-3 md:block"
                  src=""
                  // src="https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyJTIwY2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
                  alt="User avatar"
                />
                <div>
                  <p className="font-semibold"> {h.name}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {" "}
                    NewTech{" "}
                  </p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <span className="text-sm">${h.price}</span>
            </TableCell>
            <TableCell>
              <Badge type="success"> {h.status} </Badge>
            </TableCell>
            <TableCell className="mobile:hidden">
              <span className="text-sm"> 11/02/2088</span>
            </TableCell>
            <div className="table-cell align-middle cursor-pointer">
              <Link to="/user/dashboard/order">
                <HiChevronRight className="text-2xl" />
              </Link>
            </div>
          </TableRow>
        ))
      ) : (
        <h1>No orders yet</h1>
      )}
    </TableBody>
  );
  const ShippedFilter = () => (
    <TableBody>
      {!searchResult.length ? (
        "no result"
      ) : shippedTab ? (
        shippedTab.map((h, i) => (
          <TableRow key={i} className="hover:bg-Hover">
            <TableCell>
              <div className="flex items-center text-sm">
                <Avatar
                  className="hidden mr-3 md:block"
                  src=""
                  // src="https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyJTIwY2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
                  alt="User avatar"
                />
                <div>
                  <p className="font-semibold"> {h.name}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {" "}
                    NewTech{" "}
                  </p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <span className="text-sm">${h.price}</span>
            </TableCell>
            <TableCell>
              <Badge type="success"> {h.status} </Badge>
            </TableCell>
            <TableCell className="mobile:hidden">
              <span className="text-sm"> 11/02/2088</span>
            </TableCell>
            <div className="table-cell align-middle cursor-pointer">
              <Link to="/user/dashboard/order">
                <HiChevronRight className="text-2xl" />
              </Link>
            </div>
          </TableRow>
        ))
      ) : (
        <h1>No orders yet</h1>
      )}
    </TableBody>
  );
  const ReceivedFilter = () => (
    <TableBody>
      {!searchResult.length ? (
        "no result"
      ) : receivedTab ? (
        receivedTab.map((h, i) => (
          <TableRow key={i} className="hover:bg-Hover">
            <TableCell>
              <div className="flex items-center text-sm">
                <Avatar
                  className="hidden mr-3 md:block"
                  src=""
                  // src="https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyJTIwY2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"
                  alt="User avatar"
                />
                <div>
                  <p className="font-semibold"> {h.name}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {" "}
                    NewTech{" "}
                  </p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <span className="text-sm">${h.price}</span>
            </TableCell>
            <TableCell>
              <Badge type="success"> {h.status} </Badge>
            </TableCell>
            <TableCell className="mobile:hidden">
              <span className="text-sm"> 11/02/2088</span>
            </TableCell>
            <div className="table-cell align-middle cursor-pointer">
              <Link to="/user/dashboard/order">
                <HiChevronRight className="text-2xl" />
              </Link>
            </div>
          </TableRow>
        ))
      ) : (
        <h1>No orders yet</h1>
      )}
    </TableBody>
  );

  // *********************************************************************
  // ********************************************************************
  const allOrderTab = () => {
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
            {textValue !== "" ? <AllOrderFilters /> : <AllOrderFilter />}
          </Table>
          <TableFooter>
            <Pagination
              totalResults={totalResults}
              resultsPerPage={orderPerPage}
              onChange={(value) => handlePagination(value)}
            />
          </TableFooter>
        </TableContainer>
      </>
    );
  };
  const purchaseInProgressTab = () => {
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
            <ProgressFilter />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={totalResults}
              resultsPerPage={orderPerPage}
              onChange={(value) => handlePagination(value)}
            />
          </TableFooter>
        </TableContainer>
      </>
    );
  };
  const purchaseShippedTab = () => {
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
            <ShippedFilter />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={totalResults}
              resultsPerPage={orderPerPage}
              onChange={(value) => handlePagination(value)}
            />
          </TableFooter>
        </TableContainer>
      </>
    );
  };
  const purchaseReceivedTab = () => {
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
            <ReceivedFilter />
          </Table>
          <TableFooter>
            <Pagination
              totalResults={totalResults}
              resultsPerPage={orderPerPage}
              onChange={(value) => handlePagination(value)}
            />
          </TableFooter>
        </TableContainer>
      </>
    );
  };

  return (
    <>
      <PageTitle> My orders </PageTitle>
      <SectionTitle>Purchase History</SectionTitle>
      <SearchBar />
      <Tabs>
        <Swiper
          slidesPerView={5}
          spaceBetween={2}
          freeMode={true}
          className="mySwiper"
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

        <TabPanel>{allOrderTab()}</TabPanel>
        <TabPanel>{purchaseInProgressTab()}</TabPanel>
        <TabPanel>{purchaseShippedTab()}</TabPanel>
        <TabPanel>{purchaseReceivedTab()}</TabPanel>
      </Tabs>

      <SectionTitle> Upcoming orders</SectionTitle>
      <OrderStatus />
    </>
  );
}
const selectors = createSelector(
  [dataSearchText, filteredIdArray, filterdIdlist],
  (dataSearchText, filteredIdArray, filterdIdlist) => ({
    dataSearchText,
    filteredIdArray,
    filterdIdlist,
  })
);

export default connect(selectors)(MyOrders);
