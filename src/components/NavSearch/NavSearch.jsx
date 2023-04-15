import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import s from './styles.module.css'
import MyLogo from '/images/logo/logo.png'

const NavSearch = () => {
    return (
        <>
            <img src={MyLogo} alt={"logo"} whidth={"30"} height={"30"} className={s.logo} />
            <div className={s.search_container}>
                <input type="search" name="search" id="search" placeholder='Rechercher' className={s.search_input} />
                <FontAwesomeIcon icon={faSearch} className={s.search_icon} />
            </div>
        </>
    )
}

export default NavSearch