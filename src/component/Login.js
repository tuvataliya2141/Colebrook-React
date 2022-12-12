import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import CommonService from "../services/commonService";
import { ToasterSuccess, ToasterError } from "../common/toaster";
import urlConstant from "../constants/urlConstant";
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import axios from 'axios'
function Login() {

    const navigate = useNavigate()
    const [email, SetEmail] = useState();
    const [password, SetPassword] = useState("");



    const userId = localStorage.getItem('user')
    useEffect(() => {
        if (userId) {
            navigate('/')
        }
    }, [])


    let common = new CommonService();
    const SubmitHandler = async (e) => {
        e.preventDefault();
        const data = { email, password };
        const LoginData = `${urlConstant.User.UserLogin}`;
        await common.httpPost(LoginData, data).then((res) => {
            if (res) {
                ToasterSuccess("Login Successfully");
                localStorage.setItem('access_token', res.data.access_token)
                localStorage.setItem('user', res.data.user.name)
                localStorage.setItem('type', res.data.user.type)

            } else {
                ToasterError("Not Valid Details");
            }
        })
        .catch((error) => {
            console.log(error);
            ToasterError("Not Valid Details");
        });

    }


    return (
        <div>
            <ToastContainer />
            <Header />



            <main className="main pages">
                <div className="page-header breadcrumb-wrap">
                    <div className="container">
                        <div className="breadcrumb">
                            <a href="index.html" rel="nofollow"><i className="fi-rs-home mr-5" />Home</a>
                            <span /> Pages <span /> My Account
                        </div>
                    </div>
                </div>
                <div className="page-content pt-150 pb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                                <div className="row">
                                    <div className="col-lg-6 pr-30 d-none d-lg-block">
                                        <img className="border-radius-15" src="assets/imgs/page/login-1.png" alt="/" />
                                    </div>
                                    <div className="col-lg-6 col-md-8">
                                        <div className="login_wrap widget-taber-content background-white">
                                            <div className="padding_eight_all bg-white">
                                                <div className="heading_s1">
                                                    <h1 className="mb-5">Login</h1>
                                                    <p className="mb-30">Don't have an account? <Link to="/Register">Create here</Link></p>
                                                </div>
                                                <form>
                                                    <div className="form-group">
                                                        <input type="text" required name="email" placeholder="Username or Email *" value={email} onChange={(e) => { SetEmail(e.target.value) }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <input required type="password" name="password" placeholder="Your password *" value={password} onChange={(e) => { SetPassword(e.target.value) }} />
                                                    </div>

                                                    <div className="login_footer form-group mb-50">
                                                        <div className="chek-form">
                                                            <div className="custome-checkbox">
                                                                <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" defaultValue />
                                                                <label className="form-check-label" htmlFor="exampleCheckbox1"><span>Remember me</span></label>
                                                            </div>
                                                        </div>
                                                        <a className="text-muted" href="#">Forgot password?</a>
                                                    </div>
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-heading btn-block hover-up" name="login" onClick={SubmitHandler}>Log in</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default Login
