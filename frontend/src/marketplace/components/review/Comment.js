import React from 'react'
import Card from '../../../components/Cards/Card'
import Rating from 'react-rating'
import { MdStarBorder, MdStar} from 'react-icons/md'
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'

const Comment = ({comment}) => {

    const comments = [
        {
            comment: "hey dude"
        },
        {
            comment: "hey dude"
        },
        {
            comment: "hey dude"
        },
        {
           comment: "hey dude"
        }
    ]
    return (
        <>
            {comments.map( data => 
                <Card>
                    <div className="flex items-center">
                        <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                        <div className="ml-2">
                            <div className="text-sm ">
                                <span className="font-semibold">Dallin Baumbach</span>
                            </div>
                            <div className="text-gray-500 text-xs ">Software Engineer at Tesla, Inc</div>
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
                            <div className="mt-2"> Created 3 days ago</div>
                        </div>
                        <div>
                            <h1 className="text-lg font-bold"> Title </h1>
                            <p className="text-gray-800 text-sm mt-2 leading-normal md:leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
