import React, { useState, useEffect } from "react";
import { getRepos } from "../services/api";
import Repo from "./Repo";
import "./repo.css";

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const fetchedRepos = await getRepos();
        console.log(`fetchedRepos = ${JSON.stringify(fetchedRepos)}, type of fetchedRepos = ${fetchedRepos instanceof Error}`);
        setRepos(fetchedRepos);
      } catch(err) {
       console.log(`err = ${JSON.stringify(err)}`);
      
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="repos-container">
      <div className="header">Repositories</div>
      {isLoading && <div>Loading data...</div>}
      {!isLoading && Array.isArray(repos) && (
        <div className="repos">
          {repos.map((repo, index) => (
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
