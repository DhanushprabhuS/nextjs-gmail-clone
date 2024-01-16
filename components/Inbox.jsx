import { BsThreeDotsVertical } from "react-icons/bs";
import {  MdNavigateBefore, MdNavigateNext, MdRefresh } from "react-icons/md";
import { RxTriangleDown } from "react-icons/rx";
import { Tooltip } from "@nextui-org/tooltip";

const Inbox = ({start,end,setStart,setEnd,length}) => {

 
  return (
      <div className={`w-full 
      top-[63px] md:top-[60px] lg:top-[60px] bg-slate-100 `}>
          <div className="flex items-center justify-between px-5 lg:px-4 pt-2 pb-3 bg-white rounded-t-2xl">
            {/* Left Side */}
            <div className="flex items-center gap-3 box-content text-gray-500">
              <Tooltip content={<div className='bg-black opacity-75 text-white text-[12px] rounded-md px-1 py-1 -mt-3 '>Select</div>} 
          placement='bottom'>
                <div className="flex -ml-1">
                  <div className="p-1 hover:bg-gray-200 rounded-[.3rem]">
                    <input type="checkbox" className="" />
                  </div>
                  <div className="flex items-center p-1 hover:bg-gray-200 hover:text-gray-800 rounded-[.3rem] duration-150 cursor-pointer">
                    <RxTriangleDown className="w-4 h-4" />
                  </div>
                </div>
              </Tooltip>

              <Tooltip content={<div className='bg-black opacity-75 text-white text-[12px] rounded-md px-1 py-1 -mt-3 '>Refresh</div>} 
        placement='bottom'>
                <div className="p-1.5 box-border  rounded-full hover:bg-gray-200 hover:text-gray-800 duration-150 cursor-pointer">
                  <MdRefresh className="w-5 h-5 text-gray-500 hover:text-gray-800" />
                </div>
              </Tooltip>

              <Tooltip content={<div className='bg-black opacity-75 text-white text-[12px] rounded-md px-1 py-1 -mt-3 '>More</div>} 
          placement='bottom'>
                <div className="p-1.5 box-border rounded-full hover:bg-gray-200 hover:text-gray-800 duration-150 cursor-pointer">
                  <BsThreeDotsVertical className="w-4 h-4" />
                </div>
              </Tooltip>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3 text-gray-500 -mr-1.5">
              <div className="p-1.5 box-border rounded-[.3rem] hover:bg-gray-200 hover:text-gray-800 duration-150 cursor-pointer">
                <p className="text-[12px]">{start+1}-{(end<length)?end:length} of {length}</p>
              </div>

              <Tooltip content={<div className='bg-black opacity-75 text-white text-[12px] rounded-md px-1 py-1 -mt-3 '>Newer</div>} 
        placement='bottom'>
                <div className={`p-1.5 box-border rounded-full  hover:text-gray-800 cursor-pointer duration-150 ${start>0?'hover:bg-gray-200':''}`}
                onClick={()=>{
                  if(start>0){
                    setEnd((prev)=>prev-10);
                    setStart((prev)=>prev-10);
                  }
                }}
                >
                  <MdNavigateBefore className="w-5 h-5" />
                </div>
              </Tooltip>


              <Tooltip content={<div className='bg-black opacity-75 text-white text-[12px] rounded-md px-1 py-1 -mt-3 '>Older</div>} 
        placement='bottom'>
                <div className={`p-1.5 box-border rounded-full  hover:text-gray-800 cursor-pointer duration-150 ${end<length?'hover:bg-gray-200':''}`}
                onClick={()=>{
                  if(end<length){
                    setEnd((prev)=>prev+10);
                    setStart((prev)=>prev+10);
                  }
                }}
                >
                  <MdNavigateNext className="w-5 h-5" />
                </div>
            </Tooltip>
            </div>
          </div>
      </div>
  );
};

export default Inbox;
