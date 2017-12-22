var express = require('express');
var router = express.Router();
var pg = require('pg');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '名前を入力して下さい' });
});

router.post('/', function(req, res, next) {
	var str = req.body['name'];
	var eId = req.body['eId'];
	
	res.render('update',{
					title: '編集画面',
            		name: str,
            		eId: eId
            	});
   
    
});

module.exports = router;
