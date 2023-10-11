import React from "react";
import { MdStar } from "react-icons/md";
import Link from "next/link";

const Email = ({id, expeditor, messageTitle, message, timestamp, type }) => {
  return (
      <Link href={`/${type?type:'primary'}/${id}`} key={id} className="flex justify-between items-center border-b py-[1px] px-1 lg:px-4 text-[14px] hover:bg-[#EAF1FB] hover:shadow-sm hover:border hover:font-semibold duration-100 cursor-pointer">
        <div className="hidden sm:w-[3rem] -ml-1 text-gray-400 md:flex gap-1 cursor-pointer">
          <div className="p-1 text-gray-400 rounded-full hover:bg-[#D3E3FD] duration-150 cursor-pointer">
            <input type="checkbox" className="cursor-pointer" />
          </div>
          <div className="flex items-center p-1 text-gray-400 rounded-full hover:text-yellow-500 hover:bg-[#D3E3FD] duration-150 cursor-pointer">
            <MdStar className="w-5 h-5" />
          </div>
        </div>
        <div className="w-[14rem]">
          <p>{expeditor}</p>
        </div>
        <div className="w-[12rem] sm:w-[25rem] md:w-[30rem] lg:w-[36rem] flex items-center truncate">
          <p className="">{messageTitle} -</p>
          <p className="pl-2 text-gray-600 truncate">{message}</p>
        </div>
        <div className="w-[5rem] md:w-[5rem] lg:w-[5rem]">
          <p className="text-[12px] text-gray-600 text-end">{timestamp}</p>
        </div>
      </Link>
  );
};

export default Email;
