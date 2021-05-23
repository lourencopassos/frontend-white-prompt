import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/survey/context";
import { Survey, SurveyStep } from "../../context/survey/types";

const StepFour: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [unsubmittedSurvey, setUnsubmittedSurvey] = useState<Survey>();

  const { identity, details, favorites } = state;

  useEffect(() => {
    setUnsubmittedSurvey(state);
    localStorage.setItem("survey", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    const survey = localStorage.getItem("survey");

    if (survey) {
      const parsedSurvey = JSON.parse(survey);
      console.log(parsedSurvey);
    }
  }, []);

  const goToStepThree = () => {
    dispatch({
      type: SurveyStep.FINISH,
    });

    localStorage.setItem("status", "COMPLETED");

    dispatch({
      type: SurveyStep.CLOSE,
    });
  };

  return (
    <div className="pop-up__overlay">
      <div className="pop-up__content">
        <div>
          <h2>Favourite Colors and Book Survey</h2>
          <div>
            <p>Your name: {identity.name}</p>
            <p>Your email:{identity.email}</p>
          </div>
          <div>
            <p>Your age: {details.age}</p>
            <p>Your gender: {details.gender}</p>
          </div>
          <div>
            <p>Your favorite book: {favorites.book}</p>
            <p>Your favorite colors:</p>
            <div>
              {favorites.colors.map((color, index) => {
                return (
                  <p style={{ color, fontWeight: "bolder" }} key={index}>
                    {color}
                  </p>
                );
              })}
            </div>
          </div>
          <div>
            <button onClick={() => goToStepThree()}> Submit </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
