"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { qandaT } from "../../types/types";

export default function Questionsmodule() {
  const qandasaple: qandaT = { title: "", img: "", answers: ["", ""] };
  const [QandA, setQandA] = useState<qandaT[]>([
    { title: "a", img: "", answers: ["b", "c"] },
    { title: "f", img: "", answers: ["e", "d"] },
  ]);
  const deletequestionHandler: Function = (index: number): void => {
    let newquestion: qandaT[] = [...QandA];
    newquestion.splice(index, 1);
    console.log(newquestion);
    setQandA(newquestion);
  };
  const addsubqhandler: Function = (index: number): void => {
    let newqanda: qandaT[] = [...QandA];
    newqanda[index] = {
      ...newqanda[index],
      answers: [...newqanda[index].answers, ""],
    };
    setQandA(newqanda);
  };
  const deletesubhandler: Function = (index: number, index2: number): void => {
    console.log(index, index2);
    let newqanda: qandaT[] = [...QandA];
    newqanda[index].answers.splice(index2, 1);
    setQandA(newqanda);
  };
  const setinput1value: Function = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    let newvalue: qandaT[] = [...QandA];
    newvalue[index].title = e.target.value;
    setQandA(newvalue);
  };
  const setinput2value: Function = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    index2: number
  ): void => {
    let newqanda: qandaT[] = [...QandA];
    newqanda[index].answers[index2] = e.target.value;
    setQandA(newqanda);
  };
  return (
    <div className="w-full flex flex-col items-start">
      <p>ابتدا عنوان سوال و سپس گزینه های هر سوال را وارد کنید</p>
      <div className="w-full ">
        {QandA.map((item, index) => (
          <div key={index}>
            <p>عنوان سوال</p>
            <div>
              <p>{index + 1}</p>
              <input
                type="text"
                value={item.title}
                className="text-black"
                onChange={(e) => setinput1value(e, index)}
              />
              <button onClick={() => deletequestionHandler(index)}>
                delete
              </button>
            </div>
            <div>
              <p>گزینه های جواب</p>
              {item.answers.map((item, index2) => (
                <div key={index2}>
                  <p>{index2 + 1}</p>

                  <input
                    type="text"
                    className="text-black"
                    value={item}
                    onChange={(e) => {
                      setinput2value(e, index, index2);
                    }}
                  />
                  <button
                    onClick={() => {
                      deletesubhandler(index, index2);
                    }}
                  >
                    delete
                  </button>
                </div>
              ))}
              <button
                onClick={() => {
                  addsubqhandler(index);
                }}
              >
                +
              </button>
            </div>
          </div>
        ))}
        <button
          onClick={() => {
            setQandA([...QandA, qandasaple]);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
