'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.jsend.success({ allyName: 'Wilykat', allyWeapons: ['Lasso', 'Trick Pellets']});
});

module.exports = router;
