import { useState } from 'react';
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from './components/Results';

function App() {
    const [userInput, setUserInput] = useState({
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 8,
      duration: 3
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue){
    setUserInput((prevUserInput) => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue,
        }
    })

  }
  return (
    <>
        <Header />
        <UserInput User={userInput} onChange={handleChange} />
        {!inputIsValid && <p className='center'>Please enter valid duration! Duration must be equal to or greater than one.</p>}
        {inputIsValid && <Result InputData={userInput}/>}
    </>

  )
}

export default App
