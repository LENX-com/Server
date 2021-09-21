import { useState, Fragment, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Redirect, Link } from "react-router-dom";
import * as Yup from "yup";
import { login } from "../../../actions/authAction";
import Google from "../../../marketplace/containers/social-login/Google";
import { Label, Input } from "@windmill/react-ui";
import Button from '../../../components/Buttons/Button'
import { GoMarkGithub as GithubIcon } from "react-icons/go";
import { Formik, Field, FieldArray } from "formik";
import {
  AiOutlineTwitter as TwitterIcon,
  AiFillGoogleCircle as GoogleCircle,
} from "react-icons/ai";
import { Desktop, Mobile } from '../../../ScreenSize' 
import PopUp from '../pop/PopUp'

const SignInPop = ({ isOpen = true, setIsOpen }) => {
  let completeButtonRef = useRef(null);
  const dispatch = useDispatch();

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

  const validatorForm = Yup.object().shape({
                 name: 
                    Yup.string()
                    .required("Required"),

                password:
                    Yup.number()
                    .required("Required")
                    .integer()
                    .min(1),
              
            })

  


  return (
    <div>
      <PopUp  isOpen = {isOpen} setIsOpen = {setIsOpen}  title="Login">
      <Formik
          initialValues={{
            name: '',
            password: "",
          }}

          validationSchema={validatorForm}
          // validateOnChange={isSubmitting}
          // validateOnBlur={isSubmitting}

          onSubmit= { async (values, {resetForm, validate}) => {


            let formData = new FormData();

            formData.append("name", values.name);
            formData.append("price", values.price);

            login(formData)
            resetForm({values: ''})

          }}>

              
        {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          setFieldValue,
          handleBlur,
          isValid,
          dirty
        } = formik;
          
      return (
          
      <form className="">
        <div className="">
          <main className="items-center justify-center">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
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
                className="mt-4 bg-Blue focus:outline-none focus:ring-2 focus:ring-Blue focus:ring-opacity-30 w-full text-white "
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

              <Button className="flex w-full text-center justify-center">
                <GoogleCircle className="text-xl mr-2" aria-hidden="true" />
                Continue with Google
              </Button>
              <Button className="mt-2 flex w-full text-center justify-center">
                <GithubIcon className="text-xl mr-2" aria-hidden="true" />
                Continue with Github
              </Button>
              <Button className="mt-2 flex w-full text-center justify-center">
                <TwitterIcon className="text-xl mr-2" aria-hidden="true" />
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
      </form>
         )}}
      </Formik>
      </PopUp>
    </div>
  );
};

export default SignInPop;
