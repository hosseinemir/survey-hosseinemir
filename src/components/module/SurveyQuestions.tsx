'use client'

import { useState } from "react"
import { SquestionsT } from "../../types/types"
import Questionsmodule from "./Questionsmodule"

export default function SurveyQuestions() {
  const [Squestions,setSquestions]=useState<SquestionsT[]>([{
    title:"",
    answer:[{id:1,title:"number 1"},{id:2,title:" number 2"}]
  }])
  
  
  return (
    <div className=''>
     {Squestions.map((item,index)=>(
      <div key={index}>
        <Questionsmodule {...item} />

      </div>
     ))}
      

    </div>
  )
}
