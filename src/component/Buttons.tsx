import React, { MouseEvent, ReactElement, useState } from "react";

function Buttons(props: { value: string; changeValue: any }): ReactElement {
  const { value, changeValue } = props;
  const [memory, setMemory] = useState<any>(null);
  const [operator, setOperator] = useState<any>(null);
  const [dotBlock, setDotBlock] = useState(true);

  const handleButtonPress = (e: MouseEvent<HTMLButtonElement>) => {
    if (value === "0") {
      changeValue(e.currentTarget.value);
    } else {
      changeValue(value + e.currentTarget.value);
    }
  };
  console.log("value =" + value);

  const allClear = () => {
    changeValue("0");
    setMemory(null);
    setOperator(null);
    setDotBlock(true);
  };

  const changePlusMinus = () => {
    changeValue((parseFloat(value) * -1).toString());
  };

  const percent = () => {
    changeValue((parseFloat(value) / 100).toString());
    setMemory(null);
    setOperator(null);
  };

  const dot = (e: any) => {
    if (value.length === 0) {
      return;
    }
    if (dotBlock) {
      changeValue(value + e.currentTarget.value);
      setDotBlock(false);
    }
  };

  const plus = () => {
    if (operator !== null) {
      if (operator === "+") {
        setMemory(memory + parseFloat(value));
        console.log(memory)
        setDotBlock(true);
      }
    } else {
      setMemory(parseFloat(value));
      setDotBlock(true);
    }
    changeValue("0");
    setOperator("+");
  };
  const minus = (e: any) => {
    if (operator !== null) {
      if (operator === "-") {
        setMemory(memory + parseFloat(value));
        setDotBlock(true);
      }
    } else {
      setMemory(parseFloat(value));
      setDotBlock(true);
    }
    changeValue("0");
    setOperator("-");
  };
  const multiplication = () => {
    if (operator !== null) {
      if (operator === "*") {
        setMemory(memory + parseFloat(value));
        setDotBlock(true);
      }
    } else {
      setMemory(parseFloat(value));
      setDotBlock(true);
    }
    changeValue("0");
    setOperator("*");
  };
  const division = () => {
    if (operator !== null) {
      if (operator === "÷") {
        setMemory(memory + parseFloat(value));
        setDotBlock(true);
      }
    } else {
      setMemory(parseFloat(value));
      setDotBlock(true);
    }
    changeValue("0");
    setOperator("÷");
  };
  const equal = () => {
    if (operator === "+") {
      changeValue((memory + parseFloat(value)).toString());
    } else if (operator === "-") {
      changeValue((memory - parseFloat(value)).toString());
    } else if (operator === "*") {
      changeValue((memory * parseFloat(value)).toString());
    } else if (operator === "÷") {
      changeValue((memory / parseFloat(value)).toString());
    }
    setOperator(null);
    setMemory(null);
  };

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
      <button onClick={division} value="÷" className="btn-operator">
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
      <button onClick={multiplication} value="x" className="btn-operator">
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
      <button onClick={dot} value="." className="btn-calculator">
        .
      </button>
      <button onClick={equal} value="=" className="btn-operator">
        =
      </button>
    </div>
  );
}

export default Buttons;
