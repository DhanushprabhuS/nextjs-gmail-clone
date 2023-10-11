import Emails from '@/components/Emails';

export default function Home({data}) {
  return (
      <Emails emails={data}/>
  )
}


export async function getStaticProps() {
  // const res = await fetch('http://localhost:3000/api/emailList?type=primary');
  // const {emails} = await res.json();

  const {emails} = await import('/data/data.json');
  const data = emails.filter((e)=>e.type === 'primary');
  return {
    props: {
      data
    },
  };
}