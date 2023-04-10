import React, { useState, useEffect } from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import CommonService from "../../services/commonService";
import urlConstant from "../../constants/urlConstant";
import { ToasterSuccess, ToasterWarning, ToasterError } from "../../common/toaster";
import { ToastContainer } from "react-toastify";
import StripeCheckout from 'react-stripe-checkout';
import { useAppContext } from '../../context/index';
import axios from 'axios';
import { config } from '../../constants/config';
import { useShippingContext } from '../../context/shippingContext';
import Select2 from "react-select2-wrapper";

function Checkout() {
    let common = new CommonService();
    const { Loding, user_id, Logo } = useAppContext();
    const { CreateOrder } = useShippingContext();

    const [CouponCode, SetCouponCode] = useState('');
    const [Name, SetName] = useState("");
    const [Address, SetAddress] = useState("");
    const [state, Setstate] = useState(null);
    const [city, Setcity] = useState("");
    const [Country, SetCountry] = useState("");
    const [PostCode, SetPostCode] = useState("");
    const [PhoneNumber, SetPhoneNumber] = useState("");
    const [Email, SetEmail] = useState("");
    const [AdditionalInfomation, SetAdditionalInfomation] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [ListStates, setListStates] = useState([]);
    const [ListCountries, setListCountries] = useState([]);
    const [ListCity, setListCity] = useState([]);
    const [PaymentTypesList, setPaymentTypesList] = useState([]);
    const [PaymentTypes, setPaymentTypes] = useState("");
    const [Paymentsuccess, setPaymentsuccess] = useState("");
    const [payment_method, setpayment_method] = useState('cod');
    const [GetCart, SetGetCart] = useState([]);
    const [CouponResult, SetCouponResult] = useState(localStorage.getItem('discount'));
    const [AddressList, setAddressList] = useState([]);

    //PayPal
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [orderID, setOrderID] = useState(false);

    // Stripe
    const [name, setname] = useState(100);

    const SubmitHandler = async (e) => {
        e.preventDefault();

        const login_type = payment_method == 'cod' ? 1 : 2;


        if (login_type == 2) {
            if (!PaymentTypes) {
                ToasterWarning('Please select payment method')
                return
            }
        }

        if (!Name || !Address || !state || !city || !PostCode || !PhoneNumber || !Email || !payment_method) {

            ToasterWarning('Please All Enter Details')
            return
        }

        if (PaymentTypes == "Razorpay") {
            openPayModal()
        } else
            if (PaymentTypes == "Stripe") {
                alert("Stripe");
            } else
                if (PaymentTypes == "Paypal") {
                    // alert("Paypal");
                    setShow(true)
                }
        try {
            setIsLoading(true)
            const Data = { CouponCode, name: Name, address: Address, state_id: state, country_id: Country, city_id: city, postal_code: PostCode, phone: PhoneNumber, email: Email, AdditionalInfomation, user_id, payment_method: login_type, total_amount: Sub_Total_price, address_same_type: 1 };
            const ContactData = `${urlConstant.Checkout.PostCheckout}`;
            axios.post(ContactData, Data, {
                headers: { "Authorization": `Bearer ${localStorage.getItem('access_token')}` }
            }).then(() => {
                ToasterSuccess("Success...!!");
                // CreateOrder();
                setIsLoading(false)
            }).catch(
                console.log("error")
            )
        }
        catch (error) {
            ToasterError("Error")
            setIsLoading(false)
        }
    }

    const pay = (e) => {
        setPaymentTypes(e.target.alt)
    }

    
    function GetAllCart() {
        setIsLoading(true)
        const tempid = localStorage.getItem('tempid');
        const cartid = user_id ? `?userId=${user_id}` : `?tempuserid=${tempid}`;
        const GetAllCart = `${urlConstant.Cart.GetCart}${cartid}`;
        common.httpGet(GetAllCart).then(function (res) {
            SetGetCart(res.data.data[0].cart_items);
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
            setPaymentTypesList(res.data);
            setIsLoading(false)
        })
            .catch(function (error) {
                // ToasterError("Error");
                setIsLoading(false)
            });
    }

    function handleCountryChange(e) {
        SetCountry(e.target.value);
        StatesGet(e.target.value);
    };

    function handleStateChange(e) {
        Setstate(e.target.value);
        CityGet(e.target.value);
    };

    const handleCityChange = (e) => {
        Setcity(e.target.value);
    };

    function CountriesGet() {
        setIsLoading(true)
        const listOfCountry = [{
            id : '',
            text : "Select Country",
        }];
        const GetCountries = `${urlConstant.Checkout.Countries}`;
        common.httpGet(GetCountries).then(function (res) {
            const countryList = res.data.data;
            countryList.forEach(function countriesList(item, index){
                const myArray = {
                    id : item.id,
                    text : item.name,
                }
                listOfCountry.push(myArray);
            })
            setListCountries(listOfCountry);
            setIsLoading(false)
        })
            .catch(function (error) {
                // ToasterError("Error");
                setIsLoading(false)
            });
    }

    function CityGet(state_id = null) {
        if(state_id == null) {
            setIsLoading(false)
        }
        // setIsLoading(true)
        const Getcity = `${urlConstant.Checkout.city}/`+state_id;
        // const Getcity = `${urlConstant.Checkout.city}/${state}`;
        common.httpGet(Getcity).then(function (res) {
            let listOfCity = [{
                id : '',
                text : "Select City",
            }];
            const cityList = res.data.data;
            cityList.forEach(function citiesList(item, index){
                const myArray = {
                    id : item.id,
                    text : item.name,
                }
                listOfCity.push(myArray);
            })
            setListCity(listOfCity);
            // setIsLoading(false)
        }).catch(function (error) {
                // ToasterError("Error");
                // setIsLoading(false)
        });
    }

    function StatesGet(country_id = null) {
        if(country_id == null) {
            setIsLoading(false)
        }
        // setIsLoading(true)
        const StatesData = `${urlConstant.Checkout.States}/`+country_id;
        // const StatesData = `${urlConstant.Checkout.States}/${Country}`;
        common.httpGet(StatesData).then(function (res) {
            const listOfState = [{
                id : '',
                text : "Select State",
            }];
            const stateList = res.data.data;
            stateList.forEach(function statesList(item, index){
                const myArray = {
                    id : item.id,
                    text : item.name,
                }
                listOfState.push(myArray);
            })
            setListStates(listOfState);
            // setIsLoading(false)
        }).catch(function (error) {
                // ToasterError("Error");
                // setIsLoading(false)
        });
    }


    function ApplyCoupon(CouponCode) {
        if (!CouponCode) {
            ToasterWarning('Please Enter Coupon Code')
            return
        }
        try {
            setIsLoading(true)
            const Data = { coupon_code: CouponCode, user_id: parseInt(user_id) }
            const CouponData = `${urlConstant.ApplyCoupon.PostApplyCoupon}`;
            axios.post(CouponData, Data, {
                headers: { "Authorization": `Bearer ${localStorage.getItem('access_token')}` }
            }).then((res) => {
                // ToasterSuccess("Success...!!");
                ToasterSuccess(res.data.message);
                SetCouponResult(res.data.discount);
                localStorage.setItem('discount', res.data.discount);
                setIsLoading(false)
            })
        }
        catch (error) {
            ToasterError("Error")
        }
    }

    function CouponRemove(CouponCode) {
        try {
            setIsLoading(true)
            const Data = { user_id: parseInt(user_id) }
            const CouponData = `${urlConstant.ApplyCoupon.RemoveCoupon}`;
            axios.post(CouponData, Data, {
                headers: { "Authorization": `Bearer ${localStorage.getItem('access_token')}` }
            }).then((res) => {
                ToasterSuccess(res.data.message);
                localStorage.removeItem('discount');
                setIsLoading(false)
                window.location.href = window.location.href
            })
        }
        catch (error) {
            ToasterError("Error")
        }
    }

    const Sub_Total_price = GetCart.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0);

    //RazorPay
    const options = {
        key: config.RazorPayKey,
        amount: (Sub_Total_price - CouponResult) * 100,
        name: 'colebrook',
        description: 'some description',
        image: 'https://colebrooknow.com/admin/public/uploads/all/Frame.svg',
        handler: function (response) {
            // console.log(response.razorpay_payment_id);
            setPaymentsuccess(response.razorpay_payment_id)
        },
        prefill: {
            name: 'vikas',
            contact: '735900265',
            email: 'vikas@gmail.com'
        },
        notes: {
            address: 'some address'
        },
        theme: {
            color: 'blue',
            hide_topbar: false
        }
    };

    const openPayModal = () => {
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    };
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    //PayPal
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: "Sunflower",
                    amount: {
                        currency_code: "USD",
                        value: Sub_Total_price - CouponResult,
                    },
                },
            ],
        }).then((orderID) => {
            setOrderID(orderID);
            return orderID;
        });
    };
    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
        });
    };
    useEffect(() => {
        if (success) {
            alert("Payment successful!!");
            console.log('Order successful . Your order id is--', orderID);
        }
    }, [success]);


    //Stripe
    const priceForStripe = name * 100;
    const publishableKey = config.StripeKey;

    const onToken = (token, payment_methods) => {
        // console.log(payment_methods);
        console.log(token);
        alert('Payment Succesful!');
    };

    function GetaddressList() {
        setIsLoading(true)
        const addressData = `${urlConstant.Checkout.addressList}/`+parseInt(user_id);
        // const addressData = `${urlConstant.Checkout.addressList}`;
        common.httpGet(addressData).then(function (res) {
            // const stateList = res.data.data;
            // axios.get(addressData, Data, {
            //     headers: { "Authorization": `Bearer ${localStorage.getItem('access_token')}` }
            // }).then((res) => {
                const addList = res.data.data;
                console.log(addList);
                setAddressList(res.data.data);
                setIsLoading(false)
            // })
            
        }).catch(function (error) {
            ToasterError("Error");
            setIsLoading(false)
        });
    }
    
    
    useEffect(() => {
        GetPaymentTypes();
        CountriesGet();
        GetaddressList();
        // StatesGet();
        // CityGet();
        GetAllCart();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [Country, state])

    return (
        <div>
            {isLoading ? <Loding /> : Checkout}
            <Header />
            <ToastContainer />
            {/* <link rel="stylesheet" href="https://unpkg.com/react-select/dist/react-select.css"></link> */}
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
                            <Link to="/ShopProduct" className="btn btn-fill-out btn-block mt-30">←  Continue Shopping</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="row mb-50">
                                {/* <div className="col-lg-6 mb-sm-15 mb-lg-0 mb-md-3">
                                    <div className="toggle_info">
                                        <span><i className="fi-rs-user mr-10" /><span className="text-muted font-lg">Already have an account?</span> <Link to="/Login" className="collapsed font-lg" >Click here to login</Link></span>
                                    </div>
                                </div> */}
                                <div className="col-lg-6 apply-coupon">
                                    <input type="text" placeholder="Enter Coupon Code..." value={CouponCode} onChange={(e) => { SetCouponCode(e.target.value) }} />
                                    <button className="btn btn-md button-size" onClick={() => { ApplyCoupon(CouponCode) }}>Apply Coupon</button>
                                </div>
                            </div>
                            <div className="row">
                                <h4 className="mb-30">My Address</h4>
                                <div className={AddressList.length == 0 ? 'addresses hideAddress' : 'addresses'}>
                                    <div className="row product-grid-4">
                                        {
                                            AddressList.map((item, i) => {
                                                return (
                                                    <>
                                                        <div className="col-lg-1-4 col-md-4 col-12 col-sm-6">
                                                            <div className="product-cart-wrap userAddresses mb-40 mt-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                                                <div className="product-content-wrap">
                                                                    {/* <div className="product-action-1 edit">
                                                                        <a className="action-btn"><i className="fi-rs-pencil" onClick={(e) => {editAddress(item.id)}}/></a>
                                                                    </div>
                                                                    <div className="product-action-1 delete">
                                                                        <a className="action-btn"><i className="fi-rs-trash" onClick={(e) => {deleteAddress(item.id)}}/></a>
                                                                    </div> */} 
                                                                    <h2>{item.address}, {item.city_name}, {item.state_name}, {item.country_name} - {item.postal_code}</h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <h4 className="mb-30">Billing Details</h4>
                                <form method="post">
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <input type="text" required name="name" placeholder="Full name *" value={Name || ""} onChange={(e) => { SetName(e.target.value) }} />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input type="text" name="billing_address" required placeholder="Address*" value={Address || ""} onChange={(e) => { SetAddress(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="row shipping_calculator">
                                        <div className="form-group col-lg-6">
                                            <div className="custom_select">
                                                {
                                                    <Select2 className="form-control select-active" defaultValue={Country} data = {ListCountries} onChange={handleCountryChange}/>
                                                }
                                            </div>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <div className="custom_select">
                                                {
                                                    <Select2 className="form-control select-active" defaultValue={state} data = {ListStates} onChange={handleStateChange}/>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-lg-6">
                                            <div className="custom_select cityDropdown ">
                                                {
                                                    <Select2 className="form-control select-active" defaultValue={city} data = {ListCity} onChange={handleCityChange}/>
                                                }
                                            </div>
                                            {/* <input required type="text" name="city" placeholder="City / Town *" value={city || ""} onChange={(e) => { Setcity(e.target.value) }} /> */}

                                            {/* <select className="form-control select-active" value={city || ""} onChange={(e) => { Setcity(e.target.value) }}>
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
                                            </select> */}
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
                                            <input required type="phone" maxLength={10} name="phone" placeholder="Phone *" value={PhoneNumber || ""} onChange={(e) => { SetPhoneNumber(e.target.value.replace(/\D/g, '')) }} />
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <input required type="text" name="email" placeholder="Email address *" value={Email || ""} onChange={(e) => { SetEmail(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="form-group mb-30">
                                        <textarea rows={5} placeholder="Additional information" defaultValue={""} value={AdditionalInfomation || ""} onChange={(e) => { SetAdditionalInfomation(e.target.value) }} />
                                    </div>
                                    {/* <div className="form-group">
                                        <div className="checkbox">
                                            <div className="custome-checkbox">
                                                <input className="form-check-input" type="checkbox" name="checkbox" id="createaccount" />
                                                <label className="form-check-label label_info" data-bs-toggle="collapse" href="#collapsePassword" data-target="#collapsePassword" aria-controls="collapsePassword" htmlFor="createaccount"><span>Create an account?</span></label>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="ship_detail">
                                        <div className="form-group">
                                            <div className="chek-form">
                                                <div className="custome-checkbox">
                                                    <input className="form-check-input" type="checkbox" name="checkbox" id="differentaddress" />
                                                    <label className="form-check-label label_info" data-bs-toggle="collapse" data-target="#collapseAddress" href="#collapseAddress" aria-controls="collapseAddress" htmlFor="differentaddress"><span>Ship to a different address?</span></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="collapseAddress" className="different_address collapse in">
                                            <div className="row">
                                                <div className="form-group col-lg-6">
                                                    <input type="text" required name="name" placeholder="Full name *" value={Name || ""} onChange={(e) => { SetName(e.target.value) }} />
                                                </div>
                                                <div className="form-group col-lg-6">
                                                    <input type="text" name="billing_address" required placeholder="Address*" value={Address || ""} onChange={(e) => { SetAddress(e.target.value) }} />
                                                </div>
                                            </div>
                                            <div className="row shipping_calculator">
                                                <div className="form-group col-lg-6">
                                                    <div className="custom_select">
                                                        {
                                                            <Select2 className="form-control select-active" defaultValue="" data = {ListCountries} onChange={handleCountryChange}/>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="form-group col-lg-6">
                                                    <div className="custom_select">
                                                        {
                                                            <Select2 className="form-control select-active" defaultValue="" data = {ListStates} onChange={handleStateChange}/>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-lg-6">
                                                    {/* <input required type="text" name="city" placeholder="City / Town *" value={city || ""} onChange={(e) => { Setcity(e.target.value) }} /> */}
                                                    <div className="custom_select cityDropdown">
                                                        {
                                                            <Select2 className="form-control select-active" defaultValue="" data = {ListCity} onChange={handleCityChange}/>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="form-group col-lg-6">
                                                    <input required type="text" name="zipcode" placeholder="Postcode / ZIP *" value={PostCode || ""} onChange={(e) => { SetPostCode(e.target.value) }} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-lg-6">
                                                    <input required type="phone" maxLength={10} name="phone" placeholder="Phone *" value={PhoneNumber || ""} onChange={(e) => { SetPhoneNumber(e.target.value.replace(/\D/g, '')) }} />
                                                </div>
                                                <div className="form-group col-lg-6">
                                                    <input required type="text" name="email" placeholder="Email address *" value={Email || ""} onChange={(e) => { SetEmail(e.target.value) }} />
                                                </div>
                                            </div>
                                            <div className="form-group mb-30">
                                                <textarea rows={5} placeholder="Additional information" defaultValue={""} value={AdditionalInfomation || ""} onChange={(e) => { SetAdditionalInfomation(e.target.value) }} />
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
                                                GetCart.map((item, i) => {
                                                    const { product_thumbnail_image, price, variation, product_name, currency_symbol, quantity } = item;
                                                    return (
                                                        <>
                                                            <tr key={i}>
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
                                                    <h4 className="text-brand text-end">₹{Sub_Total_price}</h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="cart_total_label">
                                                    <h6 className="text-muted">Shipping</h6>
                                                </td>
                                                <td className="cart_total_amount">
                                                    <h5 className="text-heading text-end">Free </h5></td></tr> <tr>
                                                <td className="cart_total_label">
                                                    <h6 className="text-muted">Discount</h6>
                                                </td>
                                                <td className="cart_total_amount">
                                                    <h5 className="text-heading text-end">- {CouponResult == null ? "₹0" : "₹" + CouponResult}</h5></td></tr>
                                            <tr>
                                                <td className="cart_total_label">
                                                    <h6 className="text-muted"></h6>
                                                </td>
                                                <td className="cart_total_amount">
                                                    <a><p className="text-danger text-end" onClick={CouponRemove}>{CouponResult ? "Remove Coupon" : ""}</p></a>
                                                </td></tr>
                                            <tr>
                                                <td scope="col" colSpan={2}>
                                                    <div className="divider-2 mt-10 mb-10" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="cart_total_label">
                                                    <h6 className="text-muted">Total</h6>
                                                </td>
                                                <td className="cart_total_amount">
                                                    <h4 className="text-brand text-end">₹{Sub_Total_price - CouponResult}</h4>
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
                                        <input className="form-check-input" required type="radio" name="payment_option" id="cod" value="cod" checked={payment_method === 'cod'} onChange={(e) => { setpayment_method(e.target.value) }} />
                                        <label className="form-check-label" htmlFor="cod" data-bs-toggle="collapse" data-target="#checkPayment" aria-controls="checkPayment">Cash on delivery</label>
                                    </div>
                                    <div className="custome-radio">
                                        <input className="form-check-input" required type="radio" name="payment_option" id="online" value="online" checked={payment_method === 'online'} onChange={(e) => { setpayment_method(e.target.value) }} />
                                        <label className="form-check-label" htmlFor="online" data-bs-toggle="collapse" data-target="#paypal" aria-controls="paypal">Online Getway</label>
                                    </div>
                                </div>
                                {
                                    payment_method == "online" ? <div className="payment-logo d-flex">
                                        {PaymentTypesList.map((item, i) => {
                                            return (
                                                <>
                                                    <div style={{ padding: "0px" }} key={i}>
                                                        <a>
                                                            <img className="mr-15" src={item.image} alt={item.name} width="90px" onClick={(e) => { pay(e) }} style={{ border: PaymentTypes == item.name ? "3px solid black" : "", padding: "2px" }} />
                                                        </a>
                                                    </div>
                                                </>
                                            )
                                        })}
                                    </div> : null
                                }
                                <PayPalScriptProvider options={{ "client-id": config.PayPal_client_Id }}>
                                    {show ? (
                                        <PayPalButtons
                                            style={{ layout: "vertical" }}
                                            createOrder={createOrder}
                                            onApprove={onApprove}
                                        />
                                    ) : null}
                                </PayPalScriptProvider>

                                <a className="btn btn-fill-out btn-block mt-30" style={{ display: show == true ? "none" : "" }} onClick={SubmitHandler}>Place an Order<i className="fi-rs-sign-out ml-15" /></a>

                                {/* <a className="btn btn-fill-out btn-block mt-30">

                                    <StripeCheckout
                                        label='Pay Now'
                                        name='Colebrooknow'
                                        billingAddress
                                        shippingAddress
                                        image={Logo}
                                        description={`Your total is  ₹${Sub_Total_price - CouponResult}`}
                                        amount={priceForStripe}
                                        panelLabel='stripe'
                                        token={onToken}
                                        stripeKey={publishableKey}
                                    />
                                    <i className="fi-rs-sign-out ml-15" />
                                </a> */}

                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />

        </div>

    )
}

export default Checkout;