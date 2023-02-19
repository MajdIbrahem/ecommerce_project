import React from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { addItemToCart } from '../../redux/slice/cartSlice'
import styles from './ProductItem.module.scss'
import { useDispatch,useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ProductItem = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const isLoggIn=useSelector(state=>state.auth.isLoggedIn )
    const addToCartHandler = () => {
        if (isLoggIn) {
            dispatch(addItemToCart({
            img: props.item.img,
            id: props.item.id,
            price:props.item.price
        }))
        toast.success("Adding To Cart sucssesfully")
        } else {
            toast.error("you must login")
            navigate("/login")
    }
        }
        
    const productHandler = () => {
        console.log(`nav: ${props.item.id}`)
        navigate(`/product/${props.item.id}`)
    }
    return <div className={styles.container}>
        <div className={styles.circle}></div>
        <img src={props.item.img} alt=""></img>
        <div className={styles.info}>
            <div className={styles.icon}>
                <AiOutlineShoppingCart size={20} onClick={addToCartHandler}></AiOutlineShoppingCart>
            </div>
            <div className={styles.icon}>
                <AiOutlineSearch size={20} onClick={productHandler}></AiOutlineSearch>
            </div>
            
        </div>
    </div>
}
export default ProductItem;