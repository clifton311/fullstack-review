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
    this.repoList = this.repoList.bind(this);
  }

  componentDidMount() {
    this.repoList();
  }

  search(term) {
    $.post('/repos', { username: term }, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`${term} was searched`);
        console.log(res);
      }
    });
  }

  repoList() {
    //call get request
    $.ajax({
      url: '/repos',
      method: 'GET',
      success:  function(data)  {
        console.log('Got data', data);
        this.setState({
          repos: data
        });
      }.bind(this) //The callback is made in a different context. You need to bind to this in order to have access inside the callback:
    });
  }


  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList reposhoe={this.state.repos}/>
      <Search onSearch={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));