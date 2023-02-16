import React from 'react';
import './carouselComponent.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import Socks from '../assets/box-socks.jpg';
import SchoolSupplies from '../assets/school-supplies.jpg';
import Family from '../assets/family-1.jpg';
import Fam1 from '../assets/balcony.jpg';
import Friend1 from '../assets/lihikai-1.jpg';
import Teacher1 from '../assets/teacher-1.jpg';
import Note from '../assets/love-note.jpg';
import Teacher2 from '../assets/umbrella.jpg';

function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
        <Carousel useKeyboardArrows autoPlay showArrows={false} dynamicHeight={true} >
            
            <div>
                <img src={Fam1} alt="Family photo on balcony" />
            </div>
            <div>
                <img src={Friend1} alt="Photo of friends" />
            </div>

            <div>
                <img src={Teacher1} alt="Photo of students and teacher" />
            </div>

            <div>
                <img src={Teacher2} alt="Teachers under an umbrella" />
            </div>

            <div>
                <img src={Family} alt="Family photo" />
            </div>

            <div>
                <img src={Socks} alt="Socks" />
            </div>
            <div>
                <img src={SchoolSupplies} alt="School supplies" />
            </div>
            <div>
                <img src={Note} alt="Thank you note" />
            </div>
            
        </Carousel>
    </div>
    )
  }
export default CarouselComponent;