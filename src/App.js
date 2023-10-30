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
//   const [loggedIn, setLoggedIn] = useState(false);
//   const handleLogout = () => {
    
//     setLoggedIn(false);
// };
const [loggedIn, setLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postCount, setPostCount] = useState(0);

  const handleLogin = () => {
    setLoggedIn(true);
    
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setPosts([]);
    setPostCount(0);
  };

  const handleDelete = (postId) => {
    
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
    setPostCount(updatedPosts.length);
  };

  const handleUpdate = (postId, updatedContent) => {
    
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, content: updatedContent };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="App">
      <Navbar loggedIn={loggedIn} handleLogout={handleLogout} postCount={postCount} />
    {/* <h1> insta masai application</h1> */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Signup/>} />
      <Route path="/login" element={<Login  handleLogin={handleLogin}/>} />
      <Route path="/posts" element={<Posts  loggedIn={loggedIn}
            posts={posts}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}/>} />
    </Routes>
    </div>
  );
}

export default App;
