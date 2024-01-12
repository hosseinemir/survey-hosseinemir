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
    <div className="w-full flex items-start md:items-center flex-col">
      <p className="md:w-3/4 mt-5 mr-5 md:mr-0">
        در صورتی که گزینه های شما برای هر سوال یکسان نیست تیک زیر را بردارید.
      </p>
      <div className="flex  min-w[400px] md:w-3/4 mt-5 mr-5 md:mr-0">
        <input
          type="checkbox"
          name=""
          id="same"
          checked={sameQuestion}
          onChange={(e): void => {
            setSamequestions(e.target.checked);
          }}
          className="ml-4"
        />
        <label htmlFor="same">گزینه های پاسخ یکسان هستند</label>
      </div>

      {sameQuestion ? <SameQuestionModue /> : <Questionsmodule />}
    </div>
  );
}
