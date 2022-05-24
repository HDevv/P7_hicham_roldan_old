import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/Login">
                    <li>Connexion</li>
                </NavLink>
                <NavLink to="/Signup">
                    <li>Inscription</li>
                </NavLink>
                <NavLink to="/User">
                    <li>Profil</li>
                </NavLink>

            </ul>
        </div>
    );
};


export default Navigation;