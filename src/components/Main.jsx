import React, {useState,useEffect} from 'react'

const Main = () => {
    const [clicks,setClicks] = useState(0);
    const [step,setStep] = useState(1);
    const [shadowClickers,setshadowClickers] = useState(0);
    const handleClick = ()=> {
        setClicks(clicks +step);
    }
    const handleBuyShadowClicker = () => {
        setClicks(prevClicks=>prevClicks -100)
        setshadowClickers(shadowClickers + 1)
    }

   useEffect(() => {
       setInterval(()=>{
        console.log("first step",step)   
        setStep(step*2)
        console.log("second step",step)  
           setTimeout(()=>setStep(step),5000)
        console.log("third step",step)  
       },20000)
    //eslint-disable-next-line   
   },[])

   useEffect(() => {
    clearInterval()
    setInterval(()=>setClicks(prevClicks => prevClicks + shadowClickers ),1000)
   },[shadowClickers])
    
    return (
        <div> 
            <h1>{`Number of clicks ${clicks}`}</h1>
            <h1>{`Number of Steps ${step}`}</h1>
            <h1>{`Number of shadowclickers user has bought: ${shadowClickers}`}</h1>
            <button disabled={clicks<100} onClick={()=>handleBuyShadowClicker()}>Buy shadowClicker</button>
            <img onClick={()=> handleClick()} src="https://www.pngall.com/wp-content/uploads/2016/07/Cookie-Download-PNG.png" alt="Cookie" />
        </div>
    )
}

export default Main
