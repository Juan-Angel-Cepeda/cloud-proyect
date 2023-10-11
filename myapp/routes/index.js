var express = require('express');
var router = express.Router();
const controller = require('../controllers/tasks');

/* GET home page. */
router.get('/',controller.list);

module.exports = router;