import React from "react";
import Link from "next/link";
import MenuIcon from "./Menu-icon";
export default function Header() {
  return (
    <div className="w-screen h-16 flex p-4">
      <div></div>
      <div className="w-full flex ">
        <div className="w-full">
          <ul className="flex justify-around w-full">
            <li >
              <Link className="text-white" href={"./"}>
                خانه
              </Link>
            </li>

            <li>
              <Link className="text-white" href={"./answer-survey"}>
                پاسخ به پرسشنامه
              </Link>
            </li>

            <li>
              <Link className="text-white" href={"./create-survey"}>
                ایجاد پرسشنامه
              </Link>
            </li>

            <li>
              <Link className="text-white" href={"./create-survey"}>
                پکیج های موجود
              </Link>
            </li>
            <li>
              <Link className="text-white" href={"./get-paid"}>
                دریافت وجه
              </Link>
            </li>

           
          </ul>
        </div>
        <div className="flex pr-3">
          <MenuIcon/>
        </div>
      </div>
    </div>
  );
}
