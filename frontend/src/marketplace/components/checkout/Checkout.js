import React, { useState, useEffect } from 'react';
import { Formik, Field, FieldArray } from "formik";
import { AiFillFileImage, AiOutlineClose, AiFillTags, AiFillStar } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";
import * as Yup from "yup";
import { Alert } from '@windmill/react-ui'
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import SectionTitle from "../Typography/SectionTitle";
import { useDispatch, useSelector } from 'react-redux'
import { Input, Label, Select } from '@windmill/react-ui'
import _ from 'lodash'
import Card from '../../../components/Cards/Card';
import { removeCart, addToCart } from '../../../actions/cartActions';  
import { createOrder  } from '../../../actions/orderAction';  
import Button from '../../../components/Buttons/Button';
import PaypalButton from './PaypalButton'
import '../../styles/Form.scss'

const Checkout = () => {
    const history = useHistory();
    const categories = useSelector((state) => state.category.categories);
    const cart = useSelector((state) => state.cart.cartItems);
    const [ payment, setPayment ] = useState(false)
    const [ isPaid, setIsPaid ] = useState(false)
    const [ isSubmitting, setIsSubmitting ] = useState(false)

     const dispatch = useDispatch();

     const subtotalPrice = cart.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)
     const shippingPrice = cart.reduce((acc, item) => acc + item.qty * item.shippingPrice, 0).toFixed(2) 
     const totalPrice = Math.trunc(parseInt(subtotalPrice) + parseInt(shippingPrice))

     console.log(totalPrice)

      const Count = ({product}) => (
      <div className="rounded-full shadow-button inline-block">
                <div className="flex text-sm">
                <button
                    className="border-r border-Grey-border focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent rounded-l-full"
                    onClick= { () => dispatch(addToCart(product.product, Math.max(1, product.qty - 1)))}>
                    -
                </button>
                <div className="my-auto px-3 text-xs"> { product.qty } </div>
                <button
                  className="border-l border-Grey-border focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent rounded-r-full"
                  onClick= {() => dispatch(addToCart(product.product, Math.min(20, product.qty + 1)))}
                  >
                    +
                </button>
                </div>
                </div>
  )

  const Product = ({product}) => (
           <div className="my-4 relative bg-white rounded-md shadow-product max-w-md mx-auto overflow-hidden">
          <div className="flex dark:bg-gray-800 h-32 shadow-separator">
        <div className=" h-32 w-32 bg-cover bg-center rounded-sm" style={{backgroundImage: `url(${product.photo[0].url})`, backgroundColor:'#eee'}} />
        <div className="w-2/3 p-4 md:p-4">
          <Link to= {`/marketplace/products/${product.product}`} className="underline">
            <h1 className="text-base text-gray-800 dark:text-white truncate">{ product.name }</h1>
          </Link>  
            <div className="flex">
              <AiFillStar className="text-Blue text-sm mr-1" />
              <div className="text-xs">
                4.9
              </div>
            </div>
          <div className="free-delivery bg-transparent">
            Free Delivery
          </div>
          <div className="flex justify-between mt-3 item-center">
            <h1 className="text-xl font-bold text-Black dark:text-gray-200 md:text-xl">£ {product.price} </h1>
          </div>
        </div>
      </div>
        <div className="flex justify-between p-2">
            <div className="text-base font-bold">
                <Count product= {product} />
            </div>
            <div>
                <Button onClick= {(e) => {
                  e.preventDefault();   
                  dispatch(removeCart(product.product))
                }}
                className=" text-sm">
                        Delete
                </Button>
            </div>
        </div>
      </div>
  )

    const { order } = useSelector(state => state.order);


const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

const validatorForm = Yup.object().shape({
                 name: 
                    Yup.string()
                     .required("Required"),

                lastName: 
                    Yup.string()
                     .required("Required"),
                
                number: 
                    Yup.string()
                      .required()
                      .matches(/^[0-9]+$/, "Must be only digits")
                      .min(7, 'Number does not contain enough numbers ')
                      .max(15, 'The number contains too many numbers pal'),
                
                address:
                    Yup.string()
                    .required("Required"),
            
                city:
                    Yup.string()
                      .required("Required"),

                postalCode: 
                  Yup.string()
                    .required("Required"),
            })


    return (
    <div className="lg:w-2/3 relative mt-8 m-auto">
        <div className="relative my-2 h-10 ">
            <div className=" absolute top-2 left-0 z-50">
                <div className="flex">
                    <button
                        className="rounded-full w-8 h-8 bg-Grey-light p-0 border-0 inline-flex items-center justify-center text-white ml-4"
                        onClick={() => setTimeout(() => history.goBack(), 150)}>
                        <MdArrowBack className="w-5 h-5"/>
                    </button>
                </div>
            </div>
        </div>
        <div className="px-2 mt-2">
            <SectionTitle> Checkout </SectionTitle>
        </div>
        
      <div className="relative">
        { cart.length > 0 ?
        <Formik
          initialValues={{
            name: '',
            lastName: '',
            mobile: "",
            address:"",
            city:"",
            postalCode:"",
            email: "",
          }}

          validationSchema={validatorForm}
          validateOnChange={isSubmitting}
          validateOnBlur={isSubmitting}

          onSubmit= { async (values, {resetForm, validate}) => {

            const items = cart.map(product => (
              { name: product.name,
                qty: product.qty,
                price: product.price,
                product: product.product,
                manufacturerId: product.manufacturerId,
              }));
              
              var isPaidAt = "";

              if(isPaid){
                isPaidAt = Date.now()
              }

            dispatch(createOrder({
                name: values.name,
                lastName: values.lastName,
                isPaid: isPaid,
                isPaidAt: isPaidAt,
                shipping: {
                  address: values.address,
                  city: values.city,
                  postalCode: values.postalCode,
                  mobile: values.mobile,
                },
                payment: payment,
                totalPrice: totalPrice,
                email: values.email,
                orderItems: items
            }))

            setIsSubmitting(true)

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

            const handleSuccessPayment = (paymentResult) => {
            setPayment({
                paymentMethod: 'paypal',
                orderID: paymentResult.orderID,
                payerID: paymentResult.payerID,
                paymentID: paymentResult.paymentID
            })
            setIsPaid(true)

            handleSubmit();
          }
        
         return (
            <form onSubmit = { e => { e.preventDefault()}}>
                {/* { isCreated && 
                    <div className ="absolute top-0 z-50 w-full">
                        <Alert className="w-full" type="success" onClose={() => setIsCreated(false)}>
                            Product created succesfuly
                            <div className="mt-2">
                                <Link to="/admin/dashboard" className="underline"> Go back to dashboard </Link> 
                            </div>
                        </Alert>
                    </div>
                } */}
              <div className= "grid grid-cols-3 gap-5" >  
                
                <div className= "col-span-2" >
                    <Card className="" title=" Add address" >
                        <div className="mb-4">
                        <Label>
                           <span className="text-base font-medium text-Black-medium"> Your Name: </span>
                            <Input 
                                valid
                                className={`mt-1 p-2 rounded-md shadow-button`}
                                id="name"
                                name="name" 
                                type="text"
                                value={values.name}
                            onChange={handleChange} />
                        </Label>
                        {errors.name && (
                        <div className="input-feedback">{errors.name}</div>
                        )}
                    </div>
                    <div className="mb-4">
                        <Label>
                           <span className="text-base font-medium text-Black-medium"> Last Name: </span>
                            <Input 
                                valid
                                className={`mt-1 p-2 rounded-md shadow-button`}
                                id="lastName"
                                name="lastName" 
                                type="text"
                                value={values.lastName}
                            onChange={handleChange} />
                        </Label>
                        {errors.lastName && (
                        <div className="input-feedback">{errors.lastName}</div>
                        )}
                    </div>
                     <div className="mb-4">
                        <Label>
                           <span className="text-base font-medium text-Black-medium"> Your Mobile Number: <span className="text-sm">(optional)</span></span>
                            <Input 
                                valid
                                className={`mt-1 p-2 rounded-md shadow-button`}
                                id="mobile"
                                name="mobile" 
                                type="number"
                                value={values.mobile}
                            onChange={handleChange} />
                        </Label>
                        {errors.mobile && (
                        <div className="input-feedback">{errors.mobile}</div>
                        )}
                    </div>
                    <div className="mb-4">
                        <Label>
                           <span className="text-base font-medium text-Black-medium"> Email Address: </span>
                            <Input 
                                valid
                                className={`mt-1 p-2 rounded-md shadow-button`}
                                id="email"
                                name="email" 
                                type="text"
                                value={values.email}
                            onChange={handleChange} />
                        </Label>
                        {errors.email && (
                        <div className="input-feedback">{errors.email}</div>
                        )}
                    </div>
                    <div className="mb-4">
                        <Label>
                           <span className="text-base font-medium text-Black-medium"> Address: </span>
                            <Input 
                                valid
                                className={`mt-1 p-2 rounded-md shadow-button`}
                                onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                                id="address"
                                name="address" 
                                type="text"
                                value={values.address}
                            onChange={handleChange} />
                        </Label>
                        {errors.address && (
                        <div className="input-feedback">{errors.address}</div>
                        )}
                    </div>
                    <div className="mb-4">
                        <Label>
                           <span className="text-base font-medium text-Black-medium"> City: </span>
                            <Input 
                                valid
                                className={`mt-1 p-2 rounded-md shadow-button`}
                                id="city"
                                name="city" 
                                type="text"
                                value={values.city}
                            onChange={handleChange} />
                        </Label>
                        {errors.city && (
                        <div className="input-feedback">{errors.city}</div>
                        )}
                    </div>
                    <div className="mb-4">
                        <Label>
                           <span className="text-base font-medium text-Black-medium"> Postcode: </span>
                            <Input 
                                valid
                                className={`mt-1 p-2 rounded-md shadow-button`}
                                id="postalCode"
                                name="postalCode" 
                                type="text"
                                value={values.postalCode}
                            onChange={handleChange} />
                        </Label>
                        {errors.postalCode && (
                        <div className="input-feedback">{errors.postalCode}</div>
                        )}
                    </div>
                </Card>
              </div>          

              <div className= "col-span-1">  
                <Card title= {`Order Summary`} className="relative">
                  <Link to="/marketplace/basket" className="absolute top-3 right-3 underline text-Black-medium text-sm">
                      Edit Your Order
                  </Link>
                  { cart && cart.map((product => (
                    <Product product = { product } />
                  )))}
                    <div className= "bg-white mb-6">
                    <div>
                    <div className="my-2 p-2 shadow-separator">
                        <div className="text-base text-Black-medium my-auto flex justify-between">
                            Subtotal
                            <div>
                              £{subtotalPrice}
                            </div>
                        </div>
                        <div className="text-base my-2 text-Black-medium flex justify-between">
                            Shipping Price
                            <div>
                              £{shippingPrice}
                            </div>
                        </div>
                    </div>
                        <div className="text-Black text-lg font-bold flex justify-between">
                            TOTAL PRICE
                            <div>
                              £{totalPrice}
                            </div>
                        </div>
                    </div>
                </div>

                <PaypalButton
                  amount={totalPrice}
                  onSuccess={handleSuccessPayment}
                  />
                </Card>
              </div>

            </div>

        </form>
    
      )} 
    }
    
            </Formik>
        :
        <div>
          Your cart is empty
        </div> 
        }
        </div>
  
    </div>
    )};

export default Checkout


    