import React, { useState } from "react";
import styles from './Cart.module.scss'
import { useSelector,useDispatch } from 'react-redux';
import CartItem from "./CartItem";
import {useNavigate } from 'react-router-dom';
import Loader from "../../components/UI/Loader";
import { toast } from 'react-toastify';
import {resetCart } from '../../redux/slice/cartSlice'
const Cart = () => {
    const quantity = useSelector(state => state.cart.totalQuantity);
    const items = useSelector(state => state.cart.items);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const navigate = useNavigate();
    const dispatch=useDispatch()
    const [isLoading,setIsLoading]=useState(false)
    const continueHandler=() => {
        navigate("/")
    }
    const checkoutHandler=async(event) => {
        event.preventDefault()
        setIsLoading(true);
        await fetch('https://eshop-919c9-default-rtdb.firebaseio.com/.json', {
        method: 'POST',
        body: JSON.stringify({
        items: items,
    
        }),
        }
        ).catch((error) => {
        toast.error(error.message)
        setIsLoading(false);
        });
    setIsLoading(false);
        toast.success("Checkouting Sucssesfuly")
        navigate("/")
        dispatch(resetCart())
    }
    return <div>
        {isLoading&&<Loader></Loader>}
        <div className={styles.Wrapper}>
            <h1>YOUR BAG</h1>
            <h1>{quantity}</h1>
            <div className={styles.Top}>
                <button className="--btn --btn-primary" onClick={continueHandler}>Continue Shopping</button>
            </div>
            <div className={styles.Buttom}>
                <div className={styles.Info}>
                    {items.map((item) => (
                        <CartItem key={item.id} item={{price:item.price ,img:item.img,id:item.id ,totalPrice:item.totalPrice,quantity:item.quantity}}></CartItem>
                    ))}
                </div>
                <div className={styles.Summary}>
                    <h1>ORDER SUMMARY </h1>
                    <div className={styles.SummaryItem}>
                        <span className={styles.SummaryItemText}>Amount</span>
                        <span className={styles.SummaryItemPrice}>{quantity}</span>
                    </div>
                    <div className={styles.SummaryItem} type="total">
                        <span className={styles.SummaryItemText}>Total Price</span>
                        <span className={styles.SummaryItemPrice}>{totalPrice}$</span>
                    </div>
                    <button className="--btn --btn-primary" onClick={checkoutHandler}>CheckOut Now </button>
                </div>
            </div>
    </div>
</div>
}
export default Cart