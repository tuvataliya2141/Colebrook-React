import { config } from "./config";

const { apiURL } = config;

const urlConstant = {
  User: {
    UserLogin: `${apiURL}auth/login`,
    UserRegister: `${apiURL}auth/signup`
  },
  Products: {
    GetProducts: `${apiURL}products/home`,
    PostSingelProducts: `${apiURL}products/details`,
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
    UpdateCart: `${apiURL}cart/update`
  },
  Checkout: { 
    PostCheckout: `${apiURL}checkout`,
    GetPaymentTypes: `${apiURL}payment-types` ,
    Countries : `${apiURL}countries`,
    States : `${apiURL}states-by-country`,
    city : `${apiURL}cities-by-state`
  },
  Contact: { PostContact: `${apiURL}contact` },
  ApplyCoupon: { PostApplyCoupon: `${apiURL}coupon/apply` },
  AllCategory : {GetAllCategory:`${apiURL}allCategory`},
  AllBrands : {GetAllBrands:`${apiURL}brands`},

};

export { urlConstant as default };
