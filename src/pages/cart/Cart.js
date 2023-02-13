import React from "react";
import { MdAddCircleOutline,MdOutlineRemoveCircleOutline } from "react-icons/md"
import Card from "../../components/UI/Card";
import styles from './Cart.module.scss'
const Cart = () => {
    return <div>
        <div className={styles.Wrapper}>
            <h1>YOUR BAG</h1>
            <div className={styles.Top}>
                <button className="--btn --btn-primary">Continue Shopping</button>
            </div>
            <div className={styles.Buttom}>
                <div className={styles.Info}>
                    <div className={styles.Product}>
                        <div className={styles.ProductDetail}>
                            <img src="https://www.pngall.com/wp-content/uploads/6/Sweater-PNG-Image-File.png" alt="product detail"></img>
                            <div className={styles.Detail}>
                                <span className={styles.ProductName}><b>Product:</b> JESSIE THUNDER SHOES</span>
                                <span className={styles.ProductId}> <b>ID:</b> 93813718293</span>
                            </div>
                            <div className={styles.PriceDetail}>
                                <div className={styles.ProductAmountContainer}>
                                    <MdAddCircleOutline size={20}></MdAddCircleOutline>
                                    <div className={styles.ProductAmount}>2</div>
                                    <MdOutlineRemoveCircleOutline size={20}></MdOutlineRemoveCircleOutline>
                                </div>
                                <div className={styles.ProductPrice}> Price : 30$</div>
                                </div>
                            </div>
                    </div>
                    <Card>
                        <div className={styles.Product}>
                        <div className={styles.ProductDetail}>
                            <img src="https://www.pngall.com/wp-content/uploads/6/Sweater-PNG-Image-File.png" alt="product detail"></img>
                            <div className={styles.Detail}>
                                <span className={styles.ProductName}><b>Product:</b> JESSIE THUNDER SHOES</span>
                                <span className={styles.ProductId}> <b>ID:</b> 93813718293</span>
                            </div>
                            <div className={styles.PriceDetail}>
                                <div className={styles.ProductAmountContainer}>
                                    <MdAddCircleOutline size={20}></MdAddCircleOutline>
                                    <div className={styles.ProductAmount}>2</div>
                                    <MdOutlineRemoveCircleOutline size={20}></MdOutlineRemoveCircleOutline>
                                </div>
                                <div className={styles.ProductPrice}>Price : 30$</div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className={styles.Summary}>
                    <h1>ORDER SUMMARY </h1>
                    <div className={styles.SummaryItem}>
                        <span className={styles.SummaryItemText}>Subtotal</span>
                        <span className={styles.SummaryItemPrice}>$80</span>
                    </div>
                    <div className={styles.SummaryItem}>
                        <span className={styles.SummaryItemText}>Estimated Shipping</span>
                        <span className={styles.SummaryItemPrice}>$ 5.90</span>
                    </div>
                    <div className={styles.SummaryItem} type="total">
                        <span className={styles.SummaryItemText}>Total</span>
                        <span className={styles.SummaryItemPrice}>$ 85.90</span>
                    </div>
                    <button className="--btn --btn-primary">CheckOut Now </button>
                </div>
            </div>
    </div>
</div>
}
export default Cart