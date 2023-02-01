import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import urlConstant from "../constants/urlConstant";
import CommonService from "../services/commonService";
import { ToasterSuccess, ToasterWarning, ToasterError } from "../common/toaster";
import Loding from "../component/Loding";
import swal from 'sweetalert'
const AppContext = createContext();

const AppProvider = ({ children }) => {
  let common = new CommonService();

  // const random = Math.floor(Math.random() * 100);

  const UserName = localStorage.getItem('user');
  // const user_id = localStorage.getItem('user_id') || random;
  const user_id = localStorage.getItem('user_id');
  const [isLoading, setIsLoading] = useState(false);
  const [AllCategory, SetAllCategory] = useState([]);
  const [Logo, SetLogo] = useState([]);
  const [searchData, setSearchData] = useState([]);

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

  function CartPost(id, variant, increment, colors, size) {
    try {
      setIsLoading(true)
      const Data = { id, variant: variant, quantity: increment || 1, user_id: parseInt(user_id), colors, size }
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


  function GetAllSearch(key) {
    try {
      const Data = { search: key }
      const SearchData = `${urlConstant.SearchData.SearchAllData}`;
      axios.post(SearchData, Data, {
        headers: { "Authorization": `Bearer ${localStorage.getItem('access_token')}` }
      }).then((res) => {
        setSearchData(res.data.data);
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
    setIsLoading(true)
    const GetAllCategory1 = `${urlConstant.AllCategory.GetAllCategory}`;
    common.httpGet(GetAllCategory1).then(function (res) {
      setIsLoading(false);
      SetAllCategory(res.data.data.data);
      SetLogo(res.data.logo);
    })
      .catch(function (error) {
        setIsLoading(false);
        // ToasterWarning(error.message)
        console.log(error);
      });
  }

  // function GetAllCart() {
  //   setIsLoading(true)
  //   const GetAllCart = `${urlConstant.Cart.GetCart}?userId=${user_id}`;
  //   common.httpGet(GetAllCart).then(function (res) {
  //     SetGetCart(res.data.data[0].cart_items);
  //     setIsLoading(false)
  //   })
  //     .catch(function (error) {
  //       // ToasterError("Error");
  //       setIsLoading(false)
  //     });
  // }




  useEffect(() => {
    GetAllCategory();
    GetAllSearch();
  }, [])


  return (
    <AppContext.Provider value={{ user_id, UserName, wishlistPost, Loding, CartPost, ApplyCoupon, AllCategory, Logo, GetAllSearch, searchData }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
