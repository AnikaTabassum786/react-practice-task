import { useState } from "react"

export default function(){
    const [count,setCount]=useState(0)

    const handleIncrease=()=>{
        const newCount=count+1;
        setCount(newCount)
    }

    const handleDecrease=()=>{
        const newCount=count-1
        setCount(newCount)
    }

    const handleReset=()=>{
        const newCount = 0;
        setCount(newCount)
    }
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrease}>Increase </button> <br /> <br />
            <button onClick={handleDecrease}>Decrease</button><br /> <br />
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}