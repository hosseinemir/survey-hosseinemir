'use client'

import { useState } from "react"
import { SinfoT } from "../../types/types"



export default function SurveyInfo() {
    const [Sinfo,setSinfo]= useState<SinfoT>({
        sname:"",
        title:"",
        uni:"",
        detail:"",
    })

  return (
    <div>SurveyInfo</div>
  )
}
