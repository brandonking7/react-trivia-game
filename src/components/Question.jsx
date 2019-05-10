import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  actions: PropTypes.shape({
    trivia: PropTypes.shape({
      setUserAnswer: PropTypes.func.isRequired
    }).isRequired
  }).isRequired,
  questionObj: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  toResults: PropTypes.func.isRequired
};

// Inline Styles
const headerStyle = {
  color: '#000',
  fontSize: '24px',
  fontWeight: '800',
  lineHeight: '1.4',
  textAlign: 'center'
};
const questionStyle = {
  color: '#000',
  fontSize: '24px',
  fontWeight: '500',
  marginBottom: '8px',
  textAlign: 'center',
  width: '250px'
};
const buttonStyle = {
  color: '#000',
  cursor: 'pointer',
  fontSize: '24px',
  fontWeight: '500',
  outline: 'none'
};

//* ** Decoding symbols
function decodeEntities(encodedString) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = encodedString;
  return textArea.value;
}

class Question extends Component {
  constructor(props) {
    super(props);
    this.setAnswer = this.setAnswer.bind(this);
  }

  setAnswer(bool) {
    this.props.actions.trivia.setUserAnswer(bool);
  }

  render() {
    const { questionIndex, questionObj, nextQuestion, toResults } = this.props;
    return (
      <div className="c-trivia__question">
        <div style={headerStyle}>{questionObj.category}</div>
        <div className="c-trivia__question-box">
          <div style={questionStyle}>
            {decodeEntities(questionObj.question)}
          </div>
        </div>
        <div className="c-trivia__input-container">
          <button
            style={buttonStyle}
            onClick={() => {
              this.setAnswer('True');
              if (questionIndex === 9) {
                toResults();
              } else {
                nextQuestion();
              }
            }}
          >
            TRUE
          </button>
          <span style={{ margin: '0 12px' }}>or</span>
          <button
            style={buttonStyle}
            onClick={() => {
              this.setAnswer('False');
              if (questionIndex === 9) {
                toResults();
              } else {
                nextQuestion();
              }
            }}
          >
            FALSE
          </button>
        </div>
      </div>
    );
  }
}

Question.propTypes = propTypes;

export default Question;
