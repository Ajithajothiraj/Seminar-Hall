import React from "react";
import { Link, useParams } from "react-router-dom";
import CalendarPage from "./calendarPage";
import "./App.css";

const CalendarApp = () => {
  const { hallId } = useParams();

  return (
    <div className="app-container">
      <nav className="nav-bar">
        <Link to="/seminar-hall" className="nav-link">Seminar Hall</Link>
        <Link to="/smart-room" className="nav-link">Smart Room</Link>
        <Link to="/hall-01" className="nav-link">Hall 01</Link>
      </nav>

      <CalendarPage hallId={hallId} />
    </div>
  );
};

export default CalendarApp;
