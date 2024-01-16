import React, { useState } from "react";
import { FiMenu} from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { MdOutlineStarBorder, MdOutlineLabel, MdSettings, MdOutlineScheduleSend } from "react-icons/md";
import { RiPencilLine , RiInboxFill, RiSendPlane2Line, RiDraftFill, RiSpamLine } from "react-icons/ri";
import { BiLabel,BiTrash } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import Menu from "./Menu";
import { Tooltip } from "@nextui-org/tooltip";


const Menus = ({isMenuClicked,setIsMenuClicked}) => {
  const buttons = [
    {
      id:1,
      icon: <RiInboxFill className="w-4 h-4" />,
      title: "Inbox",
      link: '/primary'
    },
    {
      id:2,
      icon: <MdOutlineStarBorder className="w-4 h-4" />,
      title: "Starred",
      link: '/'
    },
    {
      id:3,
      icon: <IoMdTime className="w-4 h-4" />,
      title: "Snoozed",
      link: '/'
    },
    {
      id:4,
      icon: <RiSendPlane2Line className="w-4 h-4" />,
      title: "Sent",
      link: '/'
    },
    {
      id:5,
      icon: <RiDraftFill className="w-4 h-4" />,
      title: "Draft",
      link: '/'
    },
    {
      id:6,
      icon: <BiLabel className="w-4 h-4" />,
      title: "Important",
      link: '/'
    },
    {
      id:7,
      icon: <MdOutlineScheduleSend className="w-4 h-4" />,
      title: "Scheduled",
      link: '/'
    },
    {
      id:8,
      icon: <RiSpamLine className="w-4 h-4" />,
      title: "Spam",
      link: '/'
    },
    {
      id:9,
      icon: <BiTrash className="w-4 h-4" />,
      title: "Trash",
      link: '/'
    },
    {
      id:10,
      icon: <MdOutlineLabel className="w-4 h-4" />,
      title: "Categories",
      link: '/'
    },
    {
      id:11,
      icon: <MdSettings className="w-4 h-4" />,
      title: "Manage Labels",
      link: '/'
    },
    {
      id:12,
      icon: <AiOutlinePlus className="w-4 h-4" />,
      title: "Create new label",
      link: '/'
    },
  ];

  const [ishover,setIshover] = useState(false);
  const [isClicked,setIsClicked] = useState(false);
  const [isactive,setIsActive] = useState(false);
  const [id,setId] = useState(-1);


  return (
      <div className={`mt-14 h-full flex flex-col 
        fixed left-1 
       bg-slate-100 duration-150 z-10 
       ${ishover|| isClicked?'w-64':'w-16'}`}
      >

        <Tooltip content={<div className='bg-black opacity-75 text-white text-[12px] rounded-md px-1 py-1 -mt-3 '>Main menu</div>} 
        placement='bottom'>
          <div className="w-16 text-center px-3 py-2 bg-slate-100 left-0 -mt-[52px]
          text-[#5F6368] top-0 cursor-pointer hover:text-[#001D35] hover:font-semibold duration-150">
            <div className="flex justify-center p-2.5 rounded-full hover:bg-[#b9bbc048] cursor-pointer">
              <FiMenu className="w-5 h-5" 
              onClick={
                ()=>{
                  setIsClicked((isClicked)=>!isClicked);
                  setIsMenuClicked((prev)=>!prev);
                  }
              }/>
            </div>
          </div>
        </Tooltip>
        
        <div
          onMouseOver={()=>setIshover(true)}
          onMouseOut={()=>setIshover(false)}
        >
          <div className={"flex items-center justify-center m-2 rounded-[1rem] bg-[#C2E7FF] text-[#001D35] shadow-sm hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] duration-150 cursor-pointer "+(ishover||isClicked?'w-36 h-14':'w-14 h-14')}>
            <RiPencilLine className="w-6 h-6" />
            <span className={`${ishover||isClicked?'block':'hidden'} font-semibold`}>Compose</span>
          </div>
        
          <div className="mt-4">
            {buttons.map((menu,index) => (
              <Menu link={menu.link} icon={menu.icon} title={menu.title} ishover={ishover||isClicked} isactive={isactive} handleActive={setIsActive} index={index} id={id} setId={setId} />
            ))}
          </div>
        </div>

      </div>
  );
};

export default Menus;
