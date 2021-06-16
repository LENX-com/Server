import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className= " footer mt-2 text-gray-600">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a href="#div" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="ml-3 text-xl">LENX</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Customer Service</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to='/help-centre' className="text-gray-600 hover:text-gray-800">Help Center</Link>
                </li>
                <li>
                  <Link to='/contact-us' className="text-gray-600 hover:text-gray-800">Contact Us</Link>
                </li>
                <li>
                  <Link to='/terms-conditions' className="text-gray-600 hover:text-gray-800">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link to='/privacy' className="text-gray-600 hover:text-gray-800">Privacy</Link>
                </li>
                <li>
                  <Link to='/privacy' className="text-gray-600 hover:text-gray-800">Complaints Policy</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">About Us</h2>
              <nav className="list-none mb-10">
                 <li>
                  <Link to='/about-us' className="text-gray-600 hover:text-gray-800">About LENX</Link>
                </li>
                <li>
                  <Link to='/careers' className="text-gray-600 hover:text-gray-800">Careers</Link>
                </li>
                <li>
                  <Link to='/blog' className="text-gray-600 hover:text-gray-800">Blog</Link>
                </li>
                <li>
                  <Link to='/shipping' className="text-gray-600 hover:text-gray-800">Shipping</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Buy on LENX</h2>
              <nav className="list-none mb-10">
               <li>
                  <Link to='/search' className="text-gray-600 hover:text-gray-800">All Categories</Link>
                </li>
                <li>
                  <Link to='/request' className="text-gray-600 hover:text-gray-800">Request for Quotation</Link>
                </li>
                <li>
                  <Link to='/partnerships' className="text-gray-600 hover:text-gray-800">Terms &amp; Conditions</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Sell on LENX</h2>
              <nav className="list-none mb-10">
                     <li>
                  <Link to='/sell-lenx' className="text-gray-600 hover:text-gray-800">Sell on LENX Business</Link>
                </li>
                <li>
                  <Link to='/advertise' className="text-gray-600 hover:text-gray-800">Advertise Your Product</Link>
                </li>
                <li>
                  <Link to='/partner-program' className="text-gray-600 hover:text-gray-800">Partner Program</Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer