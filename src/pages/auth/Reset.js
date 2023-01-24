import React from "react";
import styles from './auth.module.scss';
import Card from '../../components/UI/Card';
import { Link } from 'react-router-dom';
import resetImg from '../../assets/forgot.png';
const Reset = () => {
    return <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
            <img src={resetImg} alt="Reset Password" width="400" />
        </div>
        <Card>
        <div className={styles.form}>
            <h2>Reset Passwordr</h2>

                <form >
                <input
                    type="text"
                    placeholder="Email"
                    required
                />
                <button type="submit" className="--btn --btn-primary --btn-block">
                    Reset Password
                    </button>
                <div className={styles.links}>
                <p><Link to="/login">__Login__</Link></p>
                <p><Link to="/register">__Register__</Link></p>
                </div>
                </form>
            </div>
            </Card>

    </section>;
};
export default Reset;