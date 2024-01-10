import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDiscount, MdInbox, MdNavigateBefore, MdNavigateNext, MdOutlineSupervisorAccount, MdRefresh, MdStayPrimaryLandscape } from "react-icons/md";
import { RxTriangleDown } from "react-icons/rx";

const Inbox = ({start,end,setStart,setEnd,length}) => {

 
  return (
      <div className={`w-full 
      top-[63px] md:top-[60px] lg:top-[60px] bg-slate-100 `}>
          <div className="flex items-center justify-between px-5 lg:px-4 py-2 bg-white rounded-t-2xl">
            {/* Left Side */}
            <div className="flex items-center gap-3 box-content text-gray-500">
              <div className="flex -ml-1">
                <div className="p-1 hover:bg-gray-200 rounded-[.3rem]">
                  <input type="checkbox" className="" />
                </div>
                <div className="flex items-center p-1 hover:bg-gray-200 hover:text-gray-800 rounded-[.3rem] duration-150 cursor-pointer">
                  <RxTriangleDown className="w-4 h-4" />
                </div>
              </div>
              <div className="p-1.5 box-border  rounded-full hover:bg-gray-200 hover:text-gray-800 duration-150 cursor-pointer">
                <MdRefresh className="w-5 h-5 text-gray-500 hover:text-gray-800" />
              </div>
              <div className="p-1.5 box-border rounded-full hover:bg-gray-200 hover:text-gray-800 duration-150 cursor-pointer">
                <BsThreeDotsVertical className="w-4 h-4" />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3 text-gray-500 -mr-1.5">
              <div className="p-1.5 box-border rounded-[.3rem] hover:bg-gray-200 hover:text-gray-800 duration-150 cursor-pointer">
                <p className="text-[12px]">{start+1}-{(end<length)?end:length} of {length}</p>
              </div>
              <div className={`p-1.5 box-border rounded-full  hover:text-gray-800 cursor-pointer duration-150 ${start>0?'hover:bg-gray-200':''}`}
              onClick={()=>{
                if(start>0){
                  setEnd((prev)=>prev-20);
                  setStart((prev)=>prev-20);
                }
              }}
              >
                <MdNavigateBefore className="w-5 h-5" />
              </div>
              <div className={`p-1.5 box-border rounded-full  hover:text-gray-800 cursor-pointer duration-150 ${end<length?'hover:bg-gray-200':''}`}
              onClick={()=>{
                if(end<length){
                  setEnd((prev)=>prev+20);
                  setStart((prev)=>prev+20);
                }
              }}
              >
                <MdNavigateNext className="w-5 h-5" />
              </div>
            </div>
          </div>
      </div>
  );
};

export default Inbox;
