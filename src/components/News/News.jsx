import React from "react";
import styles from './News.module.css';

import { AiOutlineClose } from 'react-icons/ai';

const News = (props) => {


    return(props.trigger) ? (
        <div className={styles.newsOverlay} onClick={() => {
            props.setTrigger(false);
        }}>
            <div className={styles.newsContainer}>
                <div className={styles.newsCloseDiv}>
                    <AiOutlineClose 
                        onClick={() => {
                            props.setTrigger(false);
                        }} 
                        className={styles.newsClose} 
                    />
                </div>
                <div className={styles.newsImg}>
            
                </div>
            </div>
        </div>
    ) : "";

        


}

export default News;