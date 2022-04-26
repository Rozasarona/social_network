import s from './Navbar.module.css';
import { NavLink, Link } from 'react-router-dom';

//const activeLink = ({isActive}) => isActive ? s.active : s.item;

const Navbar = () => {
     

    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/profile" className={s.active}>Profile</NavLink>
            </div>
            <div>
                <a href="/dialogs" className={s.item}>Messages</a>
            </div>
            <div>
                <Link to="/news" className={s.item}>News</Link>
            </div>
            <div>
                <Link to="/music" className={s.item}>Music</Link>
            </div>
            <div>
                <Link to="/settings" className={s.item}>Settings</Link>
            </div>
        </nav> 
    );
}

export default Navbar;