import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import styles from './Gallery.module.css';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import gallery01 from '../../images/gallery01.jpg';
import gallery02 from '../../images/gallery02.jpg';
import gallery03 from '../../images/gallery03.jpg';
import gallery04 from '../../images/gallery04.jpg';
import gallery05 from '../../images/gallery05.jpg';
import gallery06 from '../../images/gallery06.jpg';
import gallery07 from '../../images/gallery07.jpg';
import gallery08 from '../../images/gallery08.jpg';



const Galery = (props) => {

    const galleryImages = [
        gallery01, gallery02, gallery03, gallery04, gallery05, gallery06, gallery07, gallery08
    ];

    return(
        <div id="Gallery" className={styles.gallery}>
            <div className={styles.galleryleft}>
                <h2>Galeria</h2>
                <p>Zobacz nasze słodkości</p>
            </div>
            <div className={styles.galleryright}>
            <Swiper
                className={styles.swiper}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={15}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
            >
                {galleryImages.map((image) => {
                        return <SwiperSlide className={styles.swiperSlide} key={`${image}`} style={{ backgroundImage: `url(${image})` }}></SwiperSlide>;
                    })
                }
            </Swiper>
            </div>
        </div>

    )


}

export default Galery;
