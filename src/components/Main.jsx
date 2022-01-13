import React, {useState} from 'react'

const Main = () => {
    const [clicks,setClicks] = useState(0);
    const handleClick = ()=> {
        setClicks(clicks +1);
    }
    
    return (
        <div>
            <h1>{`Number of clicks ${clicks}`}</h1>
            <img onClick={()=> handleClick()} src="https://www.pngall.com/wp-content/uploads/2016/07/Cookie-Download-PNG.png" alt="Cookie" />
        </div>
    )
}

export default Main
