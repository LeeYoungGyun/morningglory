import React, { useState } from "react";

function Calculator() {
  const [calc, setCalc] = useState("");

  const [operCheck, setOperCheck] = useState(true);
  const [pointCheck, setPointCheck] = useState(true);

  const getNum = (e: any) => {
    setCalc((prev) => prev + e.target.value);
    setOperCheck(true);
  };

  const getOper = (e: any) => {
    if (calc.length === 0) {
      return;
    } else if (operCheck) {
      setCalc((prev) => prev + e.target.value);
      setOperCheck(false);
      setPointCheck(true);
    }
  };

  const minus = (e: any) => {
    if (operCheck) {
      setCalc((prev) => prev + e.target.value);
      setOperCheck(false);
      setPointCheck(true);
    }
  };

  const getPoint = (e: any) => {
    if (calc.length === 0) {
      return;
    }
    if (pointCheck) {
      setCalc((prev) => prev + e.target.value);
      setPointCheck(false);
    }
  };

  const getResult = () => {
    let replace_str = calc.replace(/x/gi, "*").replace(/÷/gi, "/");

    if (isNaN(eval(replace_str))) {
      setCalc("");
    } else if (eval(replace_str) === Infinity) {
      alert("0으로 나눌수 없습니다.");
      setCalc("");
    } else {
      setCalc(() =>
        eval(replace_str)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
      setPointCheck(false);
    }
  };

  const delCalc = () => {
    setOperCheck(true);
    let str = String(calc).slice(0, -1);
    setCalc(() => str);
    setPointCheck(true); // 수정필요 3.33.33
  };

  const allClear = () => {
    setPointCheck(true);
    setCalc(() => "");
  };

  return (
    <div className="box-border">
      <div className="">
        <div className="">
          <div className=""></div>
          <div className="">
            {calc.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </div>
        </div>
          <button className="" onClick={allClear}>
            AC
          </button>
          <button className="" onClick={delCalc}>DEL</button>
          <button className="" value="÷" onClick={getOper}>
            ÷
          </button>
          <button className="" value="1" onClick={getNum}>
            1
          </button>
          <button className="" value="2" onClick={getNum}>
            2
          </button>
          <button className="" value="3" onClick={getNum}>
            3
          </button>
          <button className="" value="x" onClick={getOper}>
            x
          </button>
          <button className="" value="4" onClick={getNum}>
            4
          </button>
          <button className="" value="5" onClick={getNum}>
            5
          </button>
          <button className="" value="6" onClick={getNum}>
            6
          </button>
          <button className=""  value="+" onClick={getOper}>
            +
          </button>
          <button className="" value="7" onClick={getNum}>
            7
          </button>
          <button className="" value="8" onClick={getNum}>
            8
          </button>
          <button className="" value="9" onClick={getNum}>
            9
          </button>
          <button className="" value="-" onClick={minus}>
            -
          </button>
          <button className="" value="." onClick={getPoint}>
            .
          </button>
          <button className="" value="0" onClick={getNum}>
            0
          </button>
          <button className="" value="=" onClick={getResult}>
            =
          </button>
      </div>
    </div>
  );
}

export default Calculator;
