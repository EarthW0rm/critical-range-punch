'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.jsend.success({ allyName: 'Tygra', allyWeapons: ['Bolo Whip']});
});

module.exports = router;
