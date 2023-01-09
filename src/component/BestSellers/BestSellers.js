import React from 'react'
import { Link } from 'react-router-dom'

function BestSellers() {
  return (
    <div>
      <section className="section-padding pb-5">
          <div className="container">
            <div className="section-title wow animate__animated animate__fadeIn">
              <h3 className>Best Sellers</h3>
              <ul className="nav nav-tabs links" id="myTab-2" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="nav-tab-one-1" data-bs-toggle="tab" data-bs-target="#tab-one-1" type="button" role="tab" aria-controls="tab-one" aria-selected="true">Meats</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="nav-tab-two-1" data-bs-toggle="tab" data-bs-target="#tab-two-1" type="button" role="tab" aria-controls="tab-two" aria-selected="false">Vegetables</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="nav-tab-three-1" data-bs-toggle="tab" data-bs-target="#tab-three-1" type="button" role="tab" aria-controls="tab-three" aria-selected="false">Fruits</button>
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="col-lg-3 d-none d-lg-flex wow animate__animated animate__fadeIn">
                <div className="banner-img style-2">
                  <div className="banner-text">
                    <h2 className="mb-45" style={{ color: "white" }}>Bring nature into your home</h2>
                    <a  style={{ fontSize: "20px", width: "130px", backgroundColor: "#837c7c"}} className="btn btn-xs" >Shop Now
                      {/* <i className="fi-rs-arrow-small-right" /> */}
                    </a>
                  </div>

                </div>
              </div>
              <div className="col-lg-9 col-md-12 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                <div className="tab-content" id="myTabContent-1">
                  <div className="tab-pane fade show active" id="tab-one-1" role="tabpanel" aria-labelledby="tab-one-1">
                    <div className="carausel-4-columns-cover arrow-center position-relative">
                      <div className="slider-arrow slider-arrow-2 carausel-4-columns-arrow" id="carausel-4-columns-arrows" />
                      <div className="carausel-4-columns carausel-arrow-center" id="carausel-4-columns">
                        <div className="product-cart-wrap">
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <Link to={'1'}>
                                <img className="default-img" src="assets/imgs/shop/product-1-1.jpg" alt="/" />
                                <img className="hover-img" src="assets/imgs/shop/product-1-1.jpg" alt="/" />
                              </Link>
                            </div>
                            <div className="product-action-1">
                              <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye" /></a>
                              <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="wishlist"><i className="fi-rs-heart" /></a>
                              <a aria-label="Compare" className="action-btn small hover-up" href=""><i className="fi-rs-shuffle" /></a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="hot">Save 15%</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a >Hodo Foods</a>
                            </div>
                            <h2><Link to={'1'}>Seeds of Change Organic Quinoa, Brown</Link></h2>
                            <div className="product-rate d-inline-block">
                              <div className="product-rating" style={{ width: '80%' }} />
                            </div>
                            <div className="product-price mt-10">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="sold mt-18 mb-25">
                              <div className="progress mb-5">
                                <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                              <span className="font-xs text-heading"> Sold: 90/120</span>
                            </div>
                            <a  className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                          </div>
                        </div>
                        <div className="product-cart-wrap">
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <Link to={'1'}>
                                <img className="default-img" src="assets/imgs/shop/product-2-2.jpg" alt="/" />
                                <img className="hover-img" src="assets/imgs/shop/product-2-2.jpg" alt="/" />
                              </Link>
                            </div>
                            <div className="product-action-1">
                              <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye" /></a>
                              <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="wishlist"><i className="fi-rs-heart" /></a>
                              <a aria-label="Compare" className="action-btn small hover-up" href=""><i className="fi-rs-shuffle" /></a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="new">Save 35%</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a >Hodo Foods</a>
                            </div>
                            <h2><Link to={'1'}>All Natural Italian-Style Chicken Meatballs</Link></h2>
                            <div className="product-rate d-inline-block">
                              <div className="product-rating" style={{ width: '80%' }} />
                            </div>
                            <div className="product-price mt-10">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="sold mt-18 mb-25">
                              <div className="progress mb-5">
                                <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                              <span className="font-xs text-heading"> Sold: 90/120</span>
                            </div>
                            <a className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                          </div>
                        </div>
                        <div className="product-cart-wrap">
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <Link to={'1'}>
                                <img className="default-img" src="assets/imgs/shop/product-3-2.jpg" alt="/" />
                                <img className="hover-img" src="assets/imgs/shop/product-3-2.jpg" alt="/" />
                              </Link>
                            </div>
                            <div className="product-action-1">
                              <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye" /></a>
                              <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="wishlist"><i className="fi-rs-heart" /></a>
                              <a aria-label="Compare" className="action-btn small hover-up" href=""><i className="fi-rs-shuffle" /></a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="sale">Sale</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a >Hodo Foods</a>
                            </div>
                            <h2><Link to={'1'}>Angie’s Boomchickapop Sweet and womnies</Link></h2>
                            <div className="product-rate d-inline-block">
                              <div className="product-rating" style={{ width: '80%' }} />
                            </div>
                            <div className="product-price mt-10">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="sold mt-18 mb-25">
                              <div className="progress mb-5">
                                <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                              <span className="font-xs text-heading"> Sold: 90/120</span>
                            </div>
                            <a  className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                          </div>
                        </div>
                        <div className="product-cart-wrap">
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <Link to={'1'}>
                                <img className="default-img" src="assets/imgs/shop/product-4-2.jpg" alt="/" />
                                <img className="hover-img" src="assets/imgs/shop/product-4-2.jpg" alt="/" />
                              </Link>
                            </div>
                            <div className="product-action-1">
                              <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye" /></a>
                              <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="wishlist"><i className="fi-rs-heart" /></a>
                              <a aria-label="Compare" className="action-btn small hover-up" href=""><i className="fi-rs-shuffle" /></a>
                            </div>
                            <div className="product-badges product-badges-position product-badges-mrg">
                              <span className="best">Best sale</span>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <a >Hodo Foods</a>
                            </div>
                            <h2><Link to={'1'}>Foster Farms Takeout Crispy Classic </Link></h2>
                            <div className="product-rate d-inline-block">
                              <div className="product-rating" style={{ width: '80%' }} />
                            </div>
                            <div className="product-price mt-10">
                              <span>$238.85 </span>
                              <span className="old-price">$245.8</span>
                            </div>
                            <div className="sold mt-18 mb-25">
                              <div className="progress mb-5">
                                <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuemin={0} aria-valuemax={100} />
                              </div>
                              <span className="font-xs text-heading"> Sold: 90/120</span>
                            </div>
                            <a  className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section><br />
    </div>
  )
}

export default BestSellers
