import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import urlConstant from "../constants/urlConstant";
import { ToasterSuccess, ToasterWarning, ToasterError } from "../common/toaster";
import Loding from "../component/Loding";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const random = Math.floor(Math.random() * 100);

  const UserName = localStorage.getItem('user');
  const user_id = localStorage.getItem('user_id') || random;
  const [isLoading, setIsLoading] = useState(false);
  const [CouponCode, SetCouponCode] = useState('');
  const [AllCategory, SetAllCategory] = useState([]);
  const [Logo, SetLogo] = useState([]);

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

  function CartPost(id, variant, increment) {
    try {
      setIsLoading(true)
      const Data = { id, variant: variant, quantity: increment || 1, user_id: parseInt(user_id) }
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


    if (!CouponCode) {
      ToasterWarning('Please All Enter Details')
      return
    }

    try {
      setIsLoading(true)
      const Data = { code: CouponCode, user_id: parseInt(user_id) }
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

  function GetAllCategory() {
    debugger
    setIsLoading(true)
    const GetAllCategory1 = `${urlConstant.AllCategory.GetAllCategory}`;
    axios.get(GetAllCategory1).then(function (res) {
      setIsLoading(false);
      SetAllCategory(res.data.data.data);
      SetLogo(res.data.logo);
    })
      .catch(function (error) {
        setIsLoading(false);
        ToasterWarning(error.message)
        console.log(error);
      });
  }

  useEffect(() => {
    GetAllCategory()
  }, [])


  return (
    <AppContext.Provider value={{ user_id, UserName, wishlistPost, Loding, CartPost, ApplyCoupon, AllCategory, Logo }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
