import React,{Fragment} from "react";
import styles from "./Products.module.scss"
import {popularProducts} from './data'
import ProductItem from "./ProductItem";
const Products = () => {
    return <Fragment>
                <div className={styles.FilterContainer}>
            <div className={styles.Filter}>
                <span>Filter Products:</span>
                <select className={styles.select}>
                    <option>Mens</option>
                    <option>Womens</option>
                </select>
                <select className={styles.select}>
                    <option disabled selected>Categories</option>
                    <option>Shirts</option>
                    <option>pants</option>
                    <option>Dresses</option>
                    <option>hats</option>
                </select>
            </div>
            <div className={styles.Filter}>
                <select className={styles.select}>
                    <option disabled selected>Price</option>
                    <option>Price (asc)</option>
                    <option>Price (desc)</option>
                </select>
            </div>
        </div>
        <div className={styles.container}>
        {popularProducts.map(item => (
            <ProductItem item={item} key={item.id}></ProductItem>
        ))}
    </div>
    </Fragment>
}
export default Products;