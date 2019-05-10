import actionTypes from '../constants/actionTypes';
import triviaService from '../services/triviaService';

function getQuestionsStart() {
  return {
    type: actionTypes.GET_QUESTIONS_START
  };
}

function getQuestionsSuccess(triviaQuestions) {
  return {
    type: actionTypes.GET_QUESTIONS_SUCCESS,
    payload: { triviaQuestions }
  };
}

function getQuestionsFailure(err) {
  return {
    type: actionTypes.GET_QUESTIONS_FAILURE,
    error: true,
    payload: err
  };
}

function getQuestions() {
  return function(dispatch) {
    dispatch(getQuestionsStart());

    return triviaService
      .getQuestions()
      .then(triviaQuestions => dispatch(getQuestionsSuccess(triviaQuestions)))
      .catch(err => {
        dispatch(getQuestionsFailure(err));
        throw err;
      });
  };
}

function setCurrentQuestion(index) {
  return {
    type: actionTypes.SET_CURRENT_QUESTION,
    payload: { index }
  };
}

function setUserAnswer(answer) {
  return {
    type: actionTypes.SET_USER_ANSWER,
    payload: { answer }
  };
}

export { getQuestions, setCurrentQuestion, setUserAnswer };
