import React from 'react'

const DynamicBook =async (props:any) => {
    const url=await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.id}`)
const res = await url.json()
console.log(res) 
    return (
    <div>
     <h1>
         {props.params.id} <br />
     {res.title} <br />
     {res.body} <br />
     </h1>
     </div>
  )
}

export default DynamicBook
