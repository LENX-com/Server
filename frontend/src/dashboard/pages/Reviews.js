import React from 'react'
import PageTitle from '../components/Typography/PageTitle'
import { Data } from '../components/stories/Data'
import Review from '../components/reviews/Review'

const Reviews = () => {

    const reviewItem = () => {
        return (
            <div className="content mb-10">
        <div className="flex items-center justify-between w-full my-2 ">
        </div>
        <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        {Data.map((data, i)=> (
          <Review />
          ))}
        </div>
      </div>
        )
    }
    return (
        <>
            <PageTitle>Reviews</PageTitle>
            {/* <SectionTitle>Purchase History</SectionTitle> */}
            {reviewItem()}
        </>  
    )
}

export default Reviews