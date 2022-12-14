import React, { useState, useEffect } from "react";
import { Link, NavLink ,useParams} from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import CommonService from "../../services/commonService";
import urlConstant from "../../constants/urlConstant";
import { ToasterSuccess, ToasterError } from "../../common/toaster";
import { ToastContainer } from "react-toastify";
import axios from "axios";

function Product() {

  const id = useParams();
  let common = new CommonService();

  const [List, setList] = useState([]);

  function GetSingelProducts() {
    const GetAllProducts = `${urlConstant.Products.PostSingelProducts}`;
    const Data = { product_id:id }
    axios.post(GetAllProducts ,Data ,{
      headers: {"Authorization" : `Bearer ${localStorage.getItem('access_token')}`}
    }).then(function (res) {
      setList(res.data.data);
      ToasterSuccess("Success");
    })
      .catch(function (error) {
        ToasterError("Error");
      });
  }

  

  useEffect(() => {
    GetSingelProducts();  
  }, []);

  return (
    <div>
      <ToastContainer />
      <Header />
      <main className="main">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <a href="index.html" rel="nofollow"><i className="fi-rs-home mr-5" />Home</a>
              <span /> <a href="shop-grid-right.html">Vegetables &amp; tubers</a> <span /> Seeds of Change Organic
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
                            <figure className="border-radius-10">
                              <img src={List.thumbnail_img} alt={List.thumbnail_img} width="100%" />
                            </figure>
                            {/* <figure className="border-radius-10">
                              <img src="assets/imgs/shop/product-16-2.jpg" alt="product image" />
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
                            </figure> */}
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
                          <span className="stock-status out-stock"> In Stock </span>
                          <h5 className="title-detail">{List.name}</h5>
                          <div className="product-detail-rating">
                            <div className="product-rate-cover text-end">
                              <div className="product-rate d-inline-block">
                                <div className="product-rating" style={{ width: '90%' }} /> {List.rating}
                              </div>
                              <span className="font-small ml-5 text-muted"> (32 reviews)</span>
                            </div>
                          </div>
                          <hr style={{ margin: "0px", color: "rgb(69 96 147)" }} />
                          <div className="clearfix product-price-cover">
                            <div className="product-price primary-color float-left">
                              <span className="current-price text-brand">$38</span>
                              <span>
                                <span className="save-price font-md color3 ml-15">26% Off</span>
                                <span className="old-price font-md ml-15">$52</span>
                              </span>
                            </div>
                          </div>
                          <div className="short-desc mb-20">
                            <p className="font-lg">Incluslve of all taxes</p>
                          </div>
                          <div className="attr-detail attr-size mb-20">
                            <strong className="mr-10">SELECT SIZE <span style={{ paddingLeft: "14px", fontSize: "13px", color: "black" }}><b>SIZE CHART {">"}</b></span> </strong>
                            {/* <ul className="list-filter size-filter font-small">
                          <li><a href="#">50g</a></li>
                          <li className="active"><a href="#">60g</a></li>
                          <li><a href="#">80g</a></li>
                          <li><a href="#">100g</a></li>
                          <li><a href="#">150g</a></li>
                        </ul> */}
                          </div>
                          <div className="attr-detail attr-size mb-20">
                            <ul className="list-filter size-filter font-small">
                              <li><a href="#">S</a></li>
                              <li className="active"><a href="#">M</a></li>
                              <li><a href="#">L</a></li>
                              <li><a href="#">XL</a></li>
                              <li><a href="#">XXL</a></li>
                            </ul>
                          </div>
                          <div className="detail-extralink mb-20">
                            <div className="detail-qty border radius">
                              <a href="#" className="qty-down"><i className="fi-rs-angle-small-down" /></a>
                              <span className="qty-val">1</span>
                              <a href="#" className="qty-up"><i className="fi-rs-angle-small-up" /></a>
                            </div>
                            <div className="product-extra-link2">
                              <button type="submit" className="button button-add-to-cart"><i className="fi-rs-shopping-cart" />Add to cart</button>
                              <a aria-label="Add To Wishlist" className="action-btn hover-up" href="shop-wishlist.html"><i className="fi-rs-heart" /></a>
                              {/* <a aria-label="Compare" className="action-btn hover-up" href="shop-compare.html"><i className="fi-rs-shuffle" /></a> */}
                            </div>
                          </div>
                          <hr style={{ margin: "10px", color: "rgb(69 96 147)" }} />
                          <div className="font-xs">
                            <ul className="mr-50 float-start">
                              <h6>DELIVERY OPTIONS</h6><br />
                              <li className="mb-5"><img src='assets/imgs/theme/delivery.png' width="20px" />&nbsp;   Get it by Mon, Oct 17</li>
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
                          <li className="nav-item">
                            <a className="nav-link" id="Vendor-info-tab" data-bs-toggle="tab" href="#Vendor-info">Vendor</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="Reviews-tab" data-bs-toggle="tab" href="#Reviews">Reviews (3)</a>
                          </li>
                        </ul>
                        <div className="tab-content shop_info_tab entry-main-content">
                          <div className="tab-pane fade show active" id="Description">
                            <div className>
                              <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.</p>
                              <p>Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</p>
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
                          <div className="tab-pane fade" id="Vendor-info">
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
                          </div>
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
                              <h4 className="text-brand text-end">$38.00</h4>
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
                              <h5 className="text-heading text-end">$-20</h5></td></tr> <tr>
                            <td className="cart_total_label">
                              <h6 className="text-muted">Delivery Charge</h6>
                            </td>
                            <td className="cart_total_amount">
                              <h5 className="text-heading text-end">$02</h5></td></tr> <tr>
                            <td scope="col" colSpan={2}>
                              <div className="divider-2 mt-10 mb-10" />
                            </td>
                          </tr>
                          <tr>
                            <td className="cart_total_label">
                              <h6 className="text-muted">Total</h6>
                            </td>
                            <td className="cart_total_amount">
                              <h4 className="text-brand text-end">$20.00</h4>
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
                      <form action="#">
                        <div className="d-flex justify-content-between">
                          <input className="font-medium mr-15 coupon" name="Coupon" placeholder="Enter Your Coupon" />
                          <button className="btn"><i className="fi-rs-label mr-10" />Apply</button>
                        </div>
                      </form>
                    </div>
                  </div>


                </div>
              </div>
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
                          <a href="shop-grid-right.html" style={{ fontSize: "20px", width: "130px" }} className="btn btn-xs" >Shop Now
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
                                    <a href="ShopProduct">
                                      <img className="default-img" src="assets/imgs/shop/product-1-1.jpg" alt="/" />
                                      <img className="hover-img" src="assets/imgs/shop/product-1-1.jpg" alt="/" />
                                    </a>
                                  </div>
                                  <div className="product-action-1">
                                    <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye" /></a>
                                    <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="wishlist"><i className="fi-rs-heart" /></a>
                                    <a aria-label="Compare" className="action-btn small hover-up" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                                  </div>
                                  <div className="product-badges product-badges-position product-badges-mrg">
                                    <span className="hot">Save 15%</span>
                                  </div>
                                </div>
                                <div className="product-content-wrap">
                                  <div className="product-category">
                                    <a href="shop-grid-right.html">Hodo Foods</a>
                                  </div>
                                  <h2><a href="ShopProduct">Seeds of Change Organic Quinoa, Brown</a></h2>
                                  <div className="product-rate d-inline-block">
                                    <div className="product-rating" style={{ width: '80%' }} />
                                  </div>
                                  <div className="product-price mt-10">
                                    <span>$238.85 </span>
                                    <span className="old-price">$245.8</span>
                                  </div>
                                  <div className="sold mt-15 mb-15">
                                    <div className="progress mb-5">
                                      <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <span className="font-xs text-heading"> Sold: 90/120</span>
                                  </div>
                                  <a href="shop-cart.html" className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                                </div>
                              </div>
                              <div className="product-cart-wrap">
                                <div className="product-img-action-wrap">
                                  <div className="product-img product-img-zoom">
                                    <a href="ShopProduct">
                                      <img className="default-img" src="assets/imgs/shop/product-2-2.jpg" alt="/" />
                                      <img className="hover-img" src="assets/imgs/shop/product-2-2.jpg" alt="/" />
                                    </a>
                                  </div>
                                  <div className="product-action-1">
                                    <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye" /></a>
                                    <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="wishlist"><i className="fi-rs-heart" /></a>
                                    <a aria-label="Compare" className="action-btn small hover-up" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                                  </div>
                                  <div className="product-badges product-badges-position product-badges-mrg">
                                    <span className="new">Save 35%</span>
                                  </div>
                                </div>
                                <div className="product-content-wrap">
                                  <div className="product-category">
                                    <a href="shop-grid-right.html">Hodo Foods</a>
                                  </div>
                                  <h2><a href="ShopProduct">All Natural Italian-Style Chicken Meatballs</a></h2>
                                  <div className="product-rate d-inline-block">
                                    <div className="product-rating" style={{ width: '80%' }} />
                                  </div>
                                  <div className="product-price mt-10">
                                    <span>$238.85 </span>
                                    <span className="old-price">$245.8</span>
                                  </div>
                                  <div className="sold mt-15 mb-15">
                                    <div className="progress mb-5">
                                      <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <span className="font-xs text-heading"> Sold: 90/120</span>
                                  </div>
                                  <a href="shop-cart.html" className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                                </div>
                              </div>
                              <div className="product-cart-wrap">
                                <div className="product-img-action-wrap">
                                  <div className="product-img product-img-zoom">
                                    <a href="ShopProduct">
                                      <img className="default-img" src="assets/imgs/shop/product-3-2.jpg" alt="/" />
                                      <img className="hover-img" src="assets/imgs/shop/product-3-2.jpg" alt="/" />
                                    </a>
                                  </div>
                                  <div className="product-action-1">
                                    <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye" /></a>
                                    <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="wishlist"><i className="fi-rs-heart" /></a>
                                    <a aria-label="Compare" className="action-btn small hover-up" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                                  </div>
                                  <div className="product-badges product-badges-position product-badges-mrg">
                                    <span className="sale">Sale</span>
                                  </div>
                                </div>
                                <div className="product-content-wrap">
                                  <div className="product-category">
                                    <a href="shop-grid-right.html">Hodo Foods</a>
                                  </div>
                                  <h2><a href="ShopProduct">Angie’s Boomchickapop Sweet and womnies</a></h2>
                                  <div className="product-rate d-inline-block">
                                    <div className="product-rating" style={{ width: '80%' }} />
                                  </div>
                                  <div className="product-price mt-10">
                                    <span>$238.85 </span>
                                    <span className="old-price">$245.8</span>
                                  </div>
                                  <div className="sold mt-15 mb-15">
                                    <div className="progress mb-5">
                                      <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <span className="font-xs text-heading"> Sold: 90/120</span>
                                  </div>
                                  <a href="shop-cart.html" className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a>
                                </div>
                              </div>
                              <div className="product-cart-wrap">
                                <div className="product-img-action-wrap">
                                  <div className="product-img product-img-zoom">
                                    <a href="ShopProduct">
                                      <img className="default-img" src="assets/imgs/shop/product-4-2.jpg" alt="/" />
                                      <img className="hover-img" src="assets/imgs/shop/product-4-2.jpg" alt="/" />
                                    </a>
                                  </div>
                                  <div className="product-action-1">
                                    <a aria-label="Quick view" className="action-btn small hover-up" data-bs-toggle="modal" data-bs-target="#quickViewModal"> <i className="fi-rs-eye" /></a>
                                    <a aria-label="Add To Wishlist" className="action-btn small hover-up" href="wishlist"><i className="fi-rs-heart" /></a>
                                    <a aria-label="Compare" className="action-btn small hover-up" href="shop-compare.html"><i className="fi-rs-shuffle" /></a>
                                  </div>
                                  <div className="product-badges product-badges-position product-badges-mrg">
                                    <span className="best">Best sale</span>
                                  </div>
                                </div>
                                <div className="product-content-wrap">
                                  <div className="product-category">
                                    <a href="shop-grid-right.html">Hodo Foods</a>
                                  </div>
                                  <h2><a href="ShopProduct">Foster Farms Takeout Crispy Classic </a></h2>
                                  <div className="product-rate d-inline-block">
                                    <div className="product-rating" style={{ width: '80%' }} />
                                  </div>
                                  <div className="product-price mt-10">
                                    <span>$238.85 </span>
                                    <span className="old-price">$245.8</span>
                                  </div>
                                  <div className="sold mt-15 mb-15">
                                    <div className="progress mb-5">
                                      <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuemin={0} aria-valuemax={100} />
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
              </section><br />
            </div>
          </div>
        </div>
      </main>
      <footer className="main">
        <section className="newsletter mb-15">
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
      </footer>


      <Footer />
    </div>
  )
}

export default Product;