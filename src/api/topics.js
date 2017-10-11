import axios from 'axios'

export default {
  getTopics (cb, params) {
    axios.get('https://cnodejs.org/api/v1/topics', {
        params: params
      })
      .then(
        response => cb(response.data.data)
      )
      .catch(function (error) {
        console.log(error);
      });
  }
}