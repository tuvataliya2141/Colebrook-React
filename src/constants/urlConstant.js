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
    PostCrat: `${apiURL}carts/add`,
    GetCrat: `${apiURL}carts`
  }

};

export { urlConstant as default };
