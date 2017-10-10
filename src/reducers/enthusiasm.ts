import { EnthusiasmState } from '../types/state';
import { EnthusiasmAction } from '../actions';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/actionTypes';

const initialState: EnthusiasmState = {
  enthusiasmLevel: 5,
  languageName: 'TypeScript',
};

const handleIncrease = (state: EnthusiasmState) =>
  ({ ...state, enthusiasmLevel: state.enthusiasmLevel + 1 });

const handleDecrease = (state: EnthusiasmState) =>
  ({ ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) });

const reducers = {
  [INCREMENT_ENTHUSIASM]: handleIncrease,
  [DECREMENT_ENTHUSIASM]: handleDecrease,
};

const enthusiasm = (state: EnthusiasmState = initialState, action: EnthusiasmAction) => {
  let nextState = state;
  if (reducers[action.type] !== undefined) {
    nextState = reducers[action.type](state);
  }
  return nextState;
};

export default enthusiasm;
