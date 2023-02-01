import React from 'react'
import { Link } from 'react-router-dom';
import {  useAppContext} from '../context';


function Footer() {
    const {Logo } = useAppContext();
  return (
    <div>
        <footer className="main">
        <section className="section-padding footer-mid">
            <div className="container pt-15 pb-20">
            <div className="row">
                <div className="col">
                <div className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0 wow animate__animated animate__fadeInUp" data-wow-delay={0}>
                    <div className="logo mb-30">
                    <a  className="mb-15"><img src={Logo} alt="logo" /></a>
                    <p className="font-lg text-heading">Awesome grocery store website template</p>
                    </div>
                    <ul className="contact-infor">
                    <li><img src="assets/imgs/theme/icons/icon-location.svg" alt="/"/><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                    <li><img src="assets/imgs/theme/icons/icon-contact.svg" alt="/"/><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                    <li><img src="assets/imgs/theme/icons/icon-email-2.svg" alt="/"/><strong>Email:</strong><span>colebrook@gmail.com</span></li>
                    <li><img src="assets/imgs/theme/icons/icon-clock.svg" alt="/"/><strong>Hours:</strong><span>10:00 - 18:00, Mon - Sat</span></li>
                    </ul>
                </div>
                </div>
                <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                <h4 className="widget-title">Company</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                    <li><a href="#">About Us</a></li>
                    {/* <li><a href="#">Delivery Information</a></li> */}
                    <li><Link to={"/Privacy-Policy"}>Privacy Policy</Link></li>
                    <li><Link to={"/Terms-Service"}>Terms &amp; Conditions</Link></li>
                    <li><Link to={"/Contact"}>Contact Us</Link></li>
                    <li><Link to={"/"}>Support Center</Link></li>
                    <li><Link to={"/"}>Careers</Link></li>
                </ul>
                </div>
                <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                <h4 className="widget-title">Account</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                    <li><Link to={"/Login"}>Sign In</Link></li>
                    <li><Link to={"/Cart"}>View Cart</Link></li>
                    <li><Link to={"/wishlist"}>My Wishlist</Link></li>
                    <li><Link to={"/"}>Help Ticket</Link></li>
                    {/* <li><a href="#">Track My Order</a></li> */}
                    {/* <li><a href="#">Shipping Details</a></li>
                    <li><a href="#">Compare products</a></li> */}
                </ul>
                </div>
                {/* <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                <h4 className="widget-title">Corporate</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                    <li><a href="#">Become a Vendor</a></li>
                    <li><a href="#">Affiliate Program</a></li>
                    <li><a href="#">Farm Business</a></li>
                    <li><a href="#">Farm Careers</a></li>
                    <li><a href="#">Our Suppliers</a></li>
                    <li><a href="#">Accessibility</a></li>
                    <li><a href="#">Promotions</a></li>
                </ul>
                </div> */}
                <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                <h4 className="widget-title">Popular</h4>
                <ul className="footer-list mb-sm-5 mb-md-0">
                    <li><a href="#">Shirts</a></li>
                    <li><a href="#">T-shirts</a></li>
                    <li><a href="#">kruti</a></li>
                    <li><a href="#">kurta shirt</a></li>
                    <li><a href="#">Dresses</a></li>
                    <li><a href="#">Night Dress</a></li>
                    <li><a href="#">Saree</a></li>
                </ul>
                </div>
                <div className="footer-link-widget widget-install-app col wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                {/* <h4 className="widget-title">Install App</h4>
                <p className>From App Store or Google Play</p>
                <div className="download-app">
                    <a href="#" className="hover-up mb-sm-2 mb-lg-0"><img className="active" src="assets/imgs/theme/app-store.jpg" alt="/"/></a>
                    <a href="#" className="hover-up mb-sm-2"><img src="assets/imgs/theme/google-play.jpg" alt="/"/></a>
                </div> */}
                <p className="mb-20">Secured Payment Gateways</p>
                <img className src="assets/imgs/theme/payment-method.png" alt="/"/>
                <a href='https://api.whatsapp.com/send?phone=+919988774455'>
                    <img className src="assets/imgs/theme/whatsapp.png" width="40px"  alt="/"/>
                </a>    
                </div>
            </div>
            </div>

            </section>
        <div className="container pb-30 wow animate__animated animate__fadeInUp" data-wow-delay={0}>
            <div className="row align-items-center">
            <div className="col-12 mb-30">
                <div className="footer-bottom" />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
                <p className="font-sm mb-0">© 2022, <strong className="text-brand"> Colebrook</strong> - Ecommerce website </p>
            </div>
            <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
                <div className="hotline d-lg-inline-flex mr-30">
                
                </div>
                <div className="hotline d-lg-inline-flex">
                
                </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
                <p className="font-sm">Designed by Alithemes.com. All rights reserved </p>
            </div>
            </div>
        </div>
        </footer>

    </div>
  )
}

export default Footer;