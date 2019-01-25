
import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Top Repo's by Size </h4>
    There are {props.repos.length} repos.
    <table>
    <thead>
      <tr>
        <th>Username</th>
        <th>Repo Name</th>
        <th>Repo Size </th>
      </tr>
    </thead>
      <tbody>
      {props.repos.map((value, index, collection) => {
        return(
          <tr key={index}>
            <td><a href={value.user_url}>{value.username}</a></td>
            <td><a href={value.repo_url}>{value.name}</a></td>
          </tr>
        );
      })}
      </tbody>
    </table>
  </div>
)

export default RepoList;