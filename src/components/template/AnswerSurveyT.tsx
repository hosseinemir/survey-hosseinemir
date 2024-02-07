"use client"
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
  ],
  createdat: "date",
};

export default function AnswerSurveyT() {
  const [qcounter, setqcounter] = useState<number>(1);

  return (
    <div>
      <div>
        <p>توضیحات</p>
      </div>

      <div>
        <div>
            <p>{qcounter}</p>
            <p>{surveyforexapmle.questions[qcounter-1].title}</p>
        </div>
        
        <div>
          <button>first</button>
          <button>previous</button>
          <button>next</button>
          <button>last</button>
        </div>
      </div>
    </div>
  );
}
