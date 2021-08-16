import React, { useState, useEffect } from "react";
import {
  MdArrowBack,
} from "react-icons/md";
import { AiOutlineComment, AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { Card, CardBody, Avatar} from '@windmill/react-ui'
import Button from '../../components/Buttons/Button'
import { useDispatch, useSelector } from "react-redux";
import { SwiperSlide, Swiper } from 'swiper/react'
import { getQuestionsByProduct, createQuestion } from '../../actions/questionAction'
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { Menu } from '@headlessui/react'
import { Filter } from '../assets/icons'
import SectionTitle from '../../components/Typography/SectionTitle'
import { Input, Label, Dropdown, DropdownItem, Badge } from '@windmill/react-ui'
import SearchBar from '../../components/searchbar/SearchBar'


const Questions = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const questions = useSelector((state) => state.questions.questions);
    const { user } = useSelector((state) => state.auth);
    const [ question, setQuestion ] = useState("")
    const [ answers, setAnswers ] = useState(false)
    const [ isOpen1, setIsOpen1] = useState(false)

    const productId = props.match.params.productId;

     useEffect(() => {
      dispatch(getQuestionsByProduct(productId))
    }, [])

   const clickSubmit = (event) => {
    event.preventDefault();
    const questionData = {
      question: question,
      productId: productId,
      author: {
        id: user._id,
        name: user.name,
        avatar: user.avatar
        },
    };
    dispatch(createQuestion(productId, questionData));
    setQuestion("")
  };

  const DropDownMenu = () => (
       <div className="">
        <div className="h-10">
            <button 
                onClick={() => setIsOpen1(true)}
                className="bg-Grey p-2 inline-flex justify-center rounded-full border border-gray-300 shadow-sm px-4 py-2  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-orange">
                <Filter />
            </button>
        </div>
      <Dropdown isOpen={isOpen1} onClose={() => setIsOpen1(false)} className="w-auto">
        <DropdownItem tag="a" href="#">
          <div>Most recent</div>
        </DropdownItem>
        <DropdownItem onClick={() => alert('Alerts!')}>
          <div>Top rated</div>
        </DropdownItem>
      </Dropdown>
    </div>
  )

  const answerHandler = (answers) => {
      console.log(answers)
    answers.length > 0 ? setAnswers(answers) : setAnswers([])
}

  
    //Card to display questions  
    const QuestionCard = ({question}) => (     
           <Card className="max-w-md">
                <CardBody>
                    <div className="flex">
                        <Avatar size="large" src= {question.author.avatar} alt="Judith" />
                        <div className="ml-2">
                            <p className=" dark:text-gray-300"> {question.author.name} </p>
                        </div>
                    </div>
                    <p className="my-2 dark:text-gray-300 font-bold ">
                        {question.question}
                    </p>
                    <div className="flex justify-between">
                        <div className="flex rounded-md border border-Grey-sd p-1"  onClick ={ () => answerHandler(question.answers)}>
                            <div>
                                <AiOutlineComment className="my-auto text-lg mr-1" />
                            </div>
                            <div className="text-sm">
                                {question.answers.length}
                            </div>
                        </div>
                        <div className="flex rounded-md border border-Grey-sd p-1">
                            <AiOutlineArrowDown className="my-auto"/>
                            <p className="my-auto text-sm mx-2">
                                {question.score}
                            </p>
                            <AiOutlineArrowUp  className="my-auto"/>
                        </div>
                    </div>
                </CardBody>
            </Card>
      )
    const AnswerCard = ({answer}) => (
            <Card className="max-w-md">
                <CardBody>
                    <div className="flex">
                        <Avatar size="large" src= {answer.avatar} alt="Judith" />
                        <div className="ml-2">
                            <p className=" dark:text-gray-300"> {answer.name} </p>
                        </div>
                    </div>
                    <p className="my-2 dark:text-gray-300 font-bold ">
                        {question.question}
                    </p>
                    <div className="flex justify-between">
                        <div className="flex rounded-md border border-Grey-sd p-1">
                            <div>
                                <AiOutlineComment className="my-auto text-lg mr-1" />
                            </div>
                            <div className="text-sm">
                                60
                            </div>
                        </div>
                        <div className="flex rounded-md border border-Grey-sd p-1">
                            <AiOutlineArrowDown className="my-auto"/>
                            <p className="my-auto text-sm mx-2">
                                2
                            </p>
                            <AiOutlineArrowUp  className="my-auto"/>
                        </div>
                    </div>
                </CardBody>
            </Card>
    )

    return (
        <>
            <div className="p-2 my-3 relative">
                <div className="relative h-10">
                    <div className=" absolute top-2 left-0 z-50">
                        <div className="flex">
                            <button
                                className="rounded-full w-8 h-8 bg-Grey-light p-0 border-0 inline-flex items-center justify-center text-white"
                                onClick={() => setTimeout(() => history.goBack(), 150)}>
                                <MdArrowBack className="w-5 h-5"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="my-3">
                    <SectionTitle> Post your question</SectionTitle>
                    <Label className="p-2 border-2 border-border rounded-md bg-white"> 
                        <Input placeholder= "Type in your question" type="text" value={question} onChange={(event) => setQuestion(event.target.value)}/>
                    </Label>
                    <div className="my-2">
                        <Button className="bg-orange-light text-white text-sm shadow-none" onClick= {clickSubmit}> Post Question </Button>
                    </div>
                </div>
            </div>
            <div className="my-4">
                <div className="px-2"> 
                    <SectionTitle> Questions </SectionTitle>
                </div>
                {questions.length > 0 ?
                    <>
                    <div className="px-2 mb-2">
                        <div className="flex">
                            <div className="w-4/5 mr-2">
                                <Label className="p-2 border-2 border-border rounded-md bg-white"> 
                                    <Input placeholder= "Search for questions" type="text"/>
                                </Label>
                            </div>
                            <div className="z-50 relative">
                                <DropDownMenu />
                            </div>
                        </div>
                    </div>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        freeMode={true}
                        style={{width:"100vw"}}
                        >
                        {questions?.map(( question ) => (
                            <SwiperSlide className="w-3/4">
                                <QuestionCard question = { question } />
                            </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    </>
                    :
                    <div className="p-2"> No questions for this product </div>
                }
            </div>
    
            { answers.length > 0 ?
            <div className="my-2">
                <SectionTitle> Answers </SectionTitle>
                { answers &&  answers.map((answer)=> (
                    <div>
                        Hey dude
                    </div>
                ))}
            </div>
            : ""
            }
        </>
    )
}

export default Questions
