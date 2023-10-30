import React from "react";
import { Link } from 'react-router-dom';

function Navbar({ loggedIn, handleLogout }) {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                {!loggedIn && <li><Link to="/register">Signup</Link></li>}
                {!loggedIn && <li><Link to="/login">Login</Link></li>}
                {loggedIn && <li><Link to="/posts">Posts</Link></li>}
                {loggedIn && <li><button onClick={handleLogout}>Logout</button></li>}
            </ul>
        </nav>
    );
}

export default Navbar;
