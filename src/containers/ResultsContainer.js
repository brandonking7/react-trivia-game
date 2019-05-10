import { connect } from 'react-redux';
import Results from '../components/Results';

function mapStateToProps(state) {
  return {
    questions: state.trivia.get('questions')
  };
}

export { mapStateToProps };

export default connect(
  mapStateToProps,
  null
)(Results);
