import React, { useEffect, useState } from 'react'


const Users = () => {
    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const fetchData = async(url)=>{
        try{
            const res = await fetch(url);
            if(!res.ok){
                throw new Error("Network dose not response")
            }
            const data = await res.json();
            setUsers(data)
        }
        catch(err){
            setError(err);
        }
        finally{
            setIsLoading(false);
        }

    }
   

useEffect(()=>{
fetchData('https://jsonplaceholder.typicode.com/users');
    }, []);
    
    if(error){
        return(
            console.log(error)
        )
    }
    // console.log(users)
    if(isLoading){
        return(
            <div>Data is loading...</div>
        )
    }

    if(users){
        {
            users.map(user=>(
                console.log(user)
            ))
        }
    }
    
 
}

export default Users