import React, { useContext, useState } from "react";
import { useForm } from "../../assets/hooks/useForm";
import { AppContext } from "../../context/survey/context";
import { SurveyStep } from "../../context/survey/types";

const StepThree: React.FC = () => {
  const { dispatch } = useContext(AppContext);
  const [form, handleFormChange] = useForm({
    book: "",
  });
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const colors = [
    "Blue",
    "Red",
    "Yellow",
    "Orange",
    "Green",
    "Indigo",
    "Violet",
  ];

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
  };

  const goToStepFour = () => {
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
          <label>Favorite Book</label>
          <input value={form.book} onChange={handleFormChange} name="book" />
        </div>
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
          <button onClick={() => goToStepFour()}> Next </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
