import React, { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

export default function Main() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 6,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(PrevUserInput => {
      return {
        ...PrevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  const inputIsValid = userInput.duration >= 1;
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

/**

 * * avoid getting  distracted(stick to a particular thing),spend as time much as possible , enjoy(have all the fun)
 */
