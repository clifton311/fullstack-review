const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fetcher', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
//mongodb event listener
db.once('open', function() {
  console.log('We are connected!');
});


let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  fullname: String,
  size: Number,
  owner_login: String,
  stargazers_count: Number,
  forks: Number
});

//new
let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  var record = new Repo ({
    id: repo.id,
    name: repo.name,
    fullname: repo.fullname,
    size: repo.size,
    owner_login: repo.owner.login,
    stargazers_count: repo.stargazers_count,
    forks: repo.forks
  });
  record.save(function(err){
    if (err) throw err;
    console.log("Record sucessfully saved");
  });
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
};

module.exports.save = save;