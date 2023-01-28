import React,{useState,Fragment} from "react";
import { Link, useNavigate } from 'react-router-dom';
import styles from './auth.module.scss';
import Card from '../../components/UI/Card';
import RegisterImg from '../../assets/register.png'
import { toast } from 'react-toastify';

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import Loader from "../../components/UI/Loader";
const Register = () => {
    const navigate=useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const [cPassword, setCPassword] = useState("")
    const [isLoading,setIsLoading]=useState(false)
    const emailHandler=(event) => {
        setEmail(event.target.value)
    }
    const passwordHandler=(event) => {
        setPassword(event.target.value)
    }
    const cPasswordHandler=(event) => {
        setCPassword(event.target.value)
    }
    const registerUser = (event) => {
        event.preventDefault()
        if (password !== cPassword) {
            toast.error("Password is not match..")
            }
        setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        setIsLoading(false);
        toast.success("Registration sucsses")
        navigate("/login")
    })
    .catch((error) => {
        toast.error(error.message)
        setIsLoading(false);
    });
    }
    return <Fragment>
        
        {isLoading&&<Loader></Loader>}
        <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
            <img src={RegisterImg} alt="Login" width="400" />
        </div>
        <Card>
        <div className={styles.form}>
            <h2>Register</h2>

                <form onSubmit={registerUser}>
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
                <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={cPassword}
                    onChange={cPasswordHandler}
                />
                <button type="submit" className="--btn --btn-primary --btn-block">
                    Register
                </button>
                </form>
                <span className={styles.register}>
                <p>Alreday have an  account?</p>
                <Link to="/login">Login</Link>
                </span>
            </div>
            </Card>

    </section>
    </Fragment>
};
export default Register