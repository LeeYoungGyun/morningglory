import React, { useState } from "react";
import Buttons from "../component/Buttons";

function Calculator() {
  const [value, setValue] = useState("0");

  return (
    <div className="w-full h-full bg-black text-white rounded-3xl p-5 box-border">
      <div className="h-64 px-5 py-0">4:43</div>
      <div className="text-9xl mb-5 font-light text-right">0</div>
      <Buttons />
      <div className="bottom">-</div>
    </div>
  );
}

export default Calculator;
