import EmailMessage from '@/components/EmailMessage';
import React from 'react'

const SearchResult = ({data}) => {
  return (
    <div>
        <EmailMessage data={data}/>
    </div>
  )
}

export default SearchResult



export async function getStaticPaths(){
  
    const {emails} = await import('/data/data.json');
    //pre rendering all results
  

  const allPaths = emails.map(email=>{
    return {
      params:{
        searchResult: email.id.toString()
      },
    }
  })

  return {
    paths:allPaths,
    fallback: false,
  }
}


export async function getStaticProps(context){

    console.log('CONTEXT - search results')
    console.log(context);

    const {emails} = await import('/data/data.json');
    const data = emails;
    
    const processedData = data.map(obj=>{
      return {...obj,date:new Date(obj.timestamp)}
    })
    
    const filteredData = processedData.filter(d=>d.id==context?.params?.searchResult);
    
    const JSONdata = JSON.parse(JSON.stringify(filteredData))
    //because date object cannot be passed
  
    return {
      props: {
        data:JSONdata[0],
      },
    };


}