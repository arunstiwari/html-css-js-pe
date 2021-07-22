import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import AuthenticationService from "./service/AuthenticationService";

const NavBar = () => {
    const [uistate, setUiState] = useState({
        showAdmin: false,
        showModerator: false,
        currentUser: undefined
    })

    useEffect(()=> {
        const user = AuthenticationService.getUser();
        console.log('user', user);
        if (user) {
            setUiState({
                currentUser: user,
                showAdmin: user.roles.includes("ROLE_ADMIN"),
                showModerator: user.roles.includes("ROLE_MODERATOR")
            })
        }
    },[])
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