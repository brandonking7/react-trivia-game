import axios from 'axios';

function getQuestions() {
  return axios
    .get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
    .then(response => {
      return response.data.results;
    })
    .catch(error => {
      throw error;
    });
}

export default { getQuestions };
