import React from 'react';
import './App.css'

function Sidebar() {
  return (
    <aside>
      <h2>Sidebar</h2>
      <nav>
        <ul>
          <li><a href="./">Option 1</a></li>
          <li><a href="./">Option 2</a></li>
          <li><a href="./">Option 3</a></li>
          <li><a href="./">Option 4</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;