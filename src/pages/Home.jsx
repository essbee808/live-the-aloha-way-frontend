import React from 'react';
import './home.css';
import Bento from '../assets/home-bento.jpg';
import CarouselComponent from '../components/CarouselComponent';

const Home = () => {
  return (
        <div class="container">
            <div class="row home">
                <div className="col-sm-5">
                    <img src={Bento} alt="Girl holding takeout food" className="img-fluid featured-photo"/>
                </div>
                <div className="col-sm-7">
                    <h1>ALOHA!</h1>
                    <h3>My name is Ari.</h3>
                </div>
            </div>

            <div className="row home">
                 <CarouselComponent />
            </div>

            <div class="row home">
                <div class="col-sm">Something here</div>
                <div class="col-sm">Another column</div>
                <div class="col-sm">Cool!</div>
            </div>
        </div>
  )
}

export default Home