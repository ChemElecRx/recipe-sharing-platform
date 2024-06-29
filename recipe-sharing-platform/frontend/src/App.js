import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import { UserProvider } from './components/UserContext';

function App() {
  console.log('Rendering App component'); // Add console.log() here
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Recipe Sharing Platform</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/recipes">Recipes</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/add-recipe" element={<RecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
