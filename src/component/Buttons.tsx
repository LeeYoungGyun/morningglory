import React from "react";

function Buttons(): React.ReactElement {
  return (
    <div className="grid gap-3 grid-rows-5 grid-cols-4">
      <button className="btn-function">AC</button>
      <button className="btn-function">±</button>
      <button className="btn-function">%</button>
      <button className="btn-operator">÷</button>
      <button className="btn-calculator">7</button>
      <button className="btn-calculator">8</button>
      <button className="btn-calculator">9</button>
      <button className="btn-operator">x</button>
      <button className="btn-calculator">4</button>
      <button className="btn-calculator">5</button>
      <button className="btn-calculator">6</button>
      <button className="btn-operator">-</button>
      <button className="btn-calculator">1</button>
      <button className="btn-calculator">2</button>
      <button className="btn-calculator">3</button>
      <button className="btn-operator">+</button>
      <button className="btn-zero">0</button>
      <button className="btn-calculator">.</button>
      <button className="btn-operator">=</button>
    </div>
  );
}
export default Buttons;
