import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import CommonService from "../../services/commonService";
import urlConstant from "../../constants/urlConstant";
import { ToasterWarning,ToasterSuccess,ToasterError } from "../../common/toaster";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { useAppContext } from "../../context";
import { useShippingContext } from "../../context/shippingContext";
import BestSellers from "../BestSellers/BestSellers";
import {config} from '../../constants/config'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Product.css'
import { Rating } from 'react-simple-star-rating'


function Product() {
  const id = useParams();
  let common = new CommonService();
  const { user_id, wishlistPost, Loding, CartPost, ApplyCoupon } = useAppContext();
  // const { GetPinCode } = useShippingContext();


  const [List, setList] = useState([]);
  const [sizeList, setsizeList] = useState([]);
  const [size, setsize] = useState("");
  const [multipleimageList, setmultipleimageList] = useState([]);
  const [mainImage, setMainImage] = useState([0]);
  const [colors, setcolors] = useState("");
  const [colorsList, setcolorsList] = useState([]);
  const [reviewsList, setreviewsList] = useState([]);
  const [sizechartList, setsizechartList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [increment, SetIncrement] = useState(1);
  const [CouponCode, SetCouponCode] = useState('');
  const [PinCode, SetPinCode] = useState('');
  const [message, SetMessage] = useState('');
  const [PinMessage, setPinMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
 
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
      setreviewsList(res.data.data.reviews);
      setsizechartList(res.data.data.sizeData);
    })
      .catch(function (error) {
        setIsLoading(false);
        ToasterError("Error");
      });
  }

  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)
  }

  const handleReset = () => {
    // Set the initial value
    setRating(0)
  }

  const SubmitReviews = async (e) => {
    e.preventDefault();

    if (!message) {
        ToasterWarning('Please All Enter Details')
        return
    }
    try {
        const data = { comment:message, rating: rating, user_id, product_id: List.id };
        const ContactData = `${urlConstant.Products.Reviews}`;
        await common.httpPost(ContactData, data).then(() => {
            ToasterSuccess("Success...!!");
            setIsLoading(false)
        })
    }
    catch (error) {
        ToasterError("Error")
        setIsLoading(false)
    }

}


  const openModel = (e) => {
    if(e == true) {
      setShowModal(e);
      document.querySelector(".body-overlay-1").style.opacity = '1'; 
      document.querySelector(".body-overlay-1").style.visibility = 'visible';
      document.querySelector(".body-overlay-1").style.cursor = 'auto';
    } else if(e == false) {
      setShowModal(e);
      document.querySelector(".body-overlay-1").style.opacity = '0'; 
      document.querySelector(".body-overlay-1").style.visibility = 'hidden'; 
    }
  }

  const defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9zuWJ0xU19Mgk0dNFnl2KIc8E9Ch0zhfCg&usqp=CAU';
  const image = List.thumbnail_img == '' ? defaultImg : List.thumbnail_img;

  const sizeFun = (e) => {
    setsize(e.target.value);
  }
  const colorFun = (e) => {
    setcolors(e.target.value);
  }

  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   speed: 500
  // };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  function GetPinCode(PinCode) {
    const GetPinCode1 = `${urlConstant.ShippingApi.Pincode}`;
    const Data = {
      "data": {
        "pincode": PinCode,
        "access_token": config.access_token,
        "secret_key": config.secret_key
      }
    }
    axios.post(GetPinCode1, Data).then(function (res) {
      const delhiveryArray = Object.values(res.data.data[PinCode].delhivery);
      setPinMessage(null);
      if (delhiveryArray[0] == 'Y' || delhiveryArray[1] == 'Y') {
        setPinMessage('This product is available for courier delivery at '+PinCode+' location.');
      } else if(delhiveryArray[0] == 'Y' || delhiveryArray[1] == 'N'){
        setPinMessage('This product is not available for cash on drlivary.');
      } else {
        setPinMessage('This product is not available for courier delivery.');
      } 
      console.log(delhiveryArray);
    })
    .catch(function (error) {
      ToasterError("Error");
    });
  }

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
                            <figure className="border-radius-10 img-size">
                              {/* <img src={multipleimageList[mainImage]} alt={image} style={{ width: "100%" ,height:"600px"}} /> */}
                              <img src={multipleimageList[mainImage]} alt={image} style={{ width: "100%" }} />
                            </figure>
                          </div>
                          <div>
                            <div>
                              <Slider {...settings}>
                                {
                                  multipleimageList.map((item, i) => {
                                    return (
                                      <>
                                        <div>
                                          <img src={item} alt="product image" width="100%" height="160px" style={{ borderRadius: "10px", padding: "3px" }} key={i} onClick={() => setMainImage(i)} />
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
                              <span className="font-small ml-5 text-muted">{List.rating} (reviews)</span>
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
                            {
                              sizechartList == '' ? null :
                                <strong className="mr-10"><a style={{ color: "#FE5D17", textDecoration: "underline" }} onClick={() => openModel(true)}>Size Chart</a></strong> 
                                
                            }
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



                          <div className="attr-detail attr-size mb-20">
                            <strong className="mr-10">DELIVERY OPTIONS<span style={{ paddingLeft: "14px", fontSize: "13px", color: "black" }}></span> </strong>
                          </div>
                          <div className="row mb-30">
                            <div className="col-lg-6 apply-coupon">
                              <input type="text" placeholder="Enter Pincode..." value={PinCode} onChange={(e) => { SetPinCode(e.target.value) }} style={{ width: "170px" }} />
                              <button className="btn btn-md" onClick={() => { GetPinCode(PinCode) }}>Pincode</button>
                            </div>
                          </div>
                          <div className="attr-detail attr-size mb-20">
                            {PinMessage && <div style={{ fontSize: "14px", color: "red" }}>{PinMessage}</div>}
                          </div>

                          <div class="font-xs">
                            <ul class="mr-50 float-start">
                              <li class="mb-5"><img src='assets/imgs/theme/delivery.png' width="25px" />&nbsp;<span class="text-brand product-text">  Get it by 7 days</span></li>
                              <li class="mb-5"><img src='assets/imgs/theme/paydelivery.png' width="25px" />&nbsp;<span class="text-brand product-text">  Pay on delivery available</span></li>
                              <li><img src='assets/imgs/theme/return.png' width="25px" />&nbsp; <span class="text-brand product-text">  Easy {List.return_days} days return & exchange available</span></li>
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
                            <div className="comments-area">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <h4 className="mb-30">Review this product</h4>
                                        <div className="comment-list">
                                          {
                                            reviewsList.map((item, i) => {
                                              return (

                                                <>
                                                  <div className="single-comment justify-content-between d-flex mb-30">
                                                    <div className="user justify-content-between d-flex">
                                                        <div className="thumb text-center">
                                                            <img src="assets/imgs/blog/author-2.png" alt="" />
                                                            <a href="#" className="font-heading text-brand">{item.name}</a>
                                                        </div>
                                                        <div className="desc">
                                                            <div className="d-flex justify-content-between mb-10">
                                                                <div className="d-flex align-items-center">
                                                                    <span className="font-xs text-muted">{item.time}</span>
                                                                </div>
                                                                <div className="product-rate d-inline-block">
                                                                  {
                                                                    item.rating == 1 ?
                                                                    <div className="product-rating" style={{ maxWidth: "20%" }}></div>: 
                                                                    item.rating == 2 ?                                                                                                                                   
                                                                    <div className="product-rating" style={{ maxWidth: "40%" }}></div>:
                                                                    item.rating == 3 ? 
                                                                    <div className="product-rating" style={{ maxWidth: "60%" }}></div>:
                                                                    item.rating == 4 ? 
                                                                    <div className="product-rating" style={{ maxWidth: "80%" }}></div>:
                                                                    item.rating == 5 ? 
                                                                    <div className="product-rating" style={{ maxWidth: "100%" }}></div>:
                                                                    <div className="product-rating" style={{ maxWidth: "0%" }}></div>
                                                                  }                                                          
                                                                </div>
                                                            </div>
                                                            <p className="mb-10">{item.comment} <a href="#" class="reply">Reply</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                </>
                                              )
                                            })
                                          }
                                        </div>
                                    </div>
                                </div>
                            </div>
                          {
                              List.userReview == "yes" ? 
                                <>
                                <div className="comment-form">
                                  <h4 className="mb-15">Add a review</h4>
                                  <div className="row">
                                    <div className='App'>
                                      <Rating onClick={handleRating} initialValue={rating} />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-8 col-md-12">
                                      <form className="form-contact comment_form">
                                        <div className="row">
                                          <div className="col-12">
                                            <div className="form-group">
                                              <textarea className="form-control w-100" name="comment" cols={30} rows={9} placeholder="Write Comment" value={message} onChange={(e)=>{SetMessage(e.target.value)}} />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="form-group">
                                          <button type="button" className="button button-contactForm" onClick={SubmitReviews}>Submit Review</button>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                                </>
                              : null
                          }
                         </div>  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 primary-sidebar sticky-sidebar mt-30 sub-total-box">
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
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BestSellers />
          </div>
        </div>
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Size Chart</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => openModel(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                  <div className="table-responsive shopping-summery">
                    <table className="table table-wishlist">
                        <thead>
                            <tr className="main-heading">
                                <th className="text-center" scope="col">Size</th>
                                <th className="text-center" scope="col">Title</th>
                                <th className="text-center" scope="col">Value in inches</th>
                                <th className="text-center" scope="col">Value in CM</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                sizechartList == '' ?
                                    <>
                                        <tr >
                                            <td></td>
                                            {/* <td style={{textAlign: "end"}}><h6>Oops, no size &nbsp;&nbsp;</h6></td> */}
                                            <td className="" style={{textAlign: "end"}} colspan="2"><h6>Oops, no size data your list</h6></td>
                                            <td></td>
                                        </tr></> :
                                    sizechartList.map((item, i) => {
                                        return (
                                            <>
                                                <tr className="pt-30" key={i}>
                                                    <td className="text-center detail-info">{item.size}</td>
                                                    <td className="text-center detail-info">{item.title}</td>
                                                    <td className="text-center detail-info">{item.inches_value}</td>
                                                    <td className="text-center detail-info">{item.cm_value}</td>
                                                </tr>
                                            </>
                                        )
                                    })


                            }

                        </tbody>
                    </table>
                </div>
                <img src={List.sizeImg} alt={List.sizeImg} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Product;