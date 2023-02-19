import React, { useState,useEffect } from "react";
import styles from './Prouduct.module.scss'
import { useParams } from 'react-router-dom'
import {popularProducts} from '../../components/products/data'
import Loader from "../../components/UI/Loader";
import { useDispatch ,useSelector} from 'react-redux';
import { addItemToCart } from '../../redux/slice/cartSlice'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Product = () => {
    const params = useParams() 
    const [specificItem,setSpecificItem] = useState(null)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const isLoggIn=useSelector(state=>state.auth.isLoggedIn )
    useEffect(() => {
        const temp = popularProducts.find(e => e.id.toString() === params.productId)
        setSpecificItem(temp)
    }, [setSpecificItem,params.productId])
    
    const addToCarthandler = () => {
        if (isLoggIn) {
            dispatch(addItemToCart({
            img:specificItem.img,
            id: specificItem.id,
            price:specificItem.price
        }))
        toast.success("Adding To Cart sucssesfully")
        } else {
            toast.error("you must login")
            navigate("/login")
    }
        }
        
    return <div className={styles.container}>
        {specificItem ?( <div className={styles.Wrapper}>
            <div className={styles.ImgContainer}>
                <img src={specificItem.img} alt={specificItem.cat}></img>
            </div>
            <div className={styles.InfoContainer}>
                <h1>Product {specificItem.id}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
                    condimentum ac, volutpat ornare.</p>
                <span> {specificItem.price}$</span>
                <div className={styles.AddContainer}>
                <button onClick={addToCarthandler}>Add to Cart</button>
            </div>
            </div>
            
            
            
        </div>) : <Loader/>}
    </div>
};
export default Product;