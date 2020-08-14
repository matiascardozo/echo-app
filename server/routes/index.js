var express = require('express');
var Boom = require('@hapi/boom');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    const { body } = req;
    if(!body.message){
        throw  Boom.badRequest("message is required");
    }
    const response = { ...body  };
    return res.send(response);
});

module.exports = router;
