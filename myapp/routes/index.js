var express = require('express');
var router = express.Router();
const controller = require('../controllers/tasks');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welome to do tasks' });
});
router.get('/',controller.list);

module.exports = router;