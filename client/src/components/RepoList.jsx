
import React from 'react';

const RepoList = (props) => (
  <div>
    <h4>Top Repo's by Size </h4>
    There are {props.reposhoe.length} repos.
    <table>
    <thead>
      <tr>
        <th>Forks</th>
        <th>Repo Name</th>
        <th>Github User</th>
      </tr>
    </thead>
      <tbody>
      {props.reposhoe.map((data, index) => {
        return(
          <tr key={index}>
            <td><a href={data.user_url}>{data.forks}</a></td>
            <td><a href={data.repo_url}>{data.name}</a></td>
            <td><a href={data.repo_url}>{data.owner_login}</a></td>
          </tr>
        );
      })}
      </tbody>
    </table>
  </div>
);

export default RepoList;