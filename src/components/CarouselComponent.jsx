import React from 'react';
import './carouselComponent.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import Bear from '../assets/single-bear.jpg';
import SchoolSupplies from '../assets/school-supplies.jpg';
import Family from '../assets/family-1.jpg';

function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
        <Carousel useKeyboardArrows autoPlay showArrows={false} dynamicHeight={true} >
            <div>
                <img src={Bear} alt="Stuffed animals" />
            </div>
            <div>
                <img src={SchoolSupplies} alt="School supplies" />
            </div>
            <div>
                <img src={Family} alt="Family photo" />
            </div>
            <div>
                <img src={Family} alt="Family photo" />
            </div>
        </Carousel>
    </div>
    )
  }
export default CarouselComponent;