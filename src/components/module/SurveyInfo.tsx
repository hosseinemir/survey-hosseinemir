"use client";

import React, { useState } from "react";
import { SinfoT } from "../../types/types";

export default function SurveyInfo() {
  const [Sinfo, setSinfo] = useState<SinfoT>({
    sname: "salam",
    title: "",
    uni: "",
    detail: "",
  });
  const preventsubmit: Function = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    e.preventDefault();
  };
  return (
    <div className="w-full flex justify-center">
      <form
        action=""
        onSubmit={(e) => preventsubmit(e)}
        className="flex flex-col w-full justify-start md:items-start md:w-3/4"
      >
        <div className="min-w-[400px] flex flex-col md:flex-row p-5 md:justify-between md:w-[700px]">
          <label htmlFor="" className="p-2 mt-3">عنوان پرسشنامه:</label>
          <input
            type="text"
            value={Sinfo.sname}
            onChange={(e) => {
              setSinfo({ ...Sinfo, sname: e.target.value });
            }}
          className="text-black rounded p-2 mt-3 md:mr-8 md:min-w-[400px]"/>
        </div>
        <div className="min-w-[400px] flex flex-col md:flex-row p-5 md:justify-between md:w-[700px]">
          <label htmlFor="" className="p-2 mt-3"> موضوع پرسشنامه:</label>
          <input
            type="text"
            value={Sinfo.title}
            onChange={(e) => {
              setSinfo({ ...Sinfo, title: e.target.value });
            }}
            className="text-black rounded p-2 mt-3 md:mr-8 md:min-w-[400px]"/>
        </div>
        <div className="min-w-[400px] flex flex-col md:flex-row p-5 md:justify-between md:w-[700px]" >
          <label htmlFor="">موسسه یا دانشگاه :</label>
          <input
            type="text"
            value={Sinfo.uni}
            onChange={(e) => {
              setSinfo({ ...Sinfo, uni: e.target.value });
            }}
          className="text-black rounded p-2 mt-3 md:mr-8 md:min-w-[400px]"/>
        </div >
        <div className="min-w-[400px] flex flex-col md:flex-row p-5 md:justify-between md:w-[700px]">
          <label htmlFor="">توضیحات (اختیاری):</label>
          <textarea
            name=""
            id=""
            value={Sinfo.detail}
            onChange={(e) => {
              setSinfo({ ...Sinfo, detail: e.target.value });
            }}
          className="text-black rounded p-2 mt-3 md:mr-8 md:min-w-[400px]"></textarea>
        </div>
      </form>
    </div>
  );
}
