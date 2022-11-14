import React from "react";
import styles from "../styles/Home.module.scss";
import "../styles/Home.css";
//Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import tesla1 from "../images/teslab.jpg";
import tesla3 from "../images/teslac.jpg";
import tesla4 from "../images/tesla8.jpg";
import tesla5 from "../images/tesla4.jpg";
import tesla6 from "../images/teslaz.jpg";
import tesla7 from "../images/tesla7.jpg";
import tesla2 from "../images/teslad.jpg";
import tesla9 from "../images/teslamv.jpg";
import tesla8 from "../images/teslam.jpg";
import teslan from "../images/teslan.jpg";
import teslak from "../images/teslak.jpg";
import teslao from "../images/teslao.jpg";
import tesl1 from "../images/pexels-josh-sorenson-154141.jpg";
import tesl2 from "../images/construction2.jpg";
import tesl3 from "../images/construction3.jpg";
import tower1 from "../images/mast.jpg";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
const Home = () => {
  return (
    <div className={styles.container}>
      <h2>Tesla Technical Services limited</h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={20}
        updateOnWindowResize={true}
        className={styles.myswiper}
      >
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={tesla5} alt="slider" />
            <span>pole Erection</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={tesla2} alt="slider" />
            <span>
              Inter connecting of the constructed schemes to the Existing MV
              lines
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={tesla3} alt="slider" />
            <span>Inter connecting of the constructed schemes to MV lines</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={teslak} alt="slider" />
            <span>Dressing of H-pole Structure </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={tesl1} alt="slider" />
            <span>Slab Construction </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={tesla9} alt="slider" />
            <span>Completed MV Vertical Angle section </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={teslao} alt="slider" />
            <span>Construction of Off-Grid Power Distribution Networks </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={tesla4} alt="slider" />

            <span>stay Dressing</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={tesla6} alt="slider" />
            <span>Transformer installation</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={tesl2} alt="slider" />
            <span>Arcade construction</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={tesla7} alt="slider" />
            <span>tesla workers at site</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={tesla1} alt="slider" />
            <span>Powerlines</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={tesla8} alt="slider" />
            <span>Completed MV Vertical Angle section </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={tower1} alt="slider" />
            <span>telecommunication tower </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={teslan} alt="slider" />
            <span>Installations works for Distribution Transformers </span>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <div>
            <img src={tesl3} alt="slider" />
            <span>Building construction </span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
