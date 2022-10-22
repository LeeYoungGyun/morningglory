import React, {useState} from "react";

function Buttons(props: { changevalue: (arg0: string) => void; }): React.ReactElement {
   const [btnValue, setBtnValue] = useState("0")
;
  const handleButtonPress = (content: any) => () => {
      setBtnValue((parseFloat(btnValue) + content).toString);
      props.changevalue(btnValue)
  };
  return (
    <div className="grid gap-3 grid-rows-5 grid-cols-4">
      <button onClick={handleButtonPress} className="btn-function">
        AC
      </button>
      <button onClick={handleButtonPress} className="btn-function">
        ±
      </button>
      <button onClick={handleButtonPress} className="btn-function">
        %
      </button>
      <button onClick={handleButtonPress} className="btn-operator">
        ÷
      </button>
      <button onClick={handleButtonPress} className="btn-calculator">
        7
      </button>
      <button onClick={handleButtonPress} className="btn-calculator">
        8
      </button>
      <button onClick={handleButtonPress} className="btn-calculator">
        9
      </button>
      <button onClick={handleButtonPress} className="btn-operator">
        x
      </button>
      <button onClick={handleButtonPress} className="btn-calculator">
        4
      </button>
      <button onClick={handleButtonPress} className="btn-calculator">
        5
      </button>
      <button onClick={handleButtonPress} className="btn-calculator">
        6
      </button>
      <button onClick={handleButtonPress} className="btn-operator">
        -
      </button>
      <button onClick={handleButtonPress} className="btn-calculator">
        1
      </button>
      <button onClick={handleButtonPress} className="btn-calculator">
        2
      </button>
      <button onClick={handleButtonPress} className="btn-calculator">
        3
      </button>
      <button onClick={handleButtonPress} className="btn-operator">
        +
      </button>
      <button onClick={handleButtonPress} className="btn-zero">
        0
      </button>
      <button onClick={handleButtonPress} className="btn-calculator">
        .
      </button>
      <button onClick={handleButtonPress} className="btn-operator">
        =
      </button>
    </div>
  );
}
export default Buttons;
