import React,{useState,Fragment} from "react";
import styles from './auth.module.scss';
import Card from '../../components/UI/Card';
import { Link } from 'react-router-dom';
import resetImg from '../../assets/forgot.png';
import { toast } from "react-toastify";
import { auth } from "../../firebase/config";
import { sendPasswordResetEmail } from "firebase/auth"
import Loader from "../../components/UI/Loader";
const Reset = () => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const emailHandler=(event) => {
        setEmail(event.target.value)
    }
    const resetPassword = (event) => {
        event.preventDefault()
        setIsLoading(true)
                sendPasswordResetEmail(auth, email)
        .then(() => {
            setIsLoading(false);
            toast.success("Check your email for a reset link");
        })
        .catch((error) => {
            setIsLoading(false);
            toast.error(error.message);
        });
    }
    return<Fragment>
        {isLoading&&<Loader></Loader>}
        <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
            <img src={resetImg} alt="Reset Password" width="400" />
        </div>
        <Card>
        <div className={styles.form}>
            <h2>Reset Password</h2>

                <form onSubmit={resetPassword}>
                <input
                    type="text"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={emailHandler}
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
    </Fragment>
};
export default Reset;