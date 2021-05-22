/*
 * @filename index.js
 * @author Abhishek Shahdeo
 * @usage contains routes to process request from client
 */

/*
 * @import and declare express to use router
 */
const express = require('express');
const router = express.Router();

// import our Model to process the requests
const newsModel = require('../models/news-model');

// create default route, we'll use this for default UK headlines
router.get('/', function(req, res, next) {
	// call getNews function with our query params and use the callback to send the result fetched from our model
    newsModel.getNews(req.query, (news) => {
    	// send back the result to client
        res.send(news);
    });
});

// create route to fetch all news, we'll use this to fetch data from everything API
router.get('/all-news/', function(req, res, next) {
	// call getAllNews function with our query params and use the callback to send the result fetched from our model
    newsModel.getAllNews(req.query, (news) => {
    	// send back the result to client
        res.send(news);
    });
});

// export our router to be called in app.js
module.exports = router;