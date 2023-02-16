import React from 'react';
import './home.css';
import Bento from '../assets/home-bento.jpg';
import CarouselComponent from '../components/CarouselComponent';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
        <div class="container">
            <div class="row home gradient-bg">
                <div className="col-sm-5">
                    <img src={Bento} alt="Girl holding takeout food" className="img-fluid featured-photo"/>
                </div>
                <div className="col-sm-7 home-message">
                    <h1>ALOHA!</h1>
                    <h4>My name is Ari.</h4>
                    <p></p>
                </div>
            </div>

            <div className="row home">
                 <CarouselComponent />
            </div>
            <div className="row home">
                <Testimonials />
            </div>
            
        </div>
  )
}

export default Home