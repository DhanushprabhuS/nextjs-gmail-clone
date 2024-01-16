import EmailTypeBtns from '@/components/EmailTypeBtns';
import Emails from '@/components/Emails';
import Footer from '@/components/Footer';
import Inbox from '@/components/Inbox';
import { useState } from 'react';

export default function Home({data}) {
  const [start,setStart] = useState(0);
  const [end,setEnd] = useState(10);
  const length = data.length;
  var slicedData = data.slice(start,end);
  
  return (
    <>
      <Inbox start={start} setStart={setStart} 
        end={end} setEnd={setEnd} length={length}/>
      <EmailTypeBtns />
      <Emails emails={slicedData}/>
      <Footer/>
    </>
      
  )
}


export async function getStaticProps() {
  const {emails} = await import('/data/data.json');

  const processedData = emails.map(obj=>{
    return {...obj,date:new Date(obj.timestamp)}
  })

  const sortedData = processedData.sort((a,b)=>{
    return Number(b.date)-Number(a.date);
  })
  
  const JSONdata = JSON.parse(JSON.stringify(sortedData))
  
  //const data = emails.filter((e)=>e.type === 'primary');
  return {
    props: {
      data:JSONdata
    },
  };
}