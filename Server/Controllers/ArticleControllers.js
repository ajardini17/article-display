import axios from 'axios';

const frontPageArticles = {};

// const fetchFrontPageArticles = () => {
//   axios.get('***REMOVED***articles.json')
//   .then(response => {
//     frontPageArticles = Object.assign(frontPageArticles, response.data);
//   })
// }

module.exports = {
  getAllArticles: (req, res) => {
     res.json(frontPageArticles);
  },
  getSpecificArticle: (req, res) => {

  }
}