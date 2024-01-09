'use client'

import { useState } from "react"
import { SquestionsT } from "../../types/types"

export default function SurveyQuestions() {
  const [Squestions,setSquestions]=useState<SquestionsT[]>([{
    title:"",
    answer:[]
  }])
  
  
  return (
    <div className=''>

      

    </div>
  )
}
