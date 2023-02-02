import React from "react";
import styles from './CategoryItem.module.scss';


const CategoryItem = (props) => {
    return <div className={styles.cotainer}>
        <img src={props.item.img} alt=""></img>
        <div className={styles.info}>
            <h1>{props.item.title}</h1>
            <button className="--btn --btn-primary">Shop Now</button>
        </div>
    </div>
};
export default CategoryItem;