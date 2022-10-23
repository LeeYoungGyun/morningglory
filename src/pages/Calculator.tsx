import React, { useState } from "react";
import Buttons from "../component/Buttons";

function Calculator() {
  const [value, setValue] = useState("0");
  console.log("LLLLLL" + value);

  return (
    <div className="flex justify-center">
      <div className="w-full h-full bg-black text-white rounded-3xl p-5 box-border max-w-lg">
        <div className="h-64 px-5 py-0">4:43</div>
        <div className="text-9xl mb-5 font-light text-right">{value}</div>
        <Buttons value={value} changeValue={setValue} />
        <div className="bottom">-</div>
      </div>
    </div>
  );
}

export default Calculator;
