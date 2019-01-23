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

    //this.search = this.search.bind(this);
    
  }


  componentDidMount() {
    console.log('Component got here');
   $.ajax({
      method: "GET",
      url: '/repos',

   })
   .done(function(data){
     console.log("data",data);
      this.setState({
        repos: data
      });
   });
    
  }

  search (term) {
    console.log(`${term} was searched`);
    // var obj = {
    //   key: term
    // };
      $.ajax({
        type: 'POST',
        url: "/repos",
        contentType: "application/json",
        data: {data: JSON.stringify(term) }// has to go in as a data object that is stringified
      })
      .done(function(data){
        console.log("Data Saved");
        this.setState({
          repos: data
        });
      });


      //push the returned repos
    // TODO
  }

  // addRepos() {
  //   this.setState({
  //     repos: this.data
  //   });
  // }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));