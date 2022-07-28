import React from "react";
import styles from './Contact.module.css';

const Contact = (props) => {

    return(
        <div id="Contact" className={styles.contactDiv}>
            <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.leftImg}></div>
            </div>
            <div className={styles.right}>
                <h2 className={styles.heading}>Odwiedź Nas</h2>
                <ul className={styles.contactList}>
                <li className={styles.contactItemAddress}>
                    Cukiernia Szamaj Tort
                    </li>
                    <li className={styles.contactItemAddress}>
                    ul. Bolesława Chrobrego 12
                    </li>
                    <li className={styles.contactItemAddress}>
                    02-479, Warszawa
                    </li>
                    <li className={styles.contactItemAddress}>
                    Sobota: 11 - 18
                    </li>
                    <li className={styles.contactItemAddress}>
                    Niedziela: 11 - 16
                    </li>
                    <li className={styles['contactItemAddress']}>
                    <h2 className={styles.heading2}>Skontaktuj Się z Nami</h2>
                    </li>
                    <li className={styles.contactItem}>
                        <i className="fas fa-envelope"></i>szamajtort@gmail.com
                    </li>
                    <li className={styles.contactItem}>
                        <i className="fas fa-phone"></i>660 387 232
                    </li>
                    <li className={styles.contactItem}>
                        <a href="https://www.facebook.com/szamajtort">
                            <i className="fab fa-facebook"></i>Facebook
                        </a>
                    </li>
                    <li className={styles.contactItem}>
                        <a href="https://www.instagram.com/szamajtort/?fbclid=IwAR2kd1Xi57Ud9JnKAtd8VmOI6UUmz9G3rrAIGzdZlggRS70EaHI6Yc8bjEg">
                            <i className="fab fa-instagram-square"></i>Instagram
                        </a>
                    </li>
                </ul>
            </div>

            </div>
        </div>
    )



}

export default Contact;