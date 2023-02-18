import React from 'react';
import './home.css';
import Bento from '../assets/highlight-yellow.png';
import CarouselComponent from '../components/CarouselComponent';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
        <div className="container">
            <div className="row home gradient-bg">
                <div className="col-sm-5">
                    <img src={Bento} alt="Girl holding takeout food" className="img-fluid featured-photo"/>
                </div>
                <div className="col-sm-7 home-message">
                    <h1>ALOHA,</h1>
                    <h4>Ohana and Friends!</h4>
                    <small>Together, we can bring smiles, share love, and spread ALOHA to children and families
                        all over the world. Mahalo nui loa for your continued support. 
                    </small>
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