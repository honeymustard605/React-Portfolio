
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./calcstyles.css";

function Calcapp() {
    const [detail, setDetails] = useState("");
    const calcBtns = [];
    [9,8,7,6,5,4,3,2,1,0,".","%"].forEach((entry => {
        calcBtns.push(
            <button
             onClick={(e) => {
                setDetails(detail + e.target.value);
            }}
            value={entry}
            key={entry}>
            {""}
            {entry}
            </button>

        );
    }));

    return (
        <div className="wrapper">
            {""}
    <div className="show-detail">{detail}</div>
    <div className="digits flex">{calcBtns}</div>
    <div className="modifiers subgrid">


        <button onClick={() => setDetails(detail.substr(0, detail.length - 1))}>

        </button>

        <button onClick={() => setDetails("")} value="">
            Clear
        </button>
    </div>

    <div className="operations subgrid">

        <button onClick={(e) => setDetails(detail + e.target.value)} value="+">
            +
        </button>

        <button onClick={(e) => setDetails(detail + e.target.value)} value="-">
            {" "}
            -{" "}
        </button>
        <button onClick={(e) => setDetails(detail + e.target.value)} value="*">
            {" "}
            *
        </button>
        <button onClick={(e) => setDetails(detail + e.target.value)} value="/">
            {" "}
            /
        </button>
        <button 
            onClick={(e) => {
                try {
                    setDetails(
                        String(eval(detail)).length > 3 &&
                            String(eval(detail)).includes(".")
                            ? String(eval(detail).toFixed(4))
                            : String (eval(detail))
                    );
                } catch (e) {
                    console.log(e);
                }
            }}
            value="="
            >
                =
            </button>
        </div>

   

    </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Calcapp />, rootElement);

export default Calcapp;