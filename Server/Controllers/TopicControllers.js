import axios from 'axios';

const topicsData = () => {
  const topics = [];
  let fetched = false;
  if(!fetched){
    fetched = true;
    fetchTopicData()
    .then(response => {
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
fetchTopicData();

module.exports = {
  getAllTopics: (req, res) => {
    res.json(topicsData())
  }
}