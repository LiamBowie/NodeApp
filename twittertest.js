var Twitter = require('twitter');
var http = require('http');
var port = process.env.PORT || 1337;
var url = require('url');

var client = new Twitter({
    consumer_key: 'SaQghvtQxMloQiy2y2Og1WhHz',
    consumer_secret: 'gRcx84mCrxGrZf1lQovIMUIBxnlKMWUny6RFF4sBnse7C6sB5K',
    access_token_key: '4113750323-c5gEo7FZbLyanCutSJVZGi2BBU4iuVsBGkEDpTl',
    access_token_secret: 'B0keLKWJTrmfsK11hz9lPL8n0sejAVI8m5UJCkrrGhhMt'
});



http.createServer(function(request, response) {
    var queryData = url.parse(request.url, true).query;
    console.log(queryData);
    var search = 'lolcats';
    response.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'});

    console.log(search);
    client.get('search/tweets', {q:search}, function (error, tweets) {
        console.log(error);
        var json = [];
        for (var i = 0; i < tweets.statuses.length; i++)
        {
            json.push({name: tweets.statuses[i].user.name, text: tweets.statuses[i].text});
        }
        response.end(JSON.stringify(json));
    });

}).listen(port);