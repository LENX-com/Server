import React, { useState, useEffect } from "react"
import { Redirect, Link } from "react-router-dom"
import Layout from "../layout/Layout"
import { isAuth, authenticateHelper, isAuthenticated}from "../../actions"
import { signin } from '../../actions/authAction'
import Google from '../../containers/social-login/Google'
import { ToastContainer, toast } from 'react-toastify';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';


const Signin = ({history, signin}) => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        redirectToReferrer: false
    });

    const { email, password, loading, redirectToReferrer } = values;
    const { user } = isAuthenticated();
    const errors = useSelector(state => state.errors);
    

   const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };
 
    
    const clickSubmit = event => {
        event.preventDefault();
        const userData = {
        email: email,
        password: password
        };
        signin(userData)
    };


    const signUpForm = () => (
        <form>
            <div>
                <label> Email </label>
                <input
                    onChange={handleChange("email")}
                    type="email"
                    value={email}
                />
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
            <button onClick={clickSubmit}>
                Submit
            </button>
            < Link to= "/forgot-password"> 
                <button>
                    Forgot password
                </button>
            </ Link>
        </form>
    );

    const showError = () => (
        <div 
        >   
            <ToastContainer>
            {toast.error({ position: "top-right",
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
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />;
            } else {
                return <Redirect to="/user/dashboard" />;
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />;
        }
    };

    const informParent = response => {
        authenticateHelper(response, () => {
            isAuth() && isAuth().user.role === 1 ? history.push('/admin/dashboard') : history.push('/user/dashboard');
        });
    };

    return (
        <Layout
            title="Signin"
            description="Signin to LENX"
            className="container"
        >
            {showLoading()}
            {showError()}
            {signUpForm()}
            <Google informParent={informParent} />
            {redirectUser()}

        </Layout>
    );
};

Signin.propTypes = {
  signin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { signin })(Signin);