import axios from 'axios';

const topicsData = () => {
  let topics = [];
  let fetched = false;
  if(!fetched){
    fetched = true;
    fetchTopicData()
    .then(response => {
      console.log(response.data, 'TOPICS DATA, controller')
      topics = response.data;
    })
    .catch(err => {})
  } else {
    return topics;
  }
}

/*
  Returns a Promise

*/
const fetchTopicData = () => {
  return axios.get('***REMOVED***topics.json');
}
//topicsData();

module.exports = {
  getAllTopics: (req, res) => {
    res.json(topicsData())
  }
}