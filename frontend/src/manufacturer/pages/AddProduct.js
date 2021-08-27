import React, { useState, useEffect } from 'react';
import { Formik, Field } from "formik";
import Dropzone from "react-dropzone";
import { AiFillFileImage } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import SectionTitle from "../components/Typography/SectionTitle";
import ReactQuill from 'react-quill';
import { useDispatch, useSelector } from 'react-redux'
import { getSubs, getSubByCategory } from "../../actions/subCategoryAction";
// import { createProduct } from "../ApiAdmin";
import { Input, Label, Select } from '@windmill/react-ui'
import { getCategories} from "../../actions/categoryAction";
import Card from '../../components/Cards/Card';
import Button from '../../components/Buttons/Button';
import '../styles/AddProduct.scss'
import 'react-quill/dist/quill.snow.css';



const AddProduct = () => {
    const history = useHistory();
    const categories = useSelector((state) => state.category.categories);
    const { user, isAuthenticated, token } = useSelector((state) => state.auth);
    const [ category, setCategory ] = useState('')
    const [ subs, setSubs ] = useState('')

     const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    useEffect(() => {
      if(category) {
    getSubByCategory(category).then((res) => setSubs(res.data));
      }
  }, [category]);

  const shippingOptions = ["1 Business Day"," 1-3 Business Days","3-5 Business Days", "5+ Business Days"]

    return (
    <>
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
            <SectionTitle> Add product </SectionTitle>
        </div>
      <div className="container">
        <Formik
          initialValues={{
            name: '',
            price: '',
            subs: "",
            status:"",
            category: '',
            shippingPrice: '',
            quantity: 1 ,
            shippingTime:"",
            loading: false,
            error: '',
            attachments: [],
          }}

          onSubmit= { async (values) => {
            let formData = new FormData();

            formData.append("name", values.name);
            formData.append("price", values.price);
            formData.append("subs", values.subs);
            formData.append("status", values.status);
            formData.append("category", values.category);
            formData.append("shippingPrice", values.shippingPrice);
            formData.append("quantity", values.quantity);
            formData.append("shippingTime", values.ShippingTime);
            formData.append("description", values.description);
            // formData.append("description", description);
            
            for (let i = 0; i <= values.attachments.length; i++) {
              formData.append(`attachments[${i}]`, values.attachments[i]);
            }
            console.log(formData)

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
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="name">Name</label>
                <input id="name" name="name" type="text" className="form-control"
                  value={values.name} onChange={handleChange} />
                {errors.name && touched.name && (
                  <p>{errors.name}</p>
                )}
              </div>

            <Card>
                <div className="mb-4">
                    <Label>
                        <span className="text-base font-medium"> Add Title </span>
                        <Input className="mt-1 p-2 rounded-md shadow-button "  id="name" name="name" type="text"
                               value={values.name} onChange={handleChange} />
                    </Label>
                </div>
                <div className="my-2">
                    <span className="text-base font-medium p-2"> Add Description </span>
                    {/* <Field name="designation">
                    {({ field }) => <ReactQuill value={field.description} onChange={field.onChange(field.description)} />}
                </Field> */}
                </div>
            </Card>

              <Card title="Add Media">
                <Dropzone  
                    accept="image/jpeg, image/png"
                    minSize={1024}
                    maxSize={3072000}
                    onDrop={(acceptedFiles) => {
                  // do nothing if no files
                  if (acceptedFiles.length === 0) { return; }

                  // on drop we add to the existing files
                  setFieldValue("attachments", values.attachments.concat(acceptedFiles));
                }}>
                          {({ getRootProps, getInputProps }) => (
                <section className="container p-2 border-box">
                    <div {...getRootProps({ className: "dropzone text-center" })}>
                        <input {...getInputProps()} />
                        <div clasName="p-2 mx-auto">
                            <AiFillFileImage className="my-auto h-12 w-12 m-auto"/>
                            <Button className="my-3"> Add Files </Button>
                        </div>
                        <em className="text-xs text-Black-medium">(Only *.jpeg and *.png images will be accepted)</em>
                    </div>
                </section>
            )}
                </Dropzone>
                    <div className="px-4 my-2">
                    <strong>Files:</strong>
                    <ul className="list-disc my-2">
                    {values.attachements && values.attachements.map(({name}, i) => (
                        <li key={i}>{name}</li>
                    ))}
                    </ul>
                </div>
            </Card>

            <Card title="Pricing">
                <div className="mb-4">
                    <Label>
                        <span className="text-base font-medium"> Pricing </span>
                        <Input className="mt-1 p-2 rounded-md shadow-button" type="number" id="price" name="price" 
                               value={values.price} onChange={handleChange} />
                    </Label>
                    <Label className="mt-2">
                        <span className="text-base font-medium"> Shipping Price  </span>
                        <Input className="mt-1 p-2 rounded-md shadow-button" type="number" id="shippingPrice" name="shippingPrice"
                               value={values.shippingPrice} onChange={handleChange} />
                    </Label>
                </div>
            </Card>

            <Card title="Product Details">
                <div className="shadow-separator">
                    <Label className="mb-3">
                        <span> Product Status </span>
                        <Select className="Selection mt-1 p-2 rounded-md shadow-button"
                                 name="status"
                                value={values.status}
                                onChange={handleChange}
                                onBlur={handleBlur}>
                                <option value="" label="Select a Status " />
                                <option value="active" label="active" />
                                <option value="draft" label="draft" />
                                <option value="inactive" label="inactive" />
                        </Select>
                    </Label>
                </div>

                <div className="shadow-separator">
                    <div className="text-sm"> Product Quantity </div>
                    <div className="rounded-md shadow-button inline-block mt-2 mb-4">
                        <div className="flex text-base">
                            <button
                                className="border-r-2 border-Grey-border focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent rounded-l-md"
                                onClick= {() => setFieldValue( "quantity", Math.max(1, values.quantity - 1))}>
                                -
                            </button>
                            <h2 className="my-auto px-3 text-base"> { values.quantity } </h2>
                            <button
                            className="border-l-2 border-Grey-border focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent rounded-r-md"
                            onClick= {() => setFieldValue( "quantity", Math.min(20, values.quantity + 1))}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <Label className="my-2">
                     <span> Category </span>
                    <Select className="Selection mt-1 p-2 rounded-md shadow-button" name="category" id="category"
                                value={values.category}
                                onChange={handleChange}>
                        {categories &&
                            categories.map((c, i) => (
                            <option className="px-2" key={i} value={c._id}>
                                {c.name}
                            </option>
                        ))}
                    </Select>
                </Label>
                <Label className="my-2">
                     <span> Subcategory </span>
                    <Select className="Selection mt-1 p-2 rounded-md shadow-button" name="subs" id="subs"
                            value={values.subs}
                            onChange={handleChange}>
                        { category ? 
                            subs && subs.map( (sub, i ) => (
                            <option className="px-2" key={i} value={sub._id}>
                                {sub.name}
                            </option>
                            )) : 
                            <option> Please choose a category </option>}
                    </Select>
                </Label>
            </Card>

            <Card title="Shipping Time" className="mb-12">
                <div className="mb-4">
                 <Select className="Selection mt-1 p-2 rounded-md shadow-button" name="shippingOptions" id="shippingOptions" 
                        onChange= {handleChange}
                        value= { values.shippingOptions }>
                            <option value="" label="Select shipping time " />
                          <option value= "1 Business Day" label="1 Business Day"/>
                          <option value= "1-3 Business Days" label="1-3 Business Days"/>
                          <option value= "3-5 Business Days" label="3-5 Business Days"/>
                          <option value= "5+ Business Days" label="5+ Business Days"/>
                    </Select>
                </div>
            </Card>



              <button type="submit" className="btn btn-primary">submit</button>
            </form>
      )} 
    }
    
    </Formik>
    </div>
    </>
    )};

export default AddProduct


            // <div className="w-full absolute bottom-0 border-t-2 border-Grey bg-white z-50 ">
            //     <div className="flex my-2 p-3">
            //         <Button>
            //             Cancel
            //         </Button>
            //         <Button className="bg-Black text-white w-3/5 ml-3" onClick={ clickSubmit }>
            //             Save Product
            //         </Button>
            //     </div>
            // </div>

    