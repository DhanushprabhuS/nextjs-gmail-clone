import React, { useState } from 'react'
import Menus from './Menus';
import Navbar1 from './Navbar1';


const GmailMainLayout = ({ children }) => {

    const [isMenuClicked,setIsMenuClicked] = useState(false);

    return (
        <>
        <div className="flex">
        <Menus isMenuClicked={isMenuClicked} setIsMenuClicked={setIsMenuClicked} />
        <div className="w-full pl-20">
          <Navbar1 />
          <div className="flex h-full overflow-x-hidden ">
            <div className={"flex-col bg-slate-100 duration-200 "+(isMenuClicked?'ml-48 w-[80%]':'w-full')}>
              <main>{children}</main>
            </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default GmailMainLayout;






