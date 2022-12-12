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
                                <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
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
                                <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
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
                                <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
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
                                <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
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
                                <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
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
                                <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
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
                                <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
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
                                <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
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
                                <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
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
                                <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
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
                                <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
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
                                <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
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
                                <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
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
                                <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
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
                                <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
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
                                <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
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
                                <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
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
                                <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
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
                                <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
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
                                <a aria-label="Compare" className="action-btn" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
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
                                <label className="fw-900">Category</label>
                                <div className="custome-checkbox">
                                    <input className="form-check-input" type="checkbox" name="checkbox" checked id="categoryCheckbox1" defaultValue />
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
                                    <input className="form-check-input" type="checkbox" name="checkbox" checked id="brandCheckbox1" defaultValue />
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
                                    <input id="4XS" className="check-size-input" type="checkbox" name="4XS" value="4XS"/>
                                    <label className="check-size-label" for="4XS">4XS</label>
                                    <input id="3XS" className="check-size-input" type="checkbox" name="3XS" value="3XS"/>
                                    <label className="check-size-label" for="3XS">3XS</label>
                                    <input id="2XS" className="check-size-input" type="checkbox" name="2XS" value="2XS"/>
                                    <label className="check-size-label" for="2XS">2XS</label>
                                    <input id="XS" className="check-size-input" type="checkbox" name="XS" value="XS"/>
                                    <label className="check-size-label" for="XS">XS</label>
                                    <input id="S" className="check-size-input" type="checkbox" name="S" value="S"/>
                                    <label className="check-size-label" for="S">S</label>
                                    <input id="M" className="check-size-input" type="checkbox" name="M" value="M"/>
                                    <label className="check-size-label" for="M">M</label>
                                    <input id="L" className="check-size-input" type="checkbox" name="L" value="L"/>
                                    <label className="check-size-label" for="L">L</label>
                                    <input id="XL" className="check-size-input" type="checkbox" name="XL" value="XL"/>
                                    <label className="check-size-label" for="XL">XL</label>
                                    <input id="2XL" className="check-size-input" type="checkbox" name="2XL" value="2XL"/>
                                    <label className="check-size-label" for="2XL">2XL</label>
                                    <input id="3XL" className="check-size-input" type="checkbox" name="3XL" value="3XL"/>
                                    <label className="check-size-label" for="3XL">3XL</label>
                                    <input id="4XL" className="check-size-input" type="checkbox" name="4XL" value="4XL"/>
                                    <label className="check-size-label" for="4XL">4XL</label>
                                    <input id="5XL" className="check-size-input" type="checkbox" name="5XL" value="5XL"/>
                                    <label className="check-size-label" for="5XL">5XL</label>
                                    <input id="6XL" className="check-size-input" type="checkbox" name="6XL" value="6XL"/>
                                    <label className="check-size-label" for="6XL">6XL</label>
                                    <input id="7XL" className="check-size-input" type="checkbox" name="7XL" value="7XL"/>
                                    <label className="check-size-label" for="7XL">7XL</label>
                                    <input id="8XL" className="check-size-input" type="checkbox" name="8XL" value="8XL"/>
                                    <label className="check-size-label" for="8XL">8XL</label>
                                </div>
                                <br />
                                {/* <span style={{width:"100%"}}></span> */}
                                <label className="fw-900">Colour</label>
                                <div className="custome-checkbox">
                                    <input id="#FF0000" className="check-size-input" type="checkbox" name="#FF0000" value="#FF0000"/>
                                    <label className="check-size-label" style={{backgroundColor:"#FF0000"}} for="#FF0000"></label>
                                    <input id="#FFB800" className="check-size-input" type="checkbox" name="#FFB800" value="#FFB800"/>
                                    <label className="check-size-label" style={{backgroundColor:"#FFB800"}} for="#FFB800"></label>
                                    <input id="#9EFF00" className="check-size-input" type="checkbox" name="#9EFF00" value="#9EFF00"/>
                                    <label className="check-size-label" style={{backgroundColor:"#9EFF00"}} for="#9EFF00"></label>
                                    <input id="#00FFC2" className="check-size-input" type="checkbox" name="#00FFC2" value="#00FFC2"/>
                                    <label className="check-size-label" style={{backgroundColor:"#00FFC2"}} for="#00FFC2"></label>
                                    <input id="#00D1FF" className="check-size-input" type="checkbox" name="#00D1FF" value="#00D1FF"/>
                                    <label className="check-size-label" style={{backgroundColor:"#00D1FF"}} for="#00D1FF"></label>
                                    <input id="#0075FF" className="check-size-input" type="checkbox" name="#0075FF" value="#0075FF"/>
                                    <label className="check-size-label" style={{backgroundColor:"#0075FF"}} for="#0075FF"></label>
                                </div>
                                <label className="fw-900 mt-15">Pattern</label>
                                <div className="custome-checkbox">
                                    <input className="form-check-input" type="checkbox" checked name="checkbox" id="patternCheckbox1" defaultValue />
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
                                        <span className="star-in-set star-4">★★★★★ <span style={{color: "#95A1A9",fontSize: "15px"}}>& Up</span></span>
                                    </p>
                                    <p className="star-set">
                                        <span className="star-in-set star-3">★★★★★ <span style={{color: "#95A1A9",fontSize: "15px"}}>& Up</span></span>
                                    </p>
                                    <p className="star-set">
                                        <span className="star-in-set star-2">★★★★★ <span style={{color: "#95A1A9",fontSize: "15px"}}>& Up</span></span>
                                    </p>
                                    <p className="star-set">
                                        <span className="star-in-set star-1">★★★★★ <span style={{color: "#95A1A9",fontSize: "15px"}}>& Up</span></span>
                                    </p>
                                </div>
                                <label className="fw-900 mt-15">Price</label>
                                <div className="custome-checkbox">
                                    <input className="form-check-input" type="checkbox" name="checkbox" checked id="priceCheckbox1" defaultValue />
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
                                    <input className="form-check-input" type="checkbox" name="checkbox" checked id="offerCheckbox1" defaultValue />
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
