'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.jsend.success({ allyName: 'Jaga', allyWeapons: ['Sword of Omens', 'Regular Sword']});
});

module.exports = router;
