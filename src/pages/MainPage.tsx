import React from "react";
import {Link} from "react-router-dom";
import "./MainPage.css";

function MainPage() {
  return (
    <div >
      <nav>
        <div className="toolbar">
          <a>
            <span>Hello</span>
          </a>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="pages/calculator">Calculator</Link>
          </li>
          <li>
            <a>timer</a>
          </li>
        </div>
      </nav>
    </div>
  );
}

export default MainPage;
