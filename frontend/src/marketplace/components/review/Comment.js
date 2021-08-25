import React from 'react'
import Card from '../../../components/Cards/Card'
import Rating from 'react-rating'
import { MdStarBorder, MdStar} from 'react-icons/md'
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'
import moment from 'moment'

const Comment = ({comments}) => {

    //function to capitalise first letter
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <>
            {comments && comments.comments.map( comment => 
                <Card>
                    <div className="flex items-center">
                        <div
                            className="rounded-full p-1 relative"
                            style={{background: "#62D2A2"}}>
                            <a
                                className="block bg-white p-1 rounded-full transform transition hover:-rotate-12 duration-300"
                                href="#div"
                            >
                                <img
                                className="h-10 w-10 rounded-full"
                                src= {comment.avatar}
                                alt="jkay"
                                />
                            </a>
                            <div className="text-xs text-white bg-green-400 rounded-full p-1 absolute top-0 right-0 w-6 h-6 -mx-1" >
                                <div className="mx-auto">
                                    97
                                </div>
                            </div>
                            </div>
                        <div className="ml-2">
                            <div className="text-sm ">
                                <span className="font-semibold"> { comment.name } </span>
                            </div>
                            </div>
                        </div>
                        <div className="flex my-2 justify-between">
                            <Rating
                            className="mt-2 text-xl"
                            emptySymbol= { <MdStarBorder/> }
                            fullSymbol= { <MdStar/> }
                            readonly
                            initialRating={4.5}
                            />
                            <div className="mt-2"> { capitalizeFirstLetter(moment(comment.date).startOf('day').fromNow())}</div> 
                        </div>
                        <div>
                            <h1 className="text-lg font-bold"> {comment.title} </h1>
                            <p className="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed"> { comment.text } </p>
                        </div>
                        <div className="text-xl relative h-12">
                            <div className="absolute right-2 bottom-0">
                                <AiOutlineCaretUp />
                                    20
                                <AiOutlineCaretDown />
                            </div>
                        </div>
                </Card>
            )}
        </>
    )
}

export default Comment
