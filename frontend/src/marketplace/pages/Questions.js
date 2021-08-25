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
import AnswerPop from '../components/question/AnswerPop'
import SignInPop from '../components/auth/SignInPop'


const Questions = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const questions = useSelector((state) => state.questions.questions);
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    const [ question, setQuestion ] = useState("")
    const [ answers, setAnswers ] = useState(false)
    const [ isOpen, setIsOpen] = useState(false)
    const [ isOpen1, setIsOpen1] = useState(false)
    const [ singleQuestion, setSingleQuestion ] = useState(false)

    const productId = props.match.params.productId;

     useEffect(() => {
      dispatch(getQuestionsByProduct(productId))
    }, [])

   const clickSubmit = (event) => {
    if (!isAuthenticated) { setIsOpen(true)
     } else {
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
        dispatch(getQuestionsByProduct(productId))
    }
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

  const answerHandler = (question) => {
    setAnswers(question.answers)
    setSingleQuestion(question)
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
                        <div className="flex rounded-md border border-Grey-sd p-1"  onClick ={ () => answerHandler(question)}>
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
            <Card className="max-w-md my-2">
                <CardBody>
                    <div className="flex justify-between">
                        <div className="flex">
                            <div
                                className="rounded-full p-1 relative"
                                style={{background: "#62D2A2"}}>
                                <a
                                    className="block bg-white p-1 rounded-full transform transition hover:-rotate-12 duration-300"
                                    href="#div"
                                >
                                    <img
                                    className="h-10 w-10 rounded-full"
                                    src= {answer.avatar}
                                    alt= {answer.name}
                                    />
                                </a>
                                <div className="text-xs text-white bg-green-400 rounded-full p-1 absolute top-0 right-0 w-6 h-6 -mx-1" >
                                    <div className="mx-auto">
                                        97
                                    </div>
                                </div>
                            </div>
                            <div className="ml-2">
                                <p className=" dark:text-gray-300"> {answer.name} </p>
                            </div>
                        </div>
                    </div>
                    <p className="my-2 dark:text-gray-300 text-base ">
                        {answer.answer}
                    </p>
                    <div className="flex justify-between relative h-6">
                        <div className="flex rounded-md border border-Grey-sd p-1 absolute right-2">
                            <AiOutlineArrowDown className="my-auto"/>
                            <p className="my-auto text-sm mx-2">
                                {answer.score}
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
                        <Button
                            className="bg-orange-light text-white text-sm shadow-none"
                            onClick= {clickSubmit}
                        >
                            Post Question
                        </Button>
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
                            <div className="z-50">
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
                            <SwiperSlide className="w-3/4" key={question.name}>
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
    
            <div className="my-2 p-2">
                <SectionTitle> Answers </SectionTitle>
                { singleQuestion &&
                    <div className="mb-4 flex justify-between">
                        <div className="font-bold text-lg">
                            {singleQuestion.question}
                        </div>
                    {!isAuthenticated ?
                        <Button className="bg-orange-light text-white shadow-none text-sm" onClick={ () => setIsOpen(true)}>
                            Answer
                      </Button>
                      :
                     <AnswerPop question= {singleQuestion} />
                    }
                    </div>
                }               
             { answers.length > 0 ?
                  answers?.map((data, i)=> (  
                    <div key={i}>
                        < AnswerCard answer={data}/>
                    </div>
                ))
             : "No answers found"
            }
            { !isAuthenticated && <SignInPop  isOpen={ isOpen } setIsOpen={ setIsOpen } /> }
            </div>
        </>
    )
}

export default Questions
