import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import CommonService from "../../services/commonService";
import urlConstant from "../../constants/urlConstant";
import { ToasterWarning, ToasterError } from "../../common/toaster";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { useAppContext } from "../../context";
import BestSellers from "../BestSellers/BestSellers";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Product.css'


function Product() {



  const id = useParams();
  let common = new CommonService();
  const { user_id, wishlistPost, Loding, CartPost, ApplyCoupon } = useAppContext();


  const [List, setList] = useState([]);
  const [sizeList, setsizeList] = useState([]);
  const [size, setsize] = useState("");
  const [multipleimageList, setmultipleimageList] = useState([]);
  const [mainImage, setMainImage] = useState([0]);
  const [colors, setcolors] = useState("");
  const [colorsList, setcolorsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [increment, SetIncrement] = useState(1);
  const [CouponCode, SetCouponCode] = useState('');


  function GetSingelProducts() {
    setIsLoading(true)
    const GetAllProducts = `${urlConstant.Products.PostSingelProducts}`;
    const Data = { slug: id.id, user_id }
    axios.post(GetAllProducts, Data, {
      headers: { "Authorization": `Bearer ${localStorage.getItem('access_token')}` }
    }).then(function (res) {
      setIsLoading(false);
      setList(res.data.data);
      setsizeList(res.data.data.multipleSize);
      setmultipleimageList(res.data.data.multipleimage);
      setcolorsList(res.data.data.colors);
    })
      .catch(function (error) {
        setIsLoading(false);
        ToasterError("Error");
      });
  }


  const defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9zuWJ0xU19Mgk0dNFnl2KIc8E9Ch0zhfCg&usqp=CAU';
  const image = List.thumbnail_img == '' ? defaultImg : List.thumbnail_img;


  const sizeFun = (e) => {
    setsize(e.target.value);
  }
  const colorFun = (e) => {
    setcolors(e.target.value);
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    GetSingelProducts();
  }, []);


  return (
    <div>
      {isLoading ? <Loding /> : Product}
      <ToastContainer />
      <Header />
      <main className="main">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <Link to="/" rel="nofollow"><i className="fi-rs-home mr-5" />Home</Link>
              <span /> <Link to="/">Product</Link>
            </div>
          </div>
        </div>
        <div className="container mb-30">
          <div className="row">
            <div className="col-xl-11 col-lg-12 m-auto">
              <div className="row">
                <div className="col-xl-8">
                  <div className="product-detail accordion-detail">
                    <div className="row mb-50 mt-30">
                      <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                        <div className="detail-gallery">
                          <span className="zoom-icon"><i className="fi-rs-search" /></span>
                          {/* MAIN SLIDES */}
                          <div className="product-image-slider">
                            <figure className="border-radius-10" style={{ height: "500px" }}>
                              {/* <img src={multipleimageList[mainImage]} alt={image} style={{ width: "100%" ,height:"600px"}} /> */}
                              <img src={multipleimageList[mainImage]} alt={image} style={{ width: "100%" }} />
                            </figure>
                          </div>
                          {/* THUMBNAILS */}
                          {/* <div className="slider-nav-thumbnails" style={{ display: "flex" }}>
                            {
                              multipleimageList.map((item, i) => {
                                return (
                                  <>
                                    <div><img src={item} alt="product image" width="150px" height="165px" style={{ borderRadius: "10px", padding: "3px" }} key={i} onClick={() => setMainImage(i)} /></div>
                                  </>
                                )
                              })
                            }
                          </div> */}


                          <div>
                            <div>
                              <Slider {...settings}>
                                {
                                  multipleimageList.map((item, i) => {
                                    return (
                                      <>
                                        <div>
                                          <img src={item} alt="product image" width="100%" height="130px" style={{ borderRadius: "10px", padding: "3px" }} key={i} onClick={() => setMainImage(i)} />
                                        </div>
                                      </>
                                    )
                                  })
                                }
                              </Slider>
                            </div>
                          </div>
                        </div>
                        {/* End Gallery */}
                      </div>
                      <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="detail-info pr-30 pl-30">
                          {
                            List.InStock == 0 ? <span className="stock-status out-stock">Out of stock</span> :
                              <span className="stock-status in-stock mb-0">In Stock</span>
                          }
                          <h5 className="title-detail" style={{ marginTop: "10px" }}>{List.name}</h5>
                          <div className="product-detail-rating">
                            <div className="product-rate-cover text-end">
                              <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{ width: '90%' }} />
                              </div>
                              <span className="font-small ml-5 text-muted">{List.rating} (0 reviews)</span>
                            </div>
                          </div>
                          <hr style={{ margin: "0px", color: "rgb(69 96 147)" }} />
                          <div className="clearfix product-price-cover">
                            <div className="product-price primary-color float-left">
                              <span className="current-price text-brand">₹{List.price}</span>
                              <span>
                                <span className="save-price font-md color3 ml-15">{List.offer ? List.offer : 0} % Off</span>
                                <span className="old-price font-md ml-15">₹{List.oldPrice}</span>
                              </span>
                            </div>
                          </div>
                          <div className="short-desc mb-20">
                            <p className="font-lg">Incluslve of all taxes</p>
                          </div>
                          <div className="attr-detail attr-size mb-20">
                            <strong className="mr-10">SELECT SIZE <span style={{ paddingLeft: "14px", fontSize: "13px", color: "black" }}></span> </strong>
                          </div>
                          <div className="attr-detail attr-size mb-20">
                            <ul className="list-filter size-filter font-small">
                              {
                                sizeList.map((item, i) => {

                                  return (
                                    <>
                                      <li>
                                        <button key={i} style={{ backgroundColor: size == item ? "black" : "white", color: size == item ? "white" : "black", borderRadius: "50px", width: "40px", height: "40px", margin: "2px" }} onClick={(e) => { sizeFun(e) }} value={item} >
                                          {item}
                                        </button>
                                      </li>
                                    </>
                                  )
                                })
                              }
                            </ul>
                          </div>

                          <div>
                            <div className="attr-detail attr-size mb-20">
                              <strong className="mr-10">COLORS<span style={{ paddingLeft: "14px", fontSize: "13px", color: "black" }}></span> </strong>
                            </div>

                            <div className="attr-detail attr-size mb-20">
                              <ul className="list-filter size-filter font-small">
                                {
                                  colorsList.map((item, i) => {
                                    return (

                                      <>
                                        <li>
                                          <button key={i} className="color_button" style={{ backgroundColor: `${item}`, border: colors == item ? "3px solid black" : "" }} value={item} onClick={(e) => { colorFun(e) }} >
                                          </button>
                                        </li>
                                      </>
                                    )
                                  })
                                }
                              </ul>
                            </div>
                          </div>

                          <div className="detail-extralink mb-20">
                            <div className="detail-qty border radius">
                              <a className="qty-down" ><i className="fi-rs-angle-small-down" onClick={() => { SetIncrement(increment == 1 ? 1 : increment - 1) }} /></a>
                              <span className="qty-val">{increment}</span>
                              <a className="qty-up" ><i className="fi-rs-angle-small-up" onClick={() => { SetIncrement(increment < List.InStock ? increment + 1 : increment) }} /></a>
                            </div>

                            <div className="product-extra-link2">
                              {
                                List.InStock == 0 ? <button className="button button-add-to-cart" style={{ backgroundColor: "#bbb5b5" }} title="Hello World!" disabled><i className="fi-rs-shopping-cart" />Add to cart</button> :

                                  <button type="submit" className="button button-add-to-cart" onClick={() => { CartPost(List.id, List.variant[0].variant, increment, colors, size) }} >
                                    <i className="fi-rs-shopping-cart" />Add to cart
                                  </button>

                              }
                              {/* <a  className="action-btn hover-up" onClick={() => { wishlistPost(List.id) }}><i className="fi-rs-heart" /></a> */}

                              {
                                user_id == null ? <Link to="/login" className="action-btn hover-up"><i className="fi-rs-heart" /></Link> :
                                  <a className="action-btn hover-up" onClick={() => { wishlistPost(List.id) }}><i className="fi-rs-heart" /></a>
                              }
                            </div>
                          </div>
                          <hr style={{ margin: "10px", color: "rgb(69 96 147)" }} />
                          <div class="font-xs">
                            <ul class="mr-50 float-start">
                              <li class="mb-5"><img src='assets/imgs/theme/delivery.png' width="25px" />&nbsp;<span class="text-brand product-text">  Get it by 7 days</span></li>
                              <li class="mb-5"><img src='assets/imgs/theme/paydelivery.png' width="25px" />&nbsp;<span class="text-brand product-text">  Pay on delivery available</span></li>
                              <li><img src='assets/imgs/theme/return.png' width="25px" />&nbsp; <span class="text-brand product-text">  Easy 30 days return & exchange available</span></li>
                              <span class="text-brand product-text">100% Original Products</span>
                            </ul>
                          </div>
                        </div>
                        {/* Detail Info */}
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="tab-style3">
                        <ul className="nav nav-tabs text-uppercase">
                          <li className="nav-item">
                            <a className="nav-link active" id="Description-tab" data-bs-toggle="tab" href="#Description">Description</a>
                          </li>
                          {/* <li className="nav-item">
                            <a className="nav-link" id="Additional-info-tab" data-bs-toggle="tab" href="#Additional-info">Additional info</a>
                          </li> */}
                          {/* <li className="nav-item">
                            <a className="nav-link" id="Vendor-info-tab" data-bs-toggle="tab" href="#Vendor-info">Vendor</a>
                          </li> */}
                          <li className="nav-item">
                            <a className="nav-link" id="Reviews-tab" data-bs-toggle="tab" href="#Reviews">Reviews</a>
                          </li>
                        </ul>
                        <div className="tab-content shop_info_tab entry-main-content">
                          <div className="tab-pane fade show active" id="Description">
                            <div className>
                              <p>{List.description}</p>
                              {/* <p>Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</p> */}
                            </div>
                          </div>
                          <div className="tab-pane fade" id="Additional-info">
                            <table className="font-md">
                              <tbody>
                                <tr className="stand-up">
                                  <th>Stand Up</th>
                                  <td>
                                    <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                                  </td>
                                </tr>
                                <tr className="folded-wo-wheels">
                                  <th>Folded (w/o wheels)</th>
                                  <td>
                                    <p>32.5″L x 18.5″W x 16.5″H</p>
                                  </td>
                                </tr>
                                <tr className="folded-w-wheels">
                                  <th>Folded (w/ wheels)</th>
                                  <td>
                                    <p>32.5″L x 24″W x 18.5″H</p>
                                  </td>
                                </tr>
                                <tr className="door-pass-through">
                                  <th>Door Pass Through</th>
                                  <td>
                                    <p>24</p>
                                  </td>
                                </tr>
                                <tr className="frame">
                                  <th>Frame</th>
                                  <td>
                                    <p>Aluminum</p>
                                  </td>
                                </tr>
                                <tr className="weight-wo-wheels">
                                  <th>Weight (w/o wheels)</th>
                                  <td>
                                    <p>20 LBS</p>
                                  </td>
                                </tr>
                                <tr className="weight-capacity">
                                  <th>Weight Capacity</th>
                                  <td>
                                    <p>60 LBS</p>
                                  </td>
                                </tr>
                                <tr className="width">
                                  <th>Width</th>
                                  <td>
                                    <p>24″</p>
                                  </td>
                                </tr>
                                <tr className="handle-height-ground-to-handle">
                                  <th>Handle height (ground to handle)</th>
                                  <td>
                                    <p>37-45″</p>
                                  </td>
                                </tr>
                                <tr className="wheels">
                                  <th>Wheels</th>
                                  <td>
                                    <p>12″ air / wide track slick tread</p>
                                  </td>
                                </tr>
                                <tr className="seat-back-height">
                                  <th>Seat back height</th>
                                  <td>
                                    <p>21.5″</p>
                                  </td>
                                </tr>
                                <tr className="head-room-inside-canopy">
                                  <th>Head room (inside canopy)</th>
                                  <td>
                                    <p>25″</p>
                                  </td>
                                </tr>
                                <tr className="pa_color">
                                  <th>Color</th>
                                  <td>
                                    <p>Black, Blue, Red, White</p>
                                  </td>
                                </tr>
                                <tr className="pa_size">
                                  <th>Size</th>
                                  <td>
                                    <p>{List.multipleSize}</p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="tab-pane fade" id="Reviews">
                            {/*comment form*/}
                            <div className="comment-form">
                              <h4 className="mb-15">Add a review</h4>
                              <div className="row">
                                <div className="rate">
                                  <input type="radio" id="star5" name="rate" defaultValue={5} />
                                  <label htmlFor="star5" >5 stars</label>
                                  <input type="radio" id="star4" name="rate" defaultValue={4} />
                                  <label htmlFor="star4" >4 stars</label>
                                  <input type="radio" id="star3" name="rate" defaultValue={3} />
                                  <label htmlFor="star3" >3 stars</label>
                                  <input type="radio" id="star2" name="rate" defaultValue={2} />
                                  <label htmlFor="star2" >2 stars</label>
                                  <input type="radio" id="star1" name="rate" defaultValue={1} />
                                  <label htmlFor="star1" >1 star</label>
                                </div>
                                </div>
                              <div className="row">
                                <div className="col-lg-8 col-md-12">
                                  <form className="form-contact comment_form">
                                    <div className="row">
                                      <div className="col-12">
                                        <div className="form-group">
                                          <textarea className="form-control w-100" name="comment" cols={30} rows={9} placeholder="Write Comment" defaultValue={""} />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <button type="button" className="button button-contactForm">Submit Review</button>
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

                <div className="col-xl-4 primary-sidebar sticky-sidebar mt-30">

                  <div className="border p-md-4 cart-totals ml-30">
                    <div className="table-responsive">
                      <table className="table no-border">
                        <tbody>
                          <tr>
                            <td className="cart_total_label">
                              <h6 className="text-muted">Subtotal</h6>
                            </td>
                            <td className="cart_total_amount">
                              <h4 className="text-brand text-end">₹{List.price * increment}</h4>
                            </td>
                          </tr>
                          <tr>
                            <td scope="col" colSpan={2}>
                              <div className="divider-2 mt-10 mb-10" />
                            </td>
                          </tr>
                          <tr>
                            <td className="cart_total_label">
                              <h6 className="text-muted">Offer Price</h6>
                            </td>
                            <td className="cart_total_amount">
                              <h5 className="text-heading text-end">- {List.offer ? List.offer : 0} %</h5></td></tr> <tr>
                            <td className="cart_total_label">
                              <h6 className="text-muted">Delivery Charge</h6>
                            </td>
                            <td className="cart_total_amount">
                              <h5 className="text-heading text-end">+ {List.DeliveryCharge ? List.DeliveryCharge : 0}</h5></td></tr> <tr>
                            <td scope="col" colSpan={2}>
                              <div className="divider-2 mt-10 mb-10" />
                            </td>
                          </tr>
                          <tr>
                            <td className="cart_total_label">
                              <h6 className="text-muted">Total</h6>
                            </td>
                            <td className="cart_total_amount">
                              <h4 className="text-brand text-end">₹{List.price * increment}</h4>
                            </td>
                          </tr>


                          <br />
                          {/* <tr>
                            <td className="cart_total_label">
                              <h4 className="mb-10">Apply Coupon</h4>
                            </td>
                            <td className="cart_total_amount">
                              <h4 className="font-lg text-muted">Using A Promo Code?</h4>
                            </td>
                          </tr> */}
                        </tbody>
                      </table>
                      {/* <div className="d-flex justify-content-between">
                        <input className="font-medium mr-15 coupon" name="Coupon" placeholder="Enter Your Coupon" value={CouponCode} onChange={(e) => { SetCouponCode(e.target.value) }} />
                        <button className="btn" onClick={() => { ApplyCoupon(CouponCode) }}><i className="fi-rs-label mr-10" />Apply</button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BestSellers />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Product;