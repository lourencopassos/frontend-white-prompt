import React, { useContext } from "react";
import { useForm } from "../../assets/hooks/useForm";
import { AppContext } from "../../context/survey/context";
import { SurveyStep } from "../../context/survey/types";

const StepTwo: React.FC = () => {
  const { dispatch } = useContext(AppContext);
  const [form, handleFormChange] = useForm({ age: 0, gender: "" });

  const goToStepThree = () => {
    dispatch({
      type: SurveyStep.GO_TO_STEP_3,
      payload: { age: form.age, gender: form.gender },
    });
  };

  const genders = ["Male", "Female", "Other"];
  const ages = [...Array(99).keys()].slice(18);

  return (
    <div className="pop-up__overlay">
      <div className="pop-up__content">
        <button
          className="close-pop-up"
          onClick={() =>
            dispatch({
              type: SurveyStep.CLOSE,
            })
          }
          title="Fechar"
        />
        <h2>Favourite Colors and Book Survey</h2>
        <div className="pop-up__content-form">
          <label>Age:</label>
          <select name="age" value={form.age} onChange={handleFormChange}>
            <option defaultValue="" key="default">
              Select the age
            </option>
            {ages.map((age, index) => {
              return (
                <option key={index} value={age}>
                  {age}
                </option>
              );
            })}
          </select>
          <div className="pop-up__content-form-genders">
            <label htmlFor="gender">Gender</label>
            {genders.map((gender, index) => {
              return (
                <div key={index}>
                  <input
                    type="radio"
                    id={gender}
                    value={gender}
                    name="gender"
                    key={gender}
                    onChange={handleFormChange}
                  />
                  <label key={index} htmlFor={gender}>
                    {gender}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="pop-up__footer">
          <button onClick={() => goToStepThree()}> Next </button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
