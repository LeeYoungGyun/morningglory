import React, { useEffect, useState } from "react";
import Navigation from "../component/Navigation";

function Ladder() {


  return (
    <>
    <Navigation />
    <div className="flex justify-center mt-3">
      <h1 className="text-5xl">
        Ladder Game
      </h1>
    </div>
    <div className="flex justify-center mt-7">
      <div className="bg-yellow-600 w-3/6 h-64 rounded-3xl">
        {/* 문구(Please let me know the number of participants) */}
        <div className="flex justify-center text-stone-100 text-xl">
          <label>Please let me know the number of participants</label>
        </div>

        {/* 문구(최대 10명) */}
        <div className="flex justify-center items-end text-stone-200 text-xl">
          <label>Up to 10 people</label>
        </div>
      </div>
    </div>
    </>
  );
}

export default Ladder;
