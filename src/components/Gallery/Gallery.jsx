import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import styles from './Gallery.module.css';
import { images } from "../../constants";

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Galery = (props) => {


    // const scrollRef = React.useRef(null);

    // const scroll = (direction) => {
    //     const { current } = scrollRef;

    //     if(direction === 'left'){
    //         current.scrollLeft -= 325;
    //     }else{
    //         current.scrollLeft += 325;
    //     }
    // }

    const galleryImages = [images.gallery03, images.gallery02, images.gallery01, images.gallery04, images.gallery05, images.gallery06, images.gallery07, images.gallery08];

    return(
        <div id="Gallery" className={styles.gallery}>
            <div className={styles.galleryleft}>
                <h2>Galeria</h2>
                <p>Zobacz nasze słodkości</p>
            </div>
            <div className={styles.galleryright}>
            <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>


                {/* <div className={styles.galleryright_container} ref={scrollRef}>
                    {galleryImages.map((image, index) => (
                        <div className={styles.galleryright_card} key={`galery-image-${index + 1}`}>
                            <img src={image} alt="galery" />
                        </div>
                    ))}
                </div>
                <div className={styles.galleryright_arrows}>
                    <BsArrowLeftShort className={styles.arrowIcon} onClick={() => scroll('left')} />
                    <BsArrowRightShort className={styles.arrowIcon} onClick={() => scroll('right')} />
                </div> */}
            </div>
        </div>

    )


}

export default Galery;
