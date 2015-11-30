var Twitter = require('twitter');
var http = require('http');
var port = process.env.PORT || 1337;


var client = new Twitter({
    consumer_key: 'SaQghvtQxMloQiy2y2Og1WhHz',
    consumer_secret: 'gRcx84mCrxGrZf1lQovIMUIBxnlKMWUny6RFF4sBnse7C6sB5K',
    access_token_key: '4113750323-c5gEo7FZbLyanCutSJVZGi2BBU4iuVsBGkEDpTl',
    access_token_secret: 'B0keLKWJTrmfsK11hz9lPL8n0sejAVI8m5UJCkrrGhhMt'
});

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'});

    client.get('search/tweets', {q: 'lolcat'}, function (error, tweets) {
        response.end(JSON.stringify(tweets));
    });

}).listen(port);