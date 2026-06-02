import React, { useEffect, useState } from "react"


export default function Counter() {
  const [count, setCount] = useState(0)
  
  useEffect (()=>{
    document.title = `Count ${count}`;
    },[count])

    return (
        <>
        <div>{count}</div>
        <button onClick={()=>setCount(count + 1)}>Begin the Count</button>
        </>
    )
};