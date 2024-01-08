import React, { useState } from 'react'
import SurveyInfo from '../module/SurveyInfo'
import SurveyQuestions from '../module/SurveyQuestions'

export default function CreateSurveyT() {
  
  return (
    <div className='w-full flex flex-col items-center md:mt-20'>
      <div className='md:w-3/4'>
        <h2 className='font-semibold text-2xl mb-10'>
          ایجاد پرسشنامه
        </h2>
        <p>
          فقط کافیه اطلاعات پرسشنامتو اینجا وارد کنی
        </p>
        <p>
          اطلاعات اولیه که وارد شد میتونی نوع سوالات هم مشخص کنی
        </p>
      </div>
      <SurveyInfo/> 
      <SurveyQuestions/>
    </div>
  )
}
