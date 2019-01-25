const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
    let options = {
      url:`https://api.github.com/users/${username}/repos`,
      headers: {
        'User-Agent': 'request',
        'Authorization': `token ${config.TOKEN}`,
        
      }
    };
   
    request(options,callback);
    //   var json = JSON.parse(res.body);
    //   if (err) {
    //     //callback(err, null);
    //     console.log(err);
    //   } else {
    //     console.log('SUCCESS YOU GOT REPOS', json);
    //     callback(null, json);
    //   }
    // });

};

module.exports.getReposByUsername = getReposByUsername;