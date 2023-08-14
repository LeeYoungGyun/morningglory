import React, { useState, useEffect } from "react";
import Navigation from "../component/Navigation";
import LadderGame from "../component/LadderGame";
import { useSelector, useDispatch } from 'react-redux';
import { setParticipant } from '../actions/participantActions';
import { RootState } from '../store/store';

function Ladder() {
  const [nextPageShow, setNextPageShow] = useState<boolean>(false);
  const participant = useSelector((state: RootState) => state.participant);
  const dispatch = useDispatch();


  const plusBtn = () => {
    if (participant < 10) {
      dispatch(setParticipant(participant + 1));
    };
  };

  const minusBtn = () => {
    if (participant > 2) {
      dispatch(setParticipant(participant - 1));
    };
  };

  const changeInputParticipant = (event: any) => {
    console.log('parseInt(event.target.value)')
    if (parseInt(event.target.value) < 2 || parseInt(event.target.value) > 10) {
      alert('Please enter a number of participants between 2 and 10.');
      return;
    }
    console.log('participant====', parseInt(event.target.value));
    if (isNaN(parseInt(event.target.value))) {
      dispatch(setParticipant(2))
    }
    // 리덕스 상태 변경
    dispatch(setParticipant(parseInt(event.target.value)));
  };
  
  useEffect(() => {
    console.log("Current participant value from Redux store:", participant); // 여기에서 출력합니다.
  }, [participant]);



  useEffect(() => {
    
  }, [])

  const goLadderPage = () => {
    setNextPageShow(true);
  };

  const goBack = () => {
    setNextPageShow(false);
  };

  if(nextPageShow) {
    return <LadderGame onBack={goBack}/>
  };


  return (
    <>
      <Navigation />
        <div>
          {/* 사타리타기 초기 페이지 start */}
          <div className="flex justify-center mt-3">
            <h1 className="text-5xl">
              Ladder Game
            </h1>
          </div>
          <div className="flex justify-center mt-7">
            <div className="  bg-lime-600 w-3/6 h-64 rounded-3xl">
              {/* 문구(Please let me know the number of participants) */}
              <div className="flex justify-center text-stone-100 text-xl mt-4">
                <label>Please let me know the number of participants</label>
              </div>
              {/* <!-- Player Number Controls --> */}
              <div className="flex justify-center mt-5">
                {participant > 1 && (
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2" onClick={minusBtn}>-</button>
                )}
                <input className="text-center border border-gray-300 shadow rounded-full text-lg h-10 w-20 px-2 mx-2" type="number" min="0" value={participant} onChange={changeInputParticipant} />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-2" onClick={plusBtn}>+</button>
              </div>
              {/* <!-- Game Controls --> */}
              <div className="flex justify-center mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded mx-2" onClick={goLadderPage}>Start</button>
                {/* <button className="bg-red-500 text-white px-4 py-2 rounded mx-2">Stop</button> */}
              </div>
              {/* 문구(최대 10명) */}
              <div className="flex justify-center text-stone-200 text-xl self-end mt-9">
                <label>* Up to 10 people</label>
              </div>
            </div>
          </div>
          {/* 사타리타기 초기 페이지 end */}
        </div>
    </>
  );
}

export default Ladder;
