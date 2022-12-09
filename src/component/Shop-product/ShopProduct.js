import React from 'react'
import { Link, NavLink ,useParams} from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

function ShopProduct() {
    const id = useParams();

    return (
        <div>
           <Header />
          
            <main className="main">
                <div className="page-header breadcrumb-wrap">
                <div className="container">
                <div className="breadcrumb">
                    <a href="index.html" rel="nofollow"><i className="fi-rs-home mr-5" />Home</a>
                    <span /> <a href="shop-grid-right.html">Vegetables &amp; tubers</a> <span /> Seeds of Change Organic
                </div>
                </div>
                </div><br />
                <div className="container mb-30">
                <div className="row flex-row-reverse">
                    <div className="col-lg-4-5">
                    <div className="shop-product-fillter">
                        <div className="totall-product">
                        <p>We found <strong className="text-brand">29</strong> items for you!</p>
                        </div>
                    </div>

                    <div className="row product-grid">
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                                {/* <NavLink to={`/Product/${id}`}> */}
                                <a href="/Product">
                                <img className="default-img" src="assets/imgs/shop/shop-1.jpg" alt="/"/>
                                <img className="hover-img" src="assets/imgs/shop/shop-1.jpg" alt="/"/>
                                </a>
                                {/* </NavLink> */}
                            </div>
                            <div className="product-action-1">
                                <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                                <a aria-label="Compare" className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                                <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="hot">Hot</span>
                            </div>
                            </div>
                            <div className="product-content-wrap">
                            <div className="product-category">
                                <a href="shop-grid-right.html">Snack</a>
                            </div>
                            <h2><a href="/Product">Seeds of Change Organic Quinoe</a></h2>
                            <div className="product-rate-cover">
                                <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{width: '90%'}} />
                                </div>
                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                            </div>
                            <div>
                                <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                            </div>
                            <div className="product-card-bottom">
                                <div className="product-price">
                                <span>$28.85</span>
                                <span className="old-price">$32.8</span>
                                </div>
                                <div className="add-cart">
                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*end product card*/}
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                                <a href="/Product">
                                <img className="default-img" src="assets/imgs/shop/shop-2.jpg" alt="/"/>
                                <img className="hover-img" src="assets/imgs/shop/shop2.jpg" alt="/"/>
                                </a>
                            </div>
                            <div className="product-action-1">
                                <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                                <a aria-label="Compare" className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                                <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="sale">Sale</span>
                            </div>
                            </div>
                            <div className="product-content-wrap">
                            <div className="product-category">
                                <a href="shop-grid-right.html">Hodo Foods</a>
                            </div>
                            <h2><a href="/Product">All Natural Italian-Style Chicken Meatballs</a></h2>
                            <div className="product-rate-cover">
                                <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{width: '80%'}} />
                                </div>
                                <span className="font-small ml-5 text-muted"> (3.5)</span>
                            </div>
                            <div>
                                <span className="font-small text-muted">By <a href="vendor-details-1.html">Stouffer</a></span>
                            </div>
                            <div className="product-card-bottom">
                                <div className="product-price">
                                <span>$52.85</span>
                                <span className="old-price">$55.8</span>
                                </div>
                                <div className="add-cart">
                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*end product card*/}
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                                <a href="/Product">
                                <img className="default-img" src="assets/imgs/shop/shop-3.jpg" alt="/"/>
                                <img className="hover-img" src="assets/imgs/shop/shop-3.jpg" alt="/"/>
                                </a>
                            </div>
                            <div className="product-action-1">
                                <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                                <a aria-label="Compare" className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                                <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="new">New</span>
                            </div>
                            </div>
                            <div className="product-content-wrap">
                            <div className="product-category">
                                <a href="shop-grid-right.html">Snack</a>
                            </div>
                            <h2><a href="/Product">Angie’s Boomchickapop Sweet &amp; Salty</a></h2>
                            <div className="product-rate-cover">
                                <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{width: '85%'}} />
                                </div>
                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                            </div>
                            <div>
                                <span className="font-small text-muted">By <a href="vendor-details-1.html">StarKist</a></span>
                            </div>
                            <div className="product-card-bottom">
                                <div className="product-price">
                                <span>$48.85</span>
                                <span className="old-price">$52.8</span>
                                </div>
                                <div className="add-cart">
                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*end product card*/}
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                                <a href="/Product">
                                <img className="default-img" src="assets/imgs/shop/shop-4.jpg" alt="/"/>
                                <img className="hover-img" src="assets/imgs/shop/shop-4.jpg" alt="/"/>
                                </a>
                            </div>
                            <div className="product-action-1">
                                <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                                <a aria-label="Compare" className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                                <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                            </div>
                            </div>
                            <div className="product-content-wrap">
                            <div className="product-category">
                                <a href="shop-grid-right.html">Vegetables</a>
                            </div>
                            <h2><a href="/Product">Foster Farms Takeout Crispy Classic</a></h2>
                            <div className="product-rate-cover">
                                <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{width: '90%'}} />
                                </div>
                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                            </div>
                            <div>
                                <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                            </div>
                            <div className="product-card-bottom">
                                <div className="product-price">
                                <span>$17.85</span>
                                <span className="old-price">$19.8</span>
                                </div>
                                <div className="add-cart">
                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*end product card*/}
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                                <a href="/Product">
                                <img className="default-img" src="assets/imgs/shop/shop-5.jpg" alt="/"/>
                                <img className="hover-img" src="assets/imgs/shop/shop-5.jpg" alt="/"/>
                                </a>
                            </div>
                            <div className="product-action-1">
                                <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                                <a aria-label="Compare" className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                                <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="best">-14%</span>
                            </div>
                            </div>
                            <div className="product-content-wrap">
                            <div className="product-category">
                                <a href="shop-grid-right.html">Pet Foods</a>
                            </div>
                            <h2><a href="/Product">Blue Diamond Almonds Lightly</a></h2>
                            <div className="product-rate-cover">
                                <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{width: '90%'}} />
                                </div>
                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                            </div>
                            <div>
                                <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                            </div>
                            <div className="product-card-bottom">
                                <div className="product-price">
                                <span>$23.85</span>
                                <span className="old-price">$25.8</span>
                                </div>
                                <div className="add-cart">
                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*end product card*/}
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                                <a href="/Product">
                                <img className="default-img" src="assets/imgs/shop/shop-1.jpg" alt="/"/>
                                <img className="hover-img" src="assets/imgs/shop/shop-1.jpg" alt="/"/>
                                </a>
                            </div>
                            <div className="product-action-1">
                                <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                                <a aria-label="Compare" className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                                <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="hot">Hot</span>
                            </div>
                            </div>
                            <div className="product-content-wrap">
                            <div className="product-category">
                                <a href="shop-grid-right.html">Snack</a>
                            </div>
                            <h2><a href="/Product">Seeds of Change Organic Quinoe</a></h2>
                            <div className="product-rate-cover">
                                <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{width: '90%'}} />
                                </div>
                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                            </div>
                            <div>
                                <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                            </div>
                            <div className="product-card-bottom">
                                <div className="product-price">
                                <span>$28.85</span>
                                <span className="old-price">$32.8</span>
                                </div>
                                <div className="add-cart">
                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*end product card*/}
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                                <a href="/Product">
                                <img className="default-img" src="assets/imgs/shop/shop-2.jpg" alt="/"/>
                                <img className="hover-img" src="assets/imgs/shop/shop2.jpg" alt="/"/>
                                </a>
                            </div>
                            <div className="product-action-1">
                                <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                                <a aria-label="Compare" className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                                <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="sale">Sale</span>
                            </div>
                            </div>
                            <div className="product-content-wrap">
                            <div className="product-category">
                                <a href="shop-grid-right.html">Hodo Foods</a>
                            </div>
                            <h2><a href="/Product">All Natural Italian-Style Chicken Meatballs</a></h2>
                            <div className="product-rate-cover">
                                <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{width: '80%'}} />
                                </div>
                                <span className="font-small ml-5 text-muted"> (3.5)</span>
                            </div>
                            <div>
                                <span className="font-small text-muted">By <a href="vendor-details-1.html">Stouffer</a></span>
                            </div>
                            <div className="product-card-bottom">
                                <div className="product-price">
                                <span>$52.85</span>
                                <span className="old-price">$55.8</span>
                                </div>
                                <div className="add-cart">
                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*end product card*/}
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                                <a href="/Product">
                                <img className="default-img" src="assets/imgs/shop/shop-3.jpg" alt="/"/>
                                <img className="hover-img" src="assets/imgs/shop/shop-3.jpg" alt="/"/>
                                </a>
                            </div>
                            <div className="product-action-1">
                                <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                                <a aria-label="Compare" className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                                <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="new">New</span>
                            </div>
                            </div>
                            <div className="product-content-wrap">
                            <div className="product-category">
                                <a href="shop-grid-right.html">Snack</a>
                            </div>
                            <h2><a href="/Product">Angie’s Boomchickapop Sweet &amp; Salty</a></h2>
                            <div className="product-rate-cover">
                                <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{width: '85%'}} />
                                </div>
                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                            </div>
                            <div>
                                <span className="font-small text-muted">By <a href="vendor-details-1.html">StarKist</a></span>
                            </div>
                            <div className="product-card-bottom">
                                <div className="product-price">
                                <span>$48.85</span>
                                <span className="old-price">$52.8</span>
                                </div>
                                <div className="add-cart">
                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*end product card*/}
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                                <a href="/Product">
                                <img className="default-img" src="assets/imgs/shop/shop-4.jpg" alt="/"/>
                                <img className="hover-img" src="assets/imgs/shop/shop-4.jpg" alt="/"/>
                                </a>
                            </div>
                            <div className="product-action-1">
                                <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                                <a aria-label="Compare" className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                                <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                            </div>
                            </div>
                            <div className="product-content-wrap">
                            <div className="product-category">
                                <a href="shop-grid-right.html">Vegetables</a>
                            </div>
                            <h2><a href="/Product">Foster Farms Takeout Crispy Classic</a></h2>
                            <div className="product-rate-cover">
                                <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{width: '90%'}} />
                                </div>
                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                            </div>
                            <div>
                                <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                            </div>
                            <div className="product-card-bottom">
                                <div className="product-price">
                                <span>$17.85</span>
                                <span className="old-price">$19.8</span>
                                </div>
                                <div className="add-cart">
                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*end product card*/}
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                                <a href="/Product">
                                <img className="default-img" src="assets/imgs/shop/shop-5.jpg" alt="/"/>
                                <img className="hover-img" src="assets/imgs/shop/shop-5.jpg" alt="/"/>
                                </a>
                            </div>
                            <div className="product-action-1">
                                <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                                <a aria-label="Compare" className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                                <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="best">-14%</span>
                            </div>
                            </div>
                            <div className="product-content-wrap">
                            <div className="product-category">
                                <a href="shop-grid-right.html">Pet Foods</a>
                            </div>
                            <h2><a href="/Product">Blue Diamond Almonds Lightly</a></h2>
                            <div className="product-rate-cover">
                                <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{width: '90%'}} />
                                </div>
                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                            </div>
                            <div>
                                <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                            </div>
                            <div className="product-card-bottom">
                                <div className="product-price">
                                <span>$23.85</span>
                                <span className="old-price">$25.8</span>
                                </div>
                                <div className="add-cart">
                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*end product card*/}
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                                <a href="/Product">
                                <img className="default-img" src="assets/imgs/shop/shop-1.jpg" alt="/"/>
                                <img className="hover-img" src="assets/imgs/shop/shop-1.jpg" alt="/"/>
                                </a>
                            </div>
                            <div className="product-action-1">
                                <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                                <a aria-label="Compare" className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                                <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="hot">Hot</span>
                            </div>
                            </div>
                            <div className="product-content-wrap">
                            <div className="product-category">
                                <a href="shop-grid-right.html">Snack</a>
                            </div>
                            <h2><a href="/Product">Seeds of Change Organic Quinoe</a></h2>
                            <div className="product-rate-cover">
                                <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{width: '90%'}} />
                                </div>
                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                            </div>
                            <div>
                                <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                            </div>
                            <div className="product-card-bottom">
                                <div className="product-price">
                                <span>$28.85</span>
                                <span className="old-price">$32.8</span>
                                </div>
                                <div className="add-cart">
                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*end product card*/}
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                                <a href="/Product">
                                <img className="default-img" src="assets/imgs/shop/shop-2.jpg" alt="/"/>
                                <img className="hover-img" src="assets/imgs/shop/shop2.jpg" alt="/"/>
                                </a>
                            </div>
                            <div className="product-action-1">
                                <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                                <a aria-label="Compare" className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                                <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="sale">Sale</span>
                            </div>
                            </div>
                            <div className="product-content-wrap">
                            <div className="product-category">
                                <a href="shop-grid-right.html">Hodo Foods</a>
                            </div>
                            <h2><a href="/Product">All Natural Italian-Style Chicken Meatballs</a></h2>
                            <div className="product-rate-cover">
                                <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{width: '80%'}} />
                                </div>
                                <span className="font-small ml-5 text-muted"> (3.5)</span>
                            </div>
                            <div>
                                <span className="font-small text-muted">By <a href="vendor-details-1.html">Stouffer</a></span>
                            </div>
                            <div className="product-card-bottom">
                                <div className="product-price">
                                <span>$52.85</span>
                                <span className="old-price">$55.8</span>
                                </div>
                                <div className="add-cart">
                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*end product card*/}
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                                <a href="/Product">
                                <img className="default-img" src="assets/imgs/shop/shop-3.jpg" alt="/"/>
                                <img className="hover-img" src="assets/imgs/shop/shop-3.jpg" alt="/"/>
                                </a>
                            </div>
                            <div className="product-action-1">
                                <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                                <a aria-label="Compare" className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                                <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="new">New</span>
                            </div>
                            </div>
                            <div className="product-content-wrap">
                            <div className="product-category">
                                <a href="shop-grid-right.html">Snack</a>
                            </div>
                            <h2><a href="/Product">Angie’s Boomchickapop Sweet &amp; Salty</a></h2>
                            <div className="product-rate-cover">
                                <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{width: '85%'}} />
                                </div>
                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                            </div>
                            <div>
                                <span className="font-small text-muted">By <a href="vendor-details-1.html">StarKist</a></span>
                            </div>
                            <div className="product-card-bottom">
                                <div className="product-price">
                                <span>$48.85</span>
                                <span className="old-price">$52.8</span>
                                </div>
                                <div className="add-cart">
                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*end product card*/}
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                                <a href="/Product">
                                <img className="default-img" src="assets/imgs/shop/shop-4.jpg" alt="/"/>
                                <img className="hover-img" src="assets/imgs/shop/shop-4.jpg" alt="/"/>
                                </a>
                            </div>
                            <div className="product-action-1">
                                <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                                <a aria-label="Compare" className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                                <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                            </div>
                            </div>
                            <div className="product-content-wrap">
                            <div className="product-category">
                                <a href="shop-grid-right.html">Vegetables</a>
                            </div>
                            <h2><a href="/Product">Foster Farms Takeout Crispy Classic</a></h2>
                            <div className="product-rate-cover">
                                <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{width: '90%'}} />
                                </div>
                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                            </div>
                            <div>
                                <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                            </div>
                            <div className="product-card-bottom">
                                <div className="product-price">
                                <span>$17.85</span>
                                <span className="old-price">$19.8</span>
                                </div>
                                <div className="add-cart">
                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*end product card*/}
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                                <a href="/Product">
                                <img className="default-img" src="assets/imgs/shop/shop-5.jpg" alt="/"/>
                                <img className="hover-img" src="assets/imgs/shop/shop-5.jpg" alt="/"/>
                                </a>
                            </div>
                            <div className="product-action-1">
                                <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                                <a aria-label="Compare" className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                                <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="best">-14%</span>
                            </div>
                            </div>
                            <div className="product-content-wrap">
                            <div className="product-category">
                                <a href="shop-grid-right.html">Pet Foods</a>
                            </div>
                            <h2><a href="/Product">Blue Diamond Almonds Lightly</a></h2>
                            <div className="product-rate-cover">
                                <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{width: '90%'}} />
                                </div>
                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                            </div>
                            <div>
                                <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                            </div>
                            <div className="product-card-bottom">
                                <div className="product-price">
                                <span>$23.85</span>
                                <span className="old-price">$25.8</span>
                                </div>
                                <div className="add-cart">
                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*end product card*/}
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                                <a href="/Product">
                                <img className="default-img" src="assets/imgs/shop/shop-1.jpg" alt="/"/>
                                <img className="hover-img" src="assets/imgs/shop/shop-1.jpg" alt="/"/>
                                </a>
                            </div>
                            <div className="product-action-1">
                                <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                                <a aria-label="Compare" className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                                <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="hot">Hot</span>
                            </div>
                            </div>
                            <div className="product-content-wrap">
                            <div className="product-category">
                                <a href="shop-grid-right.html">Snack</a>
                            </div>
                            <h2><a href="/Product">Seeds of Change Organic Quinoe</a></h2>
                            <div className="product-rate-cover">
                                <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{width: '90%'}} />
                                </div>
                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                            </div>
                            <div>
                                <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                            </div>
                            <div className="product-card-bottom">
                                <div className="product-price">
                                <span>$28.85</span>
                                <span className="old-price">$32.8</span>
                                </div>
                                <div className="add-cart">
                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*end product card*/}
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                                <a href="/Product">
                                <img className="default-img" src="assets/imgs/shop/shop-2.jpg" alt="/"/>
                                <img className="hover-img" src="assets/imgs/shop/shop2.jpg" alt="/"/>
                                </a>
                            </div>
                            <div className="product-action-1">
                                <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                                <a aria-label="Compare" className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                                <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="sale">Sale</span>
                            </div>
                            </div>
                            <div className="product-content-wrap">
                            <div className="product-category">
                                <a href="shop-grid-right.html">Hodo Foods</a>
                            </div>
                            <h2><a href="/Product">All Natural Italian-Style Chicken Meatballs</a></h2>
                            <div className="product-rate-cover">
                                <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{width: '80%'}} />
                                </div>
                                <span className="font-small ml-5 text-muted"> (3.5)</span>
                            </div>
                            <div>
                                <span className="font-small text-muted">By <a href="vendor-details-1.html">Stouffer</a></span>
                            </div>
                            <div className="product-card-bottom">
                                <div className="product-price">
                                <span>$52.85</span>
                                <span className="old-price">$55.8</span>
                                </div>
                                <div className="add-cart">
                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*end product card*/}
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                                <a href="/Product">
                                <img className="default-img" src="assets/imgs/shop/shop-3.jpg" alt="/"/>
                                <img className="hover-img" src="assets/imgs/shop/shop-3.jpg" alt="/"/>
                                </a>
                            </div>
                            <div className="product-action-1">
                                <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                                <a aria-label="Compare" className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                                <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="new">New</span>
                            </div>
                            </div>
                            <div className="product-content-wrap">
                            <div className="product-category">
                                <a href="shop-grid-right.html">Snack</a>
                            </div>
                            <h2><a href="/Product">Angie’s Boomchickapop Sweet &amp; Salty</a></h2>
                            <div className="product-rate-cover">
                                <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{width: '85%'}} />
                                </div>
                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                            </div>
                            <div>
                                <span className="font-small text-muted">By <a href="vendor-details-1.html">StarKist</a></span>
                            </div>
                            <div className="product-card-bottom">
                                <div className="product-price">
                                <span>$48.85</span>
                                <span className="old-price">$52.8</span>
                                </div>
                                <div className="add-cart">
                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*end product card*/}
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                                <a href="/Product">
                                <img className="default-img" src="assets/imgs/shop/shop-4.jpg" alt="/"/>
                                <img className="hover-img" src="assets/imgs/shop/shop-4.jpg" alt="/"/>
                                </a>
                            </div>
                            <div className="product-action-1">
                                <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                                <a aria-label="Compare" className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                                <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                            </div>
                            </div>
                            <div className="product-content-wrap">
                            <div className="product-category">
                                <a href="shop-grid-right.html">Vegetables</a>
                            </div>
                            <h2><a href="/Product">Foster Farms Takeout Crispy Classic</a></h2>
                            <div className="product-rate-cover">
                                <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{width: '90%'}} />
                                </div>
                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                            </div>
                            <div>
                                <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                            </div>
                            <div className="product-card-bottom">
                                <div className="product-price">
                                <span>$17.85</span>
                                <span className="old-price">$19.8</span>
                                </div>
                                <div className="add-cart">
                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*end product card*/}
                        <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                        <div className="product-cart-wrap mb-30">
                            <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                                <a href="/Product">
                                <img className="default-img" src="assets/imgs/shop/shop-5.jpg" alt="/"/>
                                <img className="hover-img" src="assets/imgs/shop/shop-5.jpg" alt="/"/>
                                </a>
                            </div>
                            <div className="product-action-1">
                                <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                                <a aria-label="Compare" className="action-btn" href="#"><i className="fi-rs-shuffle" /></a>
                                <Link aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></Link>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                                <span className="best">-14%</span>
                            </div>
                            </div>
                            <div className="product-content-wrap">
                            <div className="product-category">
                                <a href="shop-grid-right.html">Pet Foods</a>
                            </div>
                            <h2><a href="/Product">Blue Diamond Almonds Lightly</a></h2>
                            <div className="product-rate-cover">
                                <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{width: '90%'}} />
                                </div>
                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                            </div>
                            <div>
                                <span className="font-small text-muted">By <a href="vendor-details-1.html">NestFood</a></span>
                            </div>
                            <div className="product-card-bottom">
                                <div className="product-price">
                                <span>$23.85</span>
                                <span className="old-price">$25.8</span>
                                </div>
                                <div className="add-cart">
                                <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Add </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*end product card*/}

                    </div>
                    {/*product grid*/}
                    <div className="pagination-area mt-20 mb-20">
                        <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-start">
                            <li className="page-item">
                            <a className="page-link" href="#"><i className="fi-rs-arrow-small-left" /></a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link dot" href="#">...</a></li>
                            <li className="page-item"><a className="page-link" href="#">6</a></li>
                            <li className="page-item">
                            <a className="page-link" href="#"><i className="fi-rs-arrow-small-right" /></a>
                            </li>
                        </ul>
                        </nav>
                    </div>
    
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
                            <label className="fw-900">Color</label>
                            <div className="custome-checkbox">
                            <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" defaultValue />
                            <label className="form-check-label" htmlFor="exampleCheckbox1"><span>Red (56)</span></label>
                            <br />
                            <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox2" defaultValue />
                            <label className="form-check-label" htmlFor="exampleCheckbox2"><span>Green (78)</span></label>
                            <br />
                            <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox3" defaultValue />
                            <label className="form-check-label" htmlFor="exampleCheckbox3"><span>Blue (54)</span></label>
                            </div>
                            <label className="fw-900 mt-15">Item Condition</label>
                            <div className="custome-checkbox">
                            <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox11" defaultValue />
                            <label className="form-check-label" htmlFor="exampleCheckbox11"><span>New (1506)</span></label>
                            <br />
                            <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox21" defaultValue />
                            <label className="form-check-label" htmlFor="exampleCheckbox21"><span>Refurbished (27)</span></label>
                            <br />
                            <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox31" defaultValue />
                            <label className="form-check-label" htmlFor="exampleCheckbox31"><span>Used (45)</span></label>
                            </div>
                        </div>
                        </div>
                        <a href="shop-grid-right.html" className="btn btn-sm btn-default"><i className="fi-rs-filter mr-5" /> Fillter</a>
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
                                    <div className="product-rating" style={{width: '90%'}} />
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

           
            <Footer/>
        </div>  
    )
}

export default ShopProduct;
