'use strict';
var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET users listing. */
router.get('/', function (req, res) {
    res.jsend.success({ allyName: 'Lion-O', allyWeapons: ['Sword of Omens', 'Claw Shield', 'Red Cloak', 'Glock G43', 'M4A1']});
});

router.get('/:allyHost', async function (req, res) {
    
    var urlAlly = `http://${req.params.allyHost}/allys`;

    try {       
        var allyResponse = await axios.get(urlAlly);
        res.jsend.success({allyResponse: allyResponse.data});

    } catch(err) {
        res.jsend.error({
            code: 123,
            message: `No access to ally: ${urlAlly} for you!`,
            data: err.message
        });
    }
});


module.exports = router;
