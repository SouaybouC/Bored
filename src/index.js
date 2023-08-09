import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from './Components/TopBar/TopBar';
import Favoris from './Components/favoris';
import App from './App';
import {ThemeProvider} from './Components/ThemeContext/ThemeContext';
import Liste from './Components/ToDoList/Liste';
ReactDOM.render(
  <ThemeProvider>
    <Router>
      <TopBar />
      <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/favoris" element={<Favoris />}/>
          <Route exact path="/liste" element={<Liste />} />
      </Routes>
  </Router>
</ThemeProvider>,
  document.getElementById('root')
);


