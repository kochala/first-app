import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import React, { useRef} from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { Grid, Pagination, Mousewheel, Keyboard, Navigation} from 'swiper/modules';
import Cartitem from "../../../cartitem/flashcartitem/Flashcartitem";
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import "./explore.css"

const Explore = () => {
 

    const [explore, setExplore] = useState([]);
    useEffect(() => {
    axios.get('https://dummyjson.com/product?skip=14')
              .then(response => {
                  setExplore(response.data.products);
              })
              .catch(error => {
                  console.error('მონაცემების წაკითხვის შეცდომა:', error);
              });
            }, []);

 
            const exploreRef=useRef(null);
                  const explorenext=()=>{
                    exploreRef.current.swiper.slideNext();
                  };
                  const exploreprev=()=>{
                    exploreRef.current.swiper.slidePrev();
                  };    





  return (
    <div>
        <div className='my-main-header-div'>
              <span className='my-flash-icon'></span>
              <span className='my-main-header'>Our Products</span>
            </div>
            <div className='my-header-div'>
              <span className='my-header'>Explore Our Products</span>    
              <div className='my-scrol-button-div'>
                <button className='my-scrol-button' onClick={exploreprev}>
                  <MdArrowBack />
                </button>
                <button className='my-scrol-button' onClick={explorenext}>
                  <MdArrowForward />
                </button>
              </div>
            </div>
            <div className='explore-div' >
              <Swiper
                slidesPerView={4}
                grid={{
                  rows: 2,
                }}
                spaceBetween={0}
                modules={[Mousewheel, Keyboard, Pagination, Grid, Navigation]}
                navigation={true}
                mousewheel={true}
                keyboard={ true}
                className={"my-scroll-button"}
                ref = {exploreRef}
               >
                {explore.map((el) => (
                  <SwiperSlide key={el.id} >
                    <Cartitem
                      id={el.id}
                      image={el.thumbnail}
                      title={el.title}
                      price={el.price}
                      discountpercentage={el.discountPercentage}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className='my-main-button-div'>
              <Link to="/Product" key="unique-key"> <button className='my-main-button'>view all product</button></Link>
            </div>
    </div>
  )
}

export default Explore