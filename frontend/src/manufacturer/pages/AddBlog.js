import React, { useState, useEffect } from 'react';
import { Formik, Field } from "formik";
import Dropzone from "react-dropzone";
import { AiFillFileImage, AiOutlineClose } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";
import * as Yup from "yup";
import { Alert } from '@windmill/react-ui'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import SectionTitle from "../components/Typography/SectionTitle";
import ReactQuill from 'react-quill';
import { useDispatch, useSelector } from 'react-redux'
import { getSubs, getSubByCategory } from "../../actions/subCategoryAction";
import { addPost } from "../../actions/postAction";
import { Input, Label, Select } from '@windmill/react-ui'
import { getCategories} from "../../actions/categoryAction";
import _ from 'lodash'
import Card from '../../components/Cards/Card';
import Button from '../../components/Buttons/Button';
import '../styles/AddProduct.scss'
import 'react-quill/dist/quill.snow.css';



const AddBlog = () => {
    const history = useHistory();
    const categories = useSelector((state) => state.category.categories);
    const [ category, setCategory ] = useState('')
    const [ isSubmitting, setIsSubmitting ] = useState(false)
    const [ isCreated, setIsCreated] = useState(false)
    

     const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    const BlogCreated = () => (
        <div className ="absolute top-0 z-50 w-full">
            <Alert className="w-full" type="success" onClose={() => setIsCreated(false)}>
                Blog created succesfuly
                <div className="mt-2">
                    <Link to="/admin/dashboard" className="underline"> Go back to dashboard </Link> 
                </div>
            </Alert>
        </div>
    )

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
                 text: 
                    Yup.string()
                    .required("Required"),

                title:
                    Yup.string()
                    .required("Required"),
                
                status:
                    Yup.string()
                    .required("Required"),
            })


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
            <SectionTitle> Add blog post </SectionTitle>
        </div>
      <div className="container relative">
        <Formik
          initialValues={{
            title: '',
            text: '',
            status:"",
            file: [],
            category: "",
          }}

          validationSchema={validatorForm}
          validateOnChange={isSubmitting}
          validateOnBlur={isSubmitting}

          onSubmit= { async (values, {resetForm, validate}) => {


            let formData = new FormData();

            formData.append("title", values.title);
            formData.append("text", values.text);
            formData.append("status", values.status);
            formData.append("category", values.category);

     
            for (let i = 0; i <= values.file.length; i++) {
              formData.append(`file`, values.file[i] );
            }

            dispatch(addPost(formData))
            resetForm({values: ''})
            setIsCreated(true)

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
        
        const handleCategory = (e) => {
            setFieldValue("category", e.target.value)
            setCategory(e.target.value)
        }
        
         return (
            <form onSubmit={handleSubmit} >
                
                { isCreated && 
                    <BlogCreated />
                }

                <div className="grid grid-cols-3 gap-4 mb-4">
                    <Card className="col-span-2 lg:rounded-sm">
                        <div className="mb-4">
                            <Label>
                                <span className="text-base font-medium"> Add Title </span>
                                <Input 
                                    valid
                                    className={`mt-1 p-2 rounded-md shadow-button`}
                                    id="title"
                                    name="title" 
                                    type="text"
                                    placeholder = " Your blog title "
                                    value={values.title}
                                onChange={handleChange} />
                            </Label>
                            {errors.title && (
                            <div className="input-feedback">{ errors.title }</div>
                            )}
                        </div>
                        <div className="my-2">
                            <Field name="text">
                                {({ field }) => <ReactQuill value={field.value} onChange={field.onChange(field.name)}  />}
                            </Field>
                            {errors.text && (
                                <div className="input-feedback">{errors.text}</div>
                            )}
                        </div>
                    </Card>

                    <Card className="lg:rounded-sm">
                        <span className="text-base font-medium my-2"> Add a blog picture </span>
                        <Dropzone  
                            accept="image/jpeg, image/png"
                            minSize={1024}
                            maxSize={3072000}
                            multiple = {false }
                            onDrop={(acceptedFiles) => {
                        // on drop we add to the existing files
                        setFieldValue("file", values.file.concat(acceptedFiles.map(file => Object.assign(file, {
                            preview: URL.createObjectURL(file)
                        }))));
                        }}>
                                {({ getRootProps, getInputProps }) => (
                        <section className="container p-2 border-box mt-2">
                            <div {...getRootProps({ className: "dropzone text-center" })}>
                                <input name="file" {...getInputProps()} />
                                <div clasName="p-2 mx-auto">
                                    <AiFillFileImage className="my-auto h-12 w-12 m-auto"/>
                                    <div className="my-3 shadow-button rounded cursor-pointer hover:shadow-hover w-1/2 text-center m-auto p-1 "> Add a file </div>
                                </div>
                                <em className="text-xs text-Black-medium">(Only *.jpeg and *.png images will be accepted)</em>
                            </div>
                        </section>
                    )}
                        </Dropzone>
                            <div className="px-4 my-2">
                            <strong>File:</strong>
                            <ul className="list-disc my-2">
                                <aside style={thumbsContainer}>
                                    {values.file?.map((data, i) => {
                                        return (
                                        <div style={thumb} key={data.name} className="relative">
                                            <div style={thumbInner}>
                                                <img
                                                alt="preview"
                                                src={data.preview}
                                                style={img}
                                                />
                                            </div>
                                            <div className=" absolute top-2 right-1 z-50">     
                                                <button
                                                    className="rounded-full w-5 h-5 bg-Grey-light p-0 border-0 inline-flex items-center justify-center text-white">
                                                    <AiOutlineClose className="w-3 h-3"/>
                                                </button>
                                            </div>
                                        </div>
                                        )
                                    })}
                                </aside>
                            </ul>
                            {errors.file && (
                            <div className="input-feedback">{errors.file}</div>
                            )}
                        </div>

                        <Label className="mb-3">
                            <span> Blog Status </span>
                                <Select className="Selection mt-1 p-2 rounded-md shadow-button bg-white capitalize"
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
                            {errors.status && (
                            <div className="input-feedback">{errors.status}</div>
                            )}

                        <div className="sm=hidden absolute bottom-4 right-4">
                            <Button disabled = { _.isEmpty(values.title && values.text) }
                                    className= {`bg-Black text-white ${ _.isEmpty(values.title && values.text) && 'bg-opacity-40 cursor-text' }`}
                                    type="submit" 
                                    onClick={() => setIsSubmitting(true)}
                            >
                               Publish
                            </Button>
                        </div>
                    </Card>


                <div className="w-full fixed bottom-0 border-t-2 border-Grey bg-white z-50 lg:hidden">
                    <div className="flex my-2 p-3">
                        <Button type="button">
                            Cancel
                        </Button>
                        <Button className="bg-Black text-white w-3/5 ml-3" type="submit" onClick={() => setIsSubmitting(true)}>
                            Save Blog post
                        </Button>
                    </div>
                </div>

                </div>
            </form>
    
      )} 
    }
    
    </Formik>
    
    </div>
    </>
    
    )};

    AddBlog.propTypes = {
        addPost: PropTypes.func.isRequired
    };

export default connect(
  null,
  { addPost }
)(AddBlog);


    