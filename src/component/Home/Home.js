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

function Home() {
  let common = new CommonService();
  const { user_id, wishlistPost, Loding, CartPost } = useAppContext();

  const [List, setList] = useState([]);
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

  useEffect(() => {
    GetProducts();
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
                  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">

                      <div className="carousel-item active">
                        <img src="assets/imgs/banner/Slider.png" className="d-block w-100" alt="/" />
                        <div className="carousel-caption d-none d-md-block">
                          <h1 className='banner_title_set'>Find Your Favorite <br />
                            Clothing</h1><br />
                          <p className='banner_text_set'>our collection will help your fashion looks better and <br />
                            we will provide the best product for you.</p><br />
                          <div className="slider-main-button-div">
                            <button className="slider-main-button">
                              <span className="img-span">
                                <img style={{marginRight: "10px"}} src="assets/imgs/banner/slider-btn.svg" alt="/" /> 
                              </span>
                              <span className="text-span">
                                SHOP NOW !
                              </span>
                              </button>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/imgs/banner/Slider.png" className="d-block w-100" alt="/" />
                        <div className="carousel-caption d-none d-md-block">
                          <h1>Find Your Favorite <br />
                            Clothing</h1><br />
                          <p>our collection will help your fashion looks better and <br />
                            we will provide the best product for you.</p><br />
                            <div className="slider-main-button-div">
                            <button className="slider-main-button">
                              <span className="img-span">
                                <img style={{marginRight: "10px"}} src="assets/imgs/banner/slider-btn.svg" alt="/" /> 
                              </span>
                              <span className="text-span">
                                SHOP NOW !
                              </span>
                              </button>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src="assets/imgs/banner/Slider.png" className="d-block w-100" alt="/" />
                        <div className="carousel-caption d-none d-md-block">
                          <h1>Find Your Favorite <br />
                            Clothing</h1><br />
                          <p>our collection will help your fashion looks better and <br />
                            we will provide the best product for you.</p><br />
                            <div className="slider-main-button-div">
                            <button className="slider-main-button">
                              <span className="img-span">
                                <img style={{marginRight: "10px"}} src="assets/imgs/banner/slider-btn.svg" alt="/" /> 
                              </span>
                              <span className="text-span">
                                SHOP NOW !
                              </span>
                              </button>
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
                      <h3>Featured Categories</h3>
                  </div>
                </div>
                <div className="col-md-7" style={{alignItems: "center",display: "flex"}}>
                  <div className="title">
                      <ul className="list-inline nav nav-tabs links">
                        <li className="list-inline-item nav-item"><a className="nav-link" href="/">All </a></li>
                        <li className="list-inline-item nav-item"><a className="nav-link" href="/">Sale</a></li>
                        <li className="list-inline-item nav-item"><a className="nav-link active" href="/">Women</a></li>
                        <li className="list-inline-item nav-item"><a className="nav-link" href="/">Men</a></li>
                        <li className="list-inline-item nav-item"><a className="nav-link" href="/">New</a></li>
                      </ul>
                  </div>
                </div>
              </div>
              <div className="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow" id="carausel-10-columns-arrows" />
            {/* </div> */}
            <div className="carausel-10-columns-cover position-relative">
              <div className="carausel-10-columns" id="carausel-10-columns">

                <div className="card-2">
                  <div className="cat-list-home">
                    <svg width="63" height="49" viewBox="0 0 63 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24.8894 48.4647C11.1423 48.4647 0 37.3396 0 23.6138V0C13.7471 0 24.8894 11.125 24.8894 24.8509V48.4647Z" fill="#E4E4E4" />
                      <path d="M27.0713 28.372V15.8326C27.0713 7.08879 34.1711 0 42.9284 0V12.5436C42.9284 21.2875 35.8287 28.372 27.0713 28.372Z" fill="#E4E4E4" />
                      <path d="M62.9166 48.4647H44.7337C34.9784 48.4647 27.0752 40.5695 27.0752 30.8335H45.2581C55.0091 30.8335 62.9166 38.7287 62.9166 48.4647Z" fill="#E4E4E4" />
                    </svg>
                  </div>
                </div>

                <div className="card-2">
                  <div className="cat-list-home">
                    <svg width="46" height="49" viewBox="0 0 46 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.9442 0C10.2712 0 0 10.2553 0 22.9087H45.8885C45.8885 10.2553 35.6173 0 22.9442 0Z" fill="#E4E4E4" />
                      <path d="M43.3764 25.56C43.3764 36.8117 34.2088 45.9608 22.9439 45.9608C11.6748 45.9608 2.51145 36.8075 2.51145 25.56H0.00390625C0.00390625 38.1923 10.2962 48.4687 22.9481 48.4687C35.6 48.4687 45.8924 38.1923 45.8924 25.56H43.3764Z" fill="#E4E4E4" />
                      <path d="M22.9444 42.7311C32.429 42.7311 40.1462 35.0259 40.1462 25.5559H37.6386C37.6386 33.6453 31.0463 40.2232 22.9486 40.2232C14.8466 40.2232 8.25854 33.6411 8.25854 25.5559H5.75098C5.74253 35.0301 13.4597 42.7311 22.9444 42.7311Z" fill="#E4E4E4" />
                    </svg>
                  </div>
                </div>

                <div className="card-2">
                  <div className="cat-list-home">
                    <svg width="71" height="40" viewBox="0 0 71 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M70.8032 39.1847L46.3747 0L35.2071 17.9141L24.0394 0L0 38.5598H3.12914L24.0436 5.01577L33.6467 20.422L21.9505 39.1847H70.8032ZM46.3747 5.01577L66.0249 36.5332H46.8145L36.7674 20.422L46.3747 5.01577ZM43.6896 36.5332H26.7246L35.2071 22.9298L43.6896 36.5332Z" fill="#E4E4E4" />
                    </svg>
                  </div>
                </div>

                <div className="card-2">
                  <div className="cat-list-home">
                    <svg width="54" height="52" viewBox="0 0 54 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M28.4747 27.9632C33.2826 30.2008 38.2469 31.3155 42.4417 31.0959C42.4671 31.0959 42.4924 31.0917 42.5178 31.0917L42.818 1.32216C42.8307 0.270877 41.6509 -0.362428 40.7799 0.224434L15.7002 17.1168C17.7299 20.9799 22.4236 25.1428 28.4747 27.9632Z" fill="#E4E4E4" />
                      <path d="M41.3925 33.95C37.016 33.95 32.0558 32.7509 27.2733 30.5259C20.6768 27.4565 15.7166 23.074 13.3317 18.7042L0.578353 27.2961C-0.41959 27.9674 -0.055934 29.5126 1.13229 29.6731L22.5458 32.582C23.8059 32.7551 24.9603 33.3758 25.7976 34.33L40.0267 50.5721C40.8174 51.4756 42.3059 50.9268 42.3186 49.7235L42.4793 33.9204C42.1283 33.9415 41.7646 33.95 41.3925 33.95Z" fill="#E4E4E4" />
                      <path d="M41.3925 31.6955C37.0159 31.6955 32.0558 30.4964 27.2733 28.2714C16.0253 23.0319 9.52175 13.9883 12.4691 7.68056C15.4164 1.37285 26.5375 0.532668 37.7855 5.77221C41.4644 7.48635 44.8007 9.70714 47.4309 12.1981C47.9975 12.7343 48.0229 13.6336 47.4859 14.1994C46.9446 14.7651 46.0482 14.7905 45.4815 14.2543C43.0712 11.9701 39.9971 9.92668 36.5888 8.3392C27.1084 3.92296 17.2389 4.17206 15.0443 8.87962C12.8454 13.5872 18.998 21.2924 28.4784 25.7086C33.2863 27.9463 38.2464 29.0609 42.4454 28.8414C46.323 28.6387 49.0124 27.3341 50.0272 25.1682C51.0802 22.9094 50.0611 20.334 49.0208 18.565C48.6234 17.8894 48.8475 17.0239 49.524 16.627C50.2006 16.2302 51.0675 16.4539 51.4649 17.1295C53.427 20.4522 53.8287 23.7327 52.5982 26.363C51.1225 29.5211 47.5704 31.4041 42.5976 31.6659C42.1959 31.687 41.7985 31.6955 41.3925 31.6955Z" fill="#E4E4E4" />
                    </svg>
                  </div>
                </div>

                <div className="card-2">
                  <div className="cat-list-home">
                    <svg width="60" height="41" viewBox="0 0 60 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M33.6591 9.71912C34.6867 8.68894 35.3252 7.26612 35.3252 5.69553C35.3252 2.55011 32.7711 0 29.6208 0C27.6292 0 25.8785 1.02174 24.8595 2.567C24.5888 2.83721 1.88139 30.7828 1.66996 31.1037C0.642422 32.1339 0.00390625 33.5567 0.00390625 35.1273C0.00390625 38.2727 2.55797 40.8228 5.70825 40.8228C7.69991 40.8228 9.45053 39.8011 10.4696 38.2558C10.7402 37.9814 33.4477 10.04 33.6591 9.71912Z" fill="#E4E4E4" />
                      <path d="M46.802 22.9763C47.8338 21.9461 48.4723 20.5233 48.4723 18.9484C48.4723 15.803 45.9182 13.2529 42.768 13.2529C40.7763 13.2529 39.0257 14.2747 38.0024 15.8199C37.7275 16.0943 25.8029 30.7701 25.5873 31.0952C24.5555 32.1254 23.917 33.5482 23.917 35.123C23.917 38.2684 26.471 40.8186 29.6213 40.8186C31.613 40.8186 33.3636 39.7968 34.3869 38.2516C34.6576 37.9813 46.5864 23.3014 46.802 22.9763Z" fill="#E4E4E4" />
                      <path d="M59.2427 5.69553C59.2427 8.84094 56.6886 11.391 53.5383 11.391C50.388 11.391 47.834 8.84094 47.834 5.69553C47.834 2.55011 50.388 0 53.5383 0C56.6886 0 59.2427 2.55011 59.2427 5.69553Z" fill="#E4E4E4" />
                      <path d="M11.4087 5.69553C11.4087 8.84094 8.85462 11.391 5.70434 11.391C2.55405 11.391 0 8.84094 0 5.69553C0 2.55011 2.55405 0 5.70434 0C8.85462 0 11.4087 2.55011 11.4087 5.69553Z" fill="#E4E4E4" />
                    </svg>

                  </div>
                </div>

                <div className="card-2">
                  <div className="cat-list-home">
                    <svg width="42" height="51" viewBox="0 0 42 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.72607 22.4058C8.61841 24.3311 12.5468 24.8884 15.8873 24.8884C20.5557 24.8884 24.1034 23.9089 26.5222 21.9414C28.9452 19.9782 30.1545 17.3985 30.1545 14.2024C30.1545 10.5124 28.2221 7.05034 24.8688 5.38263C23.7863 4.84222 22.6784 4.41578 21.4986 4.13291C19.7903 3.72337 17.9213 3.51648 15.8873 3.51648C11.219 3.51648 7.6712 4.50023 5.25246 6.46347C2.82949 8.42672 1.62012 11.0064 1.62012 14.2024C1.62012 16.1023 1.97532 17.7321 2.68995 19.0916C3.42572 20.4933 4.48287 21.5741 5.72607 22.4058ZM12.551 6.88568C13.3502 5.50507 14.4623 4.81265 15.8915 4.81265C17.3166 4.81265 18.4329 5.50507 19.2321 6.88568C20.0313 8.26628 20.433 10.7066 20.433 14.2024C20.433 17.6983 20.0313 20.1386 19.2321 21.5192C18.4329 22.8998 17.3208 23.5922 15.8915 23.5922C14.4665 23.5922 13.3502 22.904 12.551 21.5192C11.7518 20.1386 11.3501 17.6983 11.3501 14.2024C11.3501 10.7066 11.7475 8.26628 12.551 6.88568Z" fill="#E4E4E4" />
                      <path d="M29.9982 30.6177C28.1588 28.7389 25.6217 27.8016 22.3784 27.8016H10.0563C8.11116 27.8016 6.75802 27.6074 6.0011 27.219C5.40065 26.9108 4.92282 26.3999 4.8763 25.6991C4.83824 25.1333 5.1131 24.7069 5.43024 24.2804C3.34979 24.1031 1.10865 25.2853 0.427849 27.2907C-0.502437 30.0351 0.288304 33.0707 2.59288 34.8566C4.32236 36.195 6.80875 36.8663 10.0521 36.8663H22.3741C27.5626 36.8663 30.1589 38.268 30.1589 41.0757C30.1589 43.2754 28.9369 45.1246 26.4928 46.6108C23.778 48.2658 20.5685 49.0384 17.414 49.2242C14.0227 49.4226 10.9062 48.8949 7.76019 47.6663C9.03299 46.7248 9.82796 45.1626 9.81527 43.5793C9.80258 41.9961 8.97379 40.4381 7.65448 39.56C6.33939 38.6818 4.56761 38.5129 3.11721 39.1504C2.13619 39.5811 1.32007 40.3495 0.761897 41.2615C0.224868 42.1396 -0.088046 43.1782 0.0218968 44.2042C0.148754 45.3864 0.833786 46.463 1.73024 47.2483C4.30967 49.524 8.40715 50.1953 11.7139 50.5584C15.4393 50.9679 19.0801 50.6681 22.7336 49.9039C25.7443 49.2749 28.772 47.8605 30.7044 45.3906C32.1971 43.4822 32.7553 40.8604 32.7553 38.4876C32.751 35.1184 31.8334 32.4965 29.9982 30.6177Z" fill="#E4E4E4" />
                      <path d="M37.1707 10.9752C39.7279 10.0204 41.0257 7.17646 40.0693 4.62317C39.113 2.06988 36.2647 0.774103 33.7074 1.72896C31.1502 2.68382 29.8524 5.52773 30.8088 8.08102C31.7651 10.6343 34.6134 11.9301 37.1707 10.9752Z" fill="#E4E4E4" />
                    </svg>
                  </div>
                </div>

                <div className="card-2">
                  <div className="cat-list-home">
                    <svg width="70" height="45" viewBox="0 0 70 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.4941 22.229C25.4941 29.6682 29.2407 36.2504 34.945 40.1937C40.6155 36.187 44.3197 29.588 44.3197 22.1234C44.3197 14.7222 40.6747 8.17384 35.0846 4.15869C29.3041 8.09362 25.4941 14.7222 25.4941 22.229Z" fill="#E4E4E4" />
                      <path d="M22.441 22.229C22.441 14.1691 26.3017 6.99167 32.2725 2.44032C29.2406 0.886613 25.807 0 22.162 0C9.92447 0 0 9.90487 0 22.1276C0 34.3504 9.92024 44.2553 22.162 44.2553C25.7436 44.2553 29.1222 43.4025 32.116 41.8952C26.2383 37.3354 22.441 30.217 22.441 22.229Z" fill="#E4E4E4" />
                      <path d="M47.3764 43.9556C35.3757 43.9556 25.6162 34.2069 25.6162 22.229C25.6162 10.2469 35.38 0.502441 47.3764 0.502441C59.3771 0.502441 69.1367 10.2511 69.1367 22.229C69.1367 34.2069 59.3729 43.9556 47.3764 43.9556ZM47.3764 3.54651C37.0587 3.54651 28.6692 11.9273 28.6692 22.2248C28.6692 32.5265 37.0629 40.903 47.3764 40.903C57.6941 40.903 66.0879 32.5223 66.0879 22.2248C66.0836 11.9273 57.6899 3.54651 47.3764 3.54651Z" fill="#E4E4E4" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="banners mb-25">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                  <div className="row banner-row" style={{backgroundColor:"#E4E4E4",borderRadius: "10px"}}>
                    <div className="col-md-7 banner-text-set">
                      <div className="banner-text" style={{margin: "19px 0px 20px 0px"}}>
                        <h4 className="banner-in-text">
                          Everyday Fresh &amp; <br />Clean with Our<br />
                          Products
                        </h4>
                        <a href="#" className="btn btn-xs small-slider-button">
                          <span className="text-span">
                            Shop Now
                          </span>
                          <span className="img-span">
                              <img style={{width:"100%"}} src="assets/imgs/banner/right-arrow.svg" alt="/" /> 
                          </span>
                          {/* Shop Now <i className="fi-rs-arrow-small-right" /> */}
                        </a>
                      </div>
                    </div>
                    <div className="col-md-5 p-0" style={{maxHeight: "271px"}}>
                      <img src="assets/imgs/banner/banner-1.png" className="img-fluid" alt="/" style={{width:"100%",borderRadius: "0px 10px 10px 0px"}} />
                    </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="row banner-row" style={{backgroundColor:"#DEFFB4",borderRadius: "10px"}}>
                    <div className="col-md-7 banner-text-set">
                      <div className="banner-text" style={{margin: "19px 0px 20px 0px"}}>
                        <h4 className="banner-in-text">
                          Everyday Fresh &amp; <br />Clean with Our<br />
                          Products
                        </h4>
                        <a href="#" className="btn btn-xs small-slider-button">
                          <span className="text-span">
                            Shop Now
                          </span>
                          <span className="img-span">
                              <img style={{width:"100%"}} src="assets/imgs/banner/right-arrow.svg" alt="/" /> 
                          </span>
                          {/* Shop Now <i className="fi-rs-arrow-small-right" /> */}
                        </a>
                      </div>
                    </div>
                    <div className="col-md-5 p-0" style={{maxHeight: "271px"}}>
                      <img src="assets/imgs/banner/banner-2.png" className="img-fluid" alt="/" style={{width:"100%",borderRadius: "0px 10px 10px 0px"}} />
                    </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="row banner-row" style={{backgroundColor:"#FFE1B4",borderRadius: "10px"}}>
                    <div className="col-md-7 banner-text-set">
                      <div className="banner-text" style={{margin: "19px 0px 20px 0px"}}>
                        <h4 className="banner-in-text">
                          Everyday Fresh &amp; <br />Clean with Our<br />
                          Products
                        </h4>
                        <a href="#" className="btn btn-xs small-slider-button">
                          <span className="text-span">
                            Shop Now
                          </span>
                          <span className="img-span">
                              <img style={{width:"100%"}} src="assets/imgs/banner/right-arrow.svg" alt="/" /> 
                          </span>
                          {/* Shop Now <i className="fi-rs-arrow-small-right" /> */}
                        </a>
                      </div>
                    </div>
                    <div className="col-md-5 p-0" style={{maxHeight: "271px"}}>
                      <img src="assets/imgs/banner/banner-3.png" className="img-fluid" alt="/" style={{width:"100%",borderRadius: "0px 10px 10px 0px"}} />
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
                           item.category == "" ? "" : 
                       
                          <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                            <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                              <div className="product-img-action-wrap">
                                <div className="product-img product-img-zoom">
                                  <Link to={`/${item.id}`}>
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
                                  <a href="shop-grid-right.html">{item.category}</a>
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
                          </div>
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
        <BestSellers/>


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
