import s from './styles.module.css'
import Navigation from '../Navigation/Navigation'
import React from 'react'
import NavSearch from '../NavSearch/NavSearch'

const Header = () => {
    return (
        <header className={s.container_fluid}>
            <div className={s.container}>
                <NavSearch />
                <Navigation />
            </div>
        </header>
    )
}

export default Header