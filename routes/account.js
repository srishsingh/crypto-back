var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(requset, response, next) {
    response.send("true");
});

module.exports = router;
