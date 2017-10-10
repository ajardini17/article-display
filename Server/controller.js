const axios = require('axios');
const { allArticlesURL, allTopicsURL, selectedArticleURL } = require('./API.js');

module.exports = {
  fetchArticles: (req, res) => {
   return axios.get(allArticlesURL) 
      .then(response => response.data.data)
      .then(data => res.send(data))
      .catch(e => e)
  },
  fetchSelectedArticle: (id) => {
    return axios.get(selectedArticleURL(id))
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
  fetchTopics: (req, res) => {
    return axios.get(allTopicsURL)
      .then(response => response.data.data)
      .then(data => res.send(data))
      .catch(e => e)
  }

}