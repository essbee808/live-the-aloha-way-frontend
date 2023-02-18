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
            <div className="footer-menu">
                <ul className="f-menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/share-aloha">Share Aloha</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>
            <p>Copyright &copy; Live The Aloha Way. All Rights Reserved.</p>
            <p>Web Development by <a href="https://www.sheenabonilla.com" target="_blank">www.sheenabonilla.com</a></p>
        </div>
    </footer>
    )
}

export default Footer