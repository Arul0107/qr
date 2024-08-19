import React,{useEffect, useState} from 'react'

const Advice = () => {
    const [advice,setAdvice]=useState("welcome");
    const [count, setCount] = useState(0);
    async function getAdvice() {
        const res =await fetch("https://api.adviceslip.com/advice");
        const data=await res.json();
        setAdvice(data.slip.advice)
    setCount((c)=>c+1);
    }
    useEffect(function(){
getAdvice()
    },[])
  return (
    <div className='advice-container'>
        <h3>Advice App</h3>
        <h2>{advice}</h2>
    <button className='g-btn'  onClick={getAdvice}>Get Advice</button>
    <p>You have Get <b>{count}</b> Mark of advice</p>
    </div>
    
  )
}

export default Advice
