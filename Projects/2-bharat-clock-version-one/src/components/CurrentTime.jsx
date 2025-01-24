import { useEffect } from "react";
import { useState } from "react";

function CurrentTime(){
  const [time,setTime] =   useState(new Date());

  useEffect(() => {
       console.log("Interval has been setup");
       const inetervalId = setInterval(()=>{
        setTime(new Date());
       },1000);

       return () => {
        clearInterval(inetervalId);
        console.log("cancelled the interval");
       }
  },[]);
    return (
      <p>
        This is the Current Time : {time.toLocaleDateString()} - {""}
        {time.toLocaleTimeString()}
      </p>
    ); 
}
export default CurrentTime;
