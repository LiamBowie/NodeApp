/**
 * Created by Liam on 23/11/2015.
 */

// lets require/import the mongodb native drivers.
var mongodb = require("mongodb");

// and the HTTP Server
var http = require("http");

// Setup the port
var port = process.env.PORT || 1337;

// url to our database
var url = 'mongodb://bowdog:woof123@ds054298.mongolab.com:54298/db_1206499';

// MongoClient allows us to actually talk to the database
var MongoClient = mongodb.MongoClient;

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Connecting\n');

    // Use the connect method to connect to the server
    MongoClient.connect(url, function(err, db){
        response.write('Connection Made\n');
        if(err)
        {
            response.write('Unable to connect to the mongoDB server. Error:' + err + "\n");

            // If an error occurs, close the db
            //db.close();
        }
        else
        {
            // Yay we're connected
            response.write('Connection established to' + url +"\n");

            // do some work here with the database

            // Done Close connection
            db.close();
        }
        response.end('Finished, Connection Closed');
    });
}).listen(port);


