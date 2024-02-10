"use client";
import React, { useEffect, useState } from "react";
import SurveyDetailsPart from "../module/SurveyDetailsPart";
import { useranswer } from "../../types/types";
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
  const [showdetails, setShowdetails] = useState<boolean>(true);
  const [useranswers, setuseranswers] = useState<useranswer>();
  // const [chekedarray , setchekedarray]=useState<[boolean]>()
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
  const showdetaishandler = () => {
    setShowdetails(!showdetails);
  };
  const buttons = [
    { id: "1", name: "اولین", func: fristqHandler },
    { id: "2", name: "قبلی", func: previousqHandler },
    { id: "3", name: "بعدی", func: nextqHandler },
    { id: "4", name: "اخرین", func: lastqHandler },
  ];
  // const chekedarrayfunc = (index)=>{
    
  //   let newarray = [...chekedarray]
  //   newarray[index]= !newarray[index]
    
  //   setchekedarray()
  // }
  useEffect(() => {
    setuseranswers({ userid: 1, surveyid: 1, answers: [] });
  }, []);
  useEffect(() => {
    let chekeditemcount =
      surveyforexapmle.questions[qcounter - 1].answer.length || 4;
    let chekedarray = [];

    for (let i = 0; i < chekeditemcount; i++) {
      chekedarray.push(false);
    }
    console.log(chekedarray)
  }, [qcounter]);
  return (
    <div>
      <div>
        {showdetails ? (
          <button onClick={showdetaishandler}>hide</button>
        ) : (
          <button onClick={showdetaishandler}>show</button>
        )}
        {showdetails && (
          <div>
            <SurveyDetailsPart
              name={"عنوان پرسشنامه"}
              data={surveyforexapmle.sname}
            />
            {surveyforexapmle.uni && (
              <SurveyDetailsPart
                name={"دانشگاه "}
                data={surveyforexapmle.uni}
              />
            )}
            {surveyforexapmle.title && (
              <SurveyDetailsPart
                name={"توضیحات "}
                data={surveyforexapmle.detail}
              />
            )}

            <SurveyDetailsPart
              name={" تاریخ ایجاد"}
              data={surveyforexapmle.createdat}
            />
          </div>
        )}
      </div>

      <div>
        <div>
          <p>{qcounter}</p>
          <p>{surveyforexapmle.questions[qcounter - 1].title}</p>
        </div>
        <div>
          {surveyforexapmle.questions[qcounter - 1].answer.map(
            (item, index) => (
              <div key={index}>
                <input id={item} type="checkbox" value={item} />
                <label htmlFor={item}>{item}</label>
              </div>
            )
          )}
        </div>

        <div>
          {buttons.map((item) => (
            <button
              key={item.id}
              onClick={item.func}
              className="p-2 rounded-md bg-gray-900 m-2 cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
