import React from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { addItemToCart } from '../../redux/slice/cartSlice'
import styles from './ProductItem.module.scss'
import { useDispatch } from 'react-redux';
const ProductItem = (props) => {
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addItemToCart({
            img: props.item.img,
            id: props.item.id,
            price:props.item.price
        }))
    }
    return <div className={styles.container}>
        <div className={styles.circle}></div>
        <img src={props.item.img} alt=""></img>
        <div className={styles.info}>
            <div className={styles.icon}>
                <AiOutlineShoppingCart size={20} onClick={addToCartHandler}></AiOutlineShoppingCart>
            </div>
            <div className={styles.icon}>
                <AiOutlineSearch size={20}></AiOutlineSearch>
            </div>
            
        </div>
    </div>
}
export default ProductItem;