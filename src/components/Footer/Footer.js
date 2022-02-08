import React from "react";
import styles from './Footer.module.css';


const Footer = () =>{
    return(
        <div id="Footer" className={styles.footer}>
            <div className={styles.left}>
                <p>Szamaj Tort</p>
                <p>Sobota: 11 - 18</p>
                <p>Niedziela: 11 - 16</p>
                <p>Bolesława Chrobrego 12</p>
                <p>02-479, Warszawa</p>
            </div>
            <div className={styles.middle}>
                
            </div>
            <div className={styles.right}>
                <p>
                    <i class="fas fa-envelope"></i>szamajtort@gmail.com
                </p>
                <p>
                    <i class="fas fa-phone"></i>660 387 232
                </p>
                <p>
                    <a href="https://www.facebook.com/szamajtort">
                        <i class="fab fa-facebook"></i>Facebook
                    </a>
                </p>
                <p>
                    <a href="https://www.instagram.com/szamajtort/?fbclid=IwAR2kd1Xi57Ud9JnKAtd8VmOI6UUmz9G3rrAIGzdZlggRS70EaHI6Yc8bjEg">
                        <i class="fab fa-instagram-square"></i>Instagram
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Footer;
