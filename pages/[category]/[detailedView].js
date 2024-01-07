import React from 'react'
import EmailMessage from '@/components/EmailMessage';

const EmailView = ({data}) => <EmailMessage data={data}/>

export default EmailView;


export async function getStaticPaths(){

  // const res = await fetch('http://127.0.0.1:3000/api/emailList?type=all');

  const {emails} = await import('/data/data.json');
  

  const allPaths = emails.map(email=>{
    return {
      params:{
        detailedView: email.id.toString(),
        category: email.type.toString()
      },
    }
  })

  return {
    paths:allPaths,
    fallback: false,
  }
}


export async function getStaticProps(context){
  const category = context.params.category;
  const detailedView = context.params.detailedView;

  const {emails} = await import('/data/data.json');
  
  const data = emails.filter(em=>em.id==detailedView);


  return {
    props: {
      data: data[0]
    },
  };
}