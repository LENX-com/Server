import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment, useRef, useEffect } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiFillStar,
} from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { Cat } from "../../assets/icons";
import SectionTitle from "../../../components/Typography/SectionTitle";
import _ from "lodash";
import { Redirect, Link } from "react-router-dom";
import { isAuth, authenticateHelper } from "../../../actions";
import { login } from "../../../actions/authAction";
import Google from "../../../marketplace/containers/social-login/Google";
import { ToastContainer, toast } from "react-toastify";
import { Label, Input, Button } from "@windmill/react-ui";
import ImageLight from "../../assets/img/login-office.jpeg";
import ImageDark from "../../assets/img/login-office-dark.jpeg";
import { GoMarkGithub as GithubIcon } from "react-icons/go";
import {
  AiOutlineTwitter as TwitterIcon,
  AiFillGoogleCircle as GoogleCircle,
} from "react-icons/ai";

const SignInPop = ({ isOpen = false, setIsOpen }) => {
  let completeButtonRef = useRef(null);
  const dispatch = useDispatch();

  function closeModal() {
    setIsOpen(false);
    console.log("clicked");
  }

  function openModal() {
    setIsOpen(true);
  }
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, loading, redirectToReferrer } = values;
  const auth = useSelector((state) => state.auth);

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

  const signUpForm = () => (
    <div className="flex items-center min-h-screen dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl my-4 overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                {" "}
                Support and empower small businesses
              </h1>
              <Label className="p-2 border-2 border-border rounded-md">
                <Input
                  className="mt-1"
                  type="email"
                  placeholder="Email or Username"
                  value={email}
                  onChange={handleChange("email")}
                />
              </Label>

              <Label className="mt-4 border-2 border-border rounded-md p-2">
                <Input
                  className="mt-1"
                  value={password}
                  type="password"
                  placeholder="Password"
                  onChange={handleChange("password")}
                />
              </Label>

              <Button
                onClick={clickSubmit}
                className="mt-4 bg-Blue focus:outline-none focus:ring-2 focus:ring-Blue focus:ring-opacity-30 "
                block
              >
                Log in
              </Button>

              <p className="mt-4">
                <Link
                  className="text-sm font-bold text-Black dark:text-purple-400 hover:underline"
                  to="/forgot-password"
                >
                  Forgot your password?
                </Link>
              </p>

              <hr className="my-6" />

              <Button className="" block layout="outline">
                <GoogleCircle className="w-6 h-6 mr-2" aria-hidden="true" />
                Continue with Google
              </Button>
              <Button block layout="outline" className="mt-2">
                <GithubIcon className="w-6 h-6 mr-2" aria-hidden="true" />
                Continue with Github
              </Button>
              <Button className="mt-2" block layout="outline">
                <TwitterIcon className="w-6 h-6 mr-2" aria-hidden="true" />
                Continue with Twitter
              </Button>

              <p className="mt-3">
                <Link
                  className="text-sm font-bold text-Black dark:text-purple-400 hover:underline"
                  to="/create-account"
                >
                  Create account
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div>overlay</div>
      {/* <div ref={completeButtonRef}></div> */}
{/* 
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-y-auto"
          style={{ zIndex: "999" }}
          onClose={() => setIsOpen(false)}
          open={isOpen}
          initialFocus={completeButtonRef}
        >
          <div className="min-h-screen text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 blur-lg bg-background bg-opacity-70" />
            </Transition.Child>

         
            <span
              className="inline-block h-screen align-bottom"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className="absolute bottom-0 w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-background shadow-xl  overflow-y-scroll"
                style={{ height: "100vh" }}
              >
                <Dialog.Title
                  as="div"
                  className="border-b-2 border-Grey border-solid"
                >
                  <div className="px-4 py-2 flex bg-white">
                    <h2 className="text-lg font-medium leading-6 text-gray-900 mt-2">
                      {" "}
                      Please Sign In{" "}
                    </h2>
                    <div
                      onClick={() => dispatch({ type: "CLEAR_WISHLIST_ERROR"})}
                      className="ml-auto text-xl text-white rounded-full p-2 bg-Black"
                    >
                      <AiOutlineClose />
                    </div>
                  </div>
                </Dialog.Title>
                {signUpForm()}
              </div>
            </Transition.Child>

            <div
              className="absolute bottom-0 border-t-2 border-Grey-border p-2 bg-white"
              style={{ width: "100vw" }}
            ></div>
          </div>
        </Dialog>
      </Transition> */}
    </div>
  );
};

export default SignInPop;
