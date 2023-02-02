import React from "react";
import styles from './Prouduct.module.scss'
const Product = () => {
    return <div className={styles.container}>
        <div className={styles.Wrapper}>
            <div className={styles.ImgContainer}>
                <img src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" alt='img'></img>
            </div>
            <div className={styles.InfoContainer}>
                <h1>Product</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
                    condimentum ac, volutpat ornare.</p>
                <span>price : 20$</span>
            </div>
            
            <div className={styles.AddContainer}>
                <button>Add to Cart</button>
            </div>
            
        </div>
    </div>
};
export default Product;