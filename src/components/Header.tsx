import React from 'react';

function Header() {
    return (
      <div className="header">
        <a className="header-item" href="/">Tom Davenport</a>
        <a className="header-item" href="/">About</a>
        <select className="header-item">
            <option value="project1">Project1</option>
        </select>
      </div>
    );
  }
  
  export default Header;