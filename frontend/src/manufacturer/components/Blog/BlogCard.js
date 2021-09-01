import React from 'react'
import moment from 'moment'
import parse from 'html-react-parser';


const BlogCard = ({blog}) => {
    const MAX_LENGTH = 250
    
    return (
        <>
            <div className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-product dark:bg-gray-800">
                <img className="object-cover w-full h-48" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article" />
                <div className="p-6">
                <div>
                    <a href="#" className="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline"> { blog.title } </a>
                </div>
                    <div className="mt-2 text-sm text-Black-medium dark:text-gray-400">
                        {parse(`${blog.text.substring(0, MAX_LENGTH)}${blog.text.length > 250 ? "..." : ""}`)}
                    </div>
                <div className="mt-4">
                    <div className="flex items-center">
                    <div className="flex items-center">
                        <img className="object-cover h-8 rounded-full" src= { blog.avatar } alt="Avatar" />
                        <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200"> { blog.name } </a>
                    </div>
                    <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{ moment(blog.date).calendar() } </span>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard
