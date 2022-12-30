import React, { useState, useEffect } from "react";
import { Link, NavLink, useParams } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import CommonService from "../../services/commonService";
import urlConstant from "../../constants/urlConstant";
import { ToastContainer } from "react-toastify";
import Pagination from "../Pagination";
import axios from 'axios'
import { useAppContext } from '../../context/index'

function ShopProduct() {
    const id = useParams();
    const { user_id, wishlistPost,Loding,CartPost } = useAppContext();
    let common = new CommonService();

    const [List, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(20);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = List.slice(firstPostIndex, lastPostIndex);
    const Getlength = List.length;


    function GetProducts() {
        setIsLoading(true)
        const GetAllProducts = `${urlConstant.Products.GetProducts}`;
        common.httpGet(GetAllProducts).then(function (res) {
            setIsLoading(false);
            setList(res.data.data);
        })
            .catch(function (error) {
                setIsLoading(false);
                console.log(error);
            });
    }

    // function CartPost(id) {
    //     try {
    //       setIsLoading(true)
    //         const Data = { id, quantity: 1 }
    //         const CartData = `${urlConstant.Cart.PostCart}`;
    //         axios.post(CartData, Data, {
    //             headers: { "Authorization": `Bearer ${localStorage.getItem('access_token')}` }
    //         }).then(()=>{
    //            ToasterSuccess("Success...!!");
    //             setIsLoading(false)
    //         })
    //     }
    //     catch (error) {
    //         ToasterError("Error")
    //     }
    //   }

    useEffect(() => {
        GetProducts();
    }, []);
    return (
        <div>
            <ToastContainer />
            <Header />
            {isLoading ? <Loding /> : ShopProduct}
            <main className="main">
                <div className="page-header breadcrumb-wrap">
                    <div className="container">
                        <div className="breadcrumb">
                            <Link to="/ShopProduct" rel="nofollow"><i className="fi-rs-home mr-5" />Home</Link>
                            <span /> <Link to="/">Shop</Link> 
                        </div>
                    </div>
                </div><br />
                <div className="container mb-30">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-4-5">
                            <div className="shop-product-fillter">
                                <div className="totall-product">
                                    <p>We found <strong className="text-brand">{Getlength}</strong> items for you!</p>
                                </div>
                            </div>

                            <div className="row product-grid">
                                {
                                    currentPosts.map((item, i) => {


                                        const image = item.thumbnail_image == '' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9zuWJ0xU19Mgk0dNFnl2KIc8E9Ch0zhfCg&usqp=CAU' : item.thumbnail_image
                                        const Name = item.name.substring(0, 15);
                                        return (

                                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6" key={item.id}>
                                                <div className="product-cart-wrap mb-30">
                                                    <div className="product-img-action-wrap">
                                                        <div className="product-img product-img-zoom">
                                                            <Link  to={`/${item.id}`}>
                                                                <img className="default-img" src={image} alt="/" />
                                                                <img className="hover-img" src={image} alt="/" />
                                                            </Link>
                                                        </div>
                                                        <div className="product-action-1">
                                                            <a aria-label="Add To Wishlist" className="action-btn" onClick={() => { wishlistPost(item.id) }}><i className="fi-rs-heart" /></a>
                                                            <a aria-label="Compare" className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                                                        </div>
                                                        <div className="product-badges product-badges-position product-badges-mrg">
                                                            <span className="hot">Hot</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-content-wrap">
                                                        <div className="product-category">
                                                            <a href="shop-grid-right.html">{item.category}</a>
                                                        </div>
                                                        <h2><a href="/Product"> {Name.length > 13
                                                                                    ? `${Name}...`
                                                                                    : Name}</a></h2>
                                                        <div className="product-rate-cover">
                                                            <div className="product-rate d-inline-block">
                                                                <div className="product-rating" style={{ width: '90%' }} />
                                                            </div>
                                                            <span className="font-small ml-5 text-muted"> ({item.rating})</span>
                                                        </div>
                                                        <div>
                                                            <span className="font-small text-muted">By NestFood</span>
                                                        </div>
                                                        <div className="product-card-bottom">
                                                            <div className="product-price">
                                                                <span>${item.base_discounted_price}</span>
                                                                <span className="old-price">${item.base_price}</span>
                                                            </div>
                                                            <div className="add-cart">
                                                                <a className="add" onClick={()=>{CartPost(item.id)}} ><i className="fi-rs-shopping-cart mr-5" />Add </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        )
                                    })
                                }
                            </div>

                            <Pagination
                                totalPosts={List.length}
                                postsPerPage={postsPerPage}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                            />
                            {/* <div className="row">
                                <div className="col-lg-12 mb-40" style={{textAlign: "center"}}>
                                    <a href="#" className="btn btn-fill-out btn-block mt-30">View More Products</a>
                                </div>
                            </div> */}

                        </div>
                        <div className="col-lg-1-5 primary-sidebar sticky-sidebar">
                            {/* Fillter By Price */}
                            <div className="sidebar-widget price_range range mb-30">
                                <h5 className="section-title style-1 mb-30">Fill by price</h5>
                                <div className="price-filter">
                                    <div className="price-filter-inner">
                                        <div id="slider-range" className="mb-20" />
                                        <div className="d-flex justify-content-between">
                                            <div className="caption">From: <strong id="slider-range-value1" className="text-brand" /></div>
                                            <div className="caption">To: <strong id="slider-range-value2" className="text-brand" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group">
                                    <div className="list-group-item mb-10 mt-10">
                                        <label className="fw-900">Category</label>
                                        <div className="custome-checkbox">
                                            <input className="form-check-input" type="checkbox" name="checkbox"  id="categoryCheckbox1" defaultValue />
                                            <label className="form-check-label" htmlFor="categoryCheckbox1"><span>T-Shirts & Polos</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="categoryCheckbox2" defaultValue />
                                            <label className="form-check-label" htmlFor="categoryCheckbox2"><span>Shirts</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="categoryCheckbox3" defaultValue />
                                            <label className="form-check-label" htmlFor="categoryCheckbox3"><span>Eat fresh</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="categoryCheckbox4" defaultValue />
                                            <label className="form-check-label" htmlFor="categoryCheckbox4"><span>Jeans</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="categoryCheckbox5" defaultValue />
                                            <label className="form-check-label" htmlFor="categoryCheckbox5"><span>Suits & Blazers</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="categoryCheckbox6" defaultValue />
                                            <label className="form-check-label" htmlFor="categoryCheckbox6"><span>Sunglasses & Spectacle</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="categoryCheckbox7" defaultValue />
                                            <label className="form-check-label" htmlFor="categoryCheckbox7"><span>Frames</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="categoryCheckbox8" defaultValue />
                                            <label className="form-check-label" htmlFor="categoryCheckbox8"><span>Shorts</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="categoryCheckbox9" defaultValue />
                                            <label className="form-check-label" htmlFor="categoryCheckbox9"><span>Sportswear</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="categoryCheckbox10" defaultValue />
                                            <label className="form-check-label" htmlFor="categoryCheckbox10"><span>Innerwear</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="categoryCheckbox11" defaultValue />
                                            <label className="form-check-label" htmlFor="categoryCheckbox11"><span>Rainwear</span></label>
                                        </div>
                                        <label className="fw-900">Brand</label>
                                        <div className="custome-checkbox">
                                            <input className="form-check-input" type="checkbox" name="checkbox"  id="brandCheckbox1" defaultValue />
                                            <label className="form-check-label" htmlFor="brandCheckbox1"><span>Cobblestone</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="brandCheckbox2" defaultValue />
                                            <label className="form-check-label" htmlFor="brandCheckbox2"><span>McVitie's</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="brandCheckbox3" defaultValue />
                                            <label className="form-check-label" htmlFor="brandCheckbox3"><span>Tastykake</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="brandCheckbox4" defaultValue />
                                            <label className="form-check-label" htmlFor="brandCheckbox4"><span>Warburtons</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="brandCheckbox5" defaultValue />
                                            <label className="form-check-label" htmlFor="brandCheckbox5"><span>Wonder Bread</span></label>
                                        </div>
                                        <label className="fw-900">Size</label>
                                        <div className="custome-checkbox">
                                            <input id="4XS" className="check-size-input" type="checkbox" name="4XS" value="4XS" />
                                            <label className="check-size-label" for="4XS">4XS</label>
                                            <input id="3XS" className="check-size-input" type="checkbox" name="3XS" value="3XS" />
                                            <label className="check-size-label" for="3XS">3XS</label>
                                            <input id="2XS" className="check-size-input" type="checkbox" name="2XS" value="2XS" />
                                            <label className="check-size-label" for="2XS">2XS</label>
                                            <input id="XS" className="check-size-input" type="checkbox" name="XS" value="XS" />
                                            <label className="check-size-label" for="XS">XS</label>
                                            <input id="S" className="check-size-input" type="checkbox" name="S" value="S" />
                                            <label className="check-size-label" for="S">S</label>
                                            <input id="M" className="check-size-input" type="checkbox" name="M" value="M" />
                                            <label className="check-size-label" for="M">M</label>
                                            <input id="L" className="check-size-input" type="checkbox" name="L" value="L" />
                                            <label className="check-size-label" for="L">L</label>
                                            <input id="XL" className="check-size-input" type="checkbox" name="XL" value="XL" />
                                            <label className="check-size-label" for="XL">XL</label>
                                            <input id="2XL" className="check-size-input" type="checkbox" name="2XL" value="2XL" />
                                            <label className="check-size-label" for="2XL">2XL</label>
                                            <input id="3XL" className="check-size-input" type="checkbox" name="3XL" value="3XL" />
                                            <label className="check-size-label" for="3XL">3XL</label>
                                            <input id="4XL" className="check-size-input" type="checkbox" name="4XL" value="4XL" />
                                            <label className="check-size-label" for="4XL">4XL</label>
                                            <input id="5XL" className="check-size-input" type="checkbox" name="5XL" value="5XL" />
                                            <label className="check-size-label" for="5XL">5XL</label>
                                            <input id="6XL" className="check-size-input" type="checkbox" name="6XL" value="6XL" />
                                            <label className="check-size-label" for="6XL">6XL</label>
                                            <input id="7XL" className="check-size-input" type="checkbox" name="7XL" value="7XL" />
                                            <label className="check-size-label" for="7XL">7XL</label>
                                            <input id="8XL" className="check-size-input" type="checkbox" name="8XL" value="8XL" />
                                            <label className="check-size-label" for="8XL">8XL</label>
                                        </div>
                                        <div></div>
                                        {/* <span style={{width:"100%"}}></span> */}
                                        <label className="fw-900" style={{width:"100%"}}>Colour</label>
                                        <div className="custome-checkbox">
                                            <input id="#003049" className="check-size-input" type="checkbox" name="#003049" value="#003049" />
                                            <label className="color-check-size-label" style={{ backgroundColor: "#003049" }} for="#003049"></label>
                                            
                                            <input id="#252F9C" className="check-size-input" type="checkbox" name="#252F9C" value="#252F9C" />
                                            <label className="color-check-size-label" style={{ backgroundColor: "#252F9C" }} for="#252F9C"></label>
                                            
                                            <input id="#7C1034" className="check-size-input" type="checkbox" name="#7C1034" value="#7C1034" />
                                            <label className="color-check-size-label" style={{ backgroundColor: "#7C1034" }} for="#7C1034"></label>
                                            
                                            <input id="#FAAB99" className="check-size-input" type="checkbox" name="#FAAB99" value="#FAAB99" />
                                            <label className="color-check-size-label" style={{ backgroundColor: "#FAAB99" }} for="#FAAB99"></label>
                                            
                                            <input id="#BE8ECC" className="check-size-input" type="checkbox" name="#BE8ECC" value="#BE8ECC" />
                                            <label className="color-check-size-label" style={{ backgroundColor: "#BE8ECC" }} for="#BE8ECC"></label>
                            
                                            <input id="#F77F00" className="check-size-input" type="checkbox" name="#F77F00" value="#F77F00" />
                                            <label className="color-check-size-label" style={{ backgroundColor: "#F77F00" }} for="#F77F00"></label>

                                            <input id="#ccc" className="check-size-input" type="checkbox" name="#ccc" value="#ccc" />
                                            <label className="color-check-size-label" style={{ backgroundColor: "#ccc" }} for="#ccc"></label>

                                            <input id="#FC9FA2" className="check-size-input" type="checkbox" name="#FC9FA2" value="#FC9FA2" />
                                            <label className="color-check-size-label" style={{ backgroundColor: "#FC9FA2" }} for="#FC9FA2"></label>
                                        </div>
                                        <label className="fw-900 mt-15" style={{width:"100%"}}>Pattern</label>
                                        <div className="custome-checkbox">
                                            <input className="form-check-input" type="checkbox"  name="checkbox" id="patternCheckbox1" defaultValue />
                                            <label className="form-check-label" htmlFor="patternCheckbox1"><span>Animal print</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="patternCheckbox2" defaultValue />
                                            <label className="form-check-label" htmlFor="patternCheckbox2"><span>Argyle</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="patternCheckbox3" defaultValue />
                                            <label className="form-check-label" htmlFor="patternCheckbox3"><span>Camouflage</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="patternCheckbox4" defaultValue />
                                            <label className="form-check-label" htmlFor="patternCheckbox4"><span>Cartoon</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="patternCheckbox5" defaultValue />
                                            <label className="form-check-label" htmlFor="patternCheckbox5"><span>Chevron</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="patternCheckbox6" defaultValue />
                                            <label className="form-check-label" htmlFor="patternCheckbox6"><span>Floral</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="patternCheckbox7" defaultValue />
                                            <label className="form-check-label" htmlFor="patternCheckbox7"><span>Fruits</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="patternCheckbox8" defaultValue />
                                            <label className="form-check-label" htmlFor="patternCheckbox8"><span>Geometric</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="patternCheckbox9" defaultValue />
                                            <label className="form-check-label" htmlFor="patternCheckbox9"><span>Herringbone</span></label>
                                        </div>
                                        <label className="fw-900 mt-15">Avg.Customer Review</label>
                                        <div className="custome-checkbox">
                                            <p className="star-set">
                                                <span className="star-in-set star-4">★★★★★ <span style={{ color: "#95A1A9", fontSize: "15px" }}>& Up</span></span>
                                            </p>
                                            <p className="star-set">
                                                <span className="star-in-set star-3">★★★★★ <span style={{ color: "#95A1A9", fontSize: "15px" }}>& Up</span></span>
                                            </p>
                                            <p className="star-set">
                                                <span className="star-in-set star-2">★★★★★ <span style={{ color: "#95A1A9", fontSize: "15px" }}>& Up</span></span>
                                            </p>
                                            <p className="star-set">
                                                <span className="star-in-set star-1">★★★★★ <span style={{ color: "#95A1A9", fontSize: "15px" }}>& Up</span></span>
                                            </p>
                                        </div>
                                        <label className="fw-900 mt-15">Price</label>
                                        <div className="custome-checkbox">
                                            <input className="form-check-input" type="checkbox" name="checkbox"  id="priceCheckbox1" defaultValue />
                                            <label className="form-check-label" htmlFor="priceCheckbox1"><span>Under ₹300</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="priceCheckbox2" defaultValue />
                                            <label className="form-check-label" htmlFor="priceCheckbox2"><span>₹300 - ₹500</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="priceCheckbox3" defaultValue />
                                            <label className="form-check-label" htmlFor="priceCheckbox3"><span>₹500 - ₹1,000</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="priceCheckbox4" defaultValue />
                                            <label className="form-check-label" htmlFor="priceCheckbox4"><span>₹1,000 - ₹1,500</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="priceCheckbox5" defaultValue />
                                            <label className="form-check-label" htmlFor="priceCheckbox5"><span>Over ₹1,500</span></label>
                                        </div>
                                        <label className="fw-900 mt-15">Offer</label>
                                        <div className="custome-checkbox">
                                            <input className="form-check-input" type="checkbox" name="checkbox"  id="offerCheckbox1" defaultValue />
                                            <label className="form-check-label" htmlFor="offerCheckbox1"><span>Under ₹300</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="offerCheckbox2" defaultValue />
                                            <label className="form-check-label" htmlFor="offerCheckbox2"><span>₹300 - ₹500</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="offerCheckbox3" defaultValue />
                                            <label className="form-check-label" htmlFor="offerCheckbox3"><span>₹500 - ₹1,000</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="offerCheckbox4" defaultValue />
                                            <label className="form-check-label" htmlFor="offerCheckbox4"><span>₹1,000 - ₹1,500</span></label>
                                            <br />
                                            <input className="form-check-input" type="checkbox" name="checkbox" id="offerCheckbox5" defaultValue />
                                            <label className="form-check-label" htmlFor="offerCheckbox5"><span>Over ₹1,500</span></label>
                                        </div>
                                    </div>
                                </div>
                                {/* <a href="shop-grid-right.html" className="btn btn-sm btn-default"><i className="fi-rs-filter mr-5" /> Fillter</a> */}
                            </div>
                            {/* Product sidebar Widget */}
                        </div>
                    </div>
                </div>

                <div className="modal fade custom-modal" id="quickViewModal" tabIndex={-1} aria-labelledby="quickViewModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                                        <div className="detail-gallery">
                                            <span className="zoom-icon"><i className="fi-rs-search" /></span>
                                            {/* MAIN SLIDES */}
                                            <div className="product-image-slider">
                                                <figure className="border-radius-10">
                                                    <img src="assets/imgs/shop/product-1-1.jpg" alt="product image" />
                                                </figure>
                                                <figure className="border-radius-10">
                                                    <img src="assets/imgs/shop/product-16-1.jpg" alt="product image" />
                                                </figure>
                                                <figure className="border-radius-10">
                                                    <img src="assets/imgs/shop/product-16-3.jpg" alt="product image" />
                                                </figure>
                                                <figure className="border-radius-10">
                                                    <img src="assets/imgs/shop/product-16-4.jpg" alt="product image" />
                                                </figure>
                                                <figure className="border-radius-10">
                                                    <img src="assets/imgs/shop/product-16-5.jpg" alt="product image" />
                                                </figure>
                                                <figure className="border-radius-10">
                                                    <img src="assets/imgs/shop/product-16-6.jpg" alt="product image" />
                                                </figure>
                                                <figure className="border-radius-10">
                                                    <img src="assets/imgs/shop/product-16-7.jpg" alt="product image" />
                                                </figure>
                                            </div>
                                            {/* THUMBNAILS */}
                                            <div className="slider-nav-thumbnails">
                                                <div><img src="assets/imgs/shop/thumbnail-3.jpg" alt="product image" /></div>
                                                <div><img src="assets/imgs/shop/thumbnail-4.jpg" alt="product image" /></div>
                                                <div><img src="assets/imgs/shop/thumbnail-5.jpg" alt="product image" /></div>
                                                <div><img src="assets/imgs/shop/thumbnail-6.jpg" alt="product image" /></div>
                                                <div><img src="assets/imgs/shop/thumbnail-7.jpg" alt="product image" /></div>
                                                <div><img src="assets/imgs/shop/thumbnail-8.jpg" alt="product image" /></div>
                                                <div><img src="assets/imgs/shop/thumbnail-9.jpg" alt="product image" /></div>
                                            </div>
                                        </div>
                                        {/* End Gallery */}
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <div className="detail-info pr-30 pl-30">
                                            <span className="stock-status out-stock"> Sale Off </span>
                                            <h3 className="title-detail"><a href="/Product" className="text-heading">Seeds of Change Organic Quinoa, Brown</a></h3>
                                            <div className="product-detail-rating">
                                                <div className="product-rate-cover text-end">
                                                    <div className="product-rate d-inline-block">
                                                        <div className="product-rating" style={{ width: '90%' }} />
                                                    </div>
                                                    <span className="font-small ml-5 text-muted"> (32 reviews)</span>
                                                </div>
                                            </div>
                                            <div className="clearfix product-price-cover">
                                                <div className="product-price primary-color float-left">
                                                    <span className="current-price text-brand">$38</span>
                                                    <span>
                                                        <span className="save-price font-md color3 ml-15">26% Off</span>
                                                        <span className="old-price font-md ml-15">$52</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="detail-extralink mb-30">
                                                <div className="detail-qty border radius">
                                                    <a href="#" className="qty-down"><i className="fi-rs-angle-small-down" /></a>
                                                    <span className="qty-val">1</span>
                                                    <a href="#" className="qty-up"><i className="fi-rs-angle-small-up" /></a>
                                                </div>
                                                <div className="product-extra-link2">
                                                    <button type="submit" className="button button-add-to-cart"><i className="fi-rs-shopping-cart" />Add to cart</button>
                                                </div>
                                            </div>
                                            <div className="font-xs">
                                                <ul>
                                                    <li className="mb-5">Vendor: <span className="text-brand">Nest</span></li>
                                                    <li className="mb-5">MFG:<span className="text-brand"> Jun 4.2021</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* Detail Info */}
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

export default ShopProduct;
