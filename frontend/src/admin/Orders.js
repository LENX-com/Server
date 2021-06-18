import React, { useState, useEffect } from "react";
import Layout from "../marketplace/components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import {
  listOrders,
  getStatusValues,
  updateOrderStatus,
} from "../actions/orderAction";
import moment from "moment";

const Orders = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.user);
  const statusValues = useSelector((state) => state.order.statusValues);
  const orders = useSelector((state) => state.order.orders);
  useEffect(() => {
    dispatch(listOrders());
    dispatch(getStatusValues());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showOrdersLength = () => {
    if (orders.length > 0) {
      return <h1 className="text">Total orders: {orders.length}</h1>;
    } else {
      return <h1 className="text">No orders</h1>;
    }
  };

  const showInput = (key, value) => (
    <div className="input-group">
      <div className="input-group">
        <div className="input-group-text">{key}</div>
      </div>
      <input type="text" value={value} className="form-control" readOnly />
    </div>
  );

  const handleStatusChange = (e, orderId) => {
    dispatch(updateOrderStatus(orderId, e));
  };

  const showStatus = (o) => (
    <div className="form-group">
      <h3>Status: {o.status}</h3>
      <select
        className="form-control"
        onChange={(e) => handleStatusChange(e, o._id)}
      >
        <option>Update Status</option>
        {statusValues.map((status, index) => (
          <option key={index} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <Layout
      title="Orders"
      description={`G'day ${auth.name}, you can manage all the orders here`}
    >
      <div className="row">
        <div>
          {showOrdersLength()}

          {orders &&
            orders.data.map((o, oIndex) => {
              return (
                <div className="mt-5" key={oIndex}>
                  <h2 className="mb-5">
                    <span className="bg">Order ID: {o._id}</span>
                  </h2>

                  <ul className="list-group">
                    <li className="list-group-item">{showStatus(o)}</li>
                    <li className="list-group-item">
                      Transaction ID: {o.transaction_id}
                    </li>
                    <li className="list-group-item">Amount: ${o.amount}</li>
                    <li className="list-group-item">
                      Ordered by: {o.userId.name}
                    </li>
                    <li className="list-group-item">
                      Ordered on: {moment(o.createdAt).fromNow()}
                    </li>
                    <li className="list-group-item">
                      Delivery address: {o.address}
                    </li>
                  </ul>

                  <h3>Total products in the order: {o.product.length}</h3>

                  {o.product.map((p, pIndex) => (
                    <div
                      className="mb-4"
                      key={pIndex}
                      style={{
                        padding: "20px",
                        border: "1px solid indigo",
                      }}
                    >
                      {showInput("Product name", p.name)}
                      {showInput("Product price", p.price)}
                      {/* {showInput("Product total", p.count)} */}
                      {showInput("Product Id", p._id)}
                    </div>
                  ))}
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
