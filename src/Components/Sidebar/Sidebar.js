import './Sidebar.css';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { SidebarData } from '../Data/Data';

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="sidebar">
      {SidebarData.map((item, index) => (
        <nav className="menu" key={index}>
          <ul className="menuList">
            <li
              className={selected === index ? 'menuItems active' : 'menuItems'}
              onClick={() => setSelected(index)}
            >
              <span
                className={
                  selected === index
                    ? 'menuItems--icons active'
                    : 'menuItems--icons'
                }
              >
                <Link
                  onClick={() => setSelected(index)}
                  to={item.heading}
                  span={true}
                  smooth={true}
                >
                  <item.icon />
                </Link>
              </span>
              <span
                className={
                  selected === index
                    ? 'menuItems--headins active'
                    : 'menuItems--headins'
                }
              >
                {item.heading}
              </span>
            </li>
          </ul>
        </nav>
      ))}
    </div>
  );
};

export default Sidebar;
