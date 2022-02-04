import react from "react";
import styles from './Contact.module.css';

const Contact = (props) => {

    return(
        <div className={styles.contactDiv}>
            <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.leftImg}></div>
            </div>
            <div className={styles.right}>
                <h2 className={styles.heading}>Odwiedz Nas</h2>
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
                    <h2 className={styles.heading}>Skontaktuj Się z Nami</h2>
                    </li>
                    <li className={styles.contactItem}>
                        <i class="fas fa-envelope"></i>Mail: szamajtort@gmail.com
                    </li>
                    <li className={styles.contactItem}>
                        <i class="fas fa-phone"></i>Telefon: 660 387 232
                    </li>
                    <li className={styles.contactItem}>
                        <a href="https://www.facebook.com/szamajtort">
                            <i class="fab fa-facebook"></i>Facebook
                        </a>
                    </li>
                    <li className={styles.contactItem}>
                        <a href="https://www.instagram.com/szamajtort/?fbclid=IwAR2kd1Xi57Ud9JnKAtd8VmOI6UUmz9G3rrAIGzdZlggRS70EaHI6Yc8bjEg">
                            <i class="fab fa-instagram-square"></i>Instagram
                        </a>
                    </li>
                </ul>
            </div>

            </div>
        </div>
    )



}

export default Contact;