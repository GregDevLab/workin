import { NavLink } from 'react-router-dom'
import s from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBriefcase, faCommentDots, faHouse, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import React from 'react'


const Navigation = () => {
    return (
        <nav className={s.container}>
            <ul className={s.nav_links}>
                <li>
                    <NavLink to="/" className={({ isActive }) => `${s.link} ${isActive && s.active}`}>
                        <FontAwesomeIcon icon={faHouse} />
                        <p>Accueil</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/emplois" className={({ isActive }) => `${s.link} ${isActive && s.active}`}>
                        <FontAwesomeIcon icon={faBriefcase} />
                        <p>Emplois</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/messagerie" className={({ isActive }) => `${s.link} ${isActive && s.active}`}>
                        <FontAwesomeIcon icon={faCommentDots} />
                        <p>Messagerie</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/reseau" className={({ isActive }) => `${s.link} ${isActive && s.active}`}>
                        <FontAwesomeIcon icon={faUserGroup} />
                        <p>Réseau</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/notifications" className={({ isActive }) => `${s.link} ${isActive && s.active}`}>
                        <FontAwesomeIcon icon={faBell} />
                        <p>Notifications</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation