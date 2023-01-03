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
    DeleteCart: `${apiURL}cart/delete`
  },
  Checkout: { 
    PostCheckout: `${apiURL}Checkout`,
    GetPaymentTypes: `${apiURL}payment-types` 
  },
  Contact: { PostContact: `${apiURL}contact` },
  ApplyCoupon: { PostApplyCoupon: `${apiURL}coupon/apply` },

};

export { urlConstant as default };
