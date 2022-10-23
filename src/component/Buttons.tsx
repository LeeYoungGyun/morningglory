import React, {MouseEvent, Dispatch, ReactElement, SetStateAction,} from "react";

function Buttons(props: {
  value: string;
  changeValue: Dispatch<SetStateAction<string>>;
}): ReactElement {
  const { value, changeValue } = props;

  const handleButtonPress = (e: MouseEvent<HTMLButtonElement>) => {
    if (value === "0") {
      changeValue(e.currentTarget.value);
    } else {
      changeValue(value + e.currentTarget.value);
    }
  };

  return (
    <div className="grid gap-3 grid-rows-5 grid-cols-4">
      <button onClick={handleButtonPress} className="btn-function">
        AC
      </button>
      <button onClick={handleButtonPress} value="±" className="btn-function">
        ±
      </button>
      <button onClick={handleButtonPress} value="%" className="btn-function">
        %
      </button>
      <button onClick={handleButtonPress} value="÷" className="btn-operator">
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
      <button onClick={handleButtonPress} value="x" className="btn-operator">
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
      <button onClick={handleButtonPress} value="-" className="btn-operator">
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
      <button onClick={handleButtonPress} value="+" className="btn-operator">
        +
      </button>
      <button onClick={handleButtonPress} value="0" className="btn-zero">
        0
      </button>
      <button onClick={handleButtonPress} value="." className="btn-calculator">
        .
      </button>
      <button onClick={handleButtonPress} value="=" className="btn-operator">
        =
      </button>
    </div>
  );
}

export default Buttons;
