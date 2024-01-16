import React from "react";
import Link from "next/link";

const Menu = ({link, icon, title,ishover, isactive, handleActive, id, index, setId }) => {
  return (
    <Link href={`${link}`}>
    <div 
      key={title} 
      className={`text-start 
      px-3 py-[1px] bg-slate-100 text-[#5F6368] 
      duration-1000 cursor-pointer m-0`}

      onClick={()=>{
        handleActive(true);
        setId(index)
      
      }}
    >
        <div className={`flex  items-center gap-3 p-2 ${ishover?' rounded-r-full ':' rounded-full justify-center'} duration-200 cursor-pointer ${isactive&&id==index?'bg-[#D3E3FD] text-[#001d35] font-semibold':'hover:bg-[#b9bbc048] hover:text-[#001D35] hover:font-semibold'}`}>
          <span>{icon}</span>
          <span className={`text-sm ${ishover?'block':'hidden'}`}>{title}</span>
        </div>

    </div>
    </Link>
  );
};

export default Menu;

