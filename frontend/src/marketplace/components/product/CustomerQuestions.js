import React from 'react'
import Card from '../../../components/Cards/Card'
import { MdSearch} from 'react-icons/md'
import { MdChevronRight } from 'react-icons/md'

const CustomerQuestions = () => {
    const MAX_LENGTH = 80;
    const fakeComments =  Array.from(Array(15).keys())

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

                    {fakeComments.slice(0, 5).map( data => (
                <div className="my-2">
                        <div className="font-bold text-base my-2">
                            Q: Does the product work?
                        </div>
                        <div className="flex">
                        <span className="font-bold">A:</span> {`${"Hi there, the product works just fine thanks".substring(0, MAX_LENGTH)}...`}
                        </div>
                    </div>
                        ))}
            </div>
            <div className="flex space-between my-3">
                 <h1 className="ml-2">  See All {"22"} answered questions </h1>
                <MdChevronRight className="text-2xl"/>
            </div>
        </Card>
    )
}

export default CustomerQuestions
