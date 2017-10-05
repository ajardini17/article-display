const router = require('express').Router();

import Article from '../Controllers/ArticleControllers.js';

import Topic from '../Controllers/TopicControllers.js';

router.get('/getAllArticles', Article.getAllArticles);
router.get('/getSpecificArticle', Article.getSpecificArticle);

router.get('/getAllTopics', Topic.getAllTopics);

module.exports = router;