import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDiscount, MdInbox, MdNavigateBefore, MdNavigateNext, MdOutlineSupervisorAccount, MdRefresh, MdStayPrimaryLandscape } from "react-icons/md";
import { RxTriangleDown } from "react-icons/rx";
import Link from "next/link";

const Inbox = () => {

  const [active,setActive] = useState([true,false,false]);

  const styleObj = {color:'#1688e6d0'};
  


  return (
      <div className="sticky top-[63px] md:top-[60px] lg:top-[60px]">
        <div className="w-full">
          <div className="flex items-center justify-between px-1 lg:px-4 border-b py-2 bg-white">
            {/* Left Side */}
            <div className="flex items-center gap-3 box-content text-gray-500">
              <div className="flex -ml-1">
                <div className="p-1 hover:bg-gray-200 rounded-[.3rem]">
                  <input type="checkbox" className="" />
                </div>
                <div className="flex items-center p-1 hover:bg-gray-200 hover:text-gray-800 rounded-[.3rem] duration-150 cursor-pointer">
                  <RxTriangleDown className="w-4 h-4" />
                </div>
              </div>
              <div className="p-1.5 box-border  rounded-full hover:bg-gray-200 hover:text-gray-800 duration-150 cursor-pointer">
                <MdRefresh className="w-5 h-5 text-gray-500 hover:text-gray-800" />
              </div>
              <div className="p-1.5 box-border rounded-full hover:bg-gray-200 hover:text-gray-800 duration-150 cursor-pointer">
                <BsThreeDotsVertical className="w-4 h-4" />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3 text-gray-500 -mr-1.5">
              <div className="p-1.5 box-border rounded-[.3rem] hover:bg-gray-200 hover:text-gray-800 duration-150 cursor-pointer">
                <p className="text-[12px]">1-50 of 120</p>
              </div>
              <div className="p-1.5 box-border rounded-full hover:bg-gray-200 hover:text-gray-800 duration-150 cursor-pointer">
                <MdNavigateBefore className="w-5 h-5" />
              </div>
              <div className="p-1.5 box-border rounded-full hover:bg-gray-200 hover:text-gray-800 duration-150 cursor-pointer">
                <MdNavigateNext className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="flex justify-left space-x-0 sticky bg-white">
            
            <Link href={'/primary'} 
              onClick={()=>setActive([true,false,false])} 
              className={
              (active[0]?'text-[#1688e6d0] font-bold ':'text-gray-500 ')+"flex space-x-4 justify-center pl-4 pr-32 py-4 hover:bg-[#deeafb] duration-75 cursor-pointer"+(active[0]?'font-semibold border-b-4 border-blue-400':'')
              }>
              <MdInbox className="w-5 h-5"/>
              <p className="text-sm">Primary</p>
            </Link>

            <Link href={'/promotion'} onClick={()=>setActive([false,true,false])} className={
              (active[1]?'text-[#1688e6d0] font-bold ':'text-gray-500 ')+"flex space-x-4 justify-center pl-4 pr-32 py-4 hover:bg-[#deeafb] duration-75 cursor-pointer"+(active[1]?'font-semibold border-b-4 border-blue-400':'')
              }>
              <MdDiscount className="w-5 h-5"/>
              <p className="text-sm">Promotions</p>
            </Link>

            <Link href={'/social'} onClick={()=>setActive([false,false,true])} className={
              (active[2]?'text-[#1688e6d0] font-bold ':'text-gray-500 ')+"flex space-x-4 justify-center pl-4 pr-32 py-4 hover:bg-[#deeafb] duration-75 cursor-pointer"+(active[2]?'font-semibold border-b-4 border-blue-400':'')
              }>
              <MdOutlineSupervisorAccount className="w-5 h-5"/>
              <p className="text-sm">Social</p>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Inbox;
