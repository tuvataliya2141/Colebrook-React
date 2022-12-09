import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';


function Home() {
  
  return (
    <div>
      <Header/>
        <main className="main">
       <section className="home-slider position-relative mb-30">
            <div className="container">
            <div className="home-slide-cover mt-30">
                 <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                    <div className="single-hero-slider single-animation-wrap">
                      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                            <div className="carousel-inner">
                                
                                <div className="carousel-item ">
                                <img src="assets/imgs/banner/Slider.png" className="d-block w-100" alt="/"/>
                                <div className="carousel-caption d-none d-md-block">
                                <h1 className='banner_title_set'>Find Your Favorite <br/>
                                      Clothing</h1><br/>
                                    <p className='banner_text_set'>our collection will help your fashion looks better and <br/>
                                      we will provide the best product for you.</p><br/>  

                                    <Link to='/'>
                                      <img src="assets/imgs/banner/Group.png" alt="/"/>
                                    </Link>                                
                                    
                                </div>
                                </div>
                                <div className="carousel-item active">
                                <img src="assets/imgs/banner/Slider.png" className="d-block w-100" alt="/" />
                                <div className="carousel-caption d-none d-md-block">
                                <h1>Find Your Favorite <br/>
                                      Clothing</h1><br/>
                                    <p>our collection will help your fashion looks better and <br/>
                                      we will provide the best product for you.</p><br/>  
                                    <Link to='/'>
                                      <img src="assets/imgs/banner/Group.png" alt="/"/>
                                    </Link>                                
                                                                    
                                    {/* <button style={{backgroundColor:"black",borderRadius: "50px",width:"130px",height:"40px",color:"white",letterSpacing: "1px",fontSize: "larger"}}>SHOP NOW!</button> */}
                                </div>
                                </div>
                                <div className="carousel-item">
                                <img src="assets/imgs/banner/Slider.png" className="d-block w-100" alt="/"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h1>Find Your Favorite <br/>
                                      Clothing</h1><br/>
                                    <p>our collection will help your fashion looks better and <br/>
                                      we will provide the best product for you.</p><br/>   
                                    <Link to='/'>
                                      <img src="assets/imgs/banner/Group.png" alt="/"/>
                                    </Link>                                
                                                                   
                                    {/* <button style={{backgroundColor:"black",borderRadius: "50px",width:"130px",height:"40px",color:"white",letterSpacing: "1px",fontSize: "larger"}}>SHOP NOW!</button> */}
                                </div>
                                </div>
                            </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                        </div>
                </div> 
                <div className="slider-arrow hero-slider-1-arrow" />
            </div>
            </div>
        </section>

            
      <section className="popular-categories section-padding">
        <div className="container wow animate__animated animate__fadeIn">
            <div className="section-title">
            <div className="title">
                <h3>Featured Categories</h3>
                <ul className="list-inline nav nav-tabs links">
                <li className="list-inline-item nav-item"><a className="nav-link" href="/">All </a></li>
                <li className="list-inline-item nav-item"><a className="nav-link" href="/">Sale</a></li>
                <li className="list-inline-item nav-item"><a className="nav-link active" href="/">Women</a></li>
                <li className="list-inline-item nav-item"><a className="nav-link" href="/">Men</a></li>
                <li className="list-inline-item nav-item"><a className="nav-link" href="/">New</a></li>
                </ul>
            </div>
            <div className="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow" id="carausel-10-columns-arrows" />
            </div>
            <div className="carausel-10-columns-cover position-relative">
            <div className="carausel-10-columns" id="carausel-10-columns">
              
                <div className="card-2">
                   <img src="assets/imgs/shop/cat-1.png" style={{ marginTop:"-13px" }} />
                </div>

                <div className="card-2">
                   <img src="assets/imgs/shop/cat-2.png" />
                </div>

                <div className="card-2">
                   <img src="assets/imgs/shop/cat-3.png" />
                </div>

                <div className="card-2">
                   <img src="assets/imgs/shop/cat-4.png" />
                </div>

                <div className="card-2">
                   <img src="assets/imgs/shop/cat-5.png" />
                </div>

                <div className="card-2">
                   <img src="assets/imgs/shop/cat-6.png" />
                </div>

                <div className="card-2">
                   <img src="assets/imgs/shop/cat-7.png" />
                </div>

               
    
            </div>
            </div>
        </div>
    </section>




    <section className="banners mb-25">
    <div className="container">
        <div className="row">
        <div className="col-lg-4 col-md-6">
            <div className="banner-img wow animate__animated animate__fadeInUp" data-wow-delay={0}>
            <img src="assets/imgs/banner/banner-1.png" alt="/"/>
            <div className="banner-text">
                <h4>
                Everyday Fresh &amp; <br />Clean with Our<br />
                Products
                </h4>
                <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right" /></a>
            </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6">
            <div className="banner-img wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
            <img src="assets/imgs/banner/banner-2.png" alt="/"/>
            <div className="banner-text">
                <h4>
                Make your Breakfast<br />
                Healthy and Easy
                </h4>
                <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right" /></a>
            </div>
            </div>
        </div>
        <div className="col-lg-4 d-md-none d-lg-flex">
            <div className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
            <img src="assets/imgs/banner/banner-3.png" alt="/"/>
            <div className="banner-text">
                <h4>The best Organic <br />Products Online</h4>
                <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right" /></a>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>


    <section className="product-tabs section-padding position-relative">
      <div className="container">
        <div className="section-title style-2 wow animate__animated animate__fadeIn">
          <h3>Popular Products</h3>
          <ul className="nav nav-tabs links" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="nav-tab-one" data-bs-toggle="tab" data-bs-target="#tab-one" type="button" role="tab" aria-controls="tab-one" aria-selected="true">All</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="nav-tab-two" data-bs-toggle="tab" data-bs-target="#tab-two" type="button" role="tab" aria-controls="tab-two" aria-selected="false">Milks &amp; Dairies</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="nav-tab-three" data-bs-toggle="tab" data-bs-target="#tab-three" type="button" role="tab" aria-controls="tab-three" aria-selected="false">Coffes &amp; Teas</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="nav-tab-four" data-bs-toggle="tab" data-bs-target="#tab-four" type="button" role="tab" aria-controls="tab-four" aria-selected="false">Pet Foods</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="nav-tab-five" data-bs-toggle="tab" data-bs-target="#tab-five" type="button" role="tab" aria-controls="tab-five" aria-selected="false">Meats</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="nav-tab-six" data-bs-toggle="tab" data-bs-target="#tab-six" type="button" role="tab" aria-controls="tab-six" aria-selected="false">Vegetables</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="nav-tab-seven" data-bs-toggle="tab" data-bs-target="#tab-seven" type="button" role="tab" aria-controls="tab-seven" aria-selected="false">Fruits</button>
            </li>
          </ul>
        </div>
        {/*End nav-tabs*/}
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
            <div className="row product-grid-4">
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="Product">
                        <img className="default-img" src="assets/imgs/shop/product-1-1.png" style={{width:"212px", marginLeft:"40px"}} alt="/"/>
                        <img className="hover-img" src="assets/imgs/shop/product-1-1.png" style={{width:"212px", marginLeft:"40px"}} alt="/"/>
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                      <a aria-label="Compare" className="action-btn" href=""><i className="fi-rs-shuffle" /></a>
                      <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">-17%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Snack</a>
                    </div>
                    <h2><a href="Product">Solid Men Round Neck Blue T-ShirtNeck Blue</a></h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating" style={{width: '90%'}} />
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$28.85</span>
                        <span className="old-price">$32.8</span>
                      </div>
                      <div className="add-cart">
                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Shop Now </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*end product card*/}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="Product">
                        <img className="default-img" src="assets/imgs/shop/product-2-1.png" alt="/"/>
                        <img className="hover-img" src="assets/imgs/shop/product-2-1.png" alt="/"/>
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                      <a aria-label="Compare" className="action-btn" href=""><i className="fi-rs-shuffle" /></a>
                      <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">-17%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Hodo Foods</a>
                    </div>
                    <h2><a href="Product">Solid Men Round Neck Blue T-ShirtNeck Blue</a></h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating" style={{width: '80%'}} />
                      </div>
                      <span className="font-small ml-5 text-muted"> (3.5)</span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$52.85</span>
                        <span className="old-price">$55.8</span>
                      </div>
                      <div className="add-cart">
                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Shop Now </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*end product card*/}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="Product">
                        <img className="default-img" src="assets/imgs/shop/product-3-1.png" alt="/"/>
                        <img className="hover-img" src="assets/imgs/shop/product-3-1.png" alt="/"/>
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                      <a aria-label="Compare" className="action-btn" href=""><i className="fi-rs-shuffle" /></a>
                      <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">-17%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Snack</a>
                    </div>
                    <h2><a href="Product">Solid Men Round Neck Blue T-ShirtNeck Blue</a></h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating" style={{width: '85%'}} />
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$48.85</span>
                        <span className="old-price">$52.8</span>
                      </div>
                      <div className="add-cart">
                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Shop Now </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*end product card*/}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="Product">
                        <img className="default-img" src="assets/imgs/shop/product-4-1.png" alt="/"/>
                        <img className="hover-img" src="assets/imgs/shop/product-4-1.png" alt="/"/>
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                      <a aria-label="Compare" className="action-btn" href=""><i className="fi-rs-shuffle" /></a>
                      <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">-17%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Vegetables</a>
                    </div>
                    <h2><a href="Product">Solid Men Round Neck Blue T-ShirtNeck Blue</a></h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating" style={{width: '90%'}} />
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$17.85</span>
                        <span className="old-price">$19.8</span>
                      </div>
                      <div className="add-cart">
                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Shop Now </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*end product card*/}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="Product">
                        <img className="default-img" src="assets/imgs/shop/product-5-1.png" alt="/"/>
                        <img className="hover-img" src="assets/imgs/shop/product-5-1.png" alt="/"/>
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                      <a aria-label="Compare" className="action-btn" href=""><i className="fi-rs-shuffle" /></a>
                      <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">-17%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Pet Foods</a>
                    </div>
                    <h2><a href="Product">Solid Men Round Neck Blue T-ShirtNeck Blue</a></h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating" style={{width: '90%'}} />
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$23.85</span>
                        <span className="old-price">$25.8</span>
                      </div>
                      <div className="add-cart">
                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Shop Now </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*end product card*/}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="Product">
                        <img className="default-img" src="assets/imgs/shop/product-1-1.png" style={{width:"212px", marginLeft:"40px"}} alt="/"/>
                        <img className="hover-img" src="assets/imgs/shop/product-1-1.png" style={{width:"212px", marginLeft:"40px"}} alt="/"/>
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                      <a aria-label="Compare" className="action-btn" href=""><i className="fi-rs-shuffle" /></a>
                      <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">-17%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Hodo Foods</a>
                    </div>
                    <h2><a href="Product">Solid Men Round Neck Blue T-ShirtNeck Blue</a></h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating" style={{width: '90%'}} />
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$54.85</span>
                        <span className="old-price">$55.8</span>
                      </div>
                      <div className="add-cart">
                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Shop Now </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*end product card*/}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="Product">
                        <img className="default-img" src="assets/imgs/shop/product-2-1.png" alt="/"/>
                        <img className="hover-img" src="assets/imgs/shop/product-2-1.png" alt="/"/>
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                      <a aria-label="Compare" className="action-btn" href=""><i className="fi-rs-shuffle" /></a>
                      <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">-17%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Meats</a>
                    </div>
                    <h2><a href="Product">Solid Men Round Neck Blue T-ShirtNeck Blue</a></h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating" style={{width: '90%'}} />
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$32.85</span>
                        <span className="old-price">$33.8</span>
                      </div>
                      <div className="add-cart">
                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Shop Now </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*end product card*/}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="Product">
                        <img className="default-img" src="assets/imgs/shop/product-3-1.png" alt="/"/>
                        <img className="hover-img" src="assets/imgs/shop/product-3-1.png" alt="/"/>
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                      <a aria-label="Compare" className="action-btn" href=""><i className="fi-rs-shuffle" /></a>
                      <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">-17%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Snack</a>
                    </div>
                    <h2><a href="Product">Solid Men Round Neck Blue T-ShirtNeck Blue</a></h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating" style={{width: '90%'}} />
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$35.85</span>
                        <span className="old-price">$37.8</span>
                      </div>
                      <div className="add-cart">
                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Shop Now </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*end product card*/}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="Product">
                        <img className="default-img" src="assets/imgs/shop/product-4-1.png" alt="/"/>
                        <img className="hover-img" src="assets/imgs/shop/product-4-1.png" alt="/"/>
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                      <a aria-label="Compare" className="action-btn" href=""><i className="fi-rs-shuffle" /></a>
                      <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">-17%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Coffes</a>
                    </div>
                    <h2><a href="Product">Solid Men Round Neck Blue T-ShirtNeck Blue</a></h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating" style={{width: '90%'}} />
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$23.85</span>
                        <span className="old-price">$25.8</span>
                      </div>
                      <div className="add-cart">
                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Shop Now </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*end product card*/}
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                <div className="product-cart-wrap wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="Product">
                        <img className="default-img" src="assets/imgs/shop/product-5-1.png" alt="/"/>
                        <img className="hover-img" src="assets/imgs/shop/product-5-1.png" alt="/"/>
                      </a>
                    </div>
                    <div className="product-action-1">
                      <a aria-label="Add To Wishlist" className="action-btn" href="wishlist"><i className="fi-rs-heart" /></a>
                      <a aria-label="Compare" className="action-btn" href=""><i className="fi-rs-shuffle" /></a>
                      <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a>
                    </div>
                    <div className="product-badges product-badges-position product-badges-mrg">
                      <span className="hot">-17%</span>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <div className="product-category">
                      <a href="shop-grid-right.html">Cream</a>
                    </div>
                    <h2><a href="Product">Solid Men Round Neck Blue T-ShirtNeck Bluep</a></h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating" style={{width: '50%'}} />
                      </div>
                      <span className="font-small ml-5 text-muted"> (2.0)</span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$22.85</span>
                        <span className="old-price">$24.8</span>
                      </div>
                      <div className="add-cart">
                        <a className="add" href="shop-cart.html"><i className="fi-rs-shopping-cart mr-5" />Shop Now </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*end product card*/}
            </div>
            {/*End product-grid-4*/}
          </div>
        </div>
        {/*End tab-content*/}
      </div>
    </section>


