import React, {  } from "react";
import Navigation from "../component/Navigation";
import { useSelector, useDispatch } from 'react-redux';
import { setParticipant } from '../actions/participantActions';
import { RootState } from '../store/store';

function LadderGame() {
  const participant = useSelector((state: RootState) => state.participant);
  // const dispatch = useDispatch();

  console.log('participantState====', participant)

  return (
    <>
      <Navigation />
      <div className="flex mt-16">
        {/* <!-- Repeat the below block for each "vertical" line in the ladder --> */}
        <div className="relative border-l-2 border-black w-4 h-64 mx-10">
            <input type="text" className="absolute top-[-30px] left-[-20px] border rounded-3xl p-1" />
            <div className="absolute left-[-2px] top-[10%] border-t-2 border-black w-[80px]"></div>
            <input type="text" className="absolute bottom-[-30px] left-[-20px] border rounded-3xl p-1" />
        </div>
    </div>
    </>
  );
}


export default LadderGame;

