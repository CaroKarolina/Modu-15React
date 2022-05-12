import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    
    return (
        <div className={styles.nav}>
            <div className={styles.nav_container}>
                <div className={styles.nav_row1}>
                    <span className="fa fa-tasks" />
                </div>
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</ NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</ NavLink></li>
                    <li><NavLink className={({ isActive })=> isActive ? styles.linkActive : undefined} to="/about">About</ NavLink></li>
                </ul>
            </div>
            <div className='row'></div>
        </div>
    );
};

export default NavBar;