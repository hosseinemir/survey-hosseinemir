"use client";

import { useEffect, useState } from "react";
import { SquestionsT } from "../../types/types";
import Questionsmodule from "./Questionsmodule";
import SameQuestionModue from "./SameQuestionModue";

export default function SurveyQuestions() {
  const [sameQuestion, setSamequestions] = useState<boolean>(true);
  // const [Squestions, setSquestions] = useState<SquestionsT[]>([
  //   {
  //     title: "",
  //     answer: [
  //       { id: 1, title: "number 1" },
  //       { id: 2, title: " number 2" },
  //     ],
  //   },
  // ]);

  return (
    <div className="">
      <p>
        در صورتی که گزینه های شما برای هر سوال یکسان نیست تیک زیر را بردارید.
      </p>
      <input
        type="checkbox"
        name=""
        id="same"
        checked={sameQuestion}
        onChange={(e):void => {
          setSamequestions(e.target.checked);
          
        }}
      />
      <label htmlFor="same">گزینه های پاسخ یکسان هستند</label>
      
      {sameQuestion? <SameQuestionModue/>:<Questionsmodule/>}
    
    </div>
  );
}
