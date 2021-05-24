import React, { useContext, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { AppContext } from "../../context/survey/context";
import { SurveyStep } from "../../context/survey/types";

const PopUpStepOne: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [form, handleFormChange, setForm] = useForm({ email: "", name: "" });

  const goToStepOne = (event: any) => {
    event.preventDefault();
    dispatch({
      type: SurveyStep.GO_TO_STEP_2,
      payload: { name: form.name, email: form.email },
    });
  };

  useEffect(() => {
    if (state.identity.email !== "" || state.identity.name !== "") {
      setForm({ email: state.identity.email, name: state.identity.name });
    }
  }, [setForm, state.identity.email, state.identity.name]);

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
          <form onSubmit={goToStepOne}>
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
            <div className="pop-up__footer">
              <button type="submit"> Next </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopUpStepOne;
