const router = require('express').Router();
const controller = require('./controller.js');

router.get('/allArticles', controller.fetchArticles);

router.get('/allTopics', controller.fetchTopics);

router.get('/selectedArticle', controller.fetchSelectedArticle)

module.exports = router;