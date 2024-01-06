import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const Footer = () => {
  return (
    <div 
    className="w-full h-[5rem] bg-white
    flex pt-5 justify-between px-4 bottom-0 border-t 
   rounded-b-2xl text-[#5F6368]">
    
    <div className="flex flex-col space-y-1">
      
      <div className="w-[185px] h-[5.5px] rounded-full bg-slate-200">
        <div className="bg-[#5F6368] w-[20%] rounded-full h-[5.5px]">

        </div>
      </div>
      <div className="flex space-x-1">
        <p className="text-[12px] hover:underline">1.06 GB of 15 GB used </p>
        <BiLinkExternal/>
      </div>
    </div>
    
    <div className="flex space-x-1">
      <p className="text-[12px] hover:underline">Terms</p>
      <p className="text-[12px]">·</p>
      <p className="text-[12px] hover:underline">Privacy</p>
      <p className="text-[12px]">·</p>
      <p className="text-[12px] hover:underline">Program Policies</p>
    </div>

    <div className="flex space-x-1">
      <p className="text-[12px]">Last account activity: 1 minute ago</p>
      <p className="text-[12px] hover:underline">Details</p>
    </div>

    </div>
  );
};

export default Footer;
