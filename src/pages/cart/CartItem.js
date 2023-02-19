import React from "react";
import styles from './Cart.module.scss'
import { MdAddCircleOutline, MdOutlineRemoveCircleOutline } from "react-icons/md"
import { useDispatch } from 'react-redux';
import { addItemToCart,removeItemFromCart } from '../../redux/slice/cartSlice'
const CartItem = (props) => {
    const dispatch=useDispatch()
    const addItemHandler = () => {
        dispatch(addItemToCart({
            img: props.item.img,
            id: props.item.id,
            price:props.item.price
        }))
    }
    const removeItemHandler = () => {
        dispatch(removeItemFromCart({
            img: props.item.img,
            id: props.item.id,
            price:props.item.price
        }))
    }
    return <li>
            <div className={styles.Product}>
                        <div className={styles.ProductDetail}>
                            <img src={props.item.img} alt="product detail"></img>
                            <div className={styles.Detail}>
                
                                <span className={styles.ProductId}> <b>ID:</b> {props.item.id}</span>
                            </div>
                            <div className={styles.PriceDetail}>
                                <div className={styles.ProductAmountContainer}>
                                    <MdAddCircleOutline onClick={addItemHandler} size={20}></MdAddCircleOutline>
                                    <div className={styles.ProductAmount}>{props.item.quantity}</div>
                                    <MdOutlineRemoveCircleOutline onClick={removeItemHandler} size={20}></MdOutlineRemoveCircleOutline>
                                </div>
                <div className={styles.ProductPrice}> Price : {props.item.price}$</div>
                                </div>
                            </div>
        </div>
    </li>
}
export default CartItem;