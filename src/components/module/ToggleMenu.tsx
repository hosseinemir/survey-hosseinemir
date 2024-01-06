"use client";
import MenuIcon from "@mui/icons-material/Menu";
import MenuIcons from "./Menu-icon";
import React, { useState } from "react";
import Link from "next/link";
import { TmenuItem } from "../../types/types";
import CloseIcon from '@mui/icons-material/Close';
const menuitem :TmenuItem[]=[
    {id:1,name:"خانه",link:"./"},
    {id:2,name:"پاسخ به پرسشنامه",link:"./answer-survey"},
    {id:3,name:"ایجاد پرسشنامه",link:"./create-survey"},
    {id:4,name:"پکیج های موجود ",link:"./currunt-offer"},
    {id:5,name:"دریافت وجه",link:"./get-paid"},
]
export default function ToggleMenu() {
  const [toggleMenu, setToggleMenu] = useState<Boolean>(false);
  const menucliclHandler: Function = () => {
    setToggleMenu(!toggleMenu);
  };
  const closemodalhandler:Function =()=>{
    setToggleMenu(false)
  }
  const closemodalhandler2:Function =(e:React.ChangeEvent<HTMLInputElement>):void=>{

    setToggleMenu(false)
  }
  const propagination:Function=(e:React.ChangeEvent<HTMLInputElement>)=>{
    e.stopPropagation()
  }
  return (
    <>
     <div className="flex w-full justify-between md:hidden p-8">
      <div className="mr-4" onClick={() => menucliclHandler()}>
        <MenuIcon />
      </div>
      <div className="flex pr-3">
        <MenuIcons />
      </div>
      
    </div>
    <div className={`fixed min-h-screen w-screen  bg-black/50 z-50  items-start justify-start ${toggleMenu? 'flex':'hidden'}`} onClick={(e)=>closemodalhandler2(e)}>
        <div className="mt-2 flex flex-col  bg-black">
           <div className="m-6 rounded-lg p-10 min-w-[290px]" onClick={e=>propagination(e)}>
           <div onClick={()=>closemodalhandler()}>
           <CloseIcon className="hover:opacity-15"/>
           </div>
            <ul className="mt-4">
                {menuitem.map(item=>{
                    return(
                        <li key={item.id} className="p-4 hover:bg-slate-900 rounded-sm" >
                            <Link href={item.link} onClick={()=>closemodalhandler()}>
                                {item.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
           </div>
          
        </div>


      </div>
    
    </>
   
  );
}
