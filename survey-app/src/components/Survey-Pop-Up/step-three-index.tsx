import React, { useContext, useState, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { AppContext } from "../../context/survey/context";
import { SurveyStep } from "../../context/survey/types";

const StepThree: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [form, handleFormChange, setForm] = useForm({
    book: "",
  });
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [invalidCheckbox, setInvalidCheckbox] = useState<boolean>(true);

  const colors = [
    "Blue",
    "Red",
    "Yellow",
    "Orange",
    "Green",
    "Indigo",
    "Violet",
  ];

  useEffect(() => {
    if (state.favorites.book !== "" || state.favorites.colors !== []) {
      setForm({ book: state.favorites.book, colors: state.favorites.colors });
    }
  }, [setForm, state.favorites.book, state.favorites.colors]);

  const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const colors = selectedColors;
    let index;

    if (event.target.checked) {
      colors.push(event.target.value);
    } else {
      index = colors.indexOf(event.target.value);
      colors.splice(index, 1);
    }
    setSelectedColors(colors);

    if (selectedColors.length > 0) {
      setInvalidCheckbox(false);
    }
  };

  const checkIfValid = () => {
    if (selectedColors.length > 0) {
      setInvalidCheckbox(false);
    }
    setInvalidCheckbox(true);
  };

  const goToStepFour = (event: any) => {
    event?.preventDefault();
    dispatch({
      type: SurveyStep.GO_TO_STEP_4,
      payload: { book: form.book, colors: selectedColors },
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
          <form onSubmit={goToStepFour}>
            <label>Favorite Book</label>
            <input
              value={form.book}
              onChange={handleFormChange}
              name="book"
              required
              minLength={2}
            />
            <div>
              <label>Select your favorite color</label>
              <div className="pop-up__content-form-genders">
                {colors.map((color, index) => {
                  return (
                    <div key={index}>
                      <input
                        type="checkbox"
                        id={color}
                        value={color}
                        name="colors"
                        onChange={onChangeCheckbox}
                        key={index}
                        onClick={checkIfValid}
                      />
                      <label
                        htmlFor={color}
                        style={{ color, fontWeight: "bolder" }}
                        key={color}
                      >
                        {color}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pop-up__footer">
              <button
                onClick={() =>
                  dispatch({
                    type: SurveyStep.RETURN,
                  })
                }
              >
                Previous
              </button>
              <button type="submit" disabled={invalidCheckbox}>
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
