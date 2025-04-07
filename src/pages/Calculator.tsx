import React, { useEffect, useState } from "react";
import Buttons from "../component/Buttons";
import Navigation from "../component/Navigation";

function Calculator() {
  const [time, setTime] = useState("Loading...");
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  useEffect(() => {
    const Timer = setInterval(() => {
      let time = new Date();
      setTime(
        time.getHours().toString().padStart(2, "0") +
          ":" +
          time.getMinutes().toString().padStart(2, "0")
      );
    }, 1000);

    return () => {
      clearInterval(Timer);
    };
  }, []);

  return (
    <>
      <Navigation />
      <div className="flex justify-center">
        <div className="w-full min-h-screen bg-black text-white rounded-3xl p-5 box-border max-w-lg">
          <div className="h-64 px-5 py-0 justify-between">{time}</div>
          <div className="text-3xl mb-5 font-light text-right text-slate-300">
            {memory} {operator}
          </div>
          <div className="text-9xl mb-5 font-light text-right">{value}</div>
          <Buttons
            value={value}
            changeValue={setValue}
            memory={memory}
            setMemory={setMemory}
            operator={operator}
            setOperator={setOperator}
          />
        </div>
      </div>
    </>
  );
}

export default Calculator;
