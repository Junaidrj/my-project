import React, { useState, useEffect } from "react";
import img1 from "../images/newfolder067.jpg"
import img from "../images/new folder040.png"
import Img2 from "../images/new folder060.png"
import Img3 from "../images/new folder052.png"
import Img4 from "../images/new folder068.png"




const Countdown = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 14); // Set target date 350 days in the future

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const timeDiff = targetDate.getTime() - new Date().getTime();

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>

        <div className=' h-[60vh] w-[100%] ' style={{backgroundImage:`url("${img1}")`,backgroundSize:"100% 100%"}} >
        <img src={Img2} />
        <img src={Img4} className="ml-12 mt-11 updown"/>

            
            <div>
            <div className='flex w-96 mt- ml-36'>
      <h2 class="text-2xl font-bold text-white counting   ">Upcoming Conference</h2>
        <img  src={img}/>
        </div>
        <h1 className="text-white font-bold text-5xl ml-36">Counting Times...</h1>

            </div>
            <div className="flex justify-between h-[120px] w-[520px] text-white font-semibold ml-[120vh] mt-[-15vh]">
                <div className=" border-4 h-[110px] w-[110px] rounded-full ">
                <h1 className="font-bold text-4xl mt-3 ml-5">{timeRemaining.days }</h1>
                <p className="  h-[100px] w-[100px] ml-5"> DAYS</p>
                </div>
                <div className=" border-4 h-[110px] w-[110px] rounded-full ">
                <h1 className="font-bold text-4xl mt-3 ml-5">{timeRemaining.hours}</h1>
                <p className="  h-[100px] w-[100px] ml-5"> HOURS</p>
                </div>
                <div className=" border-4 h-[110px] w-[110px] rounded-full ">
                <h1 className="font-bold text-4xl mt-3 ml-5">{timeRemaining.minutes}</h1>
                <p className="  h-[100px] w-[100px] ml-5"> MINUTES</p>
                </div>
                <div className=" border-4 h-[110px] w-[110px] rounded-full ">
                <h1 className="font-bold text-4xl mt-3 ml-5">{timeRemaining.seconds}</h1>
                <p className="  h-[100px] w-[100px] ml-5">SECONDS</p>
                </div>
                
            
          
            
      </div>
        
      <img src={Img3}  className="mt-[89px]"/>
        </div>
     
    </div>
  );
};

export default Countdown;
