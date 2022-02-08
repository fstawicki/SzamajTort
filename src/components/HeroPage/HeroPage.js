import React from "react";
import styles from "./HeroPage.module.css"



const HeroPage = (props) => {

    return(
        <div className={styles.firstPage}>
        {props.children}
            <div className={styles.heroOverlay}>



                <div className={styles.heroBanner}>
                    <div className={styles.heroBannerImg}>

                    </div>
                    <div className={styles.btnDiv}>
                    <a className={styles.btn} href="#About">POZNAJ NAS</a>
                    </div>
                </div>


                
            </div>
        </div>
    )


}

export default HeroPage;