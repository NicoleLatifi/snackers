import React from 'react';
import './Header.css';
import calendarIcon from "../../Helpers/icons/calendar.png"
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>snackers</h1>
      <NavLink to="/recurring-snacks"><img src={calendarIcon} className="calendar-icon"/></NavLink>
    </div>
  )
}

export default Header;