'use strict';
var express = require('express');
var router = express.Router();
var heroConfig = require('../hero-config');
/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: `${heroConfig.hero.name} Container` });
});

module.exports = router;
