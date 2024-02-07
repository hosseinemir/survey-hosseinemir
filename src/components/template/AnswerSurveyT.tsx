"use client";
import React, { useState } from "react";

const surveyforexapmle = {
  suser: "suser",
  sname: "sname",
  title: "title",
  uni: "uni",
  detail: "details",
  questions: [
    { title: "1", img: "", answer: ["1", "2", "3", "4"] },
    { title: "2", img: "", answer: ["1", "2", "3", "4"] },
    { title: "3", img: "", answer: ["1", "2", "3", "4"] },
    { title: "4", img: "", answer: ["1", "2", "3", "4"] },
    { title: "5", img: "", answer: ["1", "2", "3", "4"] },
    { title: "6", img: "", answer: ["1", "2", "3", "4"] },
    { title: "7", img: "", answer: ["1", "2", "3", "4"] },
  ],
  createdat: "date",
};

export default function AnswerSurveyT() {
  const [qcounter, setqcounter] = useState<number>(1);

  const fristqHandler = () => {
    setqcounter(1);
  };
  const lastqHandler = () => {
    setqcounter(surveyforexapmle.questions.length);
  };
  const nextqHandler = () => {
    if (qcounter < surveyforexapmle.questions.length) {
      setqcounter((per) => per + 1);
    } else {
      return;
    }
  };
  const previousqHandler = () => {
    if (qcounter > 1) {
      setqcounter((per) => per - 1);
    } else {
      return;
    }
  };
  const buttons = [
    {id:"1",name:"اولین",func:fristqHandler},
    {id:"2",name:"قبلی",func:previousqHandler},
    {id:"3",name:"بعدی",func:nextqHandler},
    {id:"4",name:"اخرین",func:lastqHandler},
  ]
  return (
    <div>
      <div>
        <p>توضیحات</p>
      </div>

      <div>
        <div>
          <p>{qcounter}</p>
          <p>{surveyforexapmle.questions[qcounter - 1].title}</p>
        </div>
        <div></div>

        <div>
          {buttons.map(item=>(
            <button key={item.id} onClick={item.func} className="p-5">{item.name}</button>
          ))}
          {/* <button onClick={fristqHandler}>first</button>
          <button onClick={previousqHandler}>previous</button>
          <button onClick={nextqHandler}>next</button>
          <button onClick={lastqHandler}>last</button> */}
        </div>
      </div>
    </div>
  );
}
