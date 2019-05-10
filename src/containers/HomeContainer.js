import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as triviaActionCreators from '../actions/triviaActions';
import Home from '../components/Home';

const propTypes = {
  actions: PropTypes.shape({
    trivia: PropTypes.shape({
      getQuestions: PropTypes.func.isRequired
    }).isRequired
  }).isRequired
};

class HomeContainer extends Component {
  componentWillMount() {
    this.props.actions.trivia.getQuestions();
  }

  render() {
    return <Home {...this.props} />;
  }
}

HomeContainer.propTypes = propTypes;

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      trivia: bindActionCreators(triviaActionCreators, dispatch)
    }
  };
}

export { mapDispatchToProps };

export default connect(
  null,
  mapDispatchToProps
)(HomeContainer);
