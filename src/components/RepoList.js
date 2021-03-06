import React, {useEffect} from "react";
import { getRepos } from "../apis/api";
import Repo from "./Repo";
import "./components.css";
import { useApi } from "../hooks/useApi";
import Loader from "./Loader";
import Retry from "./Retry";

/**
 * UI component for Repositories page
 */
const RepoList = () => {
  const {isLoading, isError, data, loadData} = useApi(getRepos);
  
  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div className="repos-container">
      <div className="header">Repositories</div>
      {isLoading && <Loader/>}
      {isError && <Retry retry={loadData}/> }
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
