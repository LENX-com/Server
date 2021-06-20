import React, { useState} from "react";
import { Redirect, Link } from "react-router-dom";
import { isAuth, authenticateHelper} from "../../../actions";
import { login } from "../../../actions/authAction";
import Google from "../../../marketplace/containers/social-login/Google";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

const Signin = ({ history }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, loading, redirectToReferrer } = values;
  const auth = useSelector((state) => state.auth);
  const errors = useSelector((state) => state.errors);
  const dispatch = useDispatch();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    // signin(userData);
    dispatch(login(userData));
  };

  const signUpForm = () => (
    <form>
      <div>
        <label> Email </label>
        <input onChange={handleChange("email")} type="email" value={email} />
      </div>

      <div>
        <label>Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          value={password}
        />
      </div>
      <button onClick={clickSubmit}>Submit</button>
      <Link to="/forgot-password">
        <button>Forgot password</button>
      </Link>
    </form>
  );

  const showError = () => (
    <div>
      <ToastContainer>
        {toast.error({
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })}
      </ToastContainer>
    </div>
  );

  const showLoading = () =>
    loading && (
      <div>
        <h2>Loading...</h2>
      </div>
    );

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (auth.isAuthenticated && auth.user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (auth.isAuthenticated) {
      return <Redirect to="/" />;
    }
  };

  const informParent = (response) => {
    authenticateHelper(response, () => {
      isAuth() && isAuth().user.role === 1
        ? history.push("/admin/dashboard")
        : history.push("/user/dashboard");
    });
  };

  return (
    <>
      {showLoading()}
      {showError()}
      {signUpForm()}
      <Google informParent={informParent} />
      {redirectUser()}
    </>
  );
};

export default Signin;
