import React, {useState} from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    const [uistate, setUiState] = useState({
        showAdmin: false,
        showModerator: false,
        currentUser: undefined
    })
    return (
        <nav className="nav">
            <Link to="/">Home</Link>
            {uistate.showAdmin && <Link to="/admin">Admin</Link> }
            {uistate.currentUser && <Link to="/user">User</Link> }
            {uistate.showModerator && <Link to="/mod">Moderator</Link> }

            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </nav>
    )
};

export default  NavBar;