import React, { Children } from 'react';
import { Tooltip } from '@nextui-org/tooltip';

const TooltipCover = ({content,children}) => {
  return (
    <Tooltip content={<div className='bg-black opacity-75 text-white text-[12px] rounded-md px-1 py-1 -mt-3 '>{content}</div>} 
        placement='bottom'>
            {children}
    </Tooltip>
  )
}

export default TooltipCover