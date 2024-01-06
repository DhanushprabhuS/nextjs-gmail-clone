import React from "react";
import Link from "next/link";

const Menu = ({ icon, title,ishover, isactive, handleActive, id, index, setId }) => {
  return (
    <div 
      key={title} 
      className={` text-start 
      px-3 py-[1px] bg-slate-100 text-[#5F6368] 
       duration-200 cursor-pointer`}

      onClick={()=>{
        handleActive(true);
        setId(index)
      
      }}
    >
        <div className={`flex  items-center gap-4 p-2 ${ishover?' rounded-r-full ':' rounded-full justify-center'} duration-200 cursor-pointer ${isactive&&id==index?'bg-[#D3E3FD] text-[#001d35] font-semibold':'hover:bg-[#b9bbc048] hover:text-[#001D35] hover:font-semibold'}`}>
          <span>{icon}</span>
          <span className={`${ishover?'block':'hidden'}`}>{title}</span>
        </div>

    </div>
  );
};

export default Menu;

/*
<Link href={'/'} key={title} className="flex mt-4 items-start text-[#5F6368] gap-x-5 space-y-1 pl-5 rounded-full hover:bg-[#deeafb] hover:text-[#001D35] hover:font-semibold duration-75 cursor-pointer group">
    {icon}
  </Link>

*/