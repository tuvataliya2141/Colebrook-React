import { createContext, useContext, useState } from "react";
import axios from "axios";
import urlConstant from "../constants/urlConstant";
import { ToasterSuccess, ToasterError } from "../common/toaster";
import Loding from "../component/Loding";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const random =  Math.floor(Math.random() * 100);
  
  const UserName = localStorage.getItem('user');
  const user_id = localStorage.getItem('user_id') || random;
  const [isLoading, setIsLoading] = useState(false);



  
  function wishlistPost(P_Id) {
    try {
      setIsLoading(true)
      const Data = { user_id: user_id, product_id: P_Id }
      const wishlistData = `${urlConstant.Wishlist.PostWishlist}`;
      axios.post(wishlistData, Data, {
        headers: { "Authorization": `Bearer ${localStorage.getItem('access_token')}` }
      })
      ToasterSuccess("Success...!!");
      setIsLoading(false)
    }
    catch (error) {
      ToasterError("Error")
      setIsLoading(false)
    }
  }

  function CartPost(id) {
    try {
      setIsLoading(true)
      const Data = { id, quantity: 1 ,variant:'AntiqueWhite-500gm',user_id:parseInt(user_id) }
      const CartData = `${urlConstant.Cart.PostCart}`;
      axios.post(CartData, Data, {
        headers: { "Authorization": `Bearer ${localStorage.getItem('access_token')}` }
      }).then(() => {
        ToasterSuccess("Success...!!");
        setIsLoading(false)
      })
    }
    catch (error) {
      ToasterError("Error")
    }
  }

  function ApplyCoupon(CouponCode) {
    try {
      setIsLoading(true)
      const Data = { code :CouponCode , user_id:parseInt(user_id) }
      const CouponData = `${urlConstant.ApplyCoupon.PostApplyCoupon}`;
      axios.post(CouponData, Data, {
        headers: { "Authorization": `Bearer ${localStorage.getItem('access_token')}` }
      }).then(() => {
        ToasterSuccess("Success...!!");
        setIsLoading(false)
      })
    }
    catch (error) {
      ToasterError("Error")
    }
  }
 
  
  return (
    <AppContext.Provider value={{ user_id , UserName, wishlistPost, Loding, CartPost,ApplyCoupon }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
