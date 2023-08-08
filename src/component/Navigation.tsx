import React, { } from "react";
import { Link } from "react-router-dom";

function Navigation() {

  return (
    <div>
      <nav>
        <div className="bg-amber-50 leading-5 px-2">
            <span className="text-blue-500 text-4xl leading-normal">
              <Link to="/">morningglory</Link>
            </span>
          <ul className="float-right pt-1.5 ">
            <li className="float-left list-none px-5">
              <Link to="/">Home</Link>
            </li>
            <li className="float-left list-none px-5">
              <Link to="/pages/calculator">Calculator</Link>
            </li>
            <li className="float-left list-none px-5">
              <Link to="/pages/Timer">Timer</Link>
            </li>
            <li className="float-left list-none pr-96">
              <Link to="/pages/Ladder">Ladder game</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
