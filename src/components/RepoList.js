import React, { useState, useEffect } from "react";
import { getRepos } from "../services/api";
import Repo from "./Repo";

const RepoList = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedRepos = await getRepos();
      setRepos(fetchedRepos);
    }

    fetchData();
  }, []);

  return (
    <div>
      <div>RepoList</div>
      {repos.map((repo, index) => {
        return <Repo name={repo.name} full_name={repo.full_name} description={repo.description} key={index} />;
      })}
    </div>
  );
};

export default RepoList;
