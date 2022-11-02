import React, { MouseEvent, ReactElement, useEffect, useState } from "react";

function Buttons(props: {
  value: string;
  changeValue: any;
  value2: any;
  setValue2: any;
  value3: any;
  setValue3: any;
}): ReactElement {
  const { value, changeValue, value2, setValue2, value3, setValue3 } = props;

  const handleButtonPress = (e: MouseEvent<HTMLButtonElement>) => {
    if (value === "0") {
      changeValue(e.currentTarget.value);
    } else {
      changeValue(value + e.currentTarget.value);
    }
  };

  const allClear = () => {
    changeValue("0");
  };

  const changePlusMinus = () => {
    changeValue((parseFloat(value) * -1).toString());
  };

  const percent = () => {
    changeValue((parseFloat(value) / 100).toString());
  };

  // const dot = (e: any) => {
  //   if (value.length === 0) {
  //     return;
  //   }
  //   if (dotBlock) {
  //     changeValue(value + e.currentTarget.value);
  //     setDotBlock(false);
  //   }
  // };

  const plus = () => {
      setValue2(value);
      changeValue(value3);

  };

  const minus = () => {};

  const multiplication = () => {};
  const division = () => {};
  const equal = () => {};

  return (
    <div className="grid gap-3 grid-rows-5 grid-cols-4">
      <button onClick={allClear} value="AC" className="btn-function">
        AC
      </button>
      <button onClick={changePlusMinus} value="±" className="btn-function">
        ±
      </button>
      <button onClick={percent} value="%" className="btn-function">
        %
      </button>
      <button onClick={division} value="/" className="btn-operator">
        ÷
      </button>
      <button onClick={handleButtonPress} value="7" className="btn-calculator">
        7
      </button>
      <button onClick={handleButtonPress} value="8" className="btn-calculator">
        8
      </button>
      <button onClick={handleButtonPress} value="9" className="btn-calculator">
        9
      </button>
      <button onClick={multiplication} value="*" className="btn-operator">
        x
      </button>
      <button onClick={handleButtonPress} value="4" className="btn-calculator">
        4
      </button>
      <button onClick={handleButtonPress} value="5" className="btn-calculator">
        5
      </button>
      <button onClick={handleButtonPress} value="6" className="btn-calculator">
        6
      </button>
      <button onClick={minus} value="-" className="btn-operator">
        -
      </button>
      <button onClick={handleButtonPress} value="1" className="btn-calculator">
        1
      </button>
      <button onClick={handleButtonPress} value="2" className="btn-calculator">
        2
      </button>
      <button onClick={handleButtonPress} value="3" className="btn-calculator">
        3
      </button>
      <button onClick={plus} value="+" className="btn-operator">
        +
      </button>
      <button onClick={handleButtonPress} value="0" className="btn-zero">
        0
      </button>
      <button onClick={handleButtonPress} value="." className="btn-calculator">
        .
      </button>
      <button onClick={equal} value="=" className="btn-operator">
        =
      </button>
    </div>
  );
}

export default Buttons;
