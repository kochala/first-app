import "./flash.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import React, { useRef} from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { Grid, Pagination, Mousewheel, Keyboard, Navigation} from 'swiper/modules';
import Cartitem from "../../../cartitem/flashcartitem/Flashcartitem";
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { IsDarkContext } from "@/context/IsDarkProvider";

const Flash = () => {
  const flashRef=useRef(null);
      const flashnext=()=>{
        flashRef.current.swiper.slideNext();
      };
      const flashprev=()=>{
        flashRef.current.swiper.slidePrev();
      };


      const [data, setData] = useState([]);
useEffect(() => {
  axios.get('https://dummyjson.com/products?limit=10')
      .then(response => {
          setData(response.data.products);
      })
      .catch(error => {
          console.error('მონაცემების წაკითხვის შეცდომა:', error);
      });
    }, []);

    const {isDark} = useContext(IsDarkContext)


  return (
    <>
        <div className={isDark? 'Flash-div dark': "Flash-div"}>
              <div className='my-main-header-div'>
                <span className='my-flash-icon'></span>
                <span className='my-main-header'>Today's</span>
              </div>
              <div className='my-header-div'>
                <span className='my-header'>flash sales</span>
                <div className='flash-timer-div'>
                  <div className='flash-timer'>
                    <span className='time'>Days</span>
                    <span className='time-number'>03</span>
                  </div>
                    <span className='flash-point'>:</span>
                  <div className='flash-timer'>
                    <span className='time'>hours</span>
                    <span className='time-number'>23</span>
                  </div>
                    <span className='flash-point'>:</span>
                  <div className='flash-timer'>
                    <span className='time'>minutes</span>
                    <span className='time-number'>19</span>
                  </div>
                    <span className='flash-point'>:</span>
                  <div className='flash-timer'>
                    <span className='time'>second</span>
                    <span className='time-number'>56</span>
                  </div>
              
                  <div className='my-scrol-button-div'>
                    <button className='my-scrol-button flashscroll' onClick={flashprev}>
                      <MdArrowBack />
                    </button>
                    <button className='my-scrol-button flashscroll'onClick={flashnext}>
                      <MdArrowForward />
                    </button>
                  </div>
                </div>
              </div>
              <div className='flash-div'>
                <Swiper 
                  slidesPerView={4}
                  spaceBetween={0}
                  modules={[Mousewheel, Keyboard, Pagination, Grid, Navigation]}
                  navigation={true}
                  mousewheel={true}
                  keyboard={true}
                  grid={true}
                  ref={flashRef}  
                  className="flashscroll"
                 >
                  {data.map((el) => (
                    <SwiperSlide key={el.id}>
                      <Cartitem
                        id={el.id}
                        image={el.thumbnail}
                        title={el.title}
                        price={el.price}
                        newPrice={el.newPrice}
                        discountpercentage={el.discountPercentage}
                        alt={el.name}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper> 
              </div>     
              <div className='my-main-button-div'>
                <Link to="/Product" key="unique-key"><button className='my-main-button'>view all product</button></Link>
              </div>
            </div>
    </>
  )
}

export default Flash