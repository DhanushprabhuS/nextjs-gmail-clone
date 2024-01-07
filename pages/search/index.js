
import React from 'react';
import { useRouter } from 'next/router'
import SearchResults from '@/components/SearchResults';

export default function EmailSearchPage ({data}) {

    const router = useRouter();
    const searchVal = router.query?.value;
    const lowerVal = searchVal?.toLowerCase();
    
    const backLink = '/search?value='+searchVal;

    const filteredData = data.filter((e)=>{
        return (
        e.expeditor?.toLowerCase().includes(lowerVal) || 
        e.messageTitle?.toLowerCase().includes(lowerVal) || 
        e.message?.toLowerCase().includes(lowerVal)
        )
    })

    return <>
        <SearchResults emailsdata={filteredData}  backLink={backLink}/>
    </>
}




export async function getStaticProps(){

    const {emails} = await import('/data/data.json');
    const data = emails;
    
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
      },
    };
  }