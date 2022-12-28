import Error from "./component/404error";
import Cart from "./component/Cart/Cart";
import Checkout from "./component/Checkout/Checkout";
import Contact from "./component/Contact/Contact";
import Home from "./component/Home/Home";
import Login from "./component/Login";
import PrivacyPolicy from "./component/Privacy-policy/PrivacyPolicy";
import Product from "./component/Product/Product";
import Register from "./component/Register";
import ShopProduct from "./component/Shop-product/ShopProduct";
import Terms_Service from "./component/Terms-Service/Terms_Service";
import Wishlist from "./component/Wishlist/wishlist";


export default [
  {
    path:'/',
    element:() => <Home />,
    exact:true,
  },
  {
    path:'/ShopProduct',
    element:() => <ShopProduct/>,
    exact:true,
  },
  {
    path:'/:id',
    element:() => <Product/>,
    exact:true,
  },
  {
    path:'/wishlist',
    element:() => <Wishlist/>,
    exact:true,
  },
  {
    path:'/Cart',
    element:() => <Cart/>,
    exact:true,
  },
  {
    path:'/Checkout',
    element:() => <Checkout/>,
    exact:true,
  },
  {
    path:'/Register',
    element:() => <Register/>,
    exact:true,
  },
  {
    path:'/Login',
    element:() => <Login/>,
    exact:true,
  },
  {
    path:'/Contact',
    element:() => <Contact/>,
    exact:true,
  },
  {
    path:'/Privacy-Policy',
    element:() => <PrivacyPolicy/>,
    exact:true,
  },
  {
    path:'/Terms-Service',
    element:() => <Terms_Service/>,
    exact:true,
  },
  {
    path:'*',
    element:() => <Error/>,
    exact:true,
  }        

]

