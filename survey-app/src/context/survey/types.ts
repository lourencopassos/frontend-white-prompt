export interface Identity {
  name: string;
  email: string;
}

export interface Details {
  age: number;
  gender: Gender;
}

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other',
  BLANK = ''
}

export interface Favorites {
  book: string;
  colors: string[];
}

export interface Summary {
  identity: Identity | undefined,
  details: Details | undefined,
  favorites: Favorites | undefined,
}

export enum Status {
  NOT_INITIATED = 'NOT_INITIATED',
  FILING = 'FILING',
  COMPLETED = 'COMPLETED'
}


export enum SurveyStep {
  OPEN = 'OPEN',
  GO_TO_STEP_1 = 'GO_TO_STEP_1',
  GO_TO_STEP_2 = 'GO_TO_STEP_2',
  GO_TO_STEP_3 = 'GO_TO_STEP_3',
  GO_TO_STEP_4 = 'GO_TO_STEP_4',
  FINISH = 'FINISH',
  CLOSE = 'CLOSE'
}

export interface Survey {
  status: Status | null,
  step: number,
  active: boolean,
  identity: Identity,
  details: Details,
  favorites: Favorites,
  summary: Summary
}

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
  ? {
    type: Key;
  }
  : {
    type: Key;
    payload: M[Key];
  }
};

type SurveyPayload = {

  [SurveyStep.GO_TO_STEP_2]: {
    name: string,
    email: string
  };
  [SurveyStep.GO_TO_STEP_3]: {
    age: number,
    gender: Gender,
  }
  [SurveyStep.GO_TO_STEP_4]: {
    book: string,
    colors: string[],
  }

}

export type SurveyPayloadless = {
  [SurveyStep.OPEN]: undefined;
  [SurveyStep.FINISH]: undefined;
  [SurveyStep.CLOSE]: undefined;
}

export type SurveyActions = ActionMap<SurveyPayload>[keyof ActionMap<SurveyPayload>];

export type SurveyPayloadlessActions = ActionMap<SurveyPayloadless>[keyof ActionMap<SurveyPayloadless>];


