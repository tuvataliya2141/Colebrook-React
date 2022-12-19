import { createContext, useContext,useState } from "react";
import axios from "axios";
import urlConstant from "../constants/urlConstant";
import { ToasterSuccess, ToasterError } from "../common/toaster";
import Loding from "../component/Loding";
const AppContext = createContext();

const AppProvider = ({ children }) => {

  const UserName = localStorage.getItem('user');
  const user_id = localStorage.getItem('user_id');
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

 
  
  return (
    <AppContext.Provider value={{ user_id , UserName , wishlistPost ,Loding  }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
