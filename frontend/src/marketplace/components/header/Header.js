import React, { useState, useRef, useEffect } from "react";
import queryString from "query-string"
import logo from "../../assets/logo.gif";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import {getAllSearchQuery} from "../../../actions/productAction"
import { Link,useHistory} from "react-router-dom";
import {AiOutlineShoppingCart, AiOutlineHeart,AiOutlineUser, AiOutlineSearch, AiOutlineClose} from "react-icons/ai"
import "./Header.scss"
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  const searchResults = useSelector(state => state.product.productsSearched)
  const [showSearchModal, setSearchModal] = useState(false)
  const [searchResultDropDown, setSearchResultDropDown] = useState(false)
  const [form, setFormValue]= useState({
    text:""

  })


const [navOpen, setNavOpen] = useState(false)
const history = useHistory()
  const buttonRef = useRef(null);
const dispatch = useDispatch()
  useEffect(()=>{
    const body = document.querySelector("body")
    if(showSearchModal){
      body.style.overflow = "hidden"
    }else{
      body.style.overflow = "visible"
    }
  },[showSearchModal])

const handleSearchModalClose = ()=>{
  setSearchModal(false);
  setSearchResultDropDown(false)
  setFormValue({
    text:""
  })
}

  const SearchModal = ()=>(
    showSearchModal &&
    <div onClick={handleSearchModalClose} style={{position:"fixed", top:0, left:0, bottom:0, right:0, width:"100vw", height:"100vh", background:"#00000090", zIndex:2}}>
    </div>
  )

  const handleChange = (e)=>{
    setFormValue({...form, [e.target.name]:e.target.value})
   const test = queryString.stringify({value:e.target.value})

   dispatch(getAllSearchQuery("?" + test))
   if(searchResults.length !== 0){
     setSearchResultDropDown(true)
   }
  }

  const handleQuerySubmit = ()=>{
    history.push("/marketplace/search/?value=" + form.text);
 setSearchModal(false)
  }

  const handleClearInput = ()=>{
    setSearchResultDropDown(false)
    setFormValue({
      text:""
    })
  }


  const SearchBarActionIcon = ()=>(
    form.text !== "" ?  
    <>   
    
    <button onClick ={handleQuerySubmit}className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:bg-blue-600 lg:p-2 lg:rounded-full lg:text-sm lg:focus:outline-none lg:focus:ring  ">
    <AiOutlineSearch color="white" size={20}/>
    </button>

  
    
    <button className="hidden lg:block lg:absolute lg:inset-y-0 lg:block lg:right-10" onClick={handleClearInput}>
    <AiOutlineClose size={20}/>
    </button>
    </>:
    <button className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 ">
    <AiOutlineSearch size={20}/>
    </button>

  )
  


  const AuthLinks = () => (
    <>
    <a
    href="div#"
    className="block px-4 py-2 text-sm text-gray-700"
    role="menuitem"
    tabindex="-1"
    id="user-menu-item-0"
  >
    Your Profile
  </a>
  <a
    href="div#"
    className="block px-4 py-2 text-sm text-gray-700"
    role="menuitem"
    tabindex="-1"
    id="user-menu-item-1"
  >
    Settings
  </a>
  <a
    href="div#"
    className="block px-4 py-2 text-sm text-gray-700"
    role="menuitem"
    tabindex="-1"
    id="user-menu-item-2"
  >
    Sign out
  </a>
  </>
  )

  const UnauthLinks = () => (
  <>
  <a
    className="block px-4 py-2 text-sm text-gray-700"
    role="menuitem"
    tabindex="-1"
    id="user-menu-item-1"
  >
    Settings
  </a>
  <a
    className="block px-4 py-2 text-sm text-gray-700"
    role="menuitem"
    tabindex="-1"
    id="user-menu-item-1"
  >
About
  </a>
  <a
  
    className="block px-4 py-2 text-sm text-gray-700"
    role="menuitem"
    tabindex="-1"
    id="user-menu-item-2"
  >
    <Link to="/signin">
    Sign in
    </Link>
  </a>
  </>
    )
  return (
    <nav className="bg-gray-800 w-full "  style={{position:"sticky", zIndex:2, top:"0px", width:"100%"}}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
               ref={buttonRef}
               onClick={(props) => setNavOpen(!navOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center ">
            <div className="flex-shrink-0 flex items-center">
              {/* <img
                className="hidden lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <img
                className="lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              /> */}
              <img src={logo}  className="ml-8 sm:ml-0" style={{width:"6rem"}}/>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 items-center">
                <a
                  href="div#"
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  Dashboard
                </a>

                <a
                  href="div#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Team 
                </a>
              </div>
            </div>
            
            
            <div className="w-full flex flex-col" style={{position:"relative", zIndex:3}} >
              <div className="relative flex">
              <input value={form.text} name="text" type="text" onChange={(e)=>handleChange(e)} onClick={()=> setSearchModal(true)} className="hidden lg:block w-full p-2 rounded-full text-sm focus:outline-none focus:border-blue-300 "placeholder="Search Brands and Products"/>
            < SearchBarActionIcon />
              </div>
            
                  {searchResults && searchResultDropDown && searchResults.length !== 0 && form.text !== "" &&
                   <div className={"pt-6 px-2 "}style={{position:"absolute", top:20, background:"rgb(232, 232, 232)", width:"100%", height:"200px", zIndex:-2}}>
                   <h1>Search results</h1>
                   <ul>
                     {searchResults.map(data =>(
                       <li>{data.name}</li>
                     ))}
                     
                   </ul>
                 </div>
                  }
                 
                </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <AiOutlineSearch size={23} color="white" className="mr-6 lg:hidden"/>
            <AiOutlineHeart size={23} color="white" className="mr-6"/>
            <AiOutlineShoppingCart size={23} color="white"/>
  
            

            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  ref={buttonRef}
                  onClick={(props) => setIsOpen(!isOpen)}
                  className={`bg-gray-800 flex text-sm rounded-full  ${isOpen && "focus:ring-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800"}`}
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  {isAuth ? 
                  <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                :
                <AiOutlineUser size={23} color="white"/>  
                }
                  
                </button>
              </div>
              

              <Transition
                show={isOpen}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <div
                  initialFocus={buttonRef}
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  {isAuth ? <AuthLinks/> : <UnauthLinks/>}
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
      <SearchModal/>

      <Transition
       show={navOpen}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0">
      <div    initialFocus={buttonRef} className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="div#"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            Dashboard
          </a>

          <a
            href="div#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Team
          </a>

          <a
            href="div#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>

          <a
            href="div#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Calendar
          </a>
        </div>
      </div>

      </Transition>
    </nav>
  );
}