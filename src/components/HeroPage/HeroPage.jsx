import React from "react";
import { Link } from "react-scroll";

import styles from "./HeroPage.module.css"

const HeroPage = (props) => {

    return(
        <div className={styles.firstPage}>
        {props.children}
            <div className={styles.heroOverlay}>
                <div className={styles.heroBanner}>
                    <div className={styles.heroBannerImg}></div>
                    <div className={styles.btnDiv}>
                    <Link 
                        className={styles.btn} 
                        activeClass="linkactiveclass" 
                        to="About" 
                        spy={true} 
                        smooth={true} 
                        offset={-70} 
                        duration={500}
                    >
                        POZNAJ NAS
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HeroPage;