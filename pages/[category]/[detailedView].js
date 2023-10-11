import React from 'react'
import EmailMessage from '@/components/EmailMessage';

const EmailView = ({data}) => <EmailMessage data={data}/>

export default EmailView;


export async function getStaticPaths(){

  const res = await fetch('http://127.0.0.1:3000/api/emailList?type=all');
  const {emails} = await res.json();

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

  const res = await fetch('http://localhost:3000/api/emailList?type='+category);
  const {emails} = await res.json();

  const data = emails.filter(em=>em.id==detailedView);

  console.log(data)


  return {
    props: {
      data: data[0]
    },
  };
}