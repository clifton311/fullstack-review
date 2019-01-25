import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    };
    this.search = this.search.bind(this);
    this.getRepos = this.getRepos.bind(this);
  }

  componentDidMount() {
    this.getRepos();
  }

  // search (term) {
  //   var myApp = this;
  //   $.ajax({
  //     type: 'POST',
  //     url: '/repos',
  //     data: {
  //       username:term
  //     },
  //     contentType: 'application/json',
  //     success: function (data)  {
  //       console.log(`${term} was searched`);
  //       myApp.getRepos();
  //     }
  //   });
  // }

 
  search(term) {
    $.post('/repos', { username: term }, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${term} was searched`);
        console.log(res);
      }
    })
  }

    getRepos() {
      var myApp = this;
      //call get request
      $.ajax({
        url: '/repos',
        method: 'GET',
        success:  function(data)  {
          //call get request
          console.log('Got the data from the server on ComponentDidMount:', data);
          myApp.setState({
            repos: data
          });
        }
      });
    }



  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));