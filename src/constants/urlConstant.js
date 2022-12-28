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
    PostWishlist: `${apiURL}wishlists`,
    GetAllWishlist: `${apiURL}wishlists`,
    DeleteWishlist: `${apiURL}wishlists-remove-product`
  },
  Cart: {
    PostCart: `${apiURL}carts/add`,
    GetCart: `${apiURL}carts`,
    DeleteCart: `${apiURL}cart/delete`
  },
  Contact: {
    PostContact: `${apiURL}contact`
  },
  Checkout:{
    PostCheckout: `${apiURL}Checkout`
  }

};

export { urlConstant as default };
