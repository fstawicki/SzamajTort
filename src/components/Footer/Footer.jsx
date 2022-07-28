import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import styles from './Footer.module.css';


const Footer = () =>{
    return(
        <Fragment>
        <div id="Footer" className={styles.footer}>
            <div className={styles.left}>
                <ul>
                    <li>Szamaj Tort</li>
                    <li>Sobota: 11 - 18</li>
                    <li>Niedziela: 11 - 16</li>
                    <li>Bolesława Chrobrego 12</li>
                    <li>02-479, Warszawa</li>
                </ul>
            </div>
            <div className={styles.middle}></div>
            <div className={styles.right}>
                <ul>
                    <li>
                        <i className="fas fa-envelope"></i>szamajtort@gmail.com
                    </li>
            <li>
                <i className="fas fa-phone"></i>660 387 232
            </li>
            <li>
                <a href="https://www.facebook.com/szamajtort">
                    <i className="fab fa-facebook"></i>Facebook
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/szamajtort/?fbclid=IwAR2kd1Xi57Ud9JnKAtd8VmOI6UUmz9G3rrAIGzdZlggRS70EaHI6Yc8bjEg">
                    <i className="fab fa-instagram-square"></i>Instagram
                </a>
            </li>
        </ul>
            
            
            </div>
        </div>
        <div className={styles.author}>
            <p>Website created by Filip Stawicki</p>
        </div>
        </Fragment>
    )
}

export default Footer;
