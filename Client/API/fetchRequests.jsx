import axios from 'axios';

module.exports = {
  fetchArticles: () => {
   return axios.get('***REMOVED***articles.json') 
      .then(response => response.data.data)
      .catch(e => e)
  },
  fetchSelectedArticle: (id) => {
    return axios.get(`***REMOVED***articles/${id}.json`)
      .then(response => {
        const articleInfo = response.data.data[0];

        return articleInfo.reduce((acc, cur) => {
          acc[cur.id] = Object.assign({}, cur);
          delete acc[cur.id];
          return acc;
        }, {})
      })
      .catch(e => e)
  },
  fetchTopics: () => {
    return axios.get('***REMOVED***topics.json')
      .then(response => {
        const topics = response.data.data;

        return topics.reduce((acc, cur) => {
          acc[cur.id] = Object.assign({}, cur, {followed: true});
          delete acc[cur.id].id;
          return acc
        }, {})

      })
      .catch(e => e)
  }

}