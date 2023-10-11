import React from 'react';
import Email from '@/components/Emails';

const EmailCategoryPage = ({data,id}) => <Email emails={data} type={id}/>

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

  return {
    props: {
      data,
      id: type
    },
  };
}