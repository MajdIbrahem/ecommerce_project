import React from "react";
import styles from './Categories.module.scss'
import CategoryItem from "./CategoryItem";
import {categories} from './data'

const Categories = () => {
    return <div className={styles.div}>
        {categories.map(item => (
            <CategoryItem item={item} key={item.id}></CategoryItem>
        ))}
    </div>
}
export default Categories;