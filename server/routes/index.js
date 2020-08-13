var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    const { body } = req;
    const response = { ...body, status: 200 };
    return res.send(response);
});

module.exports = router;
