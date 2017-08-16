import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/postsActionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
