import React from "react";
import { MdCheckBoxOutlineBlank, MdDragIndicator, MdStarBorder } from "react-icons/md";
import Link from "next/link";
import { BiArchiveIn } from "react-icons/bi";
import { RiDeleteBin6Line, RiMailUnreadLine } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Tooltip } from "@nextui-org/tooltip";

const Email = ({id, expeditor, messageTitle, message, timestamp, type }) => {
  return (
      <Link 
        href={`/${type}/${id}`}
        key={id} 
        className="flex items-center justify-between 
        border-[#ECEFF1] border-[0.1px]
        py-[4px] px-2 lg:px-4 text-[14px] bg-white 
        duration-100 
        cursor-pointer
        hover:drop-shadow-lg
        mx-0 -my-1
        group
        gap-10
        "
        >

          <div className="absolute left-0 hidden mr-0 group-hover:flex text-gray-400 cursor-grab">
              <MdDragIndicator className="w-4 h-4" />
          </div>

          <div className="flex -ml-2 items-center gap-[0.5] cursor-pointer w-[14rem] truncate">

            <Tooltip content={<div className='bg-black opacity-75 text-white text-[12px] rounded-md px-1 py-1 -mt-3 '>Select</div>} 
          placement='bottom'>
              <div className="hidden md:flex p-2 text-gray-400 rounded-full group-hover:text-gray-600 hover:bg-[#b9bbc048] duration-150 cursor-pointer">
                <MdCheckBoxOutlineBlank className="w-4 h-4" />
              </div>
            </Tooltip>

            <Tooltip content={<div className='bg-black opacity-75 text-white text-[12px] rounded-md px-1 py-1 -mt-3 '>Not starred</div>} 
        placement='bottom'>
              <div className="hidden md:flex p-2 rounded-full text-gray-400 group-hover:text-gray-600 hover:bg-[#b9bbc048] duration-150 cursor-pointer">
                <MdStarBorder className="w-4 h-4" />
              </div>
            </Tooltip>

            <div className="ml-2 md:ml-0 p-1 text-black font-semibold cursor-pointer truncate">
              <p>{expeditor}</p>
            </div>

          </div>

          <div className="w-[66rem]  flex  truncate group-hover:w-[60rem]">
            <p className="text-black font-semibold">{messageTitle}</p>
            <p className="pl-2 text-gray-600  truncate"> - {message}</p>
          </div>

          

          <div className="flex items-end justify-end visible group-hover:hidden">
            <p className="w-[4rem] text-[13px] text-black font-semibold text-end">{timestamp}</p>
          </div>

          <div className=" text-gray-600 gap-3 m-0 cursor-pointer hidden group-hover:flex">
           
            <Tooltip content={<div className='bg-black opacity-75 text-white text-[12px] rounded-md px-1 py-1 -mt-3 '>Archive</div>} 
        placement='bottom'>
              <div className="flex items-center p-2 rounded-full hover:bg-[#b9bbc048] duration-150 cursor-pointer">
                <BiArchiveIn className="w-4 h-4" />
              </div>
            </Tooltip>

            <Tooltip content={<div className='bg-black opacity-75 text-white text-[12px] rounded-md px-1 py-1 -mt-3 '>Delete</div>} 
        placement='bottom'>
              <div className="flex items-center p-2 rounded-full hover:bg-[#b9bbc048] duration-150 cursor-pointer">
                <RiDeleteBin6Line className="w-4 h-4" />
              </div>
            </Tooltip>

            <Tooltip content={<div className='bg-black opacity-75 text-white text-[12px] rounded-md px-1 py-1 -mt-3 '>Mark as read</div>} 
        placement='bottom'>
              <div className="flex items-center p-2 rounded-full hover:bg-[#b9bbc048] duration-150 cursor-pointer">
                <RiMailUnreadLine className="w-4 h-4" />
              </div>
            </Tooltip>

            <Tooltip content={<div className='bg-black opacity-75 text-white text-[12px] rounded-md px-1 py-1 -mt-3 '>Snooze</div>} 
        placement='bottom'>
              <div className="flex items-center p-2 rounded-full hover:bg-[#b9bbc048] duration-150 cursor-pointer">
                <AiOutlineClockCircle className="w-4 h-4" />
              </div>
            </Tooltip>
            
          </div>

      </Link>
  );
};

export default Email;
