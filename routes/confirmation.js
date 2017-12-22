var express = require('express');
var router = express.Router();
var pg = require('pg');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '名前を入力して下さい' });
});

router.post('/', function(req, res, next) {
	var str = req.body['name'];

	
	//ID作成
	var dateTime = new Date(); 
	var year = dateTime.getFullYear();
	var month = dateTime.getMonth()+1;
	var week = dateTime.getDay();
	var day = dateTime.getDate();
	var hour = dateTime.getHours();
	var minute = dateTime.getMinutes();
	var second = dateTime.getSeconds();
	var plusId = Math.floor( Math.random() * 100001 ) ;
	
	if(!str) str = '無名' + plusId;
	
	var eId = '' + year + month + week + day + hour + minute + second + plusId;

	var con = "postgres://senwwisssjmlzc:b6f717a34e47e6ef8a991d06b24a8216715b58c8062e69aae42379f9ed46a2a4@ec2-54-83-60-13.compute-1.amazonaws.com:5432/d5o1cuf0p3fa7v";
	pg.connect(con, function(err, client) {
        var qstr = "insert into Salesforce.herokuTest1__c (demoname__c, Ex_Id__c) values($1, $2);";
        var query = client.query(qstr,[str, eId]);
        query.on('end', function(row,err) {
            res.render('confirmation', 
        	{
            	name: str,
        	});
        });
        query.on('error', function(error) {
            console.log("ERROR!");
            response.render('index', {
                title: "ERROR",
                data: null,
                message: "ERROR is occured!"
            });
        });
    });
    
    
});

module.exports = router;
