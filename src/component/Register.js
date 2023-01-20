import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import CommonService from "../services/commonService";
import urlConstant from "../constants/urlConstant";
import { ToasterSuccess, ToasterError , ToasterWarning } from "../common/toaster";
import { ToastContainer } from "react-toastify";
import ReactGoogleLogin from "react-google-login";



function Register() {
  let common = new CommonService();
    
  const [name, SetName] = useState("");
  const [email_or_phone, SetEmail_or_phone] = useState("");
  const [password, SetPassword] = useState("");
//   const [register_by, SetRegister_by] = useState("");

  function SubmitData(e){
    e.preventDefault();
    
    
    if(!name || !email_or_phone || !password)
    {
        ToasterWarning('Please Enter Details')
        return
    }

    const UserData = {
      name: name,
      email_or_phone: email_or_phone,
      password: password,
      register_by:"email"
    };
    
    const UserRagister = `${urlConstant.User.UserRegister}`;
    common.httpPost(UserRagister, UserData).then((res)=>{
      ToasterSuccess("Register Successfully");
      SetEmail_or_phone("");
      SetName("");
      SetPassword("");
    })  
    .catch((error) => {
        console.log(error);
        ToasterError("Not Valid Details");
    });
  }

  const onResponse = (resp) => {
    console.log(resp);
  };

  return (
    <div>
        
        <Header/>
        <ToastContainer />

        <main className="main pages">
        <div className="page-header breadcrumb-wrap">
            <div className="container">
            <div className="breadcrumb">
                <a  rel="nofollow"><i className="fi-rs-home mr-5" />Home</a>
                <span /> Create an Account <span />
            </div>
            </div>
        </div>
        <div className="page-content pt-15 pb-150">
            <div className="container">
            <div className="row">
                <div className="heading_s1">
                    <h1 className="mb-5">Create an Account</h1>
                    <p className="mb-30">Already have an account? <Link to="/Login">Login</Link></p>
                </div>
                <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                    <div className="row">
                        <div className="col-lg-6 col-md-8">
                            <div className="login_wrap widget-taber-content background-white">
                                <div className="padding_eight_all bg-white">
                                {/* <form method="post"> */}
                                    <div className="form-group">
                                        <input type="text" required name="Name" placeholder="Name" value={name} onChange={(e) => {SetName(e.target.value)}}/>
                                    </div>
                                    <div className="form-group">
                                        <input required type="password" name="password" placeholder="Password" value={password} onChange={(e) => {SetPassword(e.target.value)}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8">
                            <div className="form-group">
                                <input type="text" required name="email" placeholder="Email" value={email_or_phone} onChange={(e) => {SetEmail_or_phone(e.target.value)}} />
                            </div>
                            <div className="form-group">    
                                <input required type="password" name="password" placeholder="Confirm password"  value={password} onChange={(e) => {SetPassword(e.target.value)}}  />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-8">
                            <div className="login_wrap widget-taber-content background-white">
                                {/* <div className="payment_option mb-50">
                                    <div className="custome-radio">
                                        <input className="form-check-input" required type="radio" name="payment_option" id="exampleRadios3" defaultChecked />
                                        <label className="form-check-label" htmlFor="exampleRadios3" data-bs-toggle="collapse" data-target="#bankTranfer" aria-controls="bankTranfer">I am a customer</label>
                                    </div>
                                    <div className="custome-radio">
                                        <input className="form-check-input" required type="radio" name="payment_option" id="exampleRadios4" defaultChecked />
                                        <label className="form-check-label" htmlFor="exampleRadios4" data-bs-toggle="collapse" data-target="#checkPayment" aria-controls="checkPayment">I am a vendor</label>
                                    </div>
                                </div> */}
                                <div className="login_footer form-group mb-50">
                                    <div className="chek-form">
                                        <div className="custome-checkbox">
                                        <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox12" defaultValue />
                                        <label className="form-check-label" htmlFor="exampleCheckbox12"><span>I agree to terms &amp; Policy.</span></label>
                                        </div>
                                    </div>
                                </div>
                                <p className="font-xs text-muted"><strong>Note:</strong>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>
                            {/* </form> */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8 mt-20">
                            <div className="form-group mb-30" style={{display: "flex",justifyContent:"space-between"}}>
                                <div style={{display: "flex"}}>
                                    <a href='#' className="btn btn-heading btn-block fb-btn" name="fb" style={{backgroundColor: "#1877f2"}}><img src="assets/imgs/theme/icons/logo-facebook.svg" alt="/"/></a>
                                    <a href='#' className="btn btn-heading btn-block google-btn" name="google" style={{backgroundColor: "#fff"}}><img src="assets/imgs/theme/icons/logo-google.svg" alt="/"/></a>
                                </div>
                                <ReactGoogleLogin
                                clientId="306853955668-5g8ove86u1a1r41ljcil4nkfjf32cfrm.apps.googleusercontent.com" 
                                buttonText="Login with Google"
                                onSuccess={onResponse}
                                onFailure={onResponse}
                                />
                                <div>
                                <button type="submit" style={{borderRadius: "30px",float: "right"}} className="btn btn-fill-out btn-block hover-up font-weight-bold" onClick={SubmitData} name="login">Register</button>
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


        <Footer/>

    </div>
  )
}

export default Register
