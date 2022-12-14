import React, { useState, useEffect } from "react";
import Footer from '../Footer'
import Header from '../Header'
import CommonService from "../../services/commonService";
import urlConstant from "../../constants/urlConstant";
import { ToasterSuccess, ToasterWarning, ToasterError } from "../../common/toaster";
import { ToastContainer } from "react-toastify";
import { useAppContext } from '../../context/index';
import swal from 'sweetalert'
import Pagination from "../Pagination";
import { Link } from "react-router-dom";

function Cart() {

    let common = new CommonService();
    const { user_id, Loding, ApplyCoupon } = useAppContext();

    const [List, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [CouponCode, SetCouponCode] = useState('');


    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = List.slice(firstPostIndex, lastPostIndex);




    function GetCart() {
        setIsLoading(true)
        const GetAllCart = `${urlConstant.Cart.GetCart}?userId=${user_id}`;
        common.httpGet(GetAllCart).then(function (res) {
            setList(res.data.data[0].cart_items);
            setIsLoading(false)
        })
            .catch(function (error) {
                // ToasterError("Error");
                setIsLoading(false)
            });
    }

    const deletehandler = async (id) => {

        swal({
            title: 'Are You Sure Delete Data?',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                setIsLoading(true)
                const deleteCart = `${urlConstant.Cart.DeleteCart}/${id}`;
                common.httpGet(deleteCart).then((res) => {
                    setIsLoading(false);
                    GetCart();
                });
            }
            else {
                ToasterWarning("Your Data Safe...!!");
                setIsLoading(false);
            }
        })

    };


    const Increment = (id, item) => {
        const Data = { cart_ids: id, cart_quantities: item + 1 }
        const updateProjectRecourcedata = `${urlConstant.Cart.UpdateCart}`
        common.httpPost(updateProjectRecourcedata, Data)
            .then((result) => {
                GetCart();
            })
    }

    const Decrement = (id, item) => {
        const Data = { cart_ids: id, cart_quantities: item - 1 }
        const updateProjectRecourcedata = `${urlConstant.Cart.UpdateCart}`
        common.httpPost(updateProjectRecourcedata, Data)
            .then((result) => {
                GetCart();
            })
    }
    const Sub_Total_price = List.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)

    useEffect(() => {
        GetCart();
    }, []);

    return (
        <div>
            <ToastContainer />
            <Header Crat={List.length} />
            {isLoading ? <Loding /> : Cart}
            <main className="main">
                <div className="page-header breadcrumb-wrap">
                    <div className="container">
                        <div className="breadcrumb">
                            <a  rel="nofollow"><i className="fi-rs-home mr-5" />Home</a>
                            <span /> Shop
                            <span /> Cart
                        </div>
                    </div>
                </div>
                <div className="container mb-80 mt-50">
                    <div className="row">
                        <div className="col-lg-12 mb-40">
                            <h1 className="heading-2 mb-10">Your Cart</h1>
                            <div className="d-flex justify-content-between">
                                <h6 className="text-body">There are <span className="text-brand">
                                    {List.length}
                                </span> products in your cart</h6>


                                {/* <h6 className="text-body"><a href="#" className="text-muted"><i className="fi-rs-trash mr-5" />Clear Cart</a></h6> */}
                            </div>
                            <div className="col-lg-12 mb-40" style={{ textAlign: "end" }}>
                                <a className="btn " ><i className="fi-rs-arrow-left mr-10" />Continue Shopping</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="table-responsive shopping-summery">
                                <table className="table table-wishlist">
                                    <thead>
                                        <tr className="main-heading">
                                            <th className="custome-checkbox start pl-30">
                                                <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox11" defaultValue />
                                                <label className="form-check-label" htmlFor="exampleCheckbox11" />
                                            </th>
                                            <th scope="col" colSpan={2}>Product</th>
                                            <th scope="col">Unit Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Subtotal</th>
                                            <th scope="col" className="end">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            List == '' ? <h1 style={{ textAlign: "center" }}>Oops, no product in your list</h1> :
                                                currentPosts.map((item, i) => {

                                                    const image = item.product_thumbnail_image == '' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9zuWJ0xU19Mgk0dNFnl2KIc8E9Ch0zhfCg&usqp=CAU' : item.product_thumbnail_image

                                                    const total = item.price * item.quantity;
                                                    return (
                                                        <>
                                                            <tr className="pt-30" key={i}>
                                                                <td className="custome-checkbox pl-30">
                                                                    <input className="form-check-input" type="checkbox" name="checkbox" id={i} defaultValue />
                                                                    <label className="form-check-label" htmlFor={i} />
                                                                </td>
                                                                <td className="image product-thumbnail pt-40"><img src={image} alt={image} /></td>
                                                                <td className="product-des product-name">
                                                                    <h6 className="mb-5">{item.product_name}</h6>
                                                                    <div className="product-rate-cover">
                                                                        <div className="product-rate d-inline-block">
                                                                            <div className="product-rating" style={{ width: '90%' }}>
                                                                            </div>
                                                                        </div>
                                                                        <span className="font-small ml-5 text-muted"> (4.0)</span>
                                                                    </div>
                                                                </td>
                                                                <td className="price" data-title="Price">
                                                                    <h4 className="text-body">??? {item.price}</h4>
                                                                </td>
                                                                <td className="text-center detail-info" data-title="Stock">
                                                                    <div className="detail-extralink mr-15">
                                                                        <div className="detail-qty border radius">
                                                                            <a className="qty-down" ><i className="fi-rs-angle-small-down" onClick={() => { Decrement(item.id, item.quantity) }} /></a>
                                                                            {/* <span className="qty-val">{increment}</span> */}
                                                                            <span className="qty-val">{item.quantity}</span>
                                                                            <a className="qty-up" ><i className="fi-rs-angle-small-up" onClick={() => { Increment(item.id, item.quantity) }} /></a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price" data-title="Price">
                                                                    <h4 className="text-brand">??? {total}</h4>
                                                                    {/* <h4 className="text-brand">???10</h4> */}
                                                                </td>
                                                                <td className="action text-center" data-title="Remove" onClick={() => deletehandler(item.id)}>
                                                                    <a className="text-body" ><i style={{ fontSize: "20px" }} className="fi-rs-cross-circle" /></a>
                                                                </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })


                                        }

                                    </tbody>


                                </table>
                            </div>
                            <div className="divider-2 mb-30" />
                            <div className="cart-action d-flex justify-content-between">
                                <Pagination
                                    totalPosts={List.length}
                                    postsPerPage={postsPerPage}
                                    setCurrentPage={setCurrentPage}
                                />
                                {/* <a className="btn  mr-10 mb-sm-15" ><i className="fi-rs-trash mr-5" />Clear Cart</a> */}
                                <h6 className="text-body"><a href="#" className="text-muted"><i className="fi-rs-trash mr-5" />Clear Cart</a></h6>

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="border p-md-4 cart-totals ml-30">
                                <div className="table-responsive">
                                    <table className="table no-border">
                                        <tbody>
                                            <tr>
                                                <td className="cart_total_label">
                                                    <h6 className="text-muted">Subtotal</h6>
                                                </td>
                                                <td className="cart_total_amount">
                                                    <h4 className="text-brand text-end">??? {Sub_Total_price}</h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="col" colSpan={2}>
                                                    <div className="divider-2 mt-10 mb-10" />
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


                                            <br />
                                            <tr>
                                                <td className="cart_total_label">
                                                    <h4 className="mb-10">Apply Coupon</h4>
                                                </td>
                                                <td className="cart_total_amount">
                                                    <h4 className="font-lg text-muted">Using A Promo Code?</h4>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>

                                    <div className="d-flex justify-content-between">
                                        <input className="font-medium mr-15 coupon" name="Coupon" placeholder="Enter Your Coupon" value={CouponCode} onChange={(e) => { SetCouponCode(e.target.value) }} />
                                        <button className="btn" onClick={() => { ApplyCoupon(CouponCode) }}><i className="fi-rs-label mr-10" />Apply</button>
                                    </div>

                                </div>
                            </div><br />


                            <div className="border p-md-4 cart-totals ml-30">
                                <div className="table-responsive">
                                    <table className="table no-border">
                                        <tbody>
                                            <tr>
                                                <td className="cart_total_label" style={{ width: "100px" }}>
                                                    <h4 >Calculate Shipping</h4>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td scope="col" colSpan={2}>
                                                    <p className="mb-30"><span className="font-lg text-muted">Flat rate:</span><strong className="text-brand">5%</strong></p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div className="form-group col-lg-12">
                                        <div className="custom_select">
                                            <select className="form-control select-active w-100">
                                                <option value>United Kingdom</option>
                                                <option value="AX">Aland Islands</option>
                                                <option value="AF">Afghanistan</option>
                                                <option value="AL">Albania</option>
                                                <option value="DZ">Algeria</option>
                                                <option value="AD">Andorra</option>
                                            </select>
                                        </div>
                                    </div>



                                    <div className="form-row row">
                                        <div className="form-group col-lg-6">
                                            <input required="required" placeholder="State / Country" name="name" type="text" />
                                        </div>


                                        <div className="form-group col-lg-6">
                                            <input required="required" placeholder="PostCode / ZIP" name="name" type="text" />
                                        </div>
                                    </div>
                                    <Link to={'/Checkout'} className="btn mb-20 w-100">Proceed To CheckOut<i className="fi-rs-sign-out ml-15" /></Link>
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

export default Cart;