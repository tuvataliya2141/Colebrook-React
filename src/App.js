import React from "react";
import router from "./router";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {router.map((item, k) => {
            return (<Route key={k} element={<item.element />} path={item.path} exact={item.exact} />);
          })}
        </Routes>
      </BrowserRouter>
      <a  class="whats-app" href="#" target="_blank">
      <img className src="assets/imgs/theme/whatsapp.png"  alt="/"/>
      </a>
    </div>
  );
}

export default App;
