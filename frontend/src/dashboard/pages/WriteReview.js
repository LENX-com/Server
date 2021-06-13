import React from 'react'
import PostRating from '../components/reviews/PostRating'
import PostComment from '../components/reviews/PostComment'
import AddStory from '../components/reviews/AddStory'
import AddTitle from '../components/reviews/AddTitle'
import Button from '../components/elements/Button'

const WriteReview = () => {
    return (
        <>  
            <PostRating />
            <AddStory />
            <AddTitle />
            <PostComment />
            <button className=" bg-orange text-white my-6 text-lg rounded"> Submit </button>
        </>
    )
}

export default WriteReview
