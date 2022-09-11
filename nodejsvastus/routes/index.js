var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
app.get('/getRequest/:name', function(req,res){
  res.send('Hello, ' + ' ' + req.params.name)
  });

module.exports = router;
