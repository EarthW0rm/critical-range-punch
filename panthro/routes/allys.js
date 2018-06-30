'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.jsend.success({ allyName: 'Panthro', allyWeapons: ['Nunchucks', 'Shoulder Spikes']});
});

module.exports = router;
