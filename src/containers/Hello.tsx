import { Hello } from '../components';
import * as stateType from '../types/state';
import * as actions from '../actions/';
import { connect, Dispatch } from 'react-redux';

const mapStateToProps = (stateProps: stateType.StoreState) => ({
  enthusiasmLevel: stateProps.enthusiasm.enthusiasmLevel,
  name: stateProps.enthusiasm.languageName,
});

const mapDispatchToProps = (dispatch: Dispatch<actions.EnthusiasmAction>) => ({
  onIncrement: () => dispatch(actions.incrementEnthusiasm()),
  onDecrement: () => dispatch(actions.decrementEnthusiasm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
