import React, { useState, useEffect } from "react";
import { getPurchaseHistory } from "../components/user/apiUser";
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
  Button,
  Pagination,
} from "@windmill/react-ui";
import { HiChevronRight } from "react-icons/hi";
import response from "../utils/demo/tableData";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import OrderStatus from "../components/orders/OrderStatus";
import { Link } from "react-router-dom";
import { Data } from "../components/stories/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { orderByUser } from "../../actions/orderAction";
import {} from "query-string";
import SearchBar from "../components/elements/SearchBar";
import {
  filterdIdlist,
  filteredIdArray,
  dataSearchText,
} from "../../dashboard/components/elements/selectors";

function MyOrders({
  filterdIdlist,
  resources,
  filteredIdArray,
  dataSearchText,
  searchBooks,
}) {
  const [history, setHistory] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const resultsPerPage = useSelector((state) => state.order.totalOrder);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(orderByUser(pageNumber));
  }, [pageNumber, dispatch]);
  const pages = new Array(resultsPerPage).fill(null).map((v, i) => i);
  const searchResult = useSelector((state) => state.search.orders.result);
  const textValue = useSelector((state) => state.search.orders.text);
  const searching = useSelector((state) => state.search.orders.isSearching);
  let orders = filterdIdlist.filter((num) =>
    textValue === "" ? filterdIdlist : searchResult.includes(num._id)
  );
  const previousBtn = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };
  const nextBtn = () => {
    setPageNumber(Math.min(resultsPerPage - 1, pageNumber + 1));
  };

  const FirstFilter = () => (
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
            <FirstFilter />
          </Table>
          <TableFooter>
            <h3>Page of {pageNumber + 1}</h3>
            <button onClick={previousBtn}>Previous</button>
            {pages.map((pageIndex, i) => (
              <button key={i} onClick={() => setPageNumber(pageIndex)}>
                {pageIndex + 1}
              </button>
            ))}
            <button onClick={nextBtn}>Next</button>
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

        <TabPanel>{purchaseHistory()}</TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
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
