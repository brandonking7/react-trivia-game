import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

const propTypes = {
  actions: PropTypes.shape({
    trivia: PropTypes.shape({
      setCurrentQuestion: PropTypes.func.isRequired
    }).isRequired
  }).isRequired,
  questions: PropTypes.array.isRequired
};

// Inline Styles
const countStyle = {
  color: '#000',
  fontSize: '24px',
  fontWeight: '500',
  marginBottom: '8px',
  outline: 'none',
  textAlign: 'center'
};

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.state = {
      questionIndex: 0
    };
  }

  componentDidMount() {
    this.props.actions.trivia.setCurrentQuestion(0);
  }

  nextQuestion() {
    this.setState({ questionIndex: this.state.questionIndex + 1 });
    this.props.actions.trivia.setCurrentQuestion(this.state.questionIndex + 1);
  }

  render() {
    const { questions } = this.props;
    const { questionIndex } = this.state;
    return (
      <div>
        <Question
          questionIndex={questionIndex}
          questionObj={questions[questionIndex]}
          nextQuestion={this.nextQuestion}
          {...this.props}
        />
        <div style={countStyle}>{questionIndex + 1} of 10</div>
      </div>
    );
  }
}

Quiz.propTypes = propTypes;

export default Quiz;
