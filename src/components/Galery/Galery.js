import React from "react";
import styles from './Galery.module.css';
import { images } from "../../constants";

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';


const Galery = (props) => {

    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if(direction === 'left'){
            current.scrollLeft -= 300;
        }else{
            current.scrollLeft += 300;
        }
    }

    const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05, images.gallery06, images.gallery07, images.gallery08];


    return(
        <div className={styles.galeryContainer}>
            <div className={styles.left}>
                <h2>Galeria</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ducimus eaque cupiditate iusto similique ipsum culpa architecto veritatis vitae autem?</p>
            </div>
            <div className={styles.right}>
                <div className={styles.images} ref={scrollRef}>
                    {galleryImages.map((image, index) => (
                        <div className={styles.imageMap} key={`galery-image-${index + 1}`}>
                            <img src={image} alt="galery" />
                        </div>
                    ))}
                </div>
                <div className={styles.imageArrows}>
                    <BsArrowLeftShort className={styles.arrowIcon} onClick={() => scroll('left')} />
                    <BsArrowRightShort className={styles.arrowIcon} onClick={() => scroll('right')} />
                </div>
            </div>
        </div>

    );


}

export default Galery;
