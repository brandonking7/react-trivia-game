import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as triviaActionCreators from '../actions/triviaActions';
import Quiz from '../components/Quiz';

function mapStateToProps(state) {
  return {
    questions: state.trivia.get('questions')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      trivia: bindActionCreators(triviaActionCreators, dispatch)
    }
  };
}

export { mapStateToProps, mapDispatchToProps };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
