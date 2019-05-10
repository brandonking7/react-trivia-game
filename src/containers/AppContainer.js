import { connect } from 'react-redux';
import App from '../components/App';

function mapStateToProps(state) {
  return {
    ...state.trivia
  };
}

export default connect(
  mapStateToProps,
  null
)(App);
