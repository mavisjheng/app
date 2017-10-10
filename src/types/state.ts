import { Reducer } from 'redux';
import { RouterState } from 'react-router-redux';

export interface EnthusiasmState {
  languageName: string;
  enthusiasmLevel: number;
}

export interface StoreState {
  enthusiasm: EnthusiasmState;
  routing: Reducer<RouterState>;
}
