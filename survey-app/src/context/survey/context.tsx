import React, { createContext, Dispatch, useReducer } from "react";
import { reducer, initialState } from "./reducer";
import { Survey, SurveyActions, SurveyPayloadlessActions } from "./types";

export const AppContext = createContext<{
  state: Survey;
  dispatch: Dispatch<SurveyActions | SurveyPayloadlessActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
