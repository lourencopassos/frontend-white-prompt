import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppContext } from "./context/survey/context";
import { Status, SurveyStep } from "./context/survey/types";
import StepOne from "./components/Survey-Pop-Up/step-one.index";
import StepTwo from "./components/Survey-Pop-Up/step-two-index";
import StepThree from "./components/Survey-Pop-Up/step-three-index";
import StepFour from "./components/Survey-Pop-Up/step-four-index";

function App() {
  const { state, dispatch } = React.useContext(AppContext);

  const surveyStep = state.step;
  const surveyStatus = state.status;
  const surveyActive = state.active;

  useEffect(() => {
    const status = localStorage.getItem("status");

    if (status !== "COMPLETED") {
      setTimeout(() => {
        dispatch({ type: SurveyStep.OPEN });
      }, 2000);
    }
  }, [dispatch]);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      {surveyActive && (
        <>
          {surveyStep === 1 && <StepOne />}
          {surveyStep === 2 && <StepTwo />}
          {surveyStep === 3 && <StepThree />}
          {surveyStep === 4 && <StepFour />}
        </>
      )}
    </>
  );
}

export default App;
