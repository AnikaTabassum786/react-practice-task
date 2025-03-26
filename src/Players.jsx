import { useEffect, useState } from "react"

export default function(){
    const [players,setPlayers]=useState();
    const [isLoading,setIsloading]= useState(true);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>{
            setPlayers(data)
            setIsloading(false)
        })
         .catch(() => setIsloading(false));
    },[])

    if(isLoading === true){
        return(<h3>Data is coming...</h3>)
    }
    return(
        <>
        <h4>Players</h4>
        {
            players?.map((player)=>{
               return(
                <div key={player.id}>
                 <h5>Name:{player?.name}</h5>
                 <p>Company: {player?.company?.name}</p>
                 <p>City: {player?.address?.city}</p>
               </div>
               )
            })
        }
        </>
    )
}