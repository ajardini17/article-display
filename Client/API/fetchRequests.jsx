import axios from 'axios';
import { articleURL, topicsURL, selectedArticleURL } from './fetchURLs.jsx';

module.exports = {
  fetchArticles: () => {
   return axios.get('/api/allArticles') 
      .then(response => response.data)
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
  fetchTopics: () => {
    return axios.get('/api/allTopics')
      .then(response => response.data)
      .catch(e => e)
  }

}