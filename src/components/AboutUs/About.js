import react from "react";
import styles from './About.module.css';


const About = (props) => {
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.leftImg}></div>
            </div>
            <div className={styles.right}>
                <h2>O nas</h2>
                <p>Artystyczne torty, ciastka i słodkie stoły na każdą okazję, które cieszą oko i kubki smakowe.
Nieszablonowe projekty, od eterycznego minimalizmu po bogato zdobione, wielopiętrowe kompozycje, które zadowolą największych słodyczowych sceptyków.</p>
            </div>
        </div>
    )



}

export default About;