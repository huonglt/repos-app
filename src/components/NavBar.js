import React, {useState} from 'react';

const NavBar = () => {
  const [activeItem, setActiveItem] = useState('repos');

  const classNameRepos = `${activeItem === 'repos' && 'navbar-active-item'} navbar-item`;
  const classNameSettings = `${activeItem === 'settings' && 'navbar-active-item'} navbar-item`;

  return (
    <div className="navbar-container">
      <div className={classNameRepos}>Repositories</div>
      <div className={classNameSettings}>Settings</div>
    </div>
  ) ;
};

export default NavBar;