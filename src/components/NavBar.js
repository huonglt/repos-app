import React from 'react';

/**
 * Component to show Navigation items: Repositories & Settings
 */
const NavBar = ({activeItem, selectItem}) => {

  const classNameRepos = `${activeItem === 'repos' ? 'navbar-active-item' : ''} navbar-item`;
  const classNameSettings = `${activeItem === 'settings' ? 'navbar-active-item' : ''} navbar-item`;

  const handleReposClick = () => selectItem('repos');
  const handleSettingsClick = () => selectItem('settings');

  return (
    <div className="navbar-container">
      <div className={classNameRepos} onClick={handleReposClick}>Repositories</div>
      <div className={classNameSettings} onClick={handleSettingsClick}>Settings</div>
    </div>
  ) ;
};

export default NavBar;