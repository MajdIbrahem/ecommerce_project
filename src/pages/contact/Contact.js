import React,{useState,Fragment} from "react";
import {  useNavigate } from 'react-router-dom';
import styles from './Contact.module.scss'
import Card from '../../components/UI/Card';
import Contact from '../../assets//contact.jpg'
import { toast } from 'react-toastify';


import Loader from "../../components/UI/Loader";
const Register = () => {
    const navigate=useNavigate()
    const[email,setEmail]=useState("")
    const[message,setMessage]=useState("")

    const [isLoading,setIsLoading]=useState(false)
    const emailHandler=(event) => {
        setEmail(event.target.value)
    }
    const messageHandler=(event) => {
        setMessage(event.target.value)
    }
const registerUser =async(event) => {
    event.preventDefault()
        setIsLoading(true);
        await fetch('https://eshop-919c9-default-rtdb.firebaseio.com/.json', {
        method: 'POST',
        body: JSON.stringify({
        email: email,
        message: message,
        }),
        }
        ).catch((error) => {
        toast.error(error.message)
        setIsLoading(false);
        });
    setIsLoading(false);
        toast.success("Thank You")
        navigate("/login")
    }
    return <Fragment>
        
        {isLoading&&<Loader></Loader>}
        <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
            <img src={Contact} alt="Login" width="400" />
        </div>
        <Card>
        <div className={styles.form}>
            <h2>Contact</h2>

                <form onSubmit={registerUser}>
                <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={emailHandler}
                />
                <input
                    type="text"
                    placeholder="Your Message"
                    required
                    value={message}
                    onChange={messageHandler}
                    
                />
                <button type="submit" className="--btn --btn-primary --btn-block">
                    Send
                </button>
                </form>
            </div>
            </Card>
            
    </section>
    </Fragment>
};
export default Register