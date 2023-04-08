import { config } from "./config";

const { apiURL } = config;

const urlConstant = {
  User: {
    UserLogin: `${apiURL}auth/login`,
    UserRegister: `${apiURL}auth/signup`,
    UserInfo : `${apiURL}user/info`,
    UserUpdate : `${apiURL}profile/update`
  },
  Products: {
    GetProducts: `${apiURL}products/home`,
    PostSingelProducts: `${apiURL}products/details`,
    Reviews:`${apiURL}reviews/submit`
  },
  Wishlist: {
    PostWishlist: `${apiURL}wishlists-add-product`,
    GetAllWishlist: `${apiURL}wishlists`,
    DeleteWishlist: `${apiURL}wishlists-remove-product`
  },
  Cart: {
    PostCart: `${apiURL}cart/add`,
    GetCart: `${apiURL}carts/list`,
    DeleteCart: `${apiURL}cart/delete`,
    UpdateCart: `${apiURL}cart/update`,
    AllCartDelete : `${apiURL}allCartDelete`
  },
  Checkout: { 
    PostCheckout: `${apiURL}checkout`,
    GetPaymentTypes: `${apiURL}payment-types` ,
    Countries : `${apiURL}countries`,
    States : `${apiURL}states-by-country`,
    city : `${apiURL}cities-by-state`,
    addressList : `${apiURL}user/shipping/address`
  },
  Dashboard:{
    OrdersList:`${apiURL}order/userOrderList`,
    OrderDetail:`${apiURL}order/userOrderDetail`
  },
  ApplyCoupon: { 
    PostApplyCoupon: `${apiURL}coupon-apply`,
    RemoveCoupon: `${apiURL}coupon-remove`,
   },
  ShippingApi:{
    Pincode:"https://pre-alpha.ithinklogistics.com/api_v3/pincode/check.json",
    CreateOrder:"https://pre-alpha.ithinklogistics.com/api_v3/order/add.json",
    TrackOrder:"https://pre-alpha.ithinklogistics.com/api_v3/order/track.json",
    PrintShipmnet:"https://pre-alpha.ithinklogistics.com/api_v3/shipping/label.json",
    Manifest:"https://pre-alpha.ithinklogistics.com/api_v3/shipping/manifest.json",
    OrderCancel:"https://pre-alpha.ithinklogistics.com/api_v3/order/cancel.json",
  }, 
  Subscribe: { SubscribePost: `${apiURL}Subscribe` },
  Contact: { PostContact: `${apiURL}contact` },
  AllCategory : {GetAllCategory:`${apiURL}allCategory`},
  AllBrands : {GetAllBrands:`${apiURL}brands`},
  SearchData : {SearchAllData:`${apiURL}mainAllSearch`},
  bannersData : {bannersData:`${apiURL}banners`},
  BestSellers : {BestSellersData:`${apiURL}products/best-seller`},
  AllHomeCard : {GetHomeCard:`${apiURL}homeCard`},

};

export { urlConstant as default };
