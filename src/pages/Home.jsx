import React from 'react';
import './home.css';
import Bento from '../assets/home-bento.jpg';
import Photos from '../components/Photos';

const Home = () => {
  return (
    <section>
        <div className="home-content">
            <h1>Home Page</h1>
            <img src={Bento} alt="Girl holding takeout food" className="photo-highlight"/>
            <p className="home-message">Hi, my name is Ari!</p>
        </div>
        <Photos />
    </section>
  )
}

export default Home