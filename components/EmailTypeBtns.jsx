import React from 'react'
import { useState } from 'react';
import { MdDiscount, MdInbox, MdOutlineSupervisorAccount, MdStayPrimaryLandscape } from "react-icons/md";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const EmailTypeBtns = () => {
const pathname = usePathname();
const paths = ['primary','promotion','social']


  return (
        <div className="flex w-full bg-white ">

            {
                paths.map(link=>{
                    return(
                        <div key={link} className='flex flex-col group'>
                            <Link href={'/'+link} 
                                className={
                                (pathname.includes('/'+link)?'text-[#0B57D0] font-bold ':'text-gray-500 ')+
                                "flex space-x-4 justify-center items-center pl-4 pr-32 py-4 group-hover:bg-[#b9bbc048] duration-75 cursor-pointer"
                                }>
                                <MdInbox className="w-[20px] h-[20px]"/>
                                <p className="text-sm">{link.charAt(0).toUpperCase()+link.slice(1)}</p>
                            </Link>
                            <div className={`mx-2 ${pathname.includes('/'+link)?'font-semibold rounded-t-full border-b-[3.5px] border-[#0B57D0]':''}`}>
                            </div>
                        </div>
                    )
                })
            }
            
            
        </div>
  )
}

export default EmailTypeBtns