import React, { useEffect, useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { useAppContext } from '../../context/index'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import urlConstant from "../../constants/urlConstant";
import { ToasterError, ToasterSuccess } from "../../common/toaster";
import { ToastContainer } from "react-toastify";
import Loding from '../Loding';
import CommonService from "../../services/commonService";
import { useShippingContext } from '../../context/shippingContext';
import Select2 from "react-select2-wrapper";

function Dashboard() {
    let common = new CommonService();
    const { UserName, user_id } = useAppContext();
    const { TrackOrder } = useShippingContext();

    const navigate = useNavigate()
    const SignOut = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");
        localStorage.removeItem("type");
        localStorage.removeItem("user_id");
        localStorage.removeItem("tempid");
        localStorage.removeItem("category");
        localStorage.removeItem("brand");
    }

    const [id, setId] = useState(0);
    const [addressId, setAddressId] = useState(0);
    const [name, SetName] = useState("");
    const [address, SetAddress] = useState("");
    const [email, SetEmail] = useState("");
    const [phone, SetPhone] = useState("");
    const [password, SetPassword] = useState("");
    const [cpassword, SetCPassword] = useState("");
    const [CurrentPassword, SetCurrentPassword] = useState("");
    const [OrdersList, setOrdersList] = useState([]);
    const [UserInfoList, setUserInfoList] = useState([]);
    const [userAddressesList, setUserAddressesList] = useState([]);
    const [TrackOrderId, setTrackOrderId] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [ListStates, setListStates] = useState([]);
    const [ListCountries, setListCountries] = useState([]);
    const [ListCity, setListCity] = useState([]);
    const [state, Setstate] = useState(null);
    const [city, Setcity] = useState("");
    const [Country, SetCountry] = useState("");
    const [PostalCode, SetPostalcode] = useState("");
    // const [DefaultAdd, SetDefaultAddress] = useState("");

    
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

    function GetOrdersList(P_Id) {
        try {
            setIsLoading(true)
            const Data = { user_id: parseInt(user_id) }
            const OrdersData = `${urlConstant.Dashboard.OrdersList}`;
            axios.post(OrdersData, Data, {
                headers: { "Authorization": `Bearer ${localStorage.getItem('access_token')}` }
            }).then((res) => {
                setOrdersList(res.data.data.data);
                setIsLoading(false)
            })
        }
        catch (error) {
            ToasterError("Error")
            setIsLoading(false)
        }
    }

    function GetUserInfo() {
        const GetUserInfo1 = `${urlConstant.User.UserInfo}/${user_id}`;
        common.httpGet(GetUserInfo1).then(function (res) {
            setUserInfoList(res.data.data[0]);
        })
            .catch(function (error) {
                // ToasterWarning(error.message)
                console.log(error);
            });
    }

    function GetUserAddresses() {
        const GetUserAddresses = `${urlConstant.User.UserAddresses}/${user_id}`;
        common.httpGet(GetUserAddresses).then(function (res) {
            setUserAddressesList(res.data.data);
        }).catch(function (error) {
            // ToasterWarning(error.message)
            console.log(error);
        });
    }

    // function editAddress(address_id) {
    const editAddress = async (address_id) => {
        const GetAddress = `${urlConstant.User.UserUpdateAddresses}/`+address_id;
        await common.httpGet(GetAddress).then(function (res) {
            setAddressId(address_id);
            SetAddress(res.data.data.address);
            SetCountry(res.data.data.country_id);
            SetPostalcode(res.data.data.postal_code);
            StatesGet(res.data.data.country_id);
            CityGet(res.data.data.state_id);
            setTimeout(() => {
                Setstate(res.data.data.state_id);
                Setcity(res.data.data.city_id);
            }, 1000);

        }).catch(function (error) {
            // ToasterWarning(error.message)
            console.log(error);
        });
    }

    function deleteAddress(address_id) {
        try {
            setIsLoading(true)
            const Data = { id: address_id }
            const DeleteAddress1 = `${urlConstant.User.UserDeleteAddresses}`;
            axios.post(DeleteAddress1, Data, {
                headers: { "Authorization": `Bearer ${localStorage.getItem('access_token')}` }
            }).then((res) => {
                setIsLoading(false)
                ToasterSuccess("Your address deleted successfully...!!");
                GetUserAddresses();
            })
        } catch (error) {
            setIsLoading(false)
        }
    }

    const AddAddress = async () => {
        try {
            setIsLoading(true)
            const Data = { addressId, userId: user_id, address, Country, state, city, PostalCode, phone }
            const AddAddress1 = `${urlConstant.User.UserAddAddresses}`;
            await axios.post(AddAddress1, Data, {
                headers: { "Authorization": `Bearer ${localStorage.getItem('access_token')}` }
            }).then((res) => {
                setIsLoading(false)
                ToasterSuccess("Your address added successfully...!!");
                GetUserAddresses();
                setAddressId(0);
                SetAddress("");
                SetCountry("");
                SetPostalcode("");
                Setstate("");
                setListStates([]);
                Setcity("");
                setListCity([]);
            })
        } catch (error) {
            setIsLoading(false)
        }
    }

    const ProfileUpdate = async () => {
    // function ProfileUpdate() {
        if (password != cpassword) {
            ToasterError('Not same password')
            return
        }

        try {
            setIsLoading(true)
            const Data = { id: user_id, name, email, password, phone }
            const ProfileUpdate1 = `${urlConstant.User.UserUpdate}`;
           await axios.post(ProfileUpdate1, Data, {
                headers: { "Authorization": `Bearer ${localStorage.getItem('access_token')}` }
            }).then((res) => {
                setIsLoading(false)
                ToasterSuccess("Your detail Updated...!!");
                setOrdersList(res.data.data.data);
            })
        }
        catch (error) {
            // ToasterError("Error")
            setIsLoading(false)
        }
    }
    useEffect(() => {
        if (!user_id) {
            navigate('/')
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        GetOrdersList();
        CountriesGet();
        GetUserInfo();
        GetUserAddresses();
    }, [])
    return (
        <div>
            <Header />
            <ToastContainer />
            {isLoading ? <Loding /> : Dashboard}

            <main className="main pages">
                <div className="page-header breadcrumb-wrap">
                    <div className="container">
                        <div className="breadcrumb">
                            <Link to="/" rel="nofollow"><i className="fi-rs-home mr-5" />Home</Link>
                            <span /> My Account
                        </div>
                    </div>
                </div>
                <div className="page-content pt-150 pb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 m-auto">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="dashboard-menu">
                                            <ul className="nav flex-column" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="dashboard-tab" data-bs-toggle="tab" href="#dashboard" role="tab" aria-controls="dashboard" aria-selected="false"><i className="fi-rs-settings-sliders mr-10" />Dashboard</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="addresses-tab" data-bs-toggle="tab" href="#addresses" role="tab" aria-controls="addresses" aria-selected="false"><i className="fi-rs-settings-sliders mr-10" />My Addresses</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="orders-tab" data-bs-toggle="tab" href="#orders" role="tab" aria-controls="orders" aria-selected="false"><i className="fi-rs-shopping-bag mr-10" />Orders</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="track-orders-tab" data-bs-toggle="tab" href="#track-orders" role="tab" aria-controls="track-orders" aria-selected="false"><i className="fi-rs-shopping-cart-check mr-10" />Track Your Order</a>
                                                </li>
                                                {/* <li className="nav-item">
                                                    <a className="nav-link" id="address-tab" data-bs-toggle="tab" href="#address" role="tab" aria-controls="address" aria-selected="true"><i className="fi-rs-marker mr-10" />My Address</a>
                                                </li> */}
                                                <li className="nav-item">
                                                    <a className="nav-link" id="account-detail-tab" data-bs-toggle="tab" href="#account-detail" role="tab" aria-controls="account-detail" aria-selected="true"><i className="fi-rs-user mr-10" />Account details</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" onClick={SignOut} href="/"><i className="fi-rs-sign-out mr-10" />Logout</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="tab-content account dashboard-content pl-50">
                                            <div className="tab-pane fade active show" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="mb-0">Hello {name || UserInfoList.name}!</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <p>
                                                            From your account dashboard. you can easily check &amp; view your <a href="#">recent orders</a>,<br />
                                                            manage your <a href="#">shipping and billing addresses</a> and <a href="#">edit your password and account details.</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="addresses" role="tabpanel" aria-labelledby="addresses-tab">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="mb-0">My Address</h3>
                                                    </div>
                                                    <div className={userAddressesList.length == 0 ? 'addresses hideAddress' : 'addresses'}>
                                                        <div className="row product-grid-4">
                                                            {
                                                                userAddressesList.map((item, i) => {
                                                                    return (
                                                                        <>
                                                                            <div className="col-lg-1-4 col-md-4 col-12 col-sm-6">
                                                                                <div className="product-cart-wrap userAddresses mb-40 mt-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                                                                    <div className="product-content-wrap">
                                                                                        <div className="product-action-1 edit">
                                                                                            <a className="action-btn"><i className="fi-rs-pencil" onClick={(e) => {editAddress(item.id)}}/></a>
                                                                                        </div>
                                                                                        <div className="product-action-1 delete">
                                                                                            <a className="action-btn"><i className="fi-rs-trash" onClick={(e) => {deleteAddress(item.id)}}/></a>
                                                                                        </div>
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
                                                    <form method="post" name="address">
                                                        <div className="row">
                                                            <div className="form-group col-md-12">
                                                                <label>Address <span className="required">*</span></label>
                                                                <input required value={address} onChange={(e) => { SetAddress(e.target.value) }} className="form-control" name="name" type="text" />
                                                            </div>
                                                            <div className="form-group col-lg-6">
                                                                <div className="custom_select">
                                                                    <label>Country<span className="required">*</span></label>
                                                                    {
                                                                        <Select2 required placeholder="Select Country" name="country" className="form-control select-active" defaultValue={Country} data = {ListCountries} onChange={handleCountryChange}/>
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div className="form-group col-lg-6">
                                                                <div className="custom_select">
                                                                    <label>State<span className="required">*</span></label>
                                                                    {
                                                                        <Select2 required className="form-control select-active" name="state" defaultValue={state} data = {ListStates} onChange={handleStateChange}/>
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div className="form-group col-lg-6">
                                                                <div className="custom_select">
                                                                    <label>City<span className="required">*</span></label>
                                                                    {
                                                                        <Select2 required className="form-control select-active" name="city" defaultValue={city} data = {ListCity} onChange={handleCityChange}/>
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <label>Postal Code<span className="required">*</span></label>
                                                                <input required value={PostalCode} onChange={(e) => { SetPostalcode(e.target.value) }} className="form-control" name="dname" type="text"/>
                                                            </div>
                                                            {/* <div className="form-group">
                                                                <div className="checkbox">
                                                                    <div className="custome-checkbox">
                                                                        <input className="form-check-input" onChange={(e) => { SetDefaultAddress(e.target.value) }} type="checkbox" name="checkbox" id="setDefault" />
                                                                        <label className="form-check-label label_info" data-bs-toggle="collapse" aria-controls="collapsePassword" htmlFor="setDefault"><span>Is this your default address ?</span></label>
                                                                    </div>
                                                                </div>
                                                            </div> */}

                                                            <div className="col-md-12">
                                                                <button type="button" onClick={AddAddress} className="btn btn-fill-out submit font-weight-bold" >Save Change</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="mb-0">Your Orders</h3>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Order</th>
                                                                        <th>Date</th>
                                                                        <th>Status</th>
                                                                        <th>Total</th>
                                                                        <th>Actions</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {
                                                                        OrdersList == '' ?
                                                                            <>
                                                                                <tr >
                                                                                    <td></td>
                                                                                    <td></td>
                                                                                    <td><h2>Oops, no Order in your list</h2></td>
                                                                                    <td></td>
                                                                                    <td></td>
                                                                                </tr></>
                                                                            :
                                                                            OrdersList.map((item, i) => {
                                                                                return (
                                                                                    <>
                                                                                        <tr key={i}>
                                                                                            <td>#{item.id}</td>
                                                                                            <td>{item.delivery_history_date}</td>
                                                                                            <td>{item.delivery_status}</td>
                                                                                            <td>₹{item.grand_total}</td>
                                                                                            <td><Link to={`/OrderDetail?id=${item.id}`}>View</Link></td>
                                                                                        </tr>
                                                                                    </>
                                                                                )
                                                                            })
                                                                    }
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="track-orders" role="tabpanel" aria-labelledby="track-orders-tab">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="mb-0">Orders tracking</h3>
                                                    </div>
                                                    <div className="card-body contact-from-area">
                                                        <p>To track your order please enter your OrderID in the box below and press "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                                                        <div className="row">
                                                            <div className="col-lg-8">
                                                                <div className="contact-form-style mt-30 mb-50">
                                                                    <div className="input-style mb-20">
                                                                        <label>Order ID</label>
                                                                        <input name="order-id" placeholder="Found in your order confirmation" type="text" value={TrackOrderId} onChange={(e)=>{setTrackOrderId(e.target.value)}} />
                                                                    </div>
                                                                    <button className="submit submit-auto-width" onClick={(e)=>{TrackOrder(TrackOrderId)}}>Track</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="address" role="tabpanel" aria-labelledby="address-tab">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="card mb-3 mb-lg-0">
                                                            <div className="card-header">
                                                                <h3 className="mb-0">Billing Address</h3>
                                                            </div>
                                                            <div className="card-body">
                                                                <address>
                                                                    3522 Interstate<br />
                                                                    75 Business Spur,<br />
                                                                    Sault Ste. <br />Marie, MI 49783
                                                                </address>
                                                                <p>New York</p>
                                                                <a href="#" className="btn-small">Edit</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="card">
                                                            <div className="card-header">
                                                                <h5 className="mb-0">Shipping Address</h5>
                                                            </div>
                                                            <div className="card-body">
                                                                <address>
                                                                    4299 Express Lane<br />
                                                                    Sarasota, <br />FL 34249 USA <br />Phone: 1.941.227.4444
                                                                </address>
                                                                <p>Sarasota</p>
                                                                <a href="#" className="btn-small">Edit</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="account-detail" role="tabpanel" aria-labelledby="account-detail-tab">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h5>Account Details</h5>
                                                    </div>
                                                    <div className="card-body">
                                                        <form method="post" name="enq">
                                                            <div className="row">
                                                                <div className="form-group col-md-12">
                                                                    <label>Name <span className="required">*</span></label>
                                                                    <input required value={name || UserInfoList.name} onChange={(e) => { SetName(e.target.value) }} className="form-control" name="name" type="text" />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>Email Address <span className="required">*</span></label>
                                                                    <input required value={email || UserInfoList.email} onChange={(e) => { SetEmail(e.target.value) }} className="form-control" name="email" type="email" />
                                                                </div>
                                                                <div className="form-group col-md-12">
                                                                    <label>Phone<span className="required">*</span></label>
                                                                    <input required value={phone || UserInfoList.phone} onChange={(e) => { SetPhone(e.target.value) }} className="form-control" name="dname" type="text" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="checkbox">
                                                                        <div className="custome-checkbox">
                                                                            <input className="form-check-input" type="checkbox" name="checkbox" id="createaccount" />
                                                                            <label className="form-check-label label_info" data-bs-toggle="collapse" href="#collapsePassword" data-target="#collapsePassword" aria-controls="collapsePassword" htmlFor="createaccount"><span>change your password ?</span></label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="collapsePassword" className="form-group create-account collapse in">
                                                                    <div className="form-group col-md-12">
                                                                        <label>Current Password <span className="required">*</span></label>
                                                                        <input required className="form-control" name="password" type="password" />
                                                                    </div>
                                                                    <div className="form-group col-md-12">
                                                                        <label>New Password <span className="required">*</span></label>
                                                                        <input required className="form-control" name="npassword" type="password" value={password} onChange={(e) => { SetPassword(e.target.value) }} />
                                                                    </div>
                                                                    <div className="form-group col-md-12">
                                                                        <label>Confirm Password <span className="required">*</span></label>
                                                                        <input required className="form-control" name="cpassword" type="password" value={cpassword} onChange={(e) => { SetCPassword(e.target.value) }} />
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-12">
                                                                    <button type="button" onClick={ProfileUpdate} className="btn btn-fill-out submit font-weight-bold" >Save Change</button>
                                                                </div>
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
                    </div>
                </div>
            </main>


            <Footer />
        </div>
    )
}

export default Dashboard