import React from "react";
import Link from "next/link";

const MenuOpen = ({ icon, title,isMenuClicked,setIsMenuClicked,ishover }) => {
  return (
    <div 
      key={title+'8'} 
      className="w-full text-start 
      px-3 py-0 bg-slate-100 text-[#5F6368] 
      hover:text-[#001D35] hover:font-semibold duration-150 cursor-pointer"
      onClick={()=>setIsMenuClicked(prev=>!prev)}
    >
        <div className="flex w-full items-center gap-4 p-2 hover:bg-[#b9bbc048] rounded-r-full duration-150 cursor-pointer">
          <span>{icon}</span>
          <span className={`${'block'}`}>{title}</span>
        </div>

    </div>
  );
};

export default MenuOpen;
