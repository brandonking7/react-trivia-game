import Immutable from 'immutable';
import actionTypes from '../constants/actionTypes';

const INITIAL_STATE = Immutable.fromJS({
  isActive: false,
  questions: {},
  currentQuestion: null
});

function triviaReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case actionTypes.GET_QUESTIONS_START:
    return state.withMutations(map => {
      map.set('isActive', true);
    });
  case actionTypes.GET_QUESTIONS_SUCCESS:
    return state.withMutations(map => {
      map.set('isActive', false);
      map.set('questions', action.payload.triviaQuestions);
    });
  case actionTypes.GET_QUESTIONS_FAILURE:
    return state.withMutations(map => {
      map.set('isActive', false);
    });
  case actionTypes.SET_CURRENT_QUESTION:
    return state.withMutations(map => {
      map.set('currentQuestion', action.payload.index);
    });
    //* *** Set users answer in questions with currentQuestion index from state
  case actionTypes.SET_USER_ANSWER:
    return state.withMutations(map => {
      map.setIn(
          ['questions', state.get('currentQuestion'), 'user_answer'],
          action.payload.answer
        );
    });

  default:
    return state;
  }
}

export default triviaReducer;
