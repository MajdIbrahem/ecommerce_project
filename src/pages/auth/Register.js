import React from "react";
import { Link } from 'react-router-dom';
import styles from './auth.module.scss';
import Card from '../../components/UI/Card';
import RegisterImg from '../../assets/register.png'
const Register = () => {
    return <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
            <img src={RegisterImg} alt="Login" width="400" />
        </div>
        <Card>
        <div className={styles.form}>
            <h2>Register</h2>

                <form >
                <input
                    type="text"
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    required
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

    </section>;;
};
export default Register