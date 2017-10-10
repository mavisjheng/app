import * as actionTypes from '../constants/actionTypes';

// interface
interface IncrementEnthusiasm {
  type: actionTypes.INCREMENT_ENTHUSIASM;
}
interface DecrementEnthusiasm {
  type: actionTypes.DECREMENT_ENTHUSIASM;
}

// describe cases where an action could be of enthusiasm
export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

// dispatched functions of enthusiasm
export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: actionTypes.INCREMENT_ENTHUSIASM
  };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: actionTypes.DECREMENT_ENTHUSIASM
  };
}
