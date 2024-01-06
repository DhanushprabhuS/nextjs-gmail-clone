import React from 'react'
import { useState } from 'react';
import { MdDiscount, MdInbox, MdOutlineSupervisorAccount, MdStayPrimaryLandscape } from "react-icons/md";
import Link from 'next/link';

const EmailTypeBtns = () => {
const [active,setActive] = useState([false,false,false]);

  return (
        <div className="flex w-full bg-white">
            <div className='flex flex-col group'>
                <Link href={'/primary'} 
                    onClick={()=>setActive([true,false,false])} 
                    className={
                    (active[0]?'text-[#0B57D0] font-bold ':'text-gray-500 ')+
                    "flex space-x-4 justify-center items-center pl-4 pr-32 py-4 group-hover:bg-[#b9bbc048] duration-75 cursor-pointer"
                    }>
                    <MdInbox className="w-[20px] h-[20px]"/>
                    <p className="text-sm">Primary</p>
                </Link>
                <div className={`mx-2 ${active[0]?'font-semibold rounded-t-full border-b-[3.5px] border-[#0B57D0]':''}`}></div>
            </div>


            <div className='flex flex-col group'>
                <Link href={'/promotion'} onClick={()=>setActive([false,true,false])} className={
                (active[1]?'text-[#0B57D0] font-bold ':'text-gray-500 ')+"flex space-x-4 justify-center items-center pl-4 pr-32 py-4 hover:bg-[#b9bbc048] duration-75 cursor-pointer"
                }>
                <MdDiscount className="w-[20px] h-[20px]"/>
                <p className="text-sm">Promotions</p>
                </Link>
                <div className={`mx-2 ${active[1]?'font-semibold rounded-t-full border-b-[3.5px] border-[#0B57D0]':''}`}></div>
            </div>

            <div className='flex flex-col group'>
                <Link href={'/social'} onClick={()=>setActive([false,false,true])} className={
                (active[2]?'text-[#0B57D0] font-bold ':'text-gray-500 ')+"flex space-x-4 justify-center items-center pl-4 pr-32 py-4 hover:bg-[#b9bbc048] duration-75 cursor-pointer"
                }>
                <MdOutlineSupervisorAccount className="w-[20px] h-[20px]"/>
                <p className="text-sm">Social</p>
                </Link>
                <div className={`mx-2 ${active[2]?'font-semibold rounded-t-full border-b-[3.5px] border-[#0B57D0]':''}`}></div>
            </div>
        </div>
  )
}

export default EmailTypeBtns