import React, { useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'

import CommonService from "../../services/commonService";
import urlConstant from "../../constants/urlConstant";
import { ToasterSuccess, ToasterWarning, ToasterError } from "../../common/toaster";
import { ToastContainer } from "react-toastify";
import { useAppContext } from '../../context/index';

function TicketSupport() {
    let common = new CommonService();
    const { Loding } = useAppContext();


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
    return (
        <div>
            <ToastContainer />
            <Header />
            <main className="main pages">
                <div className="page-header breadcrumb-wrap">
                    <div className="container">
                        <div className="breadcrumb">
                            <a  rel="nofollow"><i className="fi-rs-home mr-5" />Home</a>
                            <span /> Pages <span /> Ticket Support
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
                                                <p className="text-muted mb-30 font-sm">Your email address will not be published. Required fields are marked *</p>
                                                <form className="contact-form-style mt-30" id="contact-form" action="#" method="post">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="input-style mb-20">
                                                                <input name="subject" placeholder="Your subject*" type="text" value={subject || ""} onChange={(e) => { Setsubject(e.target.value) }} />
                                                            </div>
                                                        </div>
                                                        <div className="form-group col-lg-6">
                                                            <div className="custom_select">
                                                                <select className="form-control select-active" value={type || ""} onChange={(e) => { Settype(e.target.value) }}>
                                                                    <option value="null">Select an Type...</option>
                                                                    <option value="0">Product</option>
                                                                    <option value="1">Other</option>
                                                                    
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-group col-lg-6">
                                                            <select className="form-control select-active" value={product_id || ""} onChange={(e) => { Setproduct_id(e.target.value) }} disabled={type == null}>
                                                                <option value="null">Select an Product...</option>
                                                                {/* {
                                                                    ListStates.map((item, i) => {
                                                                        return (
                                                                            <>
                                                                                <option key={i} value={item.id}>{item.name}</option>
                                                                            </>
                                                                        )
                                                                    })
                                                                } */}
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="input-style mb-20">
                                                                <input name="product_id" placeholder="Your Product Id*" type="product_id" value={product_id || ""} onChange={(e) => { Setproduct_id(e.target.value) }} />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="input-style mb-20">
                                                                <input name="type" placeholder="Your Type*" type="text" value={type || ""} onChange={(e) => { Settype(e.target.value) }} />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="input-style mb-20">
                                                                <input name="attachments" type="file" value={attachments || ""} onChange={(e) => { Setattachments(e.target.value) }} />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="textarea-style mb-30">
                                                                <textarea name="details" placeholder="Details*" defaultValue={""} value={details || ""} onChange={(e) => { Setdetails(e.target.value) }} />
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

export default TicketSupport
