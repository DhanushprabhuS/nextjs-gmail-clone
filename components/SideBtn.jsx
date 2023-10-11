import React from "react";
import Link from "next/link";

const SideBtn = ({ icon, title }) => {
  return (
    <>
      <Link href={'/'} key={title} className="flex mt-2 items-center text-[#5F6368] gap-x-5 space-y-1 pl-4 rounded-full hover:bg-[#deeafb] hover:text-[#001D35] hover:font-semibold duration-75 cursor-pointer">
        {icon}
        <p className="text-[16px]">{title}</p>
      </Link>
    </>
  );
};

export default SideBtn;
