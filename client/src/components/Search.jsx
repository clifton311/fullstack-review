import React from 'react';
import _ from 'lodash';

class Search extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      term: ''
    };

    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);

  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    console.log('searched executed');
    this.props.onSearch(this.state.term);
    
  }
  render() {

   
    return (<div>
      <h4>Find More Repos!
      Enter a github username: <input value={this.state.term} onChange={this.onChange}/>
      <button onClick={this.search}> Find Repos </button>
      </h4>
    </div>)
  }
}

export default Search;

// import React from 'react';

// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       //term is the GIthub username
//       term: ''
//     }

//     this.onChange = this.onChange.bind(this);
//     this.search = this.search.bind(this);

//   }

//   onChange (e) {
//     this.setState({
//       term: e.target.value
//     });
//   }

 
//   render() {
    
//     return (<div>
//       <h4>Add more repos!</h4>
//       Enter a github username: <input value={this.state.term} onChange={this.onChange}/>       
//       <button onClick={this.search}> Add Repos </button>
//     </div>) 
//   }
// }

// export default Search;