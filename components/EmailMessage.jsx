import React from 'react';
import { MdKeyboardBackspace, MdMoreVert, MdOutlineDelete, MdReportGmailerrorred } from 'react-icons/md';
import { useRouter } from 'next/router'
import { BiArchiveIn} from 'react-icons/bi';
import { CgMailForward, CgMailReply } from 'react-icons/cg';
import { Tooltip } from '@nextui-org/tooltip';
import { AiOutlineClockCircle } from 'react-icons/ai';
import TooltipCover from './TooltipCover';

const EmailMessage = ({data}) => {

  const router = useRouter();

  const menuslist = [
    {
      icon: <BiArchiveIn className='h-5 w-5'/>,
      title: "Archive",
    },
    {
      icon: <MdReportGmailerrorred className='h-5 w-5'/>,
      title: "Report spam",
    },
    {
      icon:  <MdOutlineDelete className='h-5 w-5'/>,
      title: "Delete",
    },
    {
      icon:   <AiOutlineClockCircle className="w-5 h-5" />,
      title: "Snooze",
    },
    {
      icon:   <MdMoreVert className='h-5 w-5'/>,
      title: "More",
    }
  ];

  return (
    <div className='bg-white h-[500px] w-full flex flex-col space-y-6 pl-10 mt-2 rounded-2xl'>
      <div className='flex items-center gap-3 box-content text-gray-500 mt-2'>
        
      <TooltipCover content={'Back to inbox'}>
        <div onClick={() => router.back()} className="-ml-4 flex items-center p-2 hover:bg-gray-100 hover:text-gray-800 rounded-full duration-150 cursor-pointer">
        <MdKeyboardBackspace className='h-5 w-5'/>
        </div>
      </TooltipCover>
      
        {
          menuslist.map((item)=>{
            return(
              <div key={item.title}>
              <TooltipCover content={item.title}>
                <div className="flex items-center p-2 hover:bg-gray-100 hover:text-gray-800 rounded-full duration-150 cursor-pointer">
                {item.icon}
                </div>
              </TooltipCover>
              </div>
            )
          })
        }
      </div>
      <h1 className='text-2xl pl-8'>{data.messageTitle}</h1>
      <div className='flex flex-row justify-between'>
        <div className='flex space-x-3 -ml-5'>
          <span className='flex h-10 w-10 rounded-full bg-blue-600 p-3 items-center justify-center text-white text-4xl'>{data?.expeditor[0]}</span>
          <div>
            <div className='flex space-x-2'>
                <p className='text-md font-semibold'>{data.expeditor}</p>
                <p className='text-[12px] text-[#5F6368] mt-1'>{"<"+data.expeditor+"@email.com>"}</p>
                <p className='text-md font-semibold text-blue-600 rounded-lg hover:bg-blue-100 px-2'>Unsubscribe</p>

            </div>
            <p className='text-[12px] text-[#5F6368]'>to me</p>
          </div>
        </div>
        <div className='items-right text-[14px] text-[#5F6368] p-3 mr-10'>
        <p>{data.timestamp}</p>
        </div>
      </div>
      <div className='flex mx-auto pb-12'>
        {data.message}
      </div>
      <div className='flex space-x-3 pb-10 text-[#5F6368]'>
          <div className='flex space-x-1 border border-[#5F6368] rounded-3xl px-6 py-2 hover:bg-gray-200'>
              <CgMailReply className='h-5 w-5'/>
              <div className='text-sm font-semibold'>
                Reply
              </div>
          </div>

          <div className='flex space-x-1 border border-[#5F6368] rounded-3xl px-6 py-2 hover:bg-gray-200'>
              <CgMailForward className='h-5 w-5'/>
              <div className='text-sm font-semibold'>
                Forward
              </div>
          </div>


      </div>
    </div>
  )
}

export default EmailMessage