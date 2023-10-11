import React from "react";

const Menu = ({ icon, title,isMenuClicked,setIsMenuClicked }) => {
  return (
      <div key={title+'8'} className="w-full text-center px-3 py-2 text-[#5F6368] hover:text-[#001D35] hover:font-semibold duration-150 cursor-pointer"
      onClick={()=>setIsMenuClicked(prev=>!prev)}
      >
        <div className="flex justify-center p-2.5 hover:bg-[#D3E3FD] rounded-full duration-150 cursor-pointer">{icon}</div>
        <p className="text-[12px]">{title}</p>
      </div>
  );
};

export default Menu;
