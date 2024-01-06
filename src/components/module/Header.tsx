import React, { useState } from "react";
import Link from "next/link";
import MenuIcons from "./Menu-icon";
import ToggleMenu from "./ToggleMenu";

export default function Header() {
  return (
    <div className="w-screen h-16 flex">
      <ToggleMenu/>
      <div className="w-full hidden md:flex p-8">
        <div className="w-full">
          <ul className="flex justify-around w-full">
            <li>
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
              <Link className="text-white" href={"./currunt-offer"}>
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
          <MenuIcons />
        </div>
      </div>
    </div>
  );
}
