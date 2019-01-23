const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const helpers = require('../helpers/github');
const database = require('../database/index')


//serves up static files, looks in dist folder, looking for an index file and serves it first
app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/repos', function (request, response) {
    console.log("request body----->>>>",request.body.key);
  helpers.getReposByUsername(request.body.key, function(err){
    if (err) {
      console.log("we got an error with the getReposByUserName", err);
    } else {
      database.save();
    }
  });

  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
 
});

app.get('/repos', function (req, res) {
  
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

