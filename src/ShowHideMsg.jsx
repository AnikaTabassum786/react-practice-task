import { useState } from "react"

export default function ShowHideMsg(){
  
    const [isVisible,setIsVisible] = useState(false)

    const handleClick=()=>{
        if(isVisible===false){
            setIsVisible(true)
        }
        else{
            setIsVisible(f)
        }
    }
    return(
    <>
    <button onClick={handleClick}>Toggle</button>
    {isVisible && <div>Hello, React Learner</div>}
    </>
  )
}