import { Survey, Status, SurveyStep, Gender } from './types'

export const reducer = (state: Survey, action: any) => {
  switch (action.type) {
    case SurveyStep.OPEN:
      return {
        ...state,
        active: true,
        step: 1,
        status: Status.FILING,
      };
    case SurveyStep.GO_TO_STEP_2:
      return {
        ...state,
        identity: { name: action.payload.name, email: action.payload.email },
        step: 2
      };
    case SurveyStep.GO_TO_STEP_3:
      return {
        ...state,
        details: { age: action.payload.age, gender: action.payload.gender },
        step: 3
      };
    case SurveyStep.GO_TO_STEP_4:
      return {
        ...state,
        favorites: { book: action.payload.book, colors: action.payload.colors },
        step: 4
      };
    case SurveyStep.FINISH:
      return {
        ...state,
        status: Status.COMPLETED,
        active: false,
      };
    case SurveyStep.CLOSE:
      return {
        ...state,
        active: false,
      };
    case SurveyStep.RETURN:
      return {
        ...state,
        step: state.step - 1
      };

    default:
      return state;
  }

}


export const initialState: Survey = {
  status: Status.NOT_INITIATED,
  step: 0,
  active: false,
  identity: { name: '', email: '' },
  details: { age: 0, gender: Gender.BLANK },
  favorites: { book: '', colors: [] },
  summary: { identity: undefined, favorites: undefined, details: undefined }
}

