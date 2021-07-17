import React from 'react'
import { MdDoNotDisturb } from "react-icons/md";
import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div className="flex flex-col items-center">
      <MdDoNotDisturb className="w-12 h-12 mt-8 text-orange" aria-hidden="true" />
      <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">404</h1>
      <p className="text-gray-700 dark:text-gray-300">
        Page not found. Check the address or{' '}
        <Link to="/" className="text-Blue hover:underline dark:text-purple-300">
          go back
        </Link>
        .
      </p>
    </div>
  )
}

export default Page404
