import React, { useState,useEffect } from 'react'
import Footer from '../Footer'
import Header from '../Header'

import CommonService from "../../services/commonService";
import urlConstant from "../../constants/urlConstant";
import { ToasterSuccess, ToasterWarning, ToasterError } from "../../common/toaster";
import { ToastContainer } from "react-toastify";
import { useAppContext } from '../../context/index';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function OrderDetail() {
    let common = new CommonService();
    const { Loding } = useAppContext();
    const { id } = useParams();


    const [subject, Setsubject] = useState();
    const [attachments, Setattachments] = useState("");
    const [product_id, Setproduct_id] = useState("");
    const [type, Settype] = useState("");
    const [details, Setdetails] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const SubmitHandler = async (e) => {
        e.preventDefault();
        if (!subject || !attachments || !product_id || !type || !details) {
            ToasterWarning('Please All Enter Details')
            return
        }
        try {
            const data = { subject, attachments, product_id, type, details };
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

    function OrderDetail() {
        try {
          const Data = { order_id:`${id}` }
          const GetOrderDetail = `${urlConstant.Dashboard.OrderDetail}`;
          axios.post(GetOrderDetail, Data, {
            headers: { "Authorization": `Bearer ${localStorage.getItem('access_token')}` }
          }).then((res) => {
            console.log(res);
          })
    
        }
        catch (error) {
          ToasterError("Error")
        }
      }
    

    useEffect(() => {
        OrderDetail();
    }, [])
    return (
        <div>
            <ToastContainer />
            <Header />
            <main className="main pages">
                <div className="page-header breadcrumb-wrap">
                    <div className="container">
                        <div className="breadcrumb">
                            <a  rel="nofollow"><i className="fi-rs-home mr-5" />Home</a>
                            <span /> Pages <span />Order Detail
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
                                                <h2 className="mb-10">Ticket Support </h2>
                                                <form className="contact-form-style mt-30" id="contact-form" action="#" method="post">
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="input-style mb-20">
                                                            <h6 style={{ padding:"10px" }}>Subject :</h6>
                                                                <input name="subject" placeholder="Your subject*" type="text" value={subject || ""} onChange={(e) => { Setsubject(e.target.value) }} />
                                                            </div>
                                                        </div>
                                                    
                                                       
                                                        
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="input-style mb-20">
                                                                <h6 style={{ padding:"10px" }}>Attachments :</h6>
                                                                <input name="attachments" type="file" value={attachments || ""} onChange={(e) => { Setattachments(e.target.value) }} style={{padding:"18px" }} />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="textarea-style mb-30">
                                                                <h6 style={{ padding:"10px" }}>Details :</h6>
                                                                <textarea name="details" placeholder="Details*" defaultValue={""} value={details || ""} onChange={(e) => { Setdetails(e.target.value) }} />
                                                            </div>
                                                            <button className="submit submit-auto-width" onClick={SubmitHandler}>Submit</button>
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
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default OrderDetail
