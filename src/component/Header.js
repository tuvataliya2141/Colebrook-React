import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

  const SignOut = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    localStorage.removeItem("type");
  }

  const UserName = localStorage.getItem('user')

  return (
    <div>
      <header className="header-area header-style-1 header-height-2">
        <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="header-wrap">
              <div className="logo logo-width-1">
                <Link to="/"><img src="assets/imgs/theme/logo.svg" alt="logo" /></Link>
              </div>
              <div className="header-right">
                <div className="search-style-2">
                  <form action="#">
                    <select className="select-active">
                      <option>All Categories ▼ </option>
                      <option>Milks and Dairies</option>
                      <option>Wines &amp; Alcohol</option>
                      <option>Clothing &amp; Beauty</option>
                      <option>Pet Foods &amp; Toy</option>
                      <option>Fast food</option>
                      <option>Baking material</option>
                      <option>Vegetables</option>
                      <option>Fresh Seafood</option>
                      <option>Noodles &amp; Rice</option>
                      <option>Ice cream</option>
                    </select>
                    <input type="text" placeholder="Search for items..." />
                  </form>
                </div>
                <div className="header-action-right">
                  <div className="header-action-2">

                    <div className="header-action-icon-2">
                      <Link to="/">
                        <img className="svgInject" alt="Nest" src="assets/imgs/theme/icons/recycle.svg" />
                      </Link>
                    </div>
                    <div className="header-action-icon-2">
                      <Link to="/wishlist">
                        <img className="svgInject" alt="Nest" src="assets/imgs/theme/icons/Vector.svg" />
                        <span className="pro-count blue">4</span>
                      </Link>
                    </div>

                    <div className="header-action-icon-2">
                      <Link to="/Cart">
                        <img className="svgInject" alt="Nest" src="assets/imgs/theme/icons/shopping-cart.svg" />
                        <span className="pro-count blue">7</span>
                      </Link>
                    </div>
                    <div className="header-action-icon-2">
                      <Link to="/">
                        <img className="svgInject" alt="Nest" src="assets/imgs/theme/icons/icon-compare.svg" />
                      </Link>
                      <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">


                        {
                          UserName ?
                            <ul>
                              <li>
                                <Link to="/"><i className="fi fi-rs-user mr-10" />{UserName.toUpperCase()}</Link>
                              </li>
                              <li onClick={SignOut}>
                                <a href="/"><i className="fi fi-rs-sign-out mr-10" />Sign out</a>
                              </li> 
                            </ul> : 

                            <ul>
                              <li>
                                <Link to="/Register"><i className="fi fi-rs-user mr-10" />Register</Link>
                              </li>
                              <li>
                                <Link to="/Login"><i className="fi fi-rs-settings-sliders mr-10" />Login</Link>
                              </li>
                            </ul>
                        }




                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom header-bottom-bg-color sticky-bar">
          <div className="container">
            <div className="header-wrap header-space-between position-relative">
              <div className="logo logo-width-1 d-block d-lg-none">
                <Link to="/"><img src="assets/imgs/theme/logo.svg" alt="logo" /></Link>
              </div>
              <div className="header-nav d-none d-lg-flex">
                <div className="main-categori-wrap d-none d-lg-block">
                  <a className="categories-button-active" href="#">
                    <span className="fi-rs-apps" /> <span className="et">Browse</span> All Categories
                    <i className="fi-rs-angle-down" />
                  </a>
                </div>
                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                  <nav>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/ShopProduct" >Shop <i className="fi-rs-angle-down" /></Link>
                        <ul className="sub-menu">
                          <li><Link to="/Checkout">Shop – Checkout</Link></li>
                        </ul>
                      </li>
                      <li>
                        <a href="/Product">Product</a>
                      </li>
                      <li>
                        <Link to="/">Offer</Link>
                      </li>
                      <li>
                        <Link to="/">Man’s ware </Link>
                      </li>
                      <li>
                        <Link to="/">Women's Wear </Link>
                      </li>
                      <li>
                        <Link to="/Terms-Service">Terms Service</Link>
                      </li>
                      <li>
                        <Link to="/">Pages <i className="fi-rs-angle-down" /></Link>
                        <ul className="sub-menu">
                          <li><Link to="/Register">Register</Link></li>
                          <li><Link to="/Login">Login</Link></li>
                          <li><Link to="/ShopProduct">Shop Product</Link></li>
                          <li><Link to="/wishlist">wishlist</Link></li>
                          <li><Link to="/Cart">Cart</Link></li>
                          <li><a href="/Product">Product</a></li>
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/Terms-Service">Terms Service</Link></li>
                          <li><Link to="/Checkout">Checkout</Link></li>
                          <li><Link to="/Contact">Contact</Link></li>
                          <li><Link to="/Privacy-Policy">Privacy Policy</Link></li>
                          <li><Link to="/*">404 Page</Link></li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="hotline d-none d-lg-flex">
                <img src="assets/imgs/theme/icons/icon-headphone.svg" alt="hotline" />
                <p>1900 - 888<span>24/7 Support Center</span></p>
              </div>
              <div className="header-action-icon-2 d-block d-lg-none">
                <div className="burger-icon burger-icon-white">
                  <span className="burger-icon-top" />
                  <span className="burger-icon-mid" />
                  <span className="burger-icon-bottom" />
                </div>
              </div>
              <div className="header-action-right d-block d-lg-none">
                <div className="header-action-2">
                  <div className="header-action-icon-2">
                    <a href="shop-wishlist.html">
                      <img alt="Nest" src="assets/imgs/theme/icons/icon-heart.svg" />
                      <span className="pro-count white">4</span>
                    </a>
                  </div>
                  <div className="header-action-icon-2">
                    <a className="mini-cart-icon" href="#">
                      <img alt="Nest" src="assets/imgs/theme/icons/icon-cart.svg" />
                      <span className="pro-count white">2</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>




      <div className="mobile-header-active mobile-header-wrapper-style">
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-top">
            <div className="mobile-header-logo">
              <a href="index.html"><img src="assets/imgs/theme/logo.svg" alt="logo" /></a>
            </div>
            <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
              <button className="close-style search-close">
                <i className="icon-top" />
                <i className="icon-bottom" />
              </button>
            </div>
          </div>
          <div className="mobile-header-content-area">
            <div className="mobile-search search-style-3 mobile-header-border">
              <form action="#">
                <input type="text" placeholder="Search for items…" />
                <button type="submit"><i className="fi-rs-search" /></button>
              </form>
            </div>
            <div className="mobile-menu-wrap mobile-header-border">
              <nav>
                <ul className="mobile-menu font-heading">
                  <li className="menu-item-has-children">
                    <a href="index.html">Home</a>
                    <ul className="dropdown">
                      <li><a href="index.html">Home 1</a></li>
                      <li><a href="index-2.html">Home 2</a></li>
                      <li><a href="index-3.html">Home 3</a></li>
                      <li><a href="index-4.html">Home 4</a></li>
                      <li><a href="index-5.html">Home 5</a></li>
                      <li><a href="index-6.html">Home 6</a></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="shop-grid-right.html">shop</a>
                    <ul className="dropdown">
                      <li><a href="shop-grid-right.html">Shop Grid – Right Sidebar</a></li>
                      <li><a href="shop-grid-left.html">Shop Grid – Left Sidebar</a></li>
                      <li><a href="shop-list-right.html">Shop List – Right Sidebar</a></li>
                      <li><a href="shop-list-left.html">Shop List – Left Sidebar</a></li>
                      <li><a href="shop-fullwidth.html">Shop - Wide</a></li>
                      <li className="menu-item-has-children">
                        <a href="#">Single Product</a>
                        <ul className="dropdown">
                          <li><a href="shop-product-right.html">Product – Right Sidebar</a></li>
                          <li><a href="shop-product-left.html">Product – Left Sidebar</a></li>
                          <li><a href="shop-product-full.html">Product – No sidebar</a></li>
                          <li><a href="shop-product-vendor.html">Product – Vendor Infor</a></li>
                        </ul>
                      </li>
                      <li><a href="shop-filter.html">Shop – Filter</a></li>
                      <li><a href="shop-wishlist.html">Shop – Wishlist</a></li>
                      <li><a href="shop-cart.html">Shop – Cart</a></li>
                      <li><a href="shop-checkout.html">Shop – Checkout</a></li>
                      <li><a href="shop-compare.html">Shop – Compare</a></li>
                      <li className="menu-item-has-children">
                        <a href="#">Shop Invoice</a>
                        <ul className="dropdown">
                          <li><a href="shop-invoice-1.html">Shop Invoice 1</a></li>
                          <li><a href="shop-invoice-2.html">Shop Invoice 2</a></li>
                          <li><a href="shop-invoice-3.html">Shop Invoice 3</a></li>
                          <li><a href="shop-invoice-4.html">Shop Invoice 4</a></li>
                          <li><a href="shop-invoice-5.html">Shop Invoice 5</a></li>
                          <li><a href="shop-invoice-6.html">Shop Invoice 6</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Vendors</a>
                    <ul className="dropdown">
                      <li><a href="vendors-grid.html">Vendors Grid</a></li>
                      <li><a href="vendors-list.html">Vendors List</a></li>
                      <li><a href="vendor-details-1.html">Vendor Details 01</a></li>
                      <li><a href="vendor-details-2.html">Vendor Details 02</a></li>
                      <li><a href="vendor-dashboard.html">Vendor Dashboard</a></li>
                      <li><a href="vendor-guide.html">Vendor Guide</a></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Mega menu</a>
                    <ul className="dropdown">
                      <li className="menu-item-has-children">
                        <a href="#">Women's Fashion</a>
                        <ul className="dropdown">
                          <li><a href="shop-product-right.html">Dresses</a></li>
                          <li><a href="shop-product-right.html">Blouses &amp; Shirts</a></li>
                          <li><a href="shop-product-right.html">Hoodies &amp; Sweatshirts</a></li>
                          <li><a href="shop-product-right.html">Women's Sets</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Men's Fashion</a>
                        <ul className="dropdown">
                          <li><a href="shop-product-right.html">Jackets</a></li>
                          <li><a href="shop-product-right.html">Casual Faux Leather</a></li>
                          <li><a href="shop-product-right.html">Genuine Leather</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Technology</a>
                        <ul className="dropdown">
                          <li><a href="shop-product-right.html">Gaming Laptops</a></li>
                          <li><a href="shop-product-right.html">Ultraslim Laptops</a></li>
                          <li><a href="shop-product-right.html">Tablets</a></li>
                          <li><a href="shop-product-right.html">Laptop Accessories</a></li>
                          <li><a href="shop-product-right.html">Tablet Accessories</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="blog-category-fullwidth.html">Blog</a>
                    <ul className="dropdown">
                      <li><a href="blog-category-grid.html">Blog Category Grid</a></li>
                      <li><a href="blog-category-list.html">Blog Category List</a></li>
                      <li><a href="blog-category-big.html">Blog Category Big</a></li>
                      <li><a href="blog-category-fullwidth.html">Blog Category Wide</a></li>
                      <li className="menu-item-has-children">
                        <a href="#">Single Product Layout</a>
                        <ul className="dropdown">
                          <li><a href="blog-post-left.html">Left Sidebar</a></li>
                          <li><a href="blog-post-right.html">Right Sidebar</a></li>
                          <li><a href="blog-post-fullwidth.html">No Sidebar</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Pages</a>
                    <ul className="dropdown">
                      <li><a href="page-about.html">About Us</a></li>
                      <li><a href="page-contact.html">Contact</a></li>
                      <li><a href="page-account.html">My Account</a></li>
                      <li><a href="page-login.html">Login</a></li>
                      <li><a href="page-register.html">Register</a></li>
                      <li><a href="page-purchase-guide.html">Purchase Guide</a></li>
                      <li><a href="page-privacy-policy.html">Privacy Policy</a></li>
                      <li><a href="page-terms.html">Terms of Service</a></li>
                      <li><a href="page-404.html">404 Page</a></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Language</a>
                    <ul className="dropdown">
                      <li><a href="#">English</a></li>
                      <li><a href="#">French</a></li>
                      <li><a href="#">German</a></li>
                      <li><a href="#">Spanish</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="mobile-header-info-wrap">
              <div className="single-mobile-header-info">
                <a href="page-contact.html"><i className="fi-rs-marker" /> Our location </a>
              </div>
              <div className="single-mobile-header-info">
                <a href="page-login.html"><i className="fi-rs-user" />Log In / Sign Up </a>
              </div>
              <div className="single-mobile-header-info">
                <a href="#"><i className="fi-rs-headphones" />(+01) - 2345 - 6789 </a>
              </div>
            </div>
            <div className="mobile-social-icon mb-50">
              <h6 className="mb-15">Follow Us</h6>
              <a href="#"><img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt="/" /></a>
              <a href="#"><img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt="/" /></a>
              <a href="#"><img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt="/" /></a>
              <a href="#"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt="/" /></a>
              <a href="#"><img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt="/" /></a>
            </div>
            <div className="site-copyright">Copyright 2021 © Nest. All rights reserved. Powered by AliThemes.</div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Header