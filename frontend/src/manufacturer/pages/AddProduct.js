import React, { useState, useEffect } from 'react'
import { MdArrowBack } from "react-icons/md";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import SectionTitle from "../components/Typography/SectionTitle";
import ReactQuill from 'react-quill';
import { useDispatch, useSelector } from 'react-redux'
import { getSubs, getSubByCategory } from "../../actions/subCategoryAction";
import AddMedia from '../components/Store/AddMedia'
import { Input, Label, Select } from '@windmill/react-ui'
import { getCategories} from "../../actions/categoryAction";
import Card from '../../components/Cards/Card';
import Button from '../../components/Buttons/Button';
import '../styles/AddProduct.scss'
import 'react-quill/dist/quill.snow.css';

const AddProduct = () => {
    const history = useHistory();
    const [value, setValue] = useState('');
    const [ count, setCount ] = useState(1)
    const [ description, setDescription ] = useState("")
    const [values, setValues] = useState({
        name: '',
        description: description,
        price: '',
        subs: "",
        status:"",
        category: '',
        shippingPrice: '',
        quantity: '',
        photo: '',
        loading: false,
        error: '',
        createdProduct: '',
        redirectToProfile: false,
        formData: new FormData(),
  });

  const [ subs, setSubs ] = useState([])

  console.log(values)
  console.log(subs)

    const {
    name,
    price,
    status,
    shippingPrice,
    category,
    quantity,
    loading,
    error,
    createdProduct,
    formData,
  } = values;
    
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const categories = useSelector((state) => state.category.categories);
  
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    useEffect(() => {
      if(category) {
    getSubByCategory(category).then((res) => setSubs(res.data));
      }
  }, [category]);

  const handleChange = (name) => (event) => {
    const value = name === "file" ? event.target.files : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const handleDescription = () => {
    setDescription((e) => e.target.value)
  }

    return (
        <div className="mb-3">
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

            <Card>
                <div className="mb-4">
                    <Label>
                        <span className="text-base font-medium"> Add Title </span>
                        <Input className="mt-1 p-2 rounded-md shadow-button " value={name} onChange={handleChange("name")}/>
                    </Label>
                </div>
                <div className="my-2">
                    <span className="text-base font-medium p-2"> Add Description </span>
                    <ReactQuill theme="snow" value={description} onChange={setDescription }/>
                </div>
            </Card>

            <Card title="Add Media">
                <AddMedia />
            </Card>

            <Card title="Pricing">
                <div className="mb-4">
                    <Label>
                        <span className="text-base font-medium"> Pricing </span>
                        <Input className="mt-1 p-2 rounded-md shadow-button" type="number" value= {`${price}`} onChange= {handleChange("price")} />
                    </Label>
                    <Label className="mt-2">
                        <span className="text-base font-medium"> Shipping Price  </span>
                        <Input className="mt-1 p-2 rounded-md shadow-button" type="number" value= {`${shippingPrice}`} onChange={handleChange("shippingPrice")} />
                    </Label>
                </div>
            </Card>

            <Card title="Product Details" className="mb-10">
                <div className="shadow-separator">
                    <Label className="mb-3">
                        <span> Product Status </span>
                        <Select className="Selection mt-1 p-2 rounded-md shadow-button" onChange={handleChange("status")}>
                            <option className="px-2">Active</option>
                            <option className="px-2"> Draft </option>
                            <option className="px-2"> Inactive </option>
                        </Select>
                    </Label>
                </div>
                <div className="shadow-separator">
                    <div className="text-sm"> Product Quantity </div>
                    <div className="rounded-md shadow-button inline-block mt-2 mb-4">
                        <div className="flex text-base">
                            <button
                                className="border-r-2 border-Grey-border focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent rounded-l-md"
                                onClick= {() => setCount(Math.max(1, count - 1))}>
                                -
                            </button>
                            <h2 className="my-auto px-3 text-base"> { count } </h2>
                            <button
                            className="border-l-2 border-Grey-border focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent rounded-r-md"
                            onClick= {() => setCount(Math.min(20, count + 1))}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <Label className="my-2">
                     <span> Category </span>
                    <Select className="Selection mt-1 p-2 rounded-md shadow-button" onChange = {handleChange("category")}>
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
                    <Select className="Selection mt-1 p-2 rounded-md shadow-button">
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
                <div className="w-full absolute bottom-0 border-t-2 border-Grey bg-white z-50 ">
                    <div className="flex my-2 p-3">
                        <Button>
                            Cancel
                        </Button>
                        <Button className="bg-Black text-white w-3/5 ml-3">
                            Save Product
                        </Button>
                    </div>
                </div>
        </div>
    )
}

export default AddProduct

    