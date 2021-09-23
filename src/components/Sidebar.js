import React, { useState } from 'react';
import * as Icons from '@material-ui/icons';
import { sidebarData } from './sidebarData';
import { Link, Redirect } from 'react-router-dom';

import '../assets/styles/Sidebar.css';
import profilepic from '../assets/images/profile.png';
import logo from '../assets/images/logo.png';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);

  const logout = () => {
    localStorage.removeItem('admin');
    window.location = '/';
  };

  return (
    <>
      <div className="sidebar">
        <Link to="#" className="menu-bars">
          <Icons.Menu onClick={toggleSidebar} />
        </Link>
        <iframe
          title="Datum i vrijeme"
          src="https://free.timeanddate.com/clock/i7wvbhef/n4461/tlhr30/fn17/fs30/tt0/tw0/tm1/ts1"
          frameborder="0"
          width="312"
          height="39"
        ></iframe>
        <img src={profilepic} alt=""></img>
      </div>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={toggleSidebar}>
          <li className="navbar-toggle">
            <img src={logo} height="100" alt=""></img>
            <Link to="#" className="menu-bars-close">
              <Icons.Close />
            </Link>
          </li>
          {sidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          <li className="nav-text">
            <Link>
              <Icons.ExitToApp />
              <span onClick={logout}>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
