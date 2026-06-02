import { useState, useEffect } from "react";

/*
Requirements:
- Fetch data from: https://randomuser.me/api/?results=10
- Run fetch when component mounts
- Display:
  - Name
  - Email
  - Profile picture
- Add a "Refresh User" button (optional)
*/

export default function RandomUser() {
  const url = 'https://randomuser.me/api/?results=10';
  const [data, setData] = useState([])

  async function fetchData(){
    try {
      const response = await fetch(url);
      const responseData = await response.json();
      setData(responseData);
    } catch (err: any) {
      console.error(err);
      throw new Error(err);
    }
  }

    useEffect(() =>{
      fetchData()
    }, [])
    

  
  return <div>
    {data.length > 0 && data.map((person: any)=>{
      return <div>{person?.name.first}</div>
    })}
  </div>;
}
