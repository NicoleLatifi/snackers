import React from 'react';
import './Header.css';
import calendarIcon from "../../Helpers/icons/calendar.png"
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1 className="snackers">snackers</h1>
      <NavLink to="/recurring-snacks"><img src={calendarIcon} className="calendar-icon" alt="Calendar icon, click to see recurring snacks."/></NavLink>
    </div>
  )
}

export default Header;