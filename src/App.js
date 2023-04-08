import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Calender from './Calender';
import Meetings from './Meetings';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< Calender />}/>
        <Route exact path='/meetings' element={< Meetings />}/>
      </Routes>
    </Router>
  );
}

export default App;