{/* old */}
   <section className="section-padding pb-5">
  <div className="container">
    <div className="section-title wow animate__animated animate__fadeIn">
      <h3 className>Daily Best Sells</h3>
      <ul className="nav nav-tabs links" id="myTab-2" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="nav-tab-one-1" data-bs-toggle="tab" data-bs-target="#tab-one-1" type="button" role="tab" aria-controls="tab-one" aria-selected="true">Featured</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="nav-tab-two-1" data-bs-toggle="tab" data-bs-target="#tab-two-1" type="button" role="tab" aria-controls="tab-two" aria-selected="false">Popular</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="nav-tab-three-1" data-bs-toggle="tab" data-bs-target="#tab-three-1" type="button" role="tab" aria-controls="tab-three" aria-selected="false">New added</button>
        </li>
      </ul>
    </div>
    <div className="row">
      <div className="col-lg-3 d-none d-lg-flex wow animate__animated animate__fadeIn">
        <div className="banner-img style-2">
          <div className="banner-text">
            <h2 className="mb-100">Bring nature into your home</h2>
            <a href="shop-grid-right.html" style={{fontSize: "20px",width:"130px"}}  className="btn btn-xs" >Shop Now  
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
                      <a href="Product">
                        <img className="default-img" src="assets/imgs/shop/product-1-1.jpg" alt="/"/>
                        <img className="hover-img" src="assets/imgs/shop/product-1-1.jpg" alt="/"/>
                      </a>
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
                      <a href="shop-grid-right.html">Hodo Foods</a>
                    </div>
                    <h2><a href="Product">Seeds of Change Organic Quinoa, Brown</a></h2>
                    <div className="product-rate d-inline-block">
                      <div className="product-rating" style={{width: '80%'}} />
                    </div>
                    <div className="product-price mt-10">
                      <span>$238.85 </span>
                      <span className="old-price">$245.8</span>
                    </div>
                    <div className="sold mt-15 mb-15">
                      <div className="progress mb-5">
                        <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <span className="font-xs text-heading"> Sold: 90/120</span>
                    </div>
                    <a href="shop-cart.html" className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                  </div>
                </div>
                <div className="product-cart-wrap">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                    <a href="Product">
                        <img className="default-img" src="assets/imgs/shop/product-2-2.jpg" alt="/"/>
                        <img className="hover-img" src="assets/imgs/shop/product-2-2.jpg" alt="/"/>
                      </a>
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
                      <a href="shop-grid-right.html">Hodo Foods</a>
                    </div>
                    <h2><a href="Product">All Natural Italian-Style Chicken Meatballs</a></h2>
                    <div className="product-rate d-inline-block">
                      <div className="product-rating" style={{width: '80%'}} />
                    </div>
                    <div className="product-price mt-10">
                      <span>$238.85 </span>
                      <span className="old-price">$245.8</span>
                    </div>
                    <div className="sold mt-15 mb-15">
                      <div className="progress mb-5">
                        <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <span className="font-xs text-heading"> Sold: 90/120</span>
                    </div>
                    <a href="shop-cart.html" className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                  </div>
                </div>
                <div className="product-cart-wrap">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="Product">
                        <img className="default-img" src="assets/imgs/shop/product-3-2.jpg" alt="/"/>
                        <img className="hover-img" src="assets/imgs/shop/product-3-2.jpg" alt="/"/>
                      </a>
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
                      <a href="shop-grid-right.html">Hodo Foods</a>
                    </div>
                    <h2><a href="Product">Angie’s Boomchickapop Sweet and womnies</a></h2>
                    <div className="product-rate d-inline-block">
                      <div className="product-rating" style={{width: '80%'}} />
                    </div>
                    <div className="product-price mt-10">
                      <span>$238.85 </span>
                      <span className="old-price">$245.8</span>
                    </div>
                    <div className="sold mt-15 mb-15">
                      <div className="progress mb-5">
                        <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <span className="font-xs text-heading"> Sold: 90/120</span>
                    </div>
                    <a href="shop-cart.html" className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                  </div>
                </div>
                <div className="product-cart-wrap">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <a href="Product">
                        <img className="default-img" src="assets/imgs/shop/product-4-2.jpg" alt="/"/>
                        <img className="hover-img" src="assets/imgs/shop/product-4-2.jpg" alt="/"/>
                      </a>
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
                      <a href="shop-grid-right.html">Hodo Foods</a>
                    </div>
                    <h2><a href="Product">Foster Farms Takeout Crispy Classic </a></h2>
                    <div className="product-rate d-inline-block">
                      <div className="product-rating" style={{width: '80%'}} />
                    </div>
                    <div className="product-price mt-10">
                      <span>$238.85 </span>
                      <span className="old-price">$245.8</span>
                    </div>
                    <div className="sold mt-15 mb-15">
                      <div className="progress mb-5">
                        <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <span className="font-xs text-heading"> Sold: 90/120</span>
                    </div>
                    <a href="shop-cart.html" className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section><br/>


<section className="newsletter mb-15 wow animate__animated animate__fadeIn">
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


      



   <Footer/>





    
    </main>
    </div>
  )
}

export default Home
