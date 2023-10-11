import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { IoHelpCircleOutline, IoSettingsOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar1 = () => {
  const router = useRouter();
  const [query,setQuery] = useState('');

  return (
    <>
      <div className="flex items-center justify-between py-2 px-1 mb-0 -ml-4 lg:px-4 border-b border-gray-100 bg-slate-50 sticky top-0">
        {/* Left Section */}
        <div className="w-48 md:w-30 h-10 cursor-pointer ">
          <Link href={'/primary'}>
          <Image
          src={'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png'} 
          alt="Gmail" 
          className="w-full h-full"
          width={150}
          height={100}
          />
          </Link>
        </div>

        {/* Input */}
        <div className="w-full pl-24">
          <div className="relative hidden md:flex items-center max-w-[48rem] mx-auto">
            <input 
            type="search" 
            className="w-full bg-[#EAF1FB] py-[10px] rounded-[1rem] pl-16 outline-0" 
            placeholder="Search in mail" 
            value={query}
            onChange={
              (e)=>{
              setQuery(e.target.value);
              }
            }
            // onKeyDown={(e)=>{
            //   if(e.key==='Enter'){
            //     router.push('/search')
            //   }
            // }}
            
            />
            <div className="absolute right-0 p-2 mr-2.5 rounded-full text-[#5F6368] hover:text-[#001D35] hover:bg-[#D3E3FD] duration-150 cursor-pointer">
              
            </div>
            <div className="bg-[#EAF1FB] absolute left-0 p-[12px] rounded-l-[.7rem] outline-0">
              <AiOutlineSearch className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div className="p-1.5 box-border rounded-full hover:bg-gray-200 duration-150 cursor-pointer">
            <IoHelpCircleOutline className="w-7 h-7 text-[#5F6368] hidden sm:flex hover:text-gray-800" />
          </div>
          <div className="p-1.5 box-border rounded-full hover:bg-gray-200 duration-150 cursor-pointer">
            <IoSettingsOutline className="w-6 h-6 text-[#5F6368] hidden sm:flex hover:text-gray-800" />
          </div>
          <div className="p-1.5 box-border rounded-full hover:bg-gray-200 duration-150 cursor-pointer">
            <CgMenuGridO className="w-6 h-6 text-[#5F6368] hidden sm:flex hover:text-gray-800" />
          </div>
          
            <div className="w-9 h-9 rounded-full">
              <img src={'https://lh3.googleusercontent.com/-U7jI9y-LItE/AAAAAAAAAAI/AAAAAAAAAAA/AFsW0b4RgpcF_yx5cu7spO1F1qRzmrIzWw/photo.jpg?sz=46'} alt="" className="object-cover w-9 h-9 rounded-full" />
            </div>
          </div>
        </div>
    </>
  );
};

export default Navbar1;
