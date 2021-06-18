import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../actions/index";
import { useSelector } from "react-redux";

const AdminRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);
  const token = localStorage.getItem("token");
  console.log(token);
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{              
              pathname: "signin",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
