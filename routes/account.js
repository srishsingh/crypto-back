var express = require('express');
var router = express.Router();

/* api for signup. */
router.post('/signup', function(request, response, next) {
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify({ action: 'signup' }));
});

/* api for signin. */
router.post('/signin', function(request, response, next) {
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify({ action: 'signin' }));
});

module.exports = router;
