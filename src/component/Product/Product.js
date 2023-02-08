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
    console.log(e.target.value);
    setsize(e.target.value);
  }
  const colorFun = (e) => {
    console.log(e.target.value);
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
                            <figure className="border-radius-10" style={{ height:"600px" }}>
                              {/* <img src={multipleimageList[mainImage]} alt={image} style={{ width: "100%" ,height:"600px"}} /> */}
                              <img src={multipleimageList[mainImage]} alt={image} style={{ width: "100%"}} />
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
                                          <img src={item} alt="product image" width="150px" height="165px" style={{ borderRadius: "10px", padding: "3px" }} key={i} onClick={() => setMainImage(i)} />
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
                                        <button style={{ backgroundColor: size == item ? "black" : "white", color: size == item ? "white" : "black", borderRadius: "50px", width: "40px", height: "40px",margin:"2px" }} onClick={(e) => { sizeFun(e) }} value={item} >
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
                                          <button className="color_button" style={{ backgroundColor: `${item}`, border: colors == item ? "3px solid black" : "" }} value={item} onClick={(e) => { colorFun(e) }} >
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

                                  <button type="submit" className="button button-add-to-cart" onClick={() => { CartPost(List.id, List.variant[0].variant, increment,colors,size) }} >
                                    <i className="fi-rs-shopping-cart" />Add to cart
                                  </button>

                              }
                              {/* <a  className="action-btn hover-up" onClick={() => { wishlistPost(List.id) }}><i className="fi-rs-heart" /></a> */}

                              {
                                 user_id == null ? <Link to="/login"> <a  className="action-btn hover-up"><i className="fi-rs-heart" /></a></Link> : <a  className="action-btn hover-up" onClick={() => { wishlistPost(List.id) }}><i className="fi-rs-heart" /></a>
                              } 
                            </div>
                          </div>
                          <hr style={{ margin: "10px", color: "rgb(69 96 147)" }} />
                          <div className="font-xs">
                            <ul className="mr-50 float-start">
                              <h6>DELIVERY OPTIONS</h6><br />
                              <li className="mb-5"><img src='assets/imgs/theme/delivery.png' width="20px" />&nbsp;   Get it by 7 days</li>
                              <li className="mb-5"><img src='assets/imgs/theme/paydelivery.png' width="20px" />&nbsp;   Pay on delivery available</li>
                              <li className="mb-5"><img src='assets/imgs/theme/return.png' width="20px" />&nbsp;  Easy 30 days return & exchange available</li>
                              100% Original Products
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
                          <li className="nav-item">
                            <a className="nav-link" id="Additional-info-tab" data-bs-toggle="tab" href="#Additional-info">Additional info</a>
                          </li>
                          {/* <li className="nav-item">
                            <a className="nav-link" id="Vendor-info-tab" data-bs-toggle="tab" href="#Vendor-info">Vendor</a>
                          </li> */}
                          <li className="nav-item">
                            <a className="nav-link" id="Reviews-tab" data-bs-toggle="tab" href="#Reviews">Reviews (3)</a>
                          </li>
                        </ul>
                        <div className="tab-content shop_info_tab entry-main-content">
                          <div className="tab-pane fade show active" id="Description">
                            <div className>
                              <p>{List.description}</p>
                              {/* <p>Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</p> */}
                              <ul className="product-more-infor mt-30">
                                <li><span>Type Of Packing</span> Bottle</li>
                                <li><span>Color</span> Green, Pink, Powder Blue, Purple</li>
                                <li><span>Quantity Per Case</span> 100ml</li>
                                <li><span>Ethyl Alcohol</span> 70%</li>
                                <li><span>Piece In One</span> Carton</li>
                              </ul>
                              <hr className="wp-block-separator is-style-dots" />
                              <p>Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective limpet.</p>
                              <h4 className="mt-30">Packaging &amp; Delivery</h4>
                              <hr className="wp-block-separator is-style-wide" />
                              <p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.</p>
                              <p>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.</p>
                              <h4 className="mt-30">Suggested Use</h4>
                              <ul className="product-more-infor mt-30">
                                <li>Refrigeration not necessary.</li>
                                <li>Stir before serving</li>
                              </ul>
                              <h4 className="mt-30">Other Ingredients</h4>
                              <ul className="product-more-infor mt-30">
                                <li>Organic raw pecans, organic raw cashews.</li>
                                <li>This butter was produced using a LTG (Low Temperature Grinding) process</li>
                                <li>Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</li>
                              </ul>
                              <h4 className="mt-30">Warnings</h4>
                              <ul className="product-more-infor mt-30">
                                <li>Oil separation occurs naturally. May contain pieces of shell.</li>
                              </ul>
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
                                    <p>M, S</p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          {/* <div className="tab-pane fade" id="Vendor-info">
                            <div className="vendor-logo d-flex mb-30">
                              <img src="assets/imgs/vendor/vendor-18.svg" alt />
                              <div className="vendor-name ml-15">
                                <h6>
                                  <a href="vendor-details-2.html">Noodles Co.</a>
                                </h6>
                                <div className="product-rate-cover text-end">
                                  <div className="product-rate d-inline-block">
                                    <div className="product-rating" style={{ width: '90%' }} />
                                  </div>
                                  <span className="font-small ml-5 text-muted"> (32 reviews)</span>
                                </div>
                              </div>
                            </div>
                            <ul className="contact-infor mb-50">
                              <li><img src="assets/imgs/theme/icons/icon-location.svg" alt /><strong>Address: </strong> <span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                              <li><img src="assets/imgs/theme/icons/icon-contact.svg" alt /><strong>Contact Seller:</strong><span>(+91) - 540-025-553</span></li>
                            </ul>
                            <div className="d-flex mb-55">
                              <div className="mr-30">
                                <p className="text-brand font-xs">Rating</p>
                                <h4 className="mb-0">92%</h4>
                              </div>
                              <div className="mr-30">
                                <p className="text-brand font-xs">Ship on time</p>
                                <h4 className="mb-0">100%</h4>
                              </div>
                              <div>
                                <p className="text-brand font-xs">Chat response</p>
                                <h4 className="mb-0">89%</h4>
                              </div>
                            </div>
                            <p>
                              Noodles &amp; Company is an American fast-casual restaurant that offers international and American noodle dishes and pasta in addition to soups and salads. Noodles &amp; Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield, Colorado. The company went public in 2013 and recorded a $457 million revenue in 2017.In late 2018, there were 460 Noodles &amp; Company locations across 29 states and Washington, D.C.
                            </p>
                          </div> */}
                          <div className="tab-pane fade" id="Reviews">
                            {/*Comments*/}
                            <div className="comments-area">
                              <div className="row">
                                <div className="col-lg-8">
                                  <h4 className="mb-30">Customer questions &amp; answers</h4>
                                  <div className="comment-list">
                                    <div className="single-comment justify-content-between d-flex mb-30">
                                      <div className="user justify-content-between d-flex">
                                        <div className="thumb text-center">
                                          <img src="assets/imgs/blog/author-2.png" alt />
                                          <a href="#" className="font-heading text-brand">Sienna</a>
                                        </div>
                                        <div className="desc">
                                          <div className="d-flex justify-content-between mb-10">
                                            <div className="d-flex align-items-center">
                                              <span className="font-xs text-muted">December 4, 2021 at 3:12 pm </span>
                                            </div>
                                            <div className="product-rate d-inline-block">
                                              <div className="product-rating" style={{ width: '100%' }} />
                                            </div>
                                          </div>
                                          <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? <a href="#" className="reply">Reply</a></p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="single-comment justify-content-between d-flex mb-30 ml-30">
                                      <div className="user justify-content-between d-flex">
                                        <div className="thumb text-center">
                                          <img src="assets/imgs/blog/author-3.png" alt />
                                          <a href="#" className="font-heading text-brand">Brenna</a>
                                        </div>
                                        <div className="desc">
                                          <div className="d-flex justify-content-between mb-10">
                                            <div className="d-flex align-items-center">
                                              <span className="font-xs text-muted">December 4, 2021 at 3:12 pm </span>
                                            </div>
                                            <div className="product-rate d-inline-block">
                                              <div className="product-rating" style={{ width: '80%' }} />
                                            </div>
                                          </div>
                                          <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? <a href="#" className="reply">Reply</a></p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="single-comment justify-content-between d-flex">
                                      <div className="user justify-content-between d-flex">
                                        <div className="thumb text-center">
                                          <img src="assets/imgs/blog/author-4.png" alt />
                                          <a href="#" className="font-heading text-brand">Gemma</a>
                                        </div>
                                        <div className="desc">
                                          <div className="d-flex justify-content-between mb-10">
                                            <div className="d-flex align-items-center">
                                              <span className="font-xs text-muted">December 4, 2021 at 3:12 pm </span>
                                            </div>
                                            <div className="product-rate d-inline-block">
                                              <div className="product-rating" style={{ width: '80%' }} />
                                            </div>
                                          </div>
                                          <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt? <a href="#" className="reply">Reply</a></p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <h4 className="mb-30">Customer reviews</h4>
                                  <div className="d-flex mb-30">
                                    <div className="product-rate d-inline-block mr-15">
                                      <div className="product-rating" style={{ width: '90%' }} />
                                    </div>
                                    <h6>4.8 out of 5</h6>
                                  </div>
                                  <div className="progress">
                                    <span>5 star</span>
                                    <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50%</div>
                                  </div>
                                  <div className="progress">
                                    <span>4 star</span>
                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                                  </div>
                                  <div className="progress">
                                    <span>3 star</span>
                                    <div className="progress-bar" role="progressbar" style={{ width: '45%' }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>45%</div>
                                  </div>
                                  <div className="progress">
                                    <span>2 star</span>
                                    <div className="progress-bar" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>65%</div>
                                  </div>
                                  <div className="progress mb-30">
                                    <span>1 star</span>
                                    <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>85%</div>
                                  </div>
                                  <a href="#" className="font-xs text-muted">How are ratings calculated?</a>
                                </div>
                              </div>
                            </div>
                            {/*comment form*/}
                            <div className="comment-form">
                              <h4 className="mb-15">Add a review</h4>
                              <div className="product-rate d-inline-block mb-30" />
                              <div className="row">
                                <div className="col-lg-8 col-md-12">
                                  <form className="form-contact comment_form" action="#" id="commentForm">
                                    <div className="row">
                                      <div className="col-12">
                                        <div className="form-group">
                                          <textarea className="form-control w-100" name="comment" id="comment" cols={30} rows={9} placeholder="Write Comment" defaultValue={""} />
                                        </div>
                                      </div>
                                      <div className="col-sm-6">
                                        <div className="form-group">
                                          <input className="form-control" name="name" id="name" type="text" placeholder="Name" />
                                        </div>
                                      </div>
                                      <div className="col-sm-6">
                                        <div className="form-group">
                                          <input className="form-control" name="email" id="email" type="email" placeholder="Email" />
                                        </div>
                                      </div>
                                      <div className="col-12">
                                        <div className="form-group">
                                          <input className="form-control" name="website" id="website" type="text" placeholder="Website" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <button type="submit" className="button button-contactForm">Submit Review</button>
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