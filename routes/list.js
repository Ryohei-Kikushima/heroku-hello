var express = require('express');
var router = express.Router();
var pg = require('pg');
 
/* GET home page. */
router.get('/', function(request, response, next) {
    var con = "postgres://senwwisssjmlzc:b6f717a34e47e6ef8a991d06b24a8216715b58c8062e69aae42379f9ed46a2a4@ec2-54-83-60-13.compute-1.amazonaws.com:5432/d5o1cuf0p3fa7v"; //★
    pg.connect(con, function(err, client) {
        var query = client.query('SELECT DemoName__c, Ex_Id__c FROM Salesforce.herokuTest1__c;');
        var rows = [];
        query.on('row', function(row) {
            rows.push(row);
        });
        query.on('end', function(row,err) {
            response.render('list', { 
                title: '訪問者一覧',
                data:rows
            });
        });
        query.on('error', function(error) {
            console.log("ERROR!!" + error);
            response.render('list', {
                title: 'エラー',
                data: null,
                message: "エラー is occured!"
            });
        });
    });
});
 
module.exports = router;