import {useState,useEffect} from "react";
import styles from './Header.module.scss';
import { Link,NavLink,useNavigate } from 'react-router-dom';
import { FaShoppingCart ,FaTimes, FaUserCircle} from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from 'react-toastify';
const logo = (
    <div className={styles.logo}>
        <Link to='/'>
            <h2>e<span>Shop</span>.</h2>
        </Link>
    </div>
);
const cart = (<span className={styles.cart}>
    <Link to='/cart'>
        Cart
        <FaShoppingCart size={20}></FaShoppingCart>
        <p>0</p>
    </Link>
    
</span>);
const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");
const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [displayName, setdisplayName] = useState("");
    const navigate = useNavigate()
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
        
                const uid = user.uid;
                setdisplayName(user.displayName)
            } else {
                setdisplayName("");
            }
});
    },[])
    const toggle = () => {
        setShowMenu(!showMenu)
    }
    const hideMenu = () => {
        setShowMenu(false)
    }
    const LogoutUser = () => {
        signOut(auth).then(() => {
            toast.success("Logout sucsses ......")
            navigate("/")
        }).catch((error) => {
        toast.error(error.message)
        });
    }
    return (
        <header>
            <div className={styles.header}>
                {logo}
                <nav
                className={
                showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
                }
            >
                <div
                className={
                    showMenu
                    ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`
                    : `${styles["nav-wrapper"]}`
                }
                onClick={hideMenu}
                ></div>
                    <ul onClick={hideMenu}>
                        <li className={styles["logo-mobile"]}>
                            {logo}
                            <FaTimes size={22} color="#fff" onClick={hideMenu} />
                        </li>
                        <li><NavLink to='/'className={activeLink}>Home</NavLink></li>
                        <li><NavLink to='/contact'className={activeLink}>Contact Us</NavLink></li>
                    </ul>
                    <div className={styles["header-right"]} onClick={hideMenu}>
                        <span className={styles.links}>
                            <NavLink to='/login' className={activeLink}>Login</NavLink>
                            <a href="#home" style={{ color: "#ff7722" }}><FaUserCircle size={16} /> Hi, {displayName}</a>
                            <NavLink to='/register'className={activeLink}>Register</NavLink>
                            <NavLink to='/orederHistory'className={activeLink}>My Orders</NavLink>
                            <NavLink to='/'onClick={LogoutUser}>Logout</NavLink>
                        </span>
                        {cart}
                    </div>
                </nav>
                <div className={styles["menu-icon"]}>
                    {cart}
                    <HiOutlineMenuAlt3 size={28} onClick={toggle}></HiOutlineMenuAlt3>
                </div>
            </div>
        </header>
    )
};
export default Header