import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const url=await fetch("https://jsonplaceholder.typicode.com/posts")
  const res= await url.json()
  return ( <main>
{
  res.map((post:any,index:number)=>(
    <div key={index}>
     <Link href={`${post.id}`}>
  <h1>
    {post.id}
    {post.title} 

  </h1>
  </Link>

    </div>
  ))
}


  </main> );
}
