import React from "react";
import styles from './Order.module.css';


const Order = (props) => {
    return(
        <div className={styles.container}>
            <button className={styles.btn}>
                <a href="https://forms.gle/3B1aczqwx2XDw6mw7">ZŁÓŻ ZAMÓWIENIE</a> 
            </button>
        </div>

    );

}

export default Order;