import { NavLink } from 'react-router-dom'
import s from './index.styles.css'

import React from 'react'

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/emplois">emplois</NavLink>
                </li>
                <li>
                    <NavLink to="/messagerie">messagerie</NavLink>
                </li>
                <li>
                    <NavLink to="/reseau">réseau</NavLink>
                </li>
                <li>
                    <NavLink to="/notifications">notifications</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation