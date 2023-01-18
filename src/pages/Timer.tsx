import { useCallback, useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(61);
  const [timeStep, setTimeStep] = useState("wait");

  const toggleBtn = useCallback(() => {
   if (timeStep === 'play') {
     setTimeStep('pause');
     return;
   }
   setTimeStep('play');
   console.log("timeStep=====", timeStep);
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

  return (
    <div>
      <div>
        {Math.floor(seconds / 3600) < 10 ? `0${Math.floor(seconds / 3600)}` : Math.floor(seconds / 3600) }
        : {Math.floor(seconds / 60) % 60 < 10 ? `0${Math.floor(seconds / 60) % 60}`: Math.floor(seconds / 60) % 60}{" "}
        : {seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
      </div>
      <button type="button" onClick={toggleBtn}>
        {timeStep === "play" ? "STOP" : "START"}
      </button>
    </div>
  );
}

export default Timer;
