"use client";

import React, { useState } from "react";

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
    <div>
      <p>سوالات خود را وارد کنید</p>
      {allQuestions.map((item, index) => (
        <div key={index}>
          <p>{index + 1}</p>
          <input
            className="text-black"
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
            {" "}
            delete{" "}
          </button>
        </div>
      ))}
      <div>
        <p>اضافه کردن سوال</p>

        <button
          onClick={() => {
            addquestionshandler();
          }}
        >
          +
        </button>
      </div>
      <p>گزینه های پاسخ را وارد کنید</p>
      {answers.map((item, index) => (
        <div>
          <p>{index + 1}</p>
          <input
            type="text"
            className="text-black"
            value={answers[index]}
            onChange={(e) => {
              changeAllAnswer(e, index);
            }}
          />
          <button onClick={()=>{deleteanswerHnadler(index)}}>delete</button>
        </div>
      ))}
      <p>
        اضافه کردن گزینه سوال
      </p>
      <button onClick={()=>{setAnswers([...answers,""])}}>+</button>
    </div>
  );
}
