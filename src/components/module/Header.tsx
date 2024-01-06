import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <div className="w-screen h-16 flex">
      <div></div>
      <div className="w-full">
        <div className="w-full">
          <ul className="flex justify-around w-full">
            <li >
              <Link className="text-white" href={""}>
                خانه
              </Link>
            </li>

            <li>
              <Link className="text-white" href={""}>
                پاسخ به پرسشنامه
              </Link>
            </li>

            <li>
              <Link className="text-white" href={""}>
                ایجاد پرسشنامه
              </Link>
            </li>

            <li>
              <Link className="text-white" href={""}>
                پکیج های موجود
              </Link>
            </li>
            <li>
              <Link className="text-white" href={""}>
                دریافت وجه
              </Link>
            </li>

           
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
}
