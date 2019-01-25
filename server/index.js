const express = require('express');
let app = express();
let gitHub = require('../helpers/github.js');
let db = require('../database/index.js');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/../client/dist'));

///////////////////////////////////////////////////////////

app.post('/repos', function (req, res) {

  let username = req.body.username;

  console.log('username----------->', username);

  gitHub.getReposByUsername(username, (err, res, body) => {
    var json = JSON.parse(body);
    if (err) {
      console.log("got an error in getRepos function:");
    } else {
      console.log("response-------->>>", json);
      db.save(json);
    }
  });
  res.end();
});  

app.get('/repos', function (req, res) {

  db.getTop(function(err, docs){
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
    }
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


