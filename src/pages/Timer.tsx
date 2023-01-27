import { useCallback, useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(1000);
  const [timeStep, setTimeStep] = useState("wait");

  const toggleBtn = useCallback(() => {
   if (timeStep === 'play') {
     setTimeStep('pause');
     return;
   }
   setTimeStep('play');
  }, [timeStep,setTimeStep]);

  useEffect(() => {
    if(timeStep !== "play") return;
    const countDown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds -1);
      }
    }, 1000);
    return () => clearInterval(countDown);
  }, [timeStep, seconds, setSeconds])

  const timeUp = useCallback(() => {
    if(seconds === 0) {
      return <div>Time Is Up</div>
    }
  }, [seconds])
 

  
  return (
    <div>
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
        <span className="absolute w-72 h-72 top-0 flex items-center	justify-center text-5xl">
          {Math.floor(seconds / 3600) < 10 ? `0${Math.floor(seconds / 3600)}`: Math.floor(seconds / 3600)}{" "}
          : {Math.floor(seconds / 60) % 60 < 10 ? `0${Math.floor(seconds / 60) % 60}` : Math.floor(seconds / 60) % 60}{" "}
          : {seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
        </span>
      </div>
      <button type="button" onClick={toggleBtn}>
        {timeStep === "play" ? "STOP" : "START"}
      </button>
    </div>
  );
}

export default Timer;
