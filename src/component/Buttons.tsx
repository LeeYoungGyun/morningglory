import React, { MouseEvent, ReactElement } from "react";

function Buttons(props: {
  value: string;
  changeValue: any;
  memory: any;
  setMemory: any;
  operator: any;
  setOperator: any;
}): ReactElement {
  const { value, changeValue, memory, setMemory, operator, setOperator } =
    props;

  const handleButtonPress = (e: MouseEvent<HTMLButtonElement>) => {
    if (value === "0") {
      changeValue(e.currentTarget.value);
    } else {
      changeValue(value + e.currentTarget.value);
    }
    // const num = parseFloat(value);

    //   if (value[value.length - 1] === ".") {
    //     setValue(value + content);
    //   } else {
    //     setValue(parseFloat(num + content).toString());
    //   }
    // };
  };

  const allClear = () => {
    changeValue("0");
    setMemory(null);
    setOperator(null);
    return;
  };

  const changePlusMinus = () => {
    changeValue((parseFloat(value) * -1).toString());
    return;
  };

  const percent = () => {
    changeValue((parseFloat(value) / 100).toString());
    setMemory(null);
    setOperator(null);
    return;
  };

  const dot = () => {
    if (value.includes(".")) return;

    changeValue(value + ".");
    return;
  };

  const plus = () => {
    if (operator !== null) {
      if (operator === "+") {
        setMemory(memory + parseFloat(value));
      } else if (operator === "−") {
        setMemory(memory - parseFloat(value));
      } else if (operator === "×") {
        setMemory(memory * parseFloat(value));
      } else if (operator === "÷") {
        setMemory(memory / parseFloat(value));
      }
    } else {
      setMemory(parseFloat(value));
    }
    changeValue("0");
    setOperator("+");
    return;
  };

  const minus = () => {
    if (operator !== null) {
        console.log("memory =" + memory);
      if (operator === "+") {
        setMemory(memory + parseFloat(value));
      } else if (operator === "−") {
        setMemory(memory - parseFloat(value));
      } else if (operator === "×") {
        setMemory(memory * parseFloat(value));
      } else if (operator === "÷") {
        setMemory(memory / parseFloat(value));
      }
    } else {
      setMemory(parseFloat(value));
        console.log("memory2 = " + memory);
    }
    changeValue("0");
    setOperator("−");
      console.log("final memory =" + memory);
      console.log("final memory =" + memory);
      console.log("final value =" + value);

    return;
  };

  const multiplication = () => {
    if (operator !== null) {
      if (operator === "+") {
        setMemory(memory + parseFloat(value));
      } else if (operator === "−") {
        setMemory(memory - parseFloat(value));
      } else if (operator === "×") {
        setMemory(memory * parseFloat(value));
      } else if (operator === "÷") {
        setMemory(memory / parseFloat(value));
      }
    } else {
      setMemory(parseFloat(value));
    }
    changeValue("0");
    setOperator("×");
    return;
  };

  const division = () => {
    if (operator !== null) {
      if (operator === "+") {
        setMemory(memory + parseFloat(value));
      } else if (operator === "−") {
        setMemory(memory - parseFloat(value));
      } else if (operator === "×") {
        setMemory(memory * parseFloat(value));
      } else if (operator === "÷") {
        setMemory(memory / parseFloat(value));
      }
    } else {
      setMemory(parseFloat(value));
    }
    changeValue("0");
    setOperator("÷");
    return;
  };

  const equal = () => {
    if (!operator) return;

    if (operator === "+") {
      changeValue((memory + parseFloat(value)).toString());
    } else if (operator === "−") {
      changeValue((memory - parseFloat(value)).toString());
    } else if (operator === "×") {
      changeValue((memory * parseFloat(value)).toString());
    } else if (operator === "÷") {
      changeValue((memory / parseFloat(value)).toString());
    }
    setMemory(null);
    setOperator(null);
    return;
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
