import React, { useState } from "react";
import NavBar from "./NavBar";
import RepoList from "./RepoList";
import Settings from "./Settings";

const Main = () => {
  const [activeNavBarItem, setActiveNavBarItem] = useState("repos");

  const selectNavBarItem = (item) => {
    setActiveNavBarItem(item);
  };

  return (
    <div>
      <NavBar activeItem={activeNavBarItem} selectItem={selectNavBarItem} />
      {activeNavBarItem === "repos" && <RepoList />}
      {activeNavBarItem === "settings" && <Settings />}
    </div>
  );
};

export default Main;
