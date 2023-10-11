import React, { useState } from 'react'
import Menus from './Menus';
import Navbar1 from './Navbar1';
import LeftSide from './LeftSide';
import Inbox from './Inbox';
import Emails from './Emails';
import Footer from './Footer';

const GmailMainLayout = ({ children }) => {

    const [isMenuClicked,setIsMenuClicked] = useState(false);

    return (
        <>
        <div className="flex">
        <Menus isMenuClicked={isMenuClicked} setIsMenuClicked={setIsMenuClicked} />
        <div className="w-full pl-20">
          <Navbar1 />
          <div className="flex h-full -ml-4">
            {isMenuClicked?<LeftSide />:null}
            <div className="w-full mt-0">
              <Inbox />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default GmailMainLayout;






const GmailHome = ({emails}) => {


  return (
      <div className="flex">
        <Menus isMenuClicked={isMenuClicked} setIsMenuClicked={setIsMenuClicked} />
        <div className="w-full pl-20">
          <Navbar1 />
          <div className="flex h-full -ml-4">
            {isMenuClicked?<LeftSide />:null}
            <div className="w-full">
              <Inbox />
              <Emails emails={emails}/>
              <Footer />
            </div>
          </div>
        </div>
      </div>
  )
}
