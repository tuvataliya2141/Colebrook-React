import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAppContext } from '../context';
import { ToastContainer } from "react-toastify";
import { ToasterWarning, ToasterSuccess, ToasterError } from "../common/toaster";
import axios from 'axios';
import CommonService from "../services/commonService";
import urlConstant from "../constants/urlConstant";
import Loding from "./Loding";


function Footer() {
    const { Logo } = useAppContext();
    let common = new CommonService();
    const [email, SetEmail] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        if (!email) {
            ToasterWarning('Please Your Enter Email..')
            return
        }

        try {
            const data = { email };
            const SubscribeData = `${urlConstant.Subscribe.SubscribePost}`;
            axios.post(SubscribeData, data).then(() => {
                ToasterSuccess("Success...!!");
                setIsLoading(false)
            })
        }
        catch (error) {
            ToasterError("Error")
            setIsLoading(false)
        }
    }
    return (
        <div>
            {isLoading ? <Loding /> : Footer}
            <ToastContainer />
            <footer className="main">
                <section className="newsletter mb-15 wow animate__animated animate__fadeIn">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="position-relative newsletter-inner">
                                    <div className="newsletter-content marginleft">
                                        {/* <div className="newsletter-content"> */}
                                        <h2 className="mb-20">
                                            Stay home &amp; get your daily <br />
                                            needs from our shop
                                        </h2>
                                        <p className="mb-45">Start You'r Daily Shopping with <span className="text-brand"> Colebrook Mart</span></p>
                                        <form className="form-subcriber d-flex">
                                            <input type="email" value={email} onChange={(e) => { SetEmail(e.target.value) }} placeholder="Your emaill address" />
                                            <button className="btn" type="submit" onClick={submit}>Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section-padding footer-mid">
                    <div className="container pt-15 pb-20">
                        <div className="row">
                            <div className="col">
                                <div className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0 wow animate__animated animate__fadeInUp" data-wow-delay={0}>
                                    <div className="logo mb-30">
                                        <a className="mb-15"><img src={Logo} alt="logo" /></a>
                                        <p className="font-lg text-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                <h4 className="widget-title">Company</h4>
                                <ul className="footer-list mb-sm-5 mb-md-0">
                                    <li><Link to={"/ShopProduct"}>About Us</Link></li>
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
                                </ul>
                            </div>
                            <div className="footer-link-widget col wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                                <h4 className="widget-title">Popular</h4>
                                <ul className="footer-list mb-sm-5 mb-md-0">
                                    <li><Link to="/ShopProduct">Shirts</Link></li>
                                    <li><Link to="/ShopProduct">T-shirts</Link></li>
                                    <li><Link to="/ShopProduct">kruti</Link></li>
                                    <li><Link to="/ShopProduct">kurta shirt</Link></li>
                                    <li><Link to="/ShopProduct">Dresses</Link></li>
                                    <li><Link to="/ShopProduct">View All Order</Link></li>
                                </ul>
                            </div>
                            <div className="footer-link-widget widget-install-app col wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                                <h4 className="widget-title">Payment</h4>
                                <img className src="assets/imgs/theme/payment-method.png" alt="/" />
                                <hr />
                                <ul className="contact-infor">
                                    <li><img src="assets/imgs/theme/icons/icon-location.svg" alt="/" /><strong>Address: </strong> <span>5171 W Campbell Ave</span></li><li style={{ marginLeft: "20px" }}> undefined Kent, Utah 53127 United States</li>
                                    <li><img src="assets/imgs/theme/icons/icon-contact.svg" alt="/" /><strong>Call Us:</strong><span>(+91) - 540-025-124553</span></li>
                                    <li><img src="assets/imgs/theme/icons/icon-email-2.svg" alt="/" /><strong>Email:</strong><span>colebrook@gmail.com</span></li>
                                    <li><img src="assets/imgs/theme/icons/icon-clock.svg" alt="/" /><strong>Hours:</strong><span>10:00 - 18:00, Mon - Sat </span></li>
                                </ul>
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