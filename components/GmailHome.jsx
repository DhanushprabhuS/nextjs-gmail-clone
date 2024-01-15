import React, { useState } from 'react'
import Menus from './Menus';
import Navbar1 from './Navbar1';
import Inbox from './Inbox';
import Emails from './Emails';
import Footer from './Footer';



const GmailHome = ({emails}) => {

const [isMenuClicked,setIsMenuClicked] = useState(false);

  return (
      <div className="flex">
       
        <div className="w-full pl-20">
          <Navbar1 />
          <div className="flex h-full -ml-4 max-w-6xl">
            <Menus isMenuClicked={isMenuClicked} setIsMenuClicked={setIsMenuClicked} />
            <div className="mx-auto">
              <Inbox />
              <Emails emails={emails}/>
              <Footer />
            </div>
          </div>
        </div>
      </div>
  )
}

export default GmailHome