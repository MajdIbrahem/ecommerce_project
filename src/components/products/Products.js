import React,{Fragment, useState} from "react";
import styles from "./Products.module.scss"
import {popularProducts} from './data'
import ProductItem from "./ProductItem";
const Products = () => {
    const [filterList, setFilterList] = useState(popularProducts);

    const genderHandler = (e) => {
        let gender = e.target.value
        if (gender === "Mens") {
        const man = popularProducts.filter(e => e.gender === "man")
        setFilterList(man)
        }
        if (gender === "Womens") {
        const women = popularProducts.filter(e => e.gender === "women")
        setFilterList(women)
        }
        if (gender==="all") {
            setFilterList(popularProducts)
        
        }
    }
    const catHandler = (e) => {
        let cat= e.target.value
        if (cat === "Shirts") {
        const Shirts = popularProducts.filter(e => e.cat === "shirt")
        setFilterList(Shirts)
        }
        if (cat === "pants") {
        const pants = popularProducts.filter(e => e.cat === "pants")
        setFilterList(pants)
        }
        if (cat === "Dresses") {
        const dresses = popularProducts.filter(e => e.cat === "dresses")
        setFilterList(dresses)
        }
        if (cat ==="hats" ) {
        const hats = popularProducts.filter(e => e.cat === "hats")
        setFilterList(hats)
        }
    }
    return <Fragment>
                <div className={styles.FilterContainer} >
            <div className={styles.Filter}>
                <span>Filter Products:</span>
                <select className={styles.select} name="gender" onChange={genderHandler}>
                    <option  value="all" >All</option>
                    <option  value="Mens">Mens</option>
                    <option  value="Womens">Womens</option>
                </select>
                <select className={styles.select} name="cat" onChange={catHandler}>
                    <option disabled >Categories</option>
                    <option  value="Shirts">Shirts</option>
                    <option value="pants">pants</option>
                    <option  value="Dresses">Dresses</option>
                    <option  value="hats">hats</option>
                </select>
            </div>
            
        </div>
        <div className={styles.container}>
        {filterList.map(item => (
            <ProductItem item={item} key={item.id}></ProductItem>
        ))}
    </div>
    </Fragment>
}
export default Products;