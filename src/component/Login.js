import React ,{useState,useEffect} from 'react'
import Footer from './Footer'
import Header from './Header'
import CommonService from "../services/commonService";
import { ToasterSuccess, ToasterError } from "../common/toaster";
import urlConstant from "../constants/urlConstant";
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
function Login() {

  const navigate = useNavigate()
  
  const [id, setId] = useState(0);
  const [Email, SetEmail] = useState();
  const [Password, SetPassword] = useState("");
  const [Code, SetCode] = useState("");
  const [List, SetList] = useState([]);
 

  let common = new CommonService();
    

  const SubmitHandler = async (e) => {
    e.preventDefault();
    ToasterSuccess("Done");

      const data = { Email, Password };
      const LoginData = `${urlConstant.User.UserLogin}`;
      common.httpPost(LoginData,data).then(function (res) {
        debugger 
      if (res) {
        localStorage.setItem('token', res.data.Password)
        
        navigate('/')
        window.location.href = window.location.href
      } else {
        alert('Not valid')
      }
    })
    
  }

  


  // const SubmitHandler1 = () => {
  //   if (id == 0) {
  //       const data = {Email,Password,Code};
  //       try {
  //         const postBussinssUnit = `${urlConstant.Login.PostData}`;
  //         common.httpPost(postBussinssUnit, data);
  //         getdata()
  //         ToasterSuccess("Success...!!");
  //       } catch (error) {
  //         console.log(error);
  //         ToasterError("Error");
  //       }
  //     } else {
  //       const data = {Email,Password,Code};
  //       try {
  //         const postBussinssUnit = `${urlConstant.Login.UpdateData}/${id}`;
  //         common.httpPost(postBussinssUnit, data).then((res) => {
  //           getdata();
  //         });
  //         ToasterSuccess("Success...!!");
  //         setId(0);
  //       } catch (error) {
  //         console.log(error);
  //         ToasterError("Error");
  //       }
  //     }


  // }

  // useEffect(() => {
  //   getdata();
  // }, []);


  // function getdata() {
  //   const getBussinssUnit = `${urlConstant.Login.getData}`;
  //   common.httpGet(getBussinssUnit)
  //     .then(function (res) {
  //       console.log(res);
  //       SetList(res.data.data)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       ToasterError("Error");
  //     });
  // }


  // const deletehandler = async (id) => {
  //   const deleteBussinssUnit = `${urlConstant.Login.DeleteData}/${id}`;
  //   common.httpDelete(deleteBussinssUnit).then((res) => {
  //     getdata();
  //   });
  // };

  // const Edithandler = async (id) => {
  //   const getBussinssUnit = `${urlConstant.Login.FindData}/${id}`;
  //   common.httpGet(getBussinssUnit).then((result) => {
  //     setId(id);
  //     SetEmail(result.data.data.Name);
  //     SetPassword(result.data.data.CreateBy);
  //     SetCode(result.data.data.CreateDate);
  //     console.log(result);
  //   });
  // };

  return (
    <div>
     <ToastContainer/>
        <Header/>

       

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
                    <img className="border-radius-15" src="assets/imgs/page/login-1.png" alt="/"/>
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
                            <input type="text" required name="email" placeholder="Username or Email *"  value={Email} onChange={(e) => { SetEmail(e.target.value)}} />
                            </div>
                            <div className="form-group">
                            <input required type="password" name="password" placeholder="Your password *" value={Password} onChange={(e) => { SetPassword(e.target.value)}} />
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
                            <button type="submit" className="btn btn-heading btn-block hover-up" name="login"    onClick={SubmitHandler}>Log in</button>
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


        <Footer/>
    </div>
  )
}

export default Login
