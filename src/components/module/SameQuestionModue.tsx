"use client";
import AddBoxIcon from '@mui/icons-material/AddBox';
import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
export default function SameQuestionModue() {
  const [allQuestions, setAllQuestions] = useState<string[]>([""]);
  const [answers, setAnswers] = useState<string[]>([""]);
  const changeallquestions: Function = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    let allqfunc: string[] = [...allQuestions];
    allqfunc[index] = e.target.value;
    setAllQuestions(allqfunc);
  };
  const addquestionshandler: Function = (): void => {
    setAllQuestions([...allQuestions, ""]);
  };
  const deletequestions: Function = (index: number): void => {
    let newquestions: string[] = [...allQuestions];
    newquestions.splice(index, 1);
    setAllQuestions(newquestions);
  };
  const changeAllAnswer: Function = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    let newanswerfunc: string[] = [...answers];
    newanswerfunc[index] = e.target.value;
    setAnswers(newanswerfunc);
  };
  const deleteanswerHnadler:Function=(index:number):void=>{
    let newnewanswer:string[]=[...answers]
    newnewanswer.splice(index,1)
    setAnswers(newnewanswer)
  }
  return (
    <div className="w-11/12 flex flex-col items-start md:w-3/4 p-5 m-5 shadow-lg bg-slate-500/10 rounded-md mt-10">
      <p>سوالات خود را وارد کنید</p>
      {allQuestions.map((item, index) => (
        <div key={index} className='flex items-center w-full'>
          <p>{index + 1}</p>
          <input
            className="text-black w-full m-3 p-1 rounded-sm md:w-3/4"
            type="text"
            value={item}
            onChange={(e) => {
              changeallquestions(e, index);
            }}
          />
          <button
            onClick={() => {
              deletequestions(index);
            }}
          >
           <DeleteIcon className="hover:text-red-500 hover:text-3xl"/>
          </button>
        </div>
      ))}
      <div className='flex mt-4 mb-4'>
        <p>اضافه کردن سوال</p>

        <button
          onClick={() => {
            addquestionshandler();
          }}
          className="mr-5"

        >
          <AddBoxIcon/>
        </button>
      </div>
      <p>گزینه های پاسخ را وارد کنید</p>
      {answers.map((item, index) => (
        <div className='flex items-center w-full'>
          <p>{index + 1}</p>
          <input
            type="text"
            className="text-black w-full m-3 p-1 rounded-sm md:w-3/5"


            value={answers[index]}
            onChange={(e) => {
              changeAllAnswer(e, index);
            }}
          />
          <button onClick={()=>{deleteanswerHnadler(index)}}><DeleteIcon className="hover:text-red-500 hover:text-3xl"/></button>
        </div >
      ))}
      <div  className='flex mt-4 mb-4'>
      <p>
        اضافه کردن گزینه سوال
      </p>
      <button onClick={()=>{setAnswers([...answers,""])}}><AddBoxIcon/></button>
      </div>
     
    </div>
  );
}
