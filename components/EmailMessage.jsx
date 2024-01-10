import React from 'react';
import Link from 'next/link';
import { MdKeyboardBackspace } from 'react-icons/md';
import { useRouter } from 'next/router'

const EmailMessage = ({data}) => {

  const router = useRouter()

  return (
    <div className='bg-white h-screen w-full flex flex-col space-y-6 pl-10 mt-10'>
      <div className='flex items-center gap-3 box-content text-gray-500 mt-2'>
        <div onClick={() => router.back()} className="-ml-4 flex items-center p-2 hover:bg-gray-200 hover:text-gray-800 rounded-full duration-150 cursor-pointer">
        <MdKeyboardBackspace className='h-6 w-6'/>
        </div>
      </div>
      <h1 className='text-3xl pl-14'>{data.messageTitle}</h1>
      <div className='flex flex-row justify-between'>
        <div className='flex space-x-3'>
          <span className='flex h-12 w-12 rounded-full bg-blue-600 p-3 items-center text-white text-4xl'>{data?.expeditor[0]}</span>
          <p className='text-md mt-3 text-[#5F6368]'>{data.expeditor}</p>
        </div>
        <div className='items-right text-[14px] text-[#5F6368] p-3'>
        <p>{data.timestamp}</p>
        </div>
      </div>
      <div className='flex mx-auto'>
        {data.message}
      </div>
    </div>
  )
}

export default EmailMessage