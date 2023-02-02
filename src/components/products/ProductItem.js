import React from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import {GrFavorite} from "react-icons/gr"
import styles from './ProductItem.module.scss'
const ProductItem = (props) => {
    return <div className={styles.container}>
        <div className={styles.circle}></div>
        <img src={props.item.img} alt=""></img>
        <div className={styles.info}>
            <div className={styles.icon}>
                <AiOutlineShoppingCart size={20}></AiOutlineShoppingCart>
            </div>
            <div className={styles.icon}>
                <AiOutlineSearch size={20}></AiOutlineSearch>
            </div>
            <div className={styles.icon}>
                <GrFavorite size={20}></GrFavorite>
            </div>
        </div>
    </div>
}
export default ProductItem;