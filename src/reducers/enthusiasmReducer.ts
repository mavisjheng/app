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

const enthusiasm = (state: EnthusiasmState = initialState, action: EnthusiasmAction): EnthusiasmState => {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return handleIncrease(state);
    case DECREMENT_ENTHUSIASM:
      return handleDecrease(state);
    default:
      break;
  }
  return state;
};

export default enthusiasm;
