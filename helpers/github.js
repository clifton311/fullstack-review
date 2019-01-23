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
   
    request(options, (err, res, body) => {
      if (err) {
        console.log('YOU ARE WRONG!! ' + err);
      } else {
        //console.log('SUCCESS YOU GOT REPOS', JSON.parse(body));
        callback(JSON.parse(body));
      }
    });

    
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL

}

module.exports.getReposByUsername = getReposByUsername;