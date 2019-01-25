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
        "Accept": "application/json"
      }
    };
   
    request(options, callback);
    
    
};

module.exports.getReposByUsername = getReposByUsername;