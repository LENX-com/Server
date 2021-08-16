import React, { useEffect } from 'react'
import Card from '../../../components/Cards/Card'
import { MdSearch} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { MdChevronRight } from 'react-icons/md'
import { getQuestionsByProduct  } from '../../../actions/questionAction'
import { Link } from 'react-router-dom'

const CustomerQuestions = ({product}) => {
    const MAX_LENGTH = 80;
    const questions = useSelector((state) => state.questions.questions);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getQuestionsByProduct(product?._id))
    }, [])

    return (
        <Card title="Customer Questions">
             <div className="sidebar__search my-2">
                    <form className="sidebar__search--container border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none my-auto flex">
                        <MdSearch className="text-xl my-auto"/>
                        <input  
                            placeholder="Search for questions"
                            type="text"
                        />
                        <button style={{ display: "none" }} type="submit" onClick={"search"}></button>
                    </form>
                </div>
                <div className="p-2 border-Grey-border border solid rounded-md bg-white">

                    {questions.slice(0, 5).map( ({question, answers}) => (
                <div className="my-2">
                        <div className="font-bold text-base my-2">
                            Q: {question}
                        </div>
                        <div className="flex italic">
                        <span className="font-bold italic">A: </span> {`${answers[0] !== undefined ? answers[0]?.answer.substring(0, MAX_LENGTH) : "" }...`}
                        </div>
                    </div>
                        ))}
            </div>
            <Link to = {`/marketplace/questions/${product._id}`} >
                <div className="flex space-between my-3">
                    <h1 className="ml-2">  See All {questions.length} answered questions </h1>
                    <MdChevronRight className="text-2xl"/>
                </div>
            </Link>
        </Card>
    )
}

export default CustomerQuestions
