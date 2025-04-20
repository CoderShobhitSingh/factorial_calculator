import React, { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [factorial, setFactorial] = useState(0);

  const numFact = () => {
    const num = parseInt(number); // to convert the string to number

    let result = 1;
    for (let i = 1; i <= num; i++) {
      result = result * i;
    }

    setFactorial(result);
  };
  return (
    <>
      <div className="container">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter A number"
        />
        <button onClick={numFact}>Calculate</button>
        <p>{`factorial of ${number} is : ${factorial}`}</p>
      </div>
    </>
  );
}

export default App;
