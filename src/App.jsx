import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from './Admin';
import HomePage from './HomePage';
import People from './People';
import Hall from './Hall';
import Facultylogin from './Facultylogin';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import NewPassword from './NewPassword';
import CalendarApp from './calendarApp'; 
import Content from './Content';
import CalendarPage from './calendarPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/people" element={<People />} />
      <Route path="/hall" element={<Hall />} />
      <Route path="/facultylogin" element={<Facultylogin />} />
      <Route path="/newpassword/:token" element={<NewPassword />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path='/content' element={<Content/>}/>
      {/* Calendar routes inside main App */}
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/calendar/:hallId" element={<CalendarPage />} /> {/* Use CalendarPage here */}
    </Routes>
  );
}

export default App;
