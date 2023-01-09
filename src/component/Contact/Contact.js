import React, { useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'

import CommonService from "../../services/commonService";
import urlConstant from "../../constants/urlConstant";
import { ToasterSuccess, ToasterWarning, ToasterError } from "../../common/toaster";
import { ToastContainer } from "react-toastify";
import { useAppContext } from '../../context/index';

function Contact() {
    let common = new CommonService();
    const { Loding } = useAppContext();


    const [first_name, Setfirst_name] = useState();
    const [email, Setemail] = useState("");
    const [phone_number, Setphone_number] = useState("");
    const [subject, Setsubject] = useState("");
    const [message, Setmessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const SubmitHandler = async (e) => {
        e.preventDefault();

        if (!first_name || !email || !phone_number || !subject || !message) {
            ToasterWarning('Please All Enter Details')
            return
        }

        try {
            const data = { first_name, email, phone_number, subject, message };
            const ContactData = `${urlConstant.Contact.PostContact}`;
            await common.httpPost(ContactData, data).then(() => {
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
            {isLoading ? <Loding /> : Contact}
            <ToastContainer />
            <Header />
            <main className="main pages">
                <div className="page-header breadcrumb-wrap">
                    <div className="container">
                        <div className="breadcrumb">
                            <a  rel="nofollow"><i className="fi-rs-home mr-5" />Home</a>
                            <span /> Pages <span /> Contact
                        </div>
                    </div>
                </div>
                <div className="page-content pt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 m-auto">
                                <section className="mb-50">
                                    <div className="row">
                                        <div className="col-xl-8">
                                            <div className="contact-from-area padding-20-row-col">
                                                <h2 className="mb-10">Contact Us </h2>
                                                <p className="text-muted mb-30 font-sm">Your email address will not be published. Required fields are marked *</p>
                                                <form className="contact-form-style mt-30" id="contact-form" action="#" method="post">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="input-style mb-20">
                                                                <input name="name" placeholder="First Name" type="text" value={first_name || ""} onChange={(e) => { Setfirst_name(e.target.value) }} />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="input-style mb-20">
                                                                <input name="email" placeholder="Your Email" type="email" value={email || ""} onChange={(e) => { Setemail(e.target.value) }} />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="input-style mb-20">
                                                                <input name="telephone" placeholder="Your Phone" type="tel" value={phone_number || ""} onChange={(e) => { Setphone_number(e.target.value) }} />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="input-style mb-20">
                                                                <input name="subject" placeholder="Subject" type="text" value={subject || ""} onChange={(e) => { Setsubject(e.target.value) }} />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="textarea-style mb-30">
                                                                <textarea name="message" placeholder="Message" defaultValue={""} value={message || ""} onChange={(e) => { Setmessage(e.target.value) }} />
                                                            </div>
                                                            <button className="submit submit-auto-width" onClick={SubmitHandler}>Send message</button>
                                                        </div>
                                                    </div>
                                                </form>
                                                <p className="form-messege" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 pl-50 d-lg-block d-none">
                                            <img className="border-radius-15 mt-50" src="assets/imgs/page/login-1.png" alt="/" />
                                        </div>
                                    </div><br /><br />

                                    <section className="container mb-50 d-none d-md-block">
                                        <div className="row mb-60">
                                            <div className="col-md-8" style={{ paddingRight: "0px" }}>
                                                <div className="border-radius-15 overflow-hidden">
                                                    {/* <div id="map-panes" className="leaflet-map" /> */}
                                                    <iframe className="leaflet-map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d59507.233368723566!2d72.8498176!3d21.2238336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1669055784304!5m2!1sen!2sin" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                </div>
                                            </div>
                                            <div className="col-md-4" style={{ paddingLeft: "0px" }}>
                                                <div className="contact-div">
                                                    <div><img src="assets/imgs/theme/icons/icon-contact.svg" alt="/" /><span>   (123) 456-7890</span></div><br />
                                                    <div><img src="assets/imgs/theme/icons/icon-email-2.svg" alt="/" /><span>   contact@Evara.com</span></div><br />
                                                    <div><img src="assets/imgs/theme/icons/icon-location.svg" alt="/" /><span>  205 North Michigan Avenue, Suite 810</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <div className="row mb-60">
                                        <div className="col-md-4 mb-4 mb-md-0">
                                            <h4 className="mb-15 text-brand">Office</h4>
                                            205 North Michigan Avenue, Suite 810<br />
                                            Chicago, 60601, USA<br />
                                            <abbr title="Phone">Phone:</abbr> (123) 456-7890<br />
                                            <abbr title="Email">Email: </abbr>contact@Evara.com<br />
                                            <a className="btn btn-sm font-weight-bold text-white mt-20 border-radius-5 btn-shadow-brand hover-up"><i className="fi-rs-marker mr-5" />View map</a>
                                        </div>
                                        <div className="col-md-4 mb-4 mb-md-0">
                                            <h4 className="mb-15 text-brand">Studio</h4>
                                            205 North Michigan Avenue, Suite 810<br />
                                            Chicago, 60601, USA<br />
                                            <abbr title="Phone">Phone:</abbr> (123) 456-7890<br />
                                            <abbr title="Email">Email: </abbr>contact@Evara.com<br />
                                            <a className="btn btn-sm font-weight-bold text-white mt-20 border-radius-5 btn-shadow-brand hover-up"><i className="fi-rs-marker mr-5" />View map</a>
                                        </div>
                                        <div className="col-md-4">
                                            <h4 className="mb-15 text-brand">Shop</h4>
                                            205 North Michigan Avenue, Suite 810<br />
                                            Chicago, 60601, USA<br />
                                            <abbr title="Phone">Phone:</abbr> (123) 456-7890<br />
                                            <abbr title="Email">Email: </abbr>contact@Evara.com<br />
                                            <a className="btn btn-sm font-weight-bold text-white mt-20 border-radius-5 btn-shadow-brand hover-up"><i className="fi-rs-marker mr-5" />View map</a>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="main">
                <section className="newsletter mb-15">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="position-relative newsletter-inner">
                                    <div className="newsletter-content">
                                        <h2 className="mb-20">
                                            Stay home &amp; get your daily <br />
                                            needs from our shop
                                        </h2>
                                        <p className="mb-45">Start You'r Daily Shopping with <span className="text-brand"> Colebrook Mart</span></p>
                                        <form className="form-subcriber d-flex">
                                            <input type="email" placeholder="Your emaill address" />
                                            <button className="btn" type="submit">Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>


            <Footer />
        </div>
    )
}

export default Contact
