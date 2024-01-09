"use client";

import React, { useState } from "react";

export default function SameQuestionModue() {
  const [allQuestions, setAllQuestions] = useState<string[]>([""]);
  const [answers, setAnswers] = useState<string[]>([]);
  const changeallquestions: Function = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    let allqfunc: string[] = [...allQuestions];
    allqfunc[index] = e.target.value;
  };
  return (
    <div>
      <p>سوالات خود را وارد کنید</p>
      {allQuestions.map((item, index) => (
        <input
          className="text-black"
          key={index}
          type="text"
          value={item}
          onChange={(e) => {
            changeallquestions(e, index);
          }}
        />
      ))}
      <p>گزینه های پاسخ را وارد کنید</p>
      {}
    </div>
  );
}
