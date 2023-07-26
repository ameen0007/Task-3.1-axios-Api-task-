import axios from 'axios'
import { useEffect } from 'react';
import { Fragment } from 'react';
import { useState } from 'react';

export const Users = () =>{

    const [data,setData] = useState([])

    const fetch = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
        setData(response.data)
}
    useEffect(()=>{
        fetch();
    },[])
     
    const Deluser = ()=>{
      setData (prevData => prevData.slice(1))
    }
    return(
        <Fragment>
        <h1>hai</h1>
        <button onClick={Deluser}>Delete first user</button>
           {
            data.map((user)=>{
                return(
                 <div key={user.id}>
                  <ol>
                   {user.title}
                  </ol>
                 </div>
                )
              })
            }
        </Fragment>
         )
 }
    





















 
