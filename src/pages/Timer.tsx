import { useCallback, useEffect, useState } from "react";
import Navigation from "../component/Navigation";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [timeStep, setTimeStep] = useState("wait");
  const [timeType, setTimeType] = useState(true);

  const toggleBtn = useCallback(() => {
    if (timeType === true) {
      setTimeType(false);
     } 

   if (timeStep === 'play') {
     setTimeStep('pause');
     return;
   }
   setTimeStep('play');

   console.log('timeStep====', timeStep);
   console.log('timeType====', timeType);
  }, [timeStep, timeType]);

  useEffect(() => {
    if(timeStep !== "play") return;
    const countDown = setInterval(() => {
      if (totalSeconds > 0) {
        setTotalSeconds(totalSeconds -1);
      }
    }, 1000);
    return () => clearInterval(countDown);
  }, [timeStep, totalSeconds])

  const handleHoursChange = (e: any) => {
    const newHours = parseInt(e.target.value);
    if (!isNaN(newHours)) {
      setHours(newHours);
    }
  };
  
  const handleMinutesChange = (e: any) => {
    const newMinutes = parseInt(e.target.value);
    if (!isNaN(newMinutes)) {
      setMinutes(newMinutes);
    }
  };
  
  const handleSecondsChange = (e: any) => {
    const newSeconds = parseInt(e.target.value);
    if (!isNaN(newSeconds)) {
      setSeconds(newSeconds);
    }
  };


  // const timeUp = useCallback(() => {
  //   if(totalSeconds === 0) {
  //     return <div>Time Is Up</div>
  //   }
  // }, [totalSeconds])

  return (
    <>
      <Navigation />
      {/* 보이는 창 */}
      <div className="grid place-items-center items-center">
        <div className="relative w-72 h-72">
          <svg
            className="base-timer__svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className="fill-none	stroke-none	">
              <circle
                className="stroke-2 stroke-gray-500"
                cx="50"
                cy="50"
                r="45"
              />
            </g>
          </svg>
          {timeType === true ? (
            <div className="absolute w-72 h-72 top-0 flex items-center justify-center">
            <div>
              <input
                type="text"
                className="w-16 h-12 rounded text-center"
                value={hours}
                onChange={handleHoursChange}
              />
              시{" "}
              <input
                type="text"
                className="w-16 h-12 rounded text-center"
                value={minutes}
                onChange={handleMinutesChange}
              />
              분{" "}
              <input
                type="text"
                className="w-16 h-12 rounded text-center"
                value={seconds}
                onChange={handleSecondsChange}
              />
              초
            </div>
          </div>
          ) : (
            <span className="absolute w-72 h-72 top-0 flex items-center justify-center text-5xl">
              {Math.floor(totalSeconds / 3600) < 10 ? `0${Math.floor(totalSeconds / 3600)}` : Math.floor(totalSeconds / 3600)}{" "}
              : {Math.floor(totalSeconds / 60) % 60 < 10 ? `0${Math.floor(totalSeconds / 60) % 60}` : Math.floor(totalSeconds / 60) % 60}{" "}
              : {totalSeconds % 60 < 10 ? `0${totalSeconds % 60}` : totalSeconds % 60}
            </span>
          )}



          {/* <span className="absolute w-72 h-72 top-0 flex items-center	justify-center text-5xl">
          {Math.floor(totalSeconds / 3600) < 10 ? `0${Math.floor(totalSeconds / 3600)}` : Math.floor(totalSeconds / 3600)}{" "}
          : {Math.floor(totalSeconds / 60) % 60 < 10 ? `0${Math.floor(totalSeconds / 60) % 60}` : Math.floor(totalSeconds / 60) % 60}{" "}
          : {totalSeconds % 60 < 10 ? `0${totalSeconds % 60}` : totalSeconds % 60}
        </span> */}
        </div>
      </div>
      <div className=" flex justify-center">
        <button className=" w-16 h-16 rounded-full bg-emerald-300	text-base	text-center" type="button" onClick={toggleBtn}>
          Cancel
        </button>
        <button className=" w-16 h-16 rounded-full bg-emerald-300	text-base	text-center ml-5" type="button" onClick={toggleBtn}>
          {timeStep === "play" ? "STOP" : "START"}
        </button>
      </div>

    </>
  );
}

export default Timer;
