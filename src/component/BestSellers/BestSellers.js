import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import urlConstant from "../../constants/urlConstant";
import CommonService from "../../services/commonService";
import { useAppContext } from '../../context';
import Loding from '../Loding';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BestSellers() {
  let common = new CommonService();
  const [isLoading, setIsLoading] = useState(false);
  const [List, SetList] = useState([]);
  const { user_id, wishlistPost, Loding, CartPost } = useAppContext();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };

  function BestSeller() {
    setIsLoading(true)
    const BestSellers1 = `${urlConstant.BestSellers.BestSellersData}`;
    common.httpGet(BestSellers1).then(function (res) {
      setIsLoading(false);
      SetList(res.data.data);
      console.log(res.data.data);
    })
      .catch(function (error) {
        setIsLoading(false);
        console.log(error);
      });
  }

  useEffect(() => {
    BestSeller();
  }, [])

  return (
    <div>
      {isLoading ? <Loding /> : BestSellers}
      <section className="section-padding pb-5">
        <div className="container">
          <div className="section-title wow animate__animated animate__fadeIn">
            <h3 className>Best Sellers</h3>
          </div>
          <div className="row">
            <div className="col-lg-3 d-none d-lg-flex wow animate__animated animate__fadeIn">
              <div className="banner-img style-2">
                <div className="banner-text">
                  <h2 className="mb-45" style={{ color: "white" }}>Bring nature into your home</h2>
                  <a style={{ fontSize: "20px", width: "130px", backgroundColor: "#837c7c" }} className="btn btn-xs" >Shop Now
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

                      {
                        List.map((item, i) => {
                          const Name = item.name.substring(0, 15);
                          return (
                            <>
                              <div className="product-cart-wrap">
                                <div className="product-img-action-wrap" style={{ height:"348px" }}>
                                  <div className="product-img product-img-zoom">
                                  <Link to={`/${item.slug}`}>  
                                      <img className="default-img" src={item.thumbnail_image} alt="/" />
                                      <img className="hover-img" src={item.thumbnail_image} alt="/" />
                                    </Link>
                                  </div>
                                  <div className="product-action-1">
                                    {
                                      user_id == null ? <Link to='/login'><a className="action-btn"><i className="fi-rs-heart" /></a></Link> : <a  className="action-btn" onClick={() => { wishlistPost(item.id) }}><i className="fi-rs-heart" /></a>
                                    }
                                  </div>
                                  <div className="product-badges product-badges-position product-badges-mrg">
                                    <span className="hot">Save 15%</span>
                                  </div>
                                </div>
                                <div className="product-content-wrap">
                                  <div className="product-category">
                                    <a >{item.slug}</a>
                                  </div>
                                  <h2><Link to={'1'}>{Name.length > 13
                                    ? `${Name}...`
                                    : Name}</Link></h2>
                                  <div className="product-rate d-inline-block">
                                    <div className="product-rating" style={{ width: item.rating + 35 }} />
                                  </div>
                                  <div className="product-price mt-10">
                                    <span>{item.main_price}</span>
                                    <span className="old-price">{item.stroked_price}</span>
                                  </div>
                                  <div className="sold mt-18 mb-25">
                                    <div className="progress mb-5">
                                      <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                    <span className="font-xs text-heading"> Sold: {item.sales}/120</span>
                                  </div>
                                  {/* <a className="btn w-100 hover-up" onClick={() => { CartPost(item.id, item.variant+1) }}><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a> */}
                                  <Link to={`/${item.slug}`}><a className="btn w-100 hover-up"><i className="fi-rs-shopping-cart mr-5" />Add To Cart</a></Link>
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
            </div>
          </div>
        </div>
      </section><br />

     
    </div>
  )
}

export default BestSellers
