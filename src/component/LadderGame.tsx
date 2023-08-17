import React, { useState } from "react";
import Navigation from "../component/Navigation";
import LadderResult from "../component/LadderResult";
import { useSelector } from 'react-redux';
// import { setParticipant } from '../actions/participantActions';
import { RootState } from '../store/store';

function LadderGame( { onBack }: { onBack: () => void } ) {
  const participant = useSelector((state: RootState) => state.participant);
  const [resultPage, setResultPage] = useState<boolean>(false);

  // 결과창 T/F
  const goResult = () => {
    // if()
    setResultPage(true);
  };

  // LadderGame 페이지 보여주기
  const goBefore = () => {
    setResultPage(false);
  };

  // 결과창 보여주기
  if(resultPage) {
    return <LadderResult ononBack={goBefore} />
  };

  console.log('participantState====', participant)

  return (
    <>
      <Navigation />
      <div className="flex justify-center items-center mt-16 center">
        {/* <!-- Repeat the below block for each "vertical" line in the ladder --> */}
        {Array.from({ length: participant }).map((_, index) => (
        <div key={index} className="relative border-l-2 border-black w-8 h-64 mx-16">
          <input type="text" className="absolute top-[-30px] left-[-70px] border rounded-3xl p-1 text-center w-36" />
          <div className="absolute left-[-2px] top-[10%] border-t-2 border-black"></div>
          <input type="text" className="absolute bottom-[-30px] left-[-70px] border rounded-3xl p-1 text-center w-36" />
        </div>
      ))}
      </div>
      <div className="flex justify-center mt-20">
        {/* <button className="border-black border-2 w-14">Back</button> */}
        <button className="button button-first" onClick={onBack}>Back</button>
        <button className="button button-second ml-11" onClick={goResult}>Start</button>
        {/* <button className="border-black border-2 w-14 ml-11">Start</button> */}
      </div>
    </>
  );
}


export default LadderGame;

