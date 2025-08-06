import React, { useState } from "react";

export default function Event() {
  // Counter state
  const [count, setCount] = useState(1);

  // Increment
  const handleIncrement = () => {
    setCount(count + 1);
    sayHello();
  };

  // Decrement
  const handleDecrement = () => {
    setCount(count - 1);
  };

  // Say Welcome
  const sayWelcome = () => {
    alert("Welcome to the App!");
  };

  // Generic onClick
  const handleClick = () => {
    alert("I was clicked");
  };

  // Currency converter state
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("Euro");

  // On form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Assume conversion: Euro to INR (multiply by 80)
    let result = 0;
    if (currency === "Euro") {
      result = amount * 80;
      alert(`Converting to Euro Amount is ${result}`);
    }
    // You can add more currencies as needed
  };

  return (
    <div style={{ marginLeft: 20, fontFamily: "Arial" }}>
      <div>{count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <button onClick={sayWelcome}>Say welcome</button>
      <br />
      <button onClick={handleClick}>Click on me</button>
      <br />
      <br />
      <h1 style={{ color: "green" }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{ marginLeft: 5 }}
            />
          </label>
        </div>
        <div>
          <label>
            Currency:
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              style={{ marginLeft: 5 }}
            >
              <option value="Euro">Euro</option>
              {/* Add more currencies as needed */}
            </select>
          </label>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
