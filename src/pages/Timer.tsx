import { useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(120);

  return (
    <div className="flex justify-center">
    {seconds}
    </div>
);
}

export default Timer;
