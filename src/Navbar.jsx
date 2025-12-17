import { useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <button className="nav-button">Dashboard</button>
        </li>
        <li className="nav-item">
          <button className="nav-button">Widgets</button>
        </li>
        <li className="nav-item">
          <button
            className="nav-button"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            Apps
          </button>
          {isOpen && (
            <ul className="sub-menu" aria-label="Apps">
              <li><button>Calendar</button></li>
              <li><button>Chat</button></li>
              <li><button>Email</button></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};
