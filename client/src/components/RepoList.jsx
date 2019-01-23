import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List: </h4>
    There are {props.repos.length} repos.
    <p>Here are top 25:</p>
  </div>
)

export default RepoList;