import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  startChallenge: PropTypes.func.isRequired
};

// Inline Styles
const headerStyle = {
  color: '#000',
  fontSize: '24px',
  fontWeight: '800',
  lineHeight: '1.4',
  textAlign: 'center',
  width: '200px'
};
const divStyle = {
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
  marginBottom: '8px',
  outline: 'none',
  textAlign: 'center',
  width: '250px'
};

// Home Page
function Home({ startChallenge }) {
  return (
    <div className="c-trivia__home">
      <div style={headerStyle}> Welcome to the Trivia Challenge!</div>
      <div style={divStyle}>
        You will be presented with 10 True or False questions
      </div>
      <div style={divStyle}> Can you score 100%?</div>

      <button
        style={buttonStyle}
        onClick={() => {
          startChallenge();
        }}
      >
        Begin
      </button>
    </div>
  );
}

Home.propTypes = propTypes;

export default Home;
