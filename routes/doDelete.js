var express = require('express');
var router = express.Router();
var pg = require('pg');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '–¼‘O‚ð“ü—Í‚µ‚Ä‰º‚³‚¢' });
});

router.post('/', function(req, res, next) {
	var str = req.body['name'];
	var eId = req.body['eId'];
	
    var con = "postgres://senwwisssjmlzc:b6f717a34e47e6ef8a991d06b24a8216715b58c8062e69aae42379f9ed46a2a4@ec2-54-83-60-13.compute-1.amazonaws.com:5432/d5o1cuf0p3fa7v";
	pg.connect(con, function(err, client) {
        var qstr = "DELETE FROM Salesforce.herokuTest1__c WHERE Ex_Id__c = \'" + eId + "\';";
        var query = client.query(qstr);
        query.on('end', function(row,err) {
            res.render('doDelete', 
        	{
            	name: str
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
