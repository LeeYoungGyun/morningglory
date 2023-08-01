import { useCallback, useEffect, useState } from "react";
import Navigation from "../component/Navigation";
import Swal from 'sweetalert2';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  // Start, Stop
  const [timeStep, setTimeStep] = useState("wait");
  // 페이지 넘기는 타입
  const [timeType, setTimeType] = useState(true);
  // Cancel 타입
  const [cancelType, setCancelType] = useState("first");

  // Start 버튼
  const startBtn = useCallback(() => {
    if (timeType === true) {
      setTimeType(false); // 페이지 넘기는 타입 변경
      setCancelType("second"); // 취소 버튼 타입 변경
     } 
     // start 버튼 클릭시 시간 멈춤, 실행 동작 상태 변경
    if(timeStep === 'wait') {
      setTotalSeconds((hours * 3600) + (minutes * 60) + (seconds * 1)); // 초기시간 설정
      setTimeStep('play');
    } else if (timeStep === 'play') {
      setTimeStep('pause');
    } else if(timeStep === 'pause') {
      setTimeStep('play');
    }
  }, [timeStep, timeType, hours ,minutes ,seconds]);

  // Cancel 버튼
  const cancelBtn = useCallback(() => {
    if(cancelType === "first") {
      return;
    } else {
      setTimeType(true); // 타이머 설정 화면
      setTimeStep('wait');
    }
  }, [cancelType]);

  useEffect(() => {
    if(timeStep === "pause" || timeType === true) {
      return;
    } 
    const countDown = setInterval(() => {
      if (totalSeconds > 0) {
        setTotalSeconds(totalSeconds -1);
      }
    }, 1000);
    if(totalSeconds === 0) {
      setTimeType(true);
      setTimeStep('wait');
      Swal.fire('Time is up');
      // alert('Time is up');
    }
    return () => clearInterval(countDown);
  }, [timeStep, totalSeconds, timeType])

  const handleHoursChange = (e: any) => {
    const newHours = e.target.value;
    if (!isNaN(newHours) && newHours < 25) {
      setHours(newHours);
    }
  };

  const handleMinutesChange = (e: any) => {
    const newMinutes = e.target.value;
    if (!isNaN(newMinutes)) {
      if(newMinutes < 60) {
        setMinutes(newMinutes);
      }
    }
  };
  
  const handleSecondsChange = (e: any) => {
    const newSeconds = e.target.value;
    if (!isNaN(newSeconds)) {
      if(newSeconds < 60) {
        setSeconds(newSeconds);
      }
    }
  };

  return (
    <>
      <Navigation />
      {/* 보이는 창 */}
      <div className="grid place-items-center items-center mt-[20%]">
        <div className="relative w-80 h-80">
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
                r="48"
              />
            </g>
          </svg>
          {timeType === true ? (
            <div className="absolute w-72 h-72 top-0 flex items-center justify-center">
            <div className="ml-5">
              <input
                type="number"
                className="w-13 h-12 rounded text-center text-3xl"
                value={hours}
                onChange={handleHoursChange}
                min={0}
                max={23}
              />
               <span className="text-3xl">시</span>{" "}
              <input
                type="number"
                className=" w-13 h-12 rounded text-center text-3xl"
                value={minutes}
                onChange={handleMinutesChange}
                min={0}
                max={59}
              />
               <span className="text-3xl">분</span>{" "}
              <input
                type="number"
                className="w-13 h-12 rounded text-center text-3xl"
                value={seconds}
                onChange={handleSecondsChange}
                min={0}
                max={59}
              />
               <span className="text-3xl">초</span>
            </div>
          </div>
          ) : (
            <span className="absolute w-72 h-72 top-0 flex items-center justify-center text-5xl ml-3">
              {Math.floor(totalSeconds / 3600) < 10 ? `0${Math.floor(totalSeconds / 3600)}` : Math.floor(totalSeconds / 3600)}{" "}
              : {Math.floor(totalSeconds / 60) % 60 < 10 ? `0${Math.floor(totalSeconds / 60) % 60}` : Math.floor(totalSeconds / 60) % 60}{" "}
              : {totalSeconds % 60 < 10 ? `0${totalSeconds % 60}` : totalSeconds % 60}
              {/* {Math.floor(totalSeconds/3600)}{" "} : {Math.floor(totalSeconds/60) % 60}{" "} : {totalSeconds % 60}{" "} */}
            </span>
          )}
        </div>
      </div>
      <div className=" flex justify-center">
        <button className=" w-16 h-16 rounded-full bg-emerald-300	text-base	text-center" type="button" onClick={cancelBtn}>
          Cancel
        </button>
        <button className=" w-16 h-16 rounded-full bg-emerald-300	text-base	text-center ml-5" type="button" onClick={startBtn}>
          {timeStep === "play" ? "STOP" : "START"}
        </button>
      </div>
    </>
  );
}

export default Timer;
