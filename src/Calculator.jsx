import React, { useState } from "react";
import "./index.css";
function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (/[-+*/]$/.test(input) && /[-+*/]/.test(value)) {
      return;
    }
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };
  const handleEvaluate = () => {
    try {
      if (input === "") {
        setResult("Error");
        return;
      }

      const evaluatedResult = eval(input);
      if (input.includes("/0") && !input.includes("/0+")) {
        setResult(evaluatedResult === Infinity ? "Infinity" : "NaN");
      } else {
        setResult(evaluatedResult);
      }
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <input
        type="text"
        className="calculator-input"
        value={input}
        readOnly
        placeholder="Enter expression"
      />
      <div className="calculator-result">{result}</div>

      <div className="calculator-buttons">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("/")}>/</button>

        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("*")}>*</button>

        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("-")}>-</button>

        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={() => handleButtonClick("+")}>+</button>

        {/* Clear Button */}
        <button className="clear-btn" onClick={handleClear}>
          C
        </button>
      </div>
    </div>
  );
}

export default Calculator;
