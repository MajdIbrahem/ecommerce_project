import {useState,useEffect} from "react";
import styles from './Header.module.scss';
import { Link,NavLink,useNavigate } from 'react-router-dom';
import { FaShoppingCart ,FaTimes, FaUserCircle} from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from 'react-toastify';
import { useDispatch,useSelector } from 'react-redux';
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../../redux/slice/authSlice';
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
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const isLoggIn=useSelector(state=>state.auth.isLoggedIn )
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log(user)
                // const uid = user.uid;
                if (user.displayName == null) {
                    const u1 = user.email.substring(0,user.email.indexOf("@"));
                    const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
                    setdisplayName(uName)
                } else {
                    setdisplayName(user.displayName)
                }
                
                dispatch(SET_ACTIVE_USER({
                    email:user.email,
                    userName:displayName,
                    userID:user.uid
                }))
            } else {
                dispatch(REMOVE_ACTIVE_USER())

            }
});
    },[dispatch,displayName])
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
            dispatch(REMOVE_ACTIVE_USER())
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
                            {!isLoggIn&&<NavLink to='/login' className={activeLink}>Login</NavLink>}
                            {isLoggIn&&<a href="#home" style={{ color: "#ff7722" }}><FaUserCircle size={16} /> Hi, {displayName}</a>}
                            {!isLoggIn&&<NavLink to='/register'className={activeLink}>Register</NavLink>}
                            {isLoggIn&&<NavLink to='/'onClick={LogoutUser}>Logout</NavLink>}
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