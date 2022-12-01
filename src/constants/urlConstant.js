import { config } from "./config";

const { apiURL } = config;

const urlConstant = {
  User:{
    UserLogin : `${apiURL}auth/login`,
    UserRegister : `${apiURL}auth/signup`
  }


};

export { urlConstant as default };
