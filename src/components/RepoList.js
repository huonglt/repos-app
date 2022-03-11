import React from "react";
import { getRepos } from "../services/api";
import Repo from "./Repo";
import "./components.css";
import { useApi } from "../hooks/useApi";
import Loader from "./Loader";
import ErrorAndRetry from "./ErrorAndRetry";

/**
 * UI component for Repositories page
 */
const RepoList = () => {
  const [isLoading, isError, data, retry] = useApi(getRepos);
  
  return (
    <div className="repos-container">
      <div className="header">Repositories</div>
      {isLoading && <Loader/>}
      {isError && <ErrorAndRetry retry={retry}/> }
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
