import React from "react";
import { getRepos } from "../services/api";
import Repo from "./Repo";
import "./components.css";
import { useApi } from "../hooks/useApi";

/**
 * UI component for Repositories page
 */
const RepoList = () => {
  const [isLoading, isError, data, retry] = useApi(getRepos);

  console.log(`isLoading = ${isLoading}, isError = ${isError}, data = ${JSON.stringify(data)}`);
  return (
    <div className="repos-container">
      <div className="header">Repositories</div>
      {isLoading && <div>Loading data...</div>}
      {isError && <div>Error while loading data <button onClick={() => retry()}>Retry</button></div> }
      {data && Array.isArray(data) && (
        <div className="repos">
          {data.map((repo, index) => (
            <Repo
              name={repo.name}
              full_name={repo.full_name}
              description={repo.description}
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RepoList;
