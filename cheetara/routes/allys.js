﻿'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.jsend.success({ allyName: 'Cheetara', allyWeapons: ['Bo Staff']});
});

module.exports = router;