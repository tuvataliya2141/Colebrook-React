import { config } from "./config";

const { apiURL } = config;

const urlConstant = {
  User:{
    UserLogin : `${apiURL}auth/login`,
    UserRegister : `${apiURL}auth/signup`
  },
  Products:{
    GetProducts : `${apiURL}products/home`  
  }  
};

export { urlConstant as default };
