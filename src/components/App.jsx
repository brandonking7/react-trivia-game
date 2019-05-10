import React, { Component } from 'react';
import HomeContainer from '../containers/HomeContainer';
import QuizContainer from '../containers/QuizContainer';
import ResultsContainer from '../containers/ResultsContainer';

// Home base - contains core navigation logic
class App extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.firstPage = this.firstPage.bind(this);

    this.state = {
      page: 1
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  firstPage() {
    this.setState({ page: 1 });
  }

  render() {
    const { page } = this.state;
    return (
      <div className="c-trivia__container">
        {page === 1 && <HomeContainer startChallenge={this.nextPage} />}
        {page === 2 && <QuizContainer toResults={this.nextPage} />}
        {page === 3 && <ResultsContainer playAgain={this.firstPage} />}
      </div>
    );
  }
}

export default App;
