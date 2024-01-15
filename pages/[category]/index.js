import React, { useEffect, useState } from 'react';
import Email from '@/components/Emails';
import EmailTypeBtns from '@/components/EmailTypeBtns';
import Inbox from '@/components/Inbox';
import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';

const EmailCategoryPage = ({data,id}) =>{

  const [start,setStart] = useState(0);
  const [end,setEnd] = useState(10);
  const length = data.length;
  var slicedData = data.slice(start,end);
  const pathname = usePathname();

  
  useEffect(() => {
    //console.log(`The page is now: ${pathname}`);
    //whenever there is a change in path
    setStart(0);
    setEnd(10);

  }, [pathname]);


  return(
    <>
    <Inbox start={start} setStart={setStart} 
        end={end} setEnd={setEnd} length={length} />
    <EmailTypeBtns/>
    <Email emails={slicedData} />
    <Footer/>
  </>
  )
}

export default EmailCategoryPage;



export async function getStaticPaths(){
  
    const email_categories = ['primary','promotion','social']

    const allPaths = email_categories.map((ev)=>{
        return {
        params:{
            category: ev.toString()
        },
        }
    });

    return {
        paths:allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context){
 
  const type = context?.params.category;

  // const res = await fetch('http://127.0.0.1:3000/api/emailList?type='+type);

  const {emails} = await import('/data/data.json');
  const data = emails.filter(e=>e.type===type);
  
  const processedData = data.map(obj=>{
    return {...obj,date:new Date(obj.timestamp)}
  })


  const sordedData = processedData.sort((a,b)=>{
    return Number(b.date)-Number(a.date);
  })
  
  
  const JSONdata = JSON.parse(JSON.stringify(sordedData))
  //because date object cannot be passed

  return {
    props: {
      data:JSONdata,
      id: type
    },
  };
}