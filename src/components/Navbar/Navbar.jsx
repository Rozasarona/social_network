import './Navbar.css';
import { NavLink, Link } from 'react-router-dom';


//const activeLink = ({isActive}) => isActive ? s.active : s.item;

const Navbar = () => {
     

    return (
        <nav className="nav">
            <div>
                <NavLink to="/profile" сlassName={({isActive}) => isActive ? "activeLink" : "item"}>Profile</NavLink>
            </div>
            <div>
                <Link to="/dialogs" сlassName="item">Messages</Link>
            </div>
            <div>
                <Link to="/news" сlassName="item">News</Link>
            </div>
            <div>
                <Link to="/music" сlassName="item">Music</Link>
            </div>
            <div>
                <Link to="/settings" сlassName="item">Settings</Link>
            </div>
        </nav> 
    );
}

export default Navbar;