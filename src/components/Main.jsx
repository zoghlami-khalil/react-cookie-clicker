import React, {useState,useEffect} from 'react'

const Main = () => {
    const [clicks,setClicks] = useState(0);
    const [step,setStep] = useState(1);
    const handleClick = ()=> {
        setClicks(clicks +step);
    }

   useEffect(() => {
       setInterval(()=>{
        console.log("first step",step)   
        setStep(step*2)
        console.log("second step",step)  
           setTimeout(()=>setStep(step),5000)
        console.log("third step",step)  
       },20000)
       
   },[])
    
    return (
        <div> 
            <h1>{`Number of clicks ${clicks}`}</h1>
            <h1>{`Number of Steps ${step}`}</h1>
            <img onClick={()=> handleClick()} src="https://www.pngall.com/wp-content/uploads/2016/07/Cookie-Download-PNG.png" alt="Cookie" />
        </div>
    )
}

export default Main
