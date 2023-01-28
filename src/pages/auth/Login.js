import React,{useState,Fragment} from "react";
import {Link,useNavigate}from 'react-router-dom'
import loginImg from '../../assets/login.png';
import styles from './auth.module.scss'
import { FaGoogle } from 'react-icons/fa';
import Card from '../../components/UI/Card'
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import Loader from "../../components/UI/Loader";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate=useNavigate()
    const emailHandler=(event) => {
        setEmail(event.target.value)
    }
    const passwordHandler=(event) => {
        setPassword(event.target.value)
    }
    const loginUser = (event) => {
        event.preventDefault()
        setIsLoading(true)
            signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Login sucsses ......")
        setIsLoading(false);
        navigate("/")
        console.log(user)
    })
    .catch((error) => {
        toast.error(error.message)
        setIsLoading(false);
    });
    }
    const provider = new GoogleAuthProvider();
    const SignWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        toast.success("Login sucsses ......");
        navigate("/");
    }).catch((error) => {
        toast.error(error.message)
    });
    }
    return <Fragment>
        
        {isLoading&&<Loader></Loader>}
        <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
            <img src={loginImg} alt="Login" width="400" />
        </div>
        <Card>
        <div className={styles.form}>
            <h2>Login</h2>

                <form onSubmit={loginUser}>
                <input
                    type="text"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={emailHandler}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={passwordHandler}
                />
                <button type="submit" className="--btn --btn-primary --btn-block">
                    Login
                </button>
                <div className={styles.links}>
                    <Link to="/reset">Reset Password</Link>
                </div>
                <p>-- or --</p>
                </form>
                <button
                className="--btn --btn-danger --btn-block"
                onClick={SignWithGoogle}
                >
                <FaGoogle color="#fff" /> Login With Google
                </button>
                <span className={styles.register}>
                <p>Don't have an account?</p>
                <Link to="/register">Register</Link>
                </span>
            </div>
            </Card>

    </section>;
    </Fragment>
};
export default Login;