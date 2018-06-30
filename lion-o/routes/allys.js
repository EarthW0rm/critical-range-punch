'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.jsend.success({ allyName: 'Lion-O', allyWeapons: ['Sword of Omens', 'Claw Shield', 'Red Cloak']});
});

module.exports = router;
