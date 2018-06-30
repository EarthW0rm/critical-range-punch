'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.jsend.success({ allyName: 'Wilykit', allyWeapons: ['Lasso', 'Trick Pellets']});
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
            data: err
        });
    }
});

module.exports = router;
