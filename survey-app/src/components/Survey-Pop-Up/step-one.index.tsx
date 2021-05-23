import React, { useContext } from "react";
import { useForm } from "../../assets/hooks/useForm";
import { AppContext } from "../../context/survey/context";
import { SurveyStep } from "../../context/survey/types";

const PopUpStepOne: React.FC = () => {
  const { dispatch } = useContext(AppContext);
  const [form, handleFormChange] = useForm({ email: "", name: "" });
  const goToStepOne = () => {
    dispatch({
      type: SurveyStep.GO_TO_STEP_2,
      payload: { name: form.name, email: form.email },
    });
  };

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
        <h2>Favourite Colors and Book</h2>
        <div className="pop-up__content-form">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Type your email..."
            value={form.email}
            onChange={handleFormChange}
            name="email"
            type="email"
          />
          <label htmlFor="name">Name</label>
          <input
            placeholder="Type your name..."
            value={form.name}
            onChange={handleFormChange}
            name="name"
          />
        </div>
        <div className="pop-up__footer">
          <button onClick={() => goToStepOne()}> Next </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpStepOne;
