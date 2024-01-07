import React from 'react'
import { useState } from 'react';
import { MdDiscount, MdInbox, MdOutlineSupervisorAccount, MdStayPrimaryLandscape } from "react-icons/md";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const EmailTypeBtns = () => {
const pathname = usePathname();


  return (
        <div className="flex w-full bg-white">
            <div className='flex flex-col group'>
                <Link href={'/primary'} 
                    className={
                    (pathname.includes('/primary')?'text-[#0B57D0] font-bold ':'text-gray-500 ')+
                    "flex space-x-4 justify-center items-center pl-4 pr-32 py-4 group-hover:bg-[#b9bbc048] duration-75 cursor-pointer"
                    }>
                    <MdInbox className="w-[20px] h-[20px]"/>
                    <p className="text-sm">Primary</p>
                </Link>
                <div className={`mx-2 ${pathname.includes('/primary')?'font-semibold rounded-t-full border-b-[3.5px] border-[#0B57D0]':''}`}></div>
            </div>


            <div className='flex flex-col group'>
                <Link href={'/promotion'} 
                className={
                (pathname.includes('/promotion')?'text-[#0B57D0] font-bold ':'text-gray-500 ')+"flex space-x-4 justify-center items-center pl-4 pr-32 py-4 hover:bg-[#b9bbc048] duration-75 cursor-pointer"
                }>
                <MdDiscount className="w-[20px] h-[20px]"/>
                <p className="text-sm">Promotions</p>
                </Link>
                <div className={`mx-2 ${pathname.includes('/promotion')?'font-semibold rounded-t-full border-b-[3.5px] border-[#0B57D0]':''}`}></div>
            </div>

            <div className='flex flex-col group'>
                <Link href={'/social'}  
                className={
                (pathname.includes('/social')?'text-[#0B57D0] font-bold ':'text-gray-500 ')+"flex space-x-4 justify-center items-center pl-4 pr-32 py-4 hover:bg-[#b9bbc048] duration-75 cursor-pointer"
                }>
                <MdOutlineSupervisorAccount className="w-[20px] h-[20px]"/>
                <p className="text-sm">Social</p>
                </Link>
                <div className={`mx-2 ${pathname.includes('/social')?'font-semibold rounded-t-full border-b-[3.5px] border-[#0B57D0]':''}`}></div>
            </div>
        </div>
  )
}

export default EmailTypeBtns