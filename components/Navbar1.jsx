import React, { useEffect,useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { IoHelpCircleOutline, IoSettingsOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from '../assets/logo_gmail.png';
import { Tooltip } from "@nextui-org/tooltip";


const Navbar1 = () => {
  
  const [query,setQuery] = useState('');
  const router = useRouter();

  return (
    <>
      <div className="flex  items-center justify-between py-2 mb-0  bg-slate-100 w-full sticky top-0 gap-2">
        <span></span>

        <div className="w-180 md:w-30 h-10 cursor-pointer">
          <Link href={'/primary'}>
            <Image
            src={Logo} 
            alt="Gmail Logo" 
            className="w-[150px] h-[40px]"
            width={150}
            height={40}
            />
          </Link>
        </div>

        {/* Input */}
        <div className="w-full">
          <div className="relative hidden md:flex items-center max-w-[48rem] mx-auto">
            <input 
            type="search" 
            className="w-full bg-[#e0e7f0] py-[13px] rounded-[2rem] pl-16 outline-0" 
            placeholder="Search mail" 
            value={query}
            onChange={
              (e)=>{
              setQuery(e.target.value);
              router.push(`/search?value=${query}`)
              }
            }
            
            />
            
              <div className="absolute right-0 p-5  rounded-full  cursor-pointer" onClick={()=>setQuery('')} > 
              </div>
            
            <div className="bg-[#e0e7f0] absolute left-0 p-[10px] rounded-l-[2rem] outline-0">
              <AiOutlineSearch className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
        <Tooltip content={<div className='bg-black opacity-75 text-white text-[12px] rounded-md px-1 py-1 -mt-3 '>Support</div>} 
        placement='bottom'>
          <div className="p-1.5 box-border rounded-full hover:bg-gray-200 duration-150 cursor-pointer">
            <IoHelpCircleOutline className="w-7 h-7 text-[#5F6368] hidden sm:flex hover:text-gray-800" />
          </div>
        </Tooltip>

        <Tooltip content={<div className='bg-black opacity-75 text-white text-[12px] rounded-md px-1 py-1 -mt-3 '>Settings</div>} 
        placement='bottom'>
          <div className="p-1.5 box-border rounded-full hover:bg-gray-200 duration-150 cursor-pointer">
            <IoSettingsOutline className="w-6 h-6 text-[#5F6368] hidden sm:flex hover:text-gray-800" />
          </div>
        </Tooltip>

        <Tooltip content={<div className='bg-black opacity-75 text-white text-[12px] rounded-md px-1 py-1 -mt-3 '>Google apps</div>} 
        placement='bottom'>
          <div className="p-1.5 box-border rounded-full hover:bg-gray-200 duration-150 cursor-pointer">
            <CgMenuGridO className="w-6 h-6 text-[#5F6368] hidden sm:flex hover:text-gray-800" />
          </div>
        </Tooltip>
          
        <Tooltip content={<div className='bg-black opacity-75 text-white text-[12px] rounded-md px-1 py-1 -mt-3 '>Google Account</div>} 
        placement='bottom'>
          <div className="w-9 h-9 rounded-full">
              <Image 
              src={'https://assets.leetcode.com/users/avatars/avatar_1703733806.png'} 
              alt={'Profile pic'}
              width={100}
              height={100}
              className="object-cover w-9 h-9 rounded-full" />
          </div>
        </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Navbar1;

