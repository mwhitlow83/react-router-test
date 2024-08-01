import React from 'react';
import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import ListExpense from './Components/ListExpense';
import NewExpense from './Components/NewExpense';



function App() {
  return (
    <div className="App">
      <h1>This is redux</h1>
      <BrowserRouter>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/new">New Expenses</Link></li>
        <li><Link to="/list">List Expenses</Link></li>
      </ul>
          <Routes>
              <Route exact path="/" Component={Home} />
              <Route path="/new" Component={NewExpense} />
              <Route path="/list" Component={ListExpense} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
