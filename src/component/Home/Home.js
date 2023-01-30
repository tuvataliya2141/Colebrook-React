import { Link } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { useAppContext } from '../../context/index';
import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import CommonService from "../../services/commonService";
import urlConstant from "../../constants/urlConstant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestSellers from '../BestSellers/BestSellers';
import Slider from "react-slick";


function Home() {
  let common = new CommonService();
  const { user_id, wishlistPost, Loding, CartPost } = useAppContext();

  const [List, setList] = useState([]);
  const [BrandsList, setBrandsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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


  function GetBrands() {
    setIsLoading(true)
    const GetAllBrands = `${urlConstant.AllBrands.GetAllBrands}`;
    common.httpGet(GetAllBrands).then(function (res) {
      setIsLoading(false);
      setBrandsList(res.data.data);
    })
      .catch(function (error) {
        setIsLoading(false);
        console.log(error);
      });
  }

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };



  useEffect(() => {
    GetProducts();
    GetBrands();
  }, [])
  return (
    <div>
      <ToastContainer />
      <Header />
      {isLoading ? <Loding /> : Home}
      <main className="main">
        <section className="home-slider position-relative mb-30">
          <div className="container">
            <div className="home-slide-cover mt-30">
              <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                <div className="single-hero-slider single-animation-wrap">
                  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner d-none">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner" >
                      <div className="carousel-item active">
                        <img src="assets/imgs/banner/Slider.png" className="d-block w-100" alt="/" />
                        <div className="carousel-caption d-none d-md-block">
                          <h1 className='banner_title_set'>Find Your Favorite <br />
                            Clothing</h1><br />
                          <p className='banner_text_set'>our collection will help your fashion looks better and <br />
                            we will provide the best product for you.</p><br />
                          <div className="slider-main-button-div">
                            <Link to="/ShopProduct">
                              <button className="slider-main-button">
                                <span className="img-span">
                                  <img style={{ marginRight: "10px" }} src="assets/imgs/banner/slider-btn.svg" alt="/" />
                                </span>
                                <span className="text-span">
                                  SHOP NOW !
                                </span>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/imgs/banner/Slider.png" className="d-block w-100" alt="/" />
                        <div className="carousel-caption d-none d-md-block">
                          <h1>Find Your Favorite <br />
                            Clothing1</h1><br />
                          <p>our collection will help your fashion looks better and <br />
                            we will provide the best product for you.</p><br />
                          <div className="slider-main-button-div">
                            <Link to="/ShopProduct">
                              <button className="slider-main-button">
                                <span className="img-span">
                                  <img style={{ marginRight: "10px" }} src="assets/imgs/banner/slider-btn.svg" alt="/" />
                                </span>
                                <span className="text-span">
                                  SHOP NOW !
                                </span>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/imgs/banner/Slider.png" className="d-block w-100" alt="/" />
                        <div className="carousel-caption d-none d-md-block">
                          <h1>Find Your Favorite <br />
                            Clothing2</h1><br />
                          <p>our collection will help your fashion looks better and <br />
                            we will provide the best product for you.</p><br />
                          <div className="slider-main-button-div">
                            <Link to="/ShopProduct">
                              <button className="slider-main-button">
                                <span className="img-span">
                                  <img style={{ marginRight: "10px" }} src="assets/imgs/banner/slider-btn.svg" alt="/" />
                                </span>
                                <span className="text-span">
                                  SHOP NOW !
                                </span>
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button> */}
                  </div>
                </div>
              </div>
              <div className="slider-arrow hero-slider-1-arrow" />
            </div>
          </div>
        </section>



        <section className="popular-categories section-padding">
          <div className="container wow animate__animated animate__fadeIn">
            {/* <div className="section-title"> */}
            <div className="row">
              <div className="col-md-5">
                <div className="title">
                  <h3>Featured Brands</h3>
                </div>
              </div>
              {/* <div className="col-md-7" style={{ alignItems: "center", display: "flex" }}>
                <div className="title">
                  <ul className="list-inline nav nav-tabs links">
                    <li className="list-inline-item nav-item"><a className="nav-link" >All </a></li>
                    <li className="list-inline-item nav-item"><a className="nav-link" >Sale</a></li>
                    <li className="list-inline-item nav-item"><a className="nav-link active" >Women</a></li>
                    <li className="list-inline-item nav-item"><a className="nav-link" >Men</a></li>
                    <li className="list-inline-item nav-item"><a className="nav-link" >New</a></li>
                  </ul>
                </div>
              </div> */}
            </div>
            <div className="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow" id="carausel-10-columns-arrows" />
            {/* </div> */}
            <div className="carausel-10-columns-cover position-relative">

              <div className="carausel-10-columns" id="carausel-10-columns">
                {
                  BrandsList.map((item, i) => {
                    return (
                      <>

                        <div className="card-2">
                          <div className="cat-list-home">
                            <img src={item.logo} style={{ borderRadius: "100px", height: "100px", width: "100%" }} />
                          </div>
                        </div>

                      </>
                    )
                  })
                }
              </div>

            </div>
          </div>
        </section>
        <section className="banners mb-25">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="row banner-row" style={{ backgroundColor: "#E4E4E4", borderRadius: "10px" }}>
                  <div className="col-md-7 banner-text-set">
                    <div className="banner-text" style={{ margin: "19px 0px 20px 0px" }}>
                      <h4 className="banner-in-text">
                        Everyday Fresh &amp; <br />Clean with Our<br />
                        Products
                      </h4>
                      <a href="#" className="btn btn-xs small-slider-button">
                        <span className="text-span">
                          Shop Now
                        </span>
                        <span className="img-span">
                          <img style={{ width: "100%" }} src="assets/imgs/banner/right-arrow.svg" alt="/" />
                        </span>
                        {/* Shop Now <i className="fi-rs-arrow-small-right" /> */}
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5 p-0" style={{ maxHeight: "271px" }}>
                    <img src="assets/imgs/banner/banner-1.png" className="img-fluid" alt="/" style={{ width: "100%", borderRadius: "0px 10px 10px 0px" }} />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row banner-row" style={{ backgroundColor: "#DEFFB4", borderRadius: "10px" }}>
                  <div className="col-md-7 banner-text-set">
                    <div className="banner-text" style={{ margin: "19px 0px 20px 0px" }}>
                      <h4 className="banner-in-text">
                        Everyday Fresh &amp; <br />Clean with Our<br />
                        Products
                      </h4>
                      <a href="#" className="btn btn-xs small-slider-button">
                        <span className="text-span">
                          Shop Now
                        </span>
                        <span className="img-span">
                          <img style={{ width: "100%" }} src="assets/imgs/banner/right-arrow.svg" alt="/" />
                        </span>
                        {/* Shop Now <i className="fi-rs-arrow-small-right" /> */}
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5 p-0" style={{ maxHeight: "271px" }}>
                    <img src="assets/imgs/banner/banner-2.png" className="img-fluid" alt="/" style={{ width: "100%", borderRadius: "0px 10px 10px 0px" }} />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row banner-row" style={{ backgroundColor: "#FFE1B4", borderRadius: "10px" }}>
                  <div className="col-md-7 banner-text-set">
                    <div className="banner-text" style={{ margin: "19px 0px 20px 0px" }}>
                      <h4 className="banner-in-text">
                        Everyday Fresh &amp; <br />Clean with Our<br />
                        Products
                      </h4>
                      <a href="#" className="btn btn-xs small-slider-button">
                        <span className="text-span">
                          Shop Now
                        </span>
                        <span className="img-span">
                          <img style={{ width: "100%" }} src="assets/imgs/banner/right-arrow.svg" alt="/" />
                        </span>
                        {/* Shop Now <i className="fi-rs-arrow-small-right" /> */}
                      </a>
                    </div>
                  </div>
                  <div className="col-md-5 p-0" style={{ maxHeight: "271px" }}>
                    <img src="assets/imgs/banner/banner-3.png" className="img-fluid" alt="/" style={{ width: "100%", borderRadius: "0px 10px 10px 0px" }} />
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-6">
                <div className="banner-img wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                  <img src="assets/imgs/banner/banner-2.png" alt="/" />
                  <div className="banner-text">
                    <h4>
                      Make your Breakfast<br />
                      Healthy and Easy
                    </h4>
                    <a href="#" className="btn btn-xs small-slider-button">
                      <span className="text-span">
                        Shop Now
                      </span>
                      <span className="img-span">
                          <img style={{width:"100%"}} src="assets/imgs/banner/right-arrow.svg" alt="/" /> 
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-md-none d-lg-flex">
                <div className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                  <img src="assets/imgs/banner/banner-3.png" alt="/" />
                  <div className="banner-text">
                    <h4>The best Organic <br />Products Online</h4>
                    <a href="#" className="btn btn-xs small-slider-button">
                      <span className="text-span">
                        Shop Now
                      </span>
                      <span className="img-span">
                          <img style={{width:"100%"}} src="assets/imgs/banner/right-arrow.svg" alt="/" /> 
                      </span>
                    </a>
                  </div>
                </div>
              </div> */}
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
                  <button className="nav-link" id="nav-tab-two" data-bs-toggle="tab" data-bs-target="#tab-two" type="button" role="tab" aria-controls="tab-two" aria-selected="false">Shirt</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="nav-tab-three" data-bs-toggle="tab" data-bs-target="#tab-three" type="button" role="tab" aria-controls="tab-three" aria-selected="false">T-shirt</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="nav-tab-four" data-bs-toggle="tab" data-bs-target="#tab-four" type="button" role="tab" aria-controls="tab-four" aria-selected="false">Shot</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="nav-tab-five" data-bs-toggle="tab" data-bs-target="#tab-five" type="button" role="tab" aria-controls="tab-five" aria-selected="false">Topwear</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="nav-tab-six" data-bs-toggle="tab" data-bs-target="#tab-six" type="button" role="tab" aria-controls="tab-six" aria-selected="false">Dress</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="nav-tab-seven" data-bs-toggle="tab" data-bs-target="#tab-seven" type="button" role="tab" aria-controls="tab-seven" aria-selected="false">Underwear</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="nav-tab-eigth" data-bs-toggle="tab" data-bs-target="#tab-seven" type="button" role="tab" aria-controls="tab-seven" aria-selected="false">High Brand</button>
                </li>
              </ul>
            </div>
            {/*End nav-tabs*/}
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                <div className="row product-grid-4">

                  {
                    List.map((item, i) => {


                      const image = item.thumbnail_image == '' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9zuWJ0xU19Mgk0dNFnl2KIc8E9Ch0zhfCg&usqp=CAU' : item.thumbnail_image
                      const Name = item.name.substring(0, 15);
                      return (
                        <>
                          {
                            item.category == "popular" ?

                              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                  <div className="product-img-action-wrap">
                                    <div className="product-img product-img-zoom">
                                      <Link to={`/shop/${item.slug}`}>
                                        <img className="default-img" src={image} width="100%" alt="/" />
                                        <img className="hover-img" src={image} width="100%" alt="/" />
                                      </Link>
                                    </div>
                                    <div className="product-action-1">
                                      <a aria-label="Add To Wishlist" className="action-btn" onClick={() => { wishlistPost(item.id) }}><i className="fi-rs-heart" /></a>
                                      <a aria-label="Compare" className="action-btn" href=""><i className="fi-rs-shuffle" /></a>
                                      {/* <a aria-label="Quick view" className="action-btn" data-bs-toggle="modal" data-bs-target="#quickViewModal"><i className="fi-rs-eye" /></a> */}
                                    </div>
                                    <div className="product-badges product-badges-position product-badges-mrg">
                                      {/* <span className="hot">-17%</span> */}
                                    </div>
                                  </div>
                                  <div className="product-content-wrap">
                                    <div className="product-category">
                                      <a >{item.category}</a>
                                    </div>
                                    <h2><Link to={'1'}>{Name}</Link></h2>
                                    <div className="product-rate-cover">
                                      <div className="product-rate d-inline-block">
                                        <div className="product-rating" style={{ width: '90%' }} />
                                      </div>
                                      <span className="font-small ml-5 text-muted">({item.rating})</span>
                                    </div>
                                    <div className="product-card-bottom">
                                      <div className="product-price">
                                        <span>${item.base_price}</span>
                                        <span className="old-price">${item.base_discounted_price + 200}</span>
                                      </div>
                                      <div className="add-cart">
                                        {/* <a className="add" onClick={() => { CartPost(item.id,item.variants.variant) }}><i className="fi-rs-shopping-cart mr-5" />Shop Now </a> */}
                                        <Link to={`/${item.id}`} className="add"><i className="fi-rs-shopping-cart mr-5" />Shop Now </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> : ""
                          }
                        </>
                      )
                    })
                  }

                </div>
                {/*End product-grid-4*/}
              </div>
            </div>
            {/*End tab-content*/}
          </div>
        </section>


        {/* old */}
        <BestSellers />


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






        <Footer />






      </main>
    </div>
  )
}

export default Home
