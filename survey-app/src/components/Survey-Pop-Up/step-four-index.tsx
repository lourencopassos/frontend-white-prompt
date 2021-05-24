import React, { useContext } from "react";
import { AppContext } from "../../context/survey/context";
import { SurveyStep } from "../../context/survey/types";

const StepFour: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);

  const { identity, details, favorites } = state;

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
            {identity.name && <p>Your name: {identity.name}</p>}
            {identity.email && <p>Your email:{identity.email}</p>}
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
            <button
              onClick={() =>
                dispatch({
                  type: SurveyStep.RETURN,
                })
              }
            >
              Previous
            </button>
            <button onClick={() => goToStepThree()}> Submit </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
