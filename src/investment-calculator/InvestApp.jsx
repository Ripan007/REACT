import { useState } from "react";
import Header from "./components/Header/Header";
import UserInput from "./components/Header/UserInput";
import Results from "./components/Results";
import "./investApp.css";
export default function InvestApp() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: +newValue };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p> please enter valid input data</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}
