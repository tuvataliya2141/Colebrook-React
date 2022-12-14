import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import CommonService from "../../services/commonService";
import urlConstant from "../../constants/urlConstant";
import { ToasterSuccess, ToasterWarning, ToasterError } from "../../common/toaster";
import { ToastContainer } from "react-toastify";
import { useAppContext } from '../../context/index';

function Checkout() {
    let common = new CommonService();
    const { Loding, user_id, ApplyCoupon } = useAppContext();

    const [CouponCode, SetCouponCode] = useState('');
    const [FirstName, SetFirstName] = useState("");
    const [LastName, SetLastName] = useState("");
    const [Address1, SetAddress1] = useState("");
    const [Address2, SetAddress2] = useState("");
    const [state, Setstate] = useState(null);
    const [city, Setcity] = useState("");
    const [Country, SetCountry] = useState("");
    const [PostCode, SetPostCode] = useState("");
    const [PhoneNumber, SetPhoneNumber] = useState("");
    const [Email, SetEmail] = useState("");
    const [company, Setcompany] = useState("");
    const [AdditionalInfomation, SetAdditionalInfomation] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [ListCart, setListCart] = useState([]);
    const [ListStates, setListStates] = useState([]);
    const [ListCountries, setListCountries] = useState([]);
    const [ListCity, setListCity] = useState([]);
    const [PaymentTypes, setPaymentTypes] = useState([]);

    const SubmitHandler = async (e) => {
        e.preventDefault();

        if (!FirstName || !LastName || !Address1 || !Address2 || !state || !city || !PostCode || !PhoneNumber || !Email) {
            ToasterWarning('Please All Enter Details')
            return
        }

        try {
            const data = { CouponCode, FirstName, LastName, Address1, Address2, state, Country, city, PostCode, PhoneNumber, Email, company, AdditionalInfomation };
            const ContactData = `${urlConstant.Checkout.PostCheckout}`;
            await common.httpPost(ContactData, data).then(() => {
                ToasterSuccess("Success...!!");
                setIsLoading(false)
            })
        }
        catch (error) {
            //ToasterError("Error")
            setIsLoading(false)
        }

    }

    function GetCart() {
        setIsLoading(true)
        const GetAllCart = `${urlConstant.Cart.GetCart}?userId=${user_id}`;
        common.httpGet(GetAllCart).then(function (res) {
            setListCart(res.data.data[0].cart_items);
            setIsLoading(false)
        })
            .catch(function (error) {
                // ToasterError("Error");
                setIsLoading(false)
            });
    }

    function GetPaymentTypes() {
        setIsLoading(true)
        const PaymentTypes = `${urlConstant.Checkout.GetPaymentTypes}`;
        common.httpGet(PaymentTypes).then(function (res) {
            setPaymentTypes(res.data);
            setIsLoading(false)
        })
            .catch(function (error) {
                // ToasterError("Error");
                setIsLoading(false)
            });
    }

    function CountriesGet() {
        setIsLoading(true)
        const GetCountries = `${urlConstant.Checkout.Countries}`;
        common.httpGet(GetCountries).then(function (res) {
            setListCountries(res.data.data);
            setIsLoading(false)
        })
            .catch(function (error) {
                // ToasterError("Error");
                setIsLoading(false)
            });
    }

    function CityGet() {
        setIsLoading(true)

        const Getcity = `${urlConstant.Checkout.city}/${state}`;
        common.httpGet(Getcity).then(function (res) {
            setListCity(res.data.data);
            setIsLoading(false)
        })
            .catch(function (error) {
                // ToasterError("Error");
                setIsLoading(false)
            });
    }

    function StatesGet() {

        setIsLoading(true)
        const StatesData = `${urlConstant.Checkout.States}/${Country}`;
        common.httpGet(StatesData).then(function (res) {
            setListStates(res.data.data);
            setIsLoading(false)
        })
            .catch(function (error) {
                // ToasterError("Error");
                setIsLoading(false)
            });
    }

    const Sub_Total_price = ListCart.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)

    useEffect(() => {
        GetCart();
        GetPaymentTypes();
        CountriesGet();
        StatesGet();
        CityGet();
    }, [Country, state])

    return (
        <div>
            {isLoading ? <Loding /> : Checkout}
            <Header />
            <ToastContainer />
            <main className="main">
                <div className="page-header breadcrumb-wrap">
                    <div className="container">
                        <div className="breadcrumb">
                            <a rel="nofollow"><i className="fi-rs-home mr-5" />Home</a>
                            <span /> Shop
                            <span /> Checkout
                        </div>
                    </div>
                </div>
                <div className="container mb-80 mt-50">
                    <div className="row">
                        <div className="col-lg-10 mb-40">
                            <h1 className="heading-2 mb-10">Checkout</h1>
                            <div className="d-flex justify-content-between">
                                <h6 className="text-body">There are <span className="text-brand">3</span> products in your cart</h6>
                            </div>
                        </div>
                        <div className="col-lg-2 mb-40" style={{ textAlign: "end" }}>
                            <a href="#" className="btn btn-fill-out btn-block mt-30">???  Continue Shopping</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="row mb-50">
                                <div className="col-lg-6 mb-sm-15 mb-lg-0 mb-md-3">
                                    <div className="toggle_info">
                                        <span><i className="fi-rs-user mr-10" /><span className="text-muted font-lg">Already have an account?</span> <Link to="/Login" className="collapsed font-lg" >Click here to login</Link></span>
                                    </div>
                                </div>
                                <div className="col-lg-6 apply-coupon">
                                    <input type="text" placeholder="Enter Coupon Code..." value={CouponCode} onChange={(e) => { SetCouponCode(e.target.value) }} />
                                    <button className="btn btn-md" onClick={() => { ApplyCoupon(CouponCode) }}>Apply Coupon</button>
                                </div>
                            </div>
                            <div className="row">
                                <h4 className="mb-30">Billing Details</h4>
                                <form method="post">
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <input type="text" required name="fname" placeholder="First name *" value={FirstName || ""} onChange={(e) => { SetFirstName(e.target.value) }} />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="text" required name="lname" placeholder="Last name *" value={LastName || ""} onChange={(e) => { SetLastName(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <input type="text" name="billing_address" required placeholder="Address 1 *" value={Address1 || ""} onChange={(e) => { SetAddress1(e.target.value) }} />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="text" name="billing_address2" required placeholder="Address line 2 *" value={Address2 || ""} onChange={(e) => { SetAddress2(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="row shipping_calculator">
                                        <div className="form-group col-lg-6">
                                            <div className="custom_select">
                                                <select className="form-control select-active" value={Country || ""} onChange={(e) => { SetCountry(e.target.value) }}>
                                                    <option value="null">Select an Country...</option>
                                                    {
                                                        ListCountries.map((item, i) => {
                                                            return (
                                                                <>
                                                                    <option key={i} value={item.id}>{item.name}</option>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <select className="form-control select-active" value={state || ""} onChange={(e) => { Setstate(e.target.value) }} disabled={Country == null || ListStates.length == 0}>
                                                <option value="null">Select an State...</option>
                                                {
                                                    ListStates.map((item, i) => {
                                                        return (
                                                            <>
                                                                <option key={i} value={item.id}>{item.name}</option>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            {/* <input required type="text" name="city" placeholder="City / Town *" value={city || ""} onChange={(e) => { Setcity(e.target.value) }} /> */}

                                            <select className="form-control select-active" value={city || ""} onChange={(e) => { Setcity(e.target.value) }} disabled={state == null || ListCity.length == 0}>
                                                <option value="null">Select an city...</option>
                                                {
                                                    ListCity.map((item, i) => {
                                                        return (
                                                            <>
                                                                <option key={i} value={item.id}>{item.name}</option>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input required type="text" name="zipcode" placeholder="Postcode / ZIP *" value={PostCode || ""} onChange={(e) => { SetPostCode(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        {/* <div className="form-group col-lg-6">
                                            <input required type="text" name="cname" placeholder="Company Name" value={company || ""} onChange={(e) => { Setcompany(e.target.value) }} />
                                        </div> */}
                                        <div className="form-group col-lg-6">
                                            <input required type="text" name="phone" placeholder="Phone *" value={PhoneNumber || ""} onChange={(e) => { SetPhoneNumber(e.target.value) }} />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input required type="text" name="email" placeholder="Email address *" value={Email || ""} onChange={(e) => { SetEmail(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="form-group mb-30">
                                        <textarea rows={5} placeholder="Additional information" defaultValue={""} value={AdditionalInfomation || ""} onChange={(e) => { SetAdditionalInfomation(e.target.value) }} />
                                    </div>
                                    <div className="form-group">
                                        <div className="checkbox">
                                            <div className="custome-checkbox">
                                                <input className="form-check-input" type="checkbox" name="checkbox" id="createaccount" />
                                                <label className="form-check-label label_info" data-bs-toggle="collapse" href="#collapsePassword" data-target="#collapsePassword" aria-controls="collapsePassword" htmlFor="createaccount"><span>Create an account?</span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ship_detail">
                                        <div className="form-group">
                                            <div className="chek-form">
                                                <div className="custome-checkbox">
                                                    <input className="form-check-input" type="checkbox" name="checkbox" id="differentaddress" />
                                                    <label className="form-check-label label_info" data-bs-toggle="collapse" data-target="#collapseAddress" href="#collapseAddress" aria-controls="collapseAddress" htmlFor="differentaddress"><span>Ship to a different address?</span></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="border p-40 cart-totals ml-30 mb-50">
                                <div className="d-flex align-items-end justify-content-between mb-30">
                                    <h4>Your Order</h4>
                                    <h6 className="text-muted">Subtotal</h6>
                                </div>
                                <div className="divider-2 mb-30" />
                                <div className="table-responsive order_table checkout">
                                    <table className="table no-border">
                                        <tbody>
                                            {
                                                ListCart.map((item, i) => {
                                                    const { product_thumbnail_image, price, variation, product_name, currency_symbol, quantity } = item;
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td className="image product-thumbnail"><img src={product_thumbnail_image} alt={product_thumbnail_image} /></td>
                                                                <td>
                                                                    <h6 className="w-160 mb-5"><a className="text-heading">{product_name}</a></h6>
                                                                    <div className="product-rate-cover">
                                                                        <div className="product-rate d-inline-block">
                                                                            <div className="product-rating" style={{ width: '90%' }}>
                                                                            </div>
                                                                        </div>
                                                                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h6 className="text-muted pl-20 pr-20">x {quantity}</h6>
                                                                </td>
                                                                <td>
                                                                    <h4 className="text-brand">{currency_symbol + price * quantity}</h4>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    <table className="table no-border">
                                        <tbody>
                                            <tr>
                                                <td scope="col" colSpan={2}>
                                                    <div className="divider-2 mt-10 mb-10" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="cart_total_label">
                                                    <h6 className="text-muted">Subtotal</h6>
                                                </td>
                                                <td className="cart_total_amount">
                                                    <h4 className="text-brand text-end">??? {Sub_Total_price}</h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="cart_total_label">
                                                    <h6 className="text-muted">Shipping</h6>
                                                </td>
                                                <td className="cart_total_amount">
                                                    <h5 className="text-heading text-end">Free </h5></td></tr> <tr>
                                                <td className="cart_total_label">
                                                    <h6 className="text-muted">Estimate for</h6>
                                                </td>
                                                <td className="cart_total_amount">
                                                    <h5 className="text-heading text-end">United Kingdom </h5></td></tr> <tr>
                                                <td scope="col" colSpan={2}>
                                                    <div className="divider-2 mt-10 mb-10" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="cart_total_label">
                                                    <h6 className="text-muted">Total</h6>
                                                </td>
                                                <td className="cart_total_amount">
                                                    <h4 className="text-brand text-end">??? {Sub_Total_price}</h4>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="payment ml-30">
                                <h4 className="mb-30">Payment</h4>
                                <div className="payment_option">
                                    {/* <div className="custome-radio">
                                        <input className="form-check-input" required type="radio" name="payment_option" id="exampleRadios3" defaultChecked />
                                        <label className="form-check-label" htmlFor="exampleRadios3" data-bs-toggle="collapse" data-target="#bankTranfer" aria-controls="bankTranfer">Direct Bank Transfer</label>
                                    </div> */}
                                    <div className="custome-radio">
                                        <input className="form-check-input" required type="radio" name="payment_option" id="cod" />
                                        <label className="form-check-label" htmlFor="cod" data-bs-toggle="collapse" data-target="#checkPayment" aria-controls="checkPayment">Cash on delivery</label>
                                    </div>
                                    <div className="custome-radio">
                                        <input className="form-check-input" required type="radio" name="payment_option" id="online" />
                                        <label className="form-check-label" htmlFor="online" data-bs-toggle="collapse" data-target="#paypal" aria-controls="paypal">Online Getway</label>
                                    </div>
                                </div>
                                <div className="payment-logo d-flex">
                                    {PaymentTypes.map((item, i) => {
                                        return (
                                            <>
                                                <div style={{ padding: "0px" }}>
                                                    <a>
                                                        <img className="mr-15" src={item.image} alt="/" width="70px" />
                                                    </a>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                                <a className="btn btn-fill-out btn-block mt-30" onClick={SubmitHandler}>Place an Order<i className="fi-rs-sign-out ml-15" /></a>
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

export default Checkout;