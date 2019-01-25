
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
            <td>{data.forks}</td>
            <td>{data.name}</td>
            <td>{data.owner_login}</td>
          </tr>
        );
      })}
      </tbody>

    </table>

  </div>
);

export default RepoList;