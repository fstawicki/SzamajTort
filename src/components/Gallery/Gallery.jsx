import React, {useState, useEffect} from "react";

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



const Gallery = (props) => {

    // const useWindowWidth = () => {
    //     const [winWidth, setWinWidth] = useState(window.innerWidth);
    //     useEffect(() => {
    //             setWinWidth(window.innerWidth);
    //         }
    //         window.addEventListener("resize", handleResize);
    //         return () => {
    //             window.removeEventListener("resize", handleResize);
    //         }
    //     },[]);
    //     return winWidth;
    // }

    // const [slidesNumber, setSlidesNumber] = useState(2.5)

    // const width = useWindowWidth();

    // if(width < 1300){
    //     setSlidesNumber(1);
    // }



    const galleryImages = [
        gallery01, gallery02, gallery03, gallery04, gallery05, gallery06, gallery07, gallery08
    ];

    // galleryImages.map((image) => {
    //     let wrapperStyle = {backgroundImage: `url(${image})`};

    // })

    

    // let slides = [];

    // for(let i=0; i<9; i+=1){

    //     let wrapperStyle = {backgroundImage: `url(${gallery01})`};
    
    //     slides.push(
    //       <SwiperSlide className='SwiperSlide' key={`slide-${i}`}  style={wrapperStyle}>
    //         <div className='SwiperSlide__wrapper'>
    //           <div className='SwiperSlide__text'>
    //             <p className='SwiperSlide__text__title'>{props.slidesData[i].title}</p>
    //             <p className='SwiperSlide__text__paragraph'>{props.slidesData[i].paragraph}</p>
    //           </div>
    //         </div>
    //       </SwiperSlide>
    //     )
    //   }


    const imgg = '../../images/gallery08.jpg';

    return(
        <div id="Gallery" className={styles.gallery}>
            <div className={styles.galleryleft}>
                <h2>Galeria</h2>
                <p>Zobacz nasze słodkości</p>
            </div>
            <div className={styles.galleryright}>
                <Swiper
                    className="swiper-wrapper"
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    pagination={{ clickable: true }}
                    spaceBetween={1}
                    slidesPerView={1}
                    breakpoints= {{
                        1300: {
                          slidesPerView: 2.5,
                          spaceBetween: 40
                        }
                      }}
                    
                >
                    {galleryImages.map((image) => {
                        let sliderStyle = {backgroundImage: `url(${imgg})`};
                            return <SwiperSlide 
                            className='aaa'
                            key={`${image}`}
                            style={sliderStyle}
                            // style={{ backgroundImage: `url(${image})` }}
                            >s
                                {/* <img className="swiper-slide-img" src={image} /> */}
                            </SwiperSlide>;
                        })
                    }
                </Swiper>
            </div>
        </div>

    )


}

export default Gallery;







































// import React, {useState, useEffect} from "react";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import styles from './Gallery.module.css';



// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// import gallery01 from '../../images/gallery01.jpg';
// import gallery02 from '../../images/gallery02.jpg';
// import gallery03 from '../../images/gallery03.jpg';
// import gallery04 from '../../images/gallery04.jpg';
// import gallery05 from '../../images/gallery05.jpg';
// import gallery06 from '../../images/gallery06.jpg';
// import gallery07 from '../../images/gallery07.jpg';
// import gallery08 from '../../images/gallery08.jpg';



// const Galery = (props) => {

//     // const useWindowWidth = () => {
//     //     const [winWidth, setWinWidth] = useState(window.innerWidth);
//     //     useEffect(() => {
//     //             setWinWidth(window.innerWidth);
//     //         }
//     //         window.addEventListener("resize", handleResize);
//     //         return () => {
//     //             window.removeEventListener("resize", handleResize);
//     //         }
//     //     },[]);
//     //     return winWidth;
//     // }

//     // const [slidesNumber, setSlidesNumber] = useState(2.5)

//     // const width = useWindowWidth();

//     // if(width < 1300){
//     //     setSlidesNumber(1);
//     // }



//     const galleryImages = [
//         gallery01, gallery02, gallery03, gallery04, gallery05, gallery06, gallery07, gallery08
//     ];

//     // galleryImages.map((image) => {
//     //     let wrapperStyle = {backgroundImage: `url(${image})`};

//     // })

    

//     // let slides = [];

//     // for(let i=0; i<9; i+=1){

//     //     let wrapperStyle = {backgroundImage: `url(${gallery01})`};
    
//     //     slides.push(
//     //       <SwiperSlide className='SwiperSlide' key={`slide-${i}`}  style={wrapperStyle}>
//     //         <div className='SwiperSlide__wrapper'>
//     //           <div className='SwiperSlide__text'>
//     //             <p className='SwiperSlide__text__title'>{props.slidesData[i].title}</p>
//     //             <p className='SwiperSlide__text__paragraph'>{props.slidesData[i].paragraph}</p>
//     //           </div>
//     //         </div>
//     //       </SwiperSlide>
//     //     )
//     //   }

//     return(
//         <div id="Gallery" className={styles.gallery}>
//             <div className={styles.galleryleft}>
//                 <h2>Galeria</h2>
//                 <p>Zobacz nasze słodkości</p>
//             </div>
//             <div className={styles.galleryright}>
//                 <Swiper
//                     className="swiper-wrapper"
//                     modules={[Navigation, Pagination, Scrollbar, A11y]}
//                     pagination={{ clickable: true }}
//                     spaceBetween={1}
//                     slidesPerView={1}
//                     breakpoints= {{
//                         1300: {
//                           slidesPerView: 2.5,
//                           spaceBetween: 40
//                         }
//                       }}
                    
//                 >
//                     {galleryImages.map((image) => {
//                         let sliderStyle = {backgroundImage: `url(${image})`};
//                             return <SwiperSlide 
//                             className='aaa'
//                             key={`${image}`}
//                             style={sliderStyle}
//                             // style={{ backgroundImage: `url(${image})` }}
//                             >s
//                                 {/* <img className="swiper-slide-img" src={image} /> */}
//                             </SwiperSlide>;
//                         })
//                     }
//                 </Swiper>
//             </div>
//         </div>

//     )


// }

// export default Galery;
