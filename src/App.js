import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login';

import Posts from './components/Posts';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogout = () => {
    
    setLoggedIn(false);
};
  return (
    <div className="App">
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout}/>
    {/* <h1> insta masai application</h1> */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Signup/>} />
      <Route path="/login" element={<Login  setLoggedIn={setLoggedIn}/>} />
      <Route path="/posts" element={<Posts/>} />
    </Routes>
    </div>
  );
}

export default App;
