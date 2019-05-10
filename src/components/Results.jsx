import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  questions: PropTypes.array.isRequired,
  playAgain: PropTypes.func.isRequired
};

// Inline Styles
const buttonStyle = {
  color: '#000',
  cursor: 'pointer',
  fontSize: '24px',
  fontWeight: '500',
  marginTop: '20px',
  outline: 'none'
};

//* ** Decoding symbols
function decodeEntities(encodedString) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = encodedString;
  return textArea.value;
}

function Results({ questions, playAgain }) {
  //* ** calculating the score
  const score = questions.reduce(
    (accQues, question) =>
      question.correct_answer === question.user_answer ? accQues + 1 : accQues,
    0
  );
  return (
    <div className="c-trivia__results">
      <div className="c-trivia__score-text">
        You scored
        <br />
        {score} / 10
      </div>
      {questions.map((triviaQuestion, index) => {
        return (
          <div key={index}>
            {triviaQuestion.correct_answer === triviaQuestion.user_answer ? (
              <div className="c-trivia__user-answer">
                <span className="c-trivia__score-symbol">+</span>{' '}
                {decodeEntities(triviaQuestion.question)}
              </div>
            ) : (
              <div className="c-trivia__user-answer">
                <span className="c-trivia__score-symbol">-</span>{' '}
                {decodeEntities(triviaQuestion.question)}
              </div>
            )}
          </div>
        );
      })}
      <button
        style={buttonStyle}
        onClick={() => {
          playAgain();
        }}
      >
        PLAY AGAIN?
      </button>
    </div>
  );
}

Results.propTypes = propTypes;

export default Results;
