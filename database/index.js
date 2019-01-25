const mongoose = require('mongoose'); //mongoose is a module for mongodb, it allows us to talk to Mondb
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true});

// mongoose.Promise = global.Promise;
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log ('connected');
// });

let repoSchema = new mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  fullname: String,
  size: Number,
  owner_login: String,
  stargazers_count: Number,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  
 
  repos.forEach(repo => {
    console.log("made it to the repo for each");
    var record = new Repo({
      id: repo.id,
      name: repo.name,
      fullname: repo.fullname,
      size: repo.size,
      owner_login: repo.owner.login,
      stargazers_count: repo.stargazers_count,
      forks: repo.forks
    });
    
    // record.save()
    // .then(console.log('saved'));
    Repo.findOneAndUpdate({id: repo.id}, record, {upsert: true} ,function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("added");
      }
    });
  
  });
};


let getTop = (cb) => {
  Repo.find({}).sort({forks: -1}).limit(25).exec(cb);
};

module.exports.save = save;
module.exports.getTop = getTop;



