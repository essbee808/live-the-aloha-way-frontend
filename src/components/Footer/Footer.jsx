import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <h3>Live The Aloha Way</h3>
            <p>Bringing SMILES, sharing LOVE, and spreading ALOHA to children and families all over the world.</p>
            <ul className="socials">
                <li><a href="https://www.facebook.com/livethealohaway/" target="_blank"><i className="fa fa-facebook"></i></a></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p>copyright &copy; <a href="">Live The Aloha Way</a></p>
            <div className="footer-menu">
                <ul className="f-menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/share-aloha">Share Aloha</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer